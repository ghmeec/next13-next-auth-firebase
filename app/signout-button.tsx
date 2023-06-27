"use client"

import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

export default function SignOutButton() {
    const auth = getAuth();
    const router = useRouter()

    const signOutAction = async () => {

        const signOutResult: any = await signOut()

        if (!signOutResult?.ok) {
            toast.success("Successfully signed out the user. Redirecting ...")
            router.refresh()
            return
        }

        toast.error("Error in signin in " + `${JSON.stringify(signOutResult || "")}`)
        return

    }

    return (
        <div>
            <button onClick={signOutAction} type="button" className="py-2 px-6 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Sign Out
            </button>
        </div>
    )
}
