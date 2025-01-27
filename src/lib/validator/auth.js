const { z } = require("zod");

export const userSchema = async () => {

  return z
    .object({
      name: z.string().min(1, { message:"Name is a required field"}),
      email: z.string().email({ message:"Email is a required field" }),
      password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
      confirmPassword: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
};

export const userlogin = async () => {
  return z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message:"Password must be at least 8 characters long"  }),
  });
};



