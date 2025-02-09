// import { handlers } from "@/lib/auth"
// export const {GET,POST}=handlers
// import { handlers } from "@/lib/auth"
// import { handlers } from "@/lib/auth"
// export const {GET,POST}=handlers
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export const { GET, POST } = handler;
