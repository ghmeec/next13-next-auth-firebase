import NextAuth, { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { initFirestore } from "@auth/firebase-adapter";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";


const serviceAccount = require("../serviceAccount.json")
export const firestore = initFirestore({
    credential: cert(serviceAccount),
});

export const authOptions: NextAuthOptions = {
    adapter: FirestoreAdapter(firestore) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET!
}
