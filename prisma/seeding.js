const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  // Seed Layouts
  console.log('Seeding layouts...');
  const layouts = await prisma.layout.createMany({
    data: [
      {
        name: 'Simple Layout',
        description: 'A minimal email layout with a header and footer.',
        htmlContent: `
          <html>
            <body>
              <header style="background-color: #f8f9fa; padding: 10px; text-align: center;">
                <h1>{{title}}</h1>
              </header>
              <main style="padding: 20px;">
                <p>{{content}}</p>
              </main>
              <footer style="background-color: #f8f9fa; padding: 10px; text-align: center;">
                <p>{{footer}}</p>
              </footer>
            </body>
          </html>
        `,
      },
      {
        name: 'Newsletter Layout',
        description: 'A layout designed for newsletters with an image section.',
        htmlContent: `
          <html>
            <body>
              <header style="background-color: #343a40; color: white; padding: 10px; text-align: center;">
                <h1>{{title}}</h1>
              </header>
              <main style="padding: 20px;">
                <h2>{{subtitle}}</h2>
                <p>{{content}}</p>
                <img src="{{imageUrl}}" alt="Newsletter Image" style="max-width: 100%; margin-top: 20px;" />
              </main>
              <footer style="background-color: #343a40; color: white; padding: 10px; text-align: center;">
                <p>{{footer}}</p>
              </footer>
            </body>
          </html>
        `,
      },
    ],
  });

  console.log(`Seeded ${layouts.count} layouts.`);

  // Seed Admin User
  console.log('Seeding admin user...');
  const hashedPassword = await bcrypt.hash('adminadmin', 10);
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
      credits: 100,
    },
  });
  console.log(`Seeded admin user: ${adminUser.email}`);

  // Seed Email Templates
  console.log('Seeding email templates...');
  const emailTemplates = await prisma.emailTemplate.createMany({
    data: [
      {
        title: 'Welcome Email',
        description: 'A template for sending welcome emails to new users.',
        content: {
          title: 'Welcome to Our Service!',
          content: 'We are excited to have you on board.',
          footer: 'Best regards, The Team',
        },
        layoutId: (await prisma.layout.findFirst({ where: { name: 'Simple Layout' } })).id,
        createdById: adminUser.id,
      },
      {
        title: 'Monthly Newsletter',
        description: 'A newsletter template for monthly updates.',
        content: {
          title: 'Monthly Newsletter - January',
          subtitle: 'Updates for January',
          content: 'Here are the updates and news for January.',
          imageUrl: 'https://example.com/newsletter-image.jpg',
          footer: 'Stay tuned for more updates!',
        },
        layoutId: (await prisma.layout.findFirst({ where: { name: 'Newsletter Layout' } })).id,
        createdById: adminUser.id,
      },
    ],
  });
  console.log(`Seeded ${emailTemplates.count} email templates.`);

  console.log('Database seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
