// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import db from "@/db";
// import bcrypt from "bcryptjs";
// import Credentials from "next-auth/providers/credentials";
// import { encode, decode } from "next-auth/jwt";
// // export default NextAuth({
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   jwt: { encode, decode },
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "your@email.com" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         const user = await db.user.findFirst({
//           where: { email: credentials.email.toLowerCase() },
//         });
//         if (!user) {
//           throw new Error("Invalid email ");
//         }
//         const isPasswordValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isPasswordValid) {
//           throw new Error("Invalid password.");
//         }
//         return user;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         // token.countryCode = user.countryCode;
//         // token.phone = user.phone;
//         // token.role=user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//         // session.user.countryCode = token.countryCode;
//         // session.user.phone = token.phone;
//         // session.user.role=token.role;
//       }
//       return session;
//     },
//   },
// });
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { encode, decode } from "next-auth/jwt";

// 🔹 Define auth options once
const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  jwt: { encode, decode },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (!user) throw new Error("Invalid email");

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) throw new Error("Invalid password.");

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
};

// ✅ Export the auth options correctly (no duplicates)
export default authOptions;
