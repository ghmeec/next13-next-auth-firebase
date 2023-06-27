import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
