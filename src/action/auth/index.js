"use server"
import {
    userSchema,
  } from "@/lib/validator/auth";
  import db from "@/db";
  import { hash, compare } from "bcryptjs";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
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
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  
    const { email, password } = result.data;
  
    const existingUser = await db.user.findUnique({
      where: { email },
    });
  
    if (!existingUser) {
      return {
        errors: {
          email: "User does not exist.",
        },
      };
    }
  
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return {
        errors: {
          email: "Invalid email or password.",
          password: "Invalid email or password.",
        },
      };
    }
  
    try {
      // Use a valid secret for JWT generation
      const secret = process.env.NEXTAUTH_SECRET || "default_secret_key";
  
      const token = sign(
        {
          id: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
        },
        secret,
        { expiresIn: "1h" }
      );
  
      return {
        message: "Login success.",
        token,
      };
    } catch (error) {
      console.error("Error during JWT generation:", error);
  
      return {
        errors: {
          server: "An internal server error occurred.",
        },
      };
    }
  }
  
  