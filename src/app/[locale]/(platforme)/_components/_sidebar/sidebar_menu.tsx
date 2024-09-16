"use client"

import { LogoutButton } from "@/app/[locale]/(platforme)/_components/_sidebar/_logout-button"
import routeList from "@/app/[locale]/(platforme)/_constants/menu-right"
import { Logo } from "@/components/Logo"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { useCurrentUser } from "@/hooks/use-current-user"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FaUserClock } from "react-icons/fa"

interface RouteProps {
  href: string
  label: string
}

const Sidebar_menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const user = useCurrentUser()
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar className="  mr-4 size-10 hidden sm:flex">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="  size-10">
            <MenuIcon className=" md:hidden" />
            <FaUserClock className="hidden md:flex" />
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="grid grid-cols-2 w-full ">
          <Link href="/dashboard" className="ml-2  w-52 font-bold text-xl flex">
            <Logo />
          </Link>
        </div>

        <div className="flex w-full flex-col justify-center">
          {" "}
          <Link
            href="/"
            className={`border text-slate-50  hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-900 dark:text-slate-900 dark:hover:text-slate-50 border-slate-700  text-base font-semibold mt-5 py-6 w-full  ${buttonVariants()}`}
          >
            Home
          </Link>
        </div>
        <div className="flex flex-col  w-full justify-center items-start space-y-3 mt-6">
          <ul className="flex flex-col w-full space-y-6 mt-6">
            {Object.keys(routeList).map(template_name => {
              //@ts-ignore

              return (
                <div className="flex w-full flex-col gap-2">
                  <Link
                    className="cursor-pointer  hover:font-bold text-lg"
                    key={template_name}
                    //@ts-ignore
                    href={routeList[template_name].href}
                  >
                    {template_name}
                  </Link>

                  <Separator className="mt-4" />
                </div>
              )
            })}
          </ul>
        </div>
        <LogoutButton />
      </HoverCardContent>
    </HoverCard>
  )
}

export default Sidebar_menu
