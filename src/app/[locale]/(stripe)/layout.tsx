import LoginGate from "@/components/gates/login-gate-server"
import { currentUser } from "@/lib/auth/session_user"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex  justify-center h-screen ">
        <main className="px-10 pt-10  ">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </>
  )
}
