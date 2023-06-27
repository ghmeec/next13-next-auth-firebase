"use client"

import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function SignInButton() {
    const auth = getAuth();
    const router = useRouter()

    const signInAction = async () => {

        const signInResult: any = await signIn()

        if (!signInResult?.ok) {
            toast.success("Successfully signed in the user. Redirecting ... ")
            router.refresh()
            return
        }

        toast.error("Error in signin in " + `${JSON.stringify(signInResult || "")}`)
        return

    }

    return (
        <div>
            <button onClick={signInAction} type="button" className="py-2 px-6 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Solid
            </button>
        </div>
    )
}
