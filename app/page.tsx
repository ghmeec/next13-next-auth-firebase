import Image from 'next/image'
import SignInButton from './signin-button'
import { getCurrentUser } from '@/lib/session'
import { redirect } from "next/navigation"

export default async function Home() {

  const user = await getCurrentUser()

  console.log("Homepage User")
  console.log(user)

  if (user) {
    redirect("/protected")
  }


  return (
    <main className="min-h-screen p-24">
      <h1>Home Page</h1>

      <div className="mt-4">
        <SignInButton />
      </div>
    </main>
  )
}
