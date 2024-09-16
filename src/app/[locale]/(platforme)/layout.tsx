import Navbar_plat from "@/app/[locale]/(platforme)/_components/_navigationbar/_navbar"
import Sidebar from "@/app/[locale]/(platforme)/_components/_sidebar/_sidebar"
import Mobile_footer from "@/app/[locale]/(platforme)/_components/_sidebar/mobile_footer"
import { ModeToggle } from "@/components/ModeToggle"
import LoginGate from "@/components/gates/login-gate-server"
import { currentUser } from "@/lib/auth/session_user"
import { cn } from "@/lib/utils"
import { QueryProvider } from "@/providers/query-provider"
import { SheetProvider } from "@/providers/sheet-provider"

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  //<LoginGate></LoginGate>
  return (
    <>
      <div className="flex flex-col">
        <QueryProvider>
          <Navbar_plat />
          <SheetProvider />
          <div className="flex  bg-slate-100 dark:bg-slate-950">
            <Sidebar />

            <main className="px-10 h-96 pt-10 basis-11/12 ">{children}</main>
          </div>{" "}
        </QueryProvider>{" "}
        <Mobile_footer />
        <div className="   bottom-0  fixed z-20     left-0">
          <ModeToggle />
        </div>{" "}
      </div>
    </>
  )
}
