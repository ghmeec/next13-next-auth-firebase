import React from 'react'
import { redirect } from "next/navigation"
import { getCurrentUser } from '@/lib/session'
import SignOutButton from '../signout-button'

export default async function ProtectedPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/")
    }

    return (
        <main className="min-h-screen p-24">
            <p>Protected Page</p>
            <pre className="mt-4 max-w-3xl">
                {JSON.stringify(user, null, 3)}
            </pre>

            <div className="mt-4">
                <SignOutButton />
            </div>
        </main>
    )
}
