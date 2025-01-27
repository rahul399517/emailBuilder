"use server"
import {
    userSchema,
  } from "@/lib/validator/auth";
  import db from "@/db";
  import { hash, compare } from "bcryptjs";
//   import { auth, signIn } from "@/lib/auth";/\
import { signIn } from "@/lib/auth";
import { userlogin } from "@/lib/validator/auth";
  export async function signup(formstate, formData) {
    const schema = await userSchema();
    const result = schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  
    const existingUser = await db.user.findFirst({
      where: { email: result.data.email },
    });
  
    if (existingUser) {
      return {
        errors: {
          email: [`User with similar email already exists`],
        },
      };
    }
  
    try {
      const hashedPassword = await hash(result.data.password, 10);
      const user = await db.user.create({
        data: {
          name: result.data.name,
          email: result.data.email,
          password: hashedPassword,
        },
      });
      return {
        status: true,
        error: undefined,
      };
    } catch (error) {
      console.log("Error : ", error);
    }
  }


  export async function login(formstate, formData) {
    const schema = await userlogin();
    const result = schema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  
    if (!result.success) {
        console.log("here it is  ", result.error.flatten().fieldErrors,)
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  
    const { email, password } = result.data;
    const existingUser = await db.user.findUnique({
      where: { email },
    });
  console.log("existing user us ",existingUser)
    if (!existingUser) {
      return {
        errors: {
          email: "User does not exist.",
        },
      };
    }
   
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
  
      if (!response || response.error) {
        return {
          errors: {
            email: `Invalid email or password.`,
            password:  "Invalid email or password",
          },
        };
      }
  
      return {
        message: "Login success.",
      };
    } catch (error) {
      console.error("Error during sign-in:", error);
  
      return {
        errors: {
          email: "Invalid email or password.",
          password:"Invalid email or password.",
        },
      };
    }
  }
  