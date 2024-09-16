"use client"

import routeList from "@/app/[locale]/(platforme)/_constants/menu-right"
import { LogoutButton } from "@/app/[locale]/(platforme)/_components/_sidebar/_logout-button"
import { Logo } from "@/components/Logo"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { useCurrentUser } from "@/hooks/use-current-user"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FaUserClock } from "react-icons/fa"

interface RouteProps {
  href: string
  label: string
}

const Mobile_menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const user = useCurrentUser()
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Avatar className="  mr-4 size-10 flex sm:hidden">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="  size-10">
            <MenuIcon className=" md:hidden" />
            <FaUserClock className="hidden md:flex" />
          </AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="w-full" side={"right"}>
        <SheetHeader>
          <SheetTitle className="font-bold text-xl text-start">
            <div className="grid grid-cols-2 ">
              <Link href="/dashboard" className="ml-2 font-bold text-xl flex">
                <Logo />
              </Link>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col justify-center">
          {" "}
          <Link
            href="/"
            className={`border text-slate-50  hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-900 dark:text-slate-900 dark:hover:text-slate-50 border-slate-700  text-base font-semibold mt-5 py-6 w-full  ${buttonVariants()}`}
          >
            Home
          </Link>
        </div>

        <ul className="flex flex-col space-y-6 mt-6">
          {Object.keys(routeList).map(template_name => {
            //@ts-ignore

            return (
              <div className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    className="cursor-pointer  hover:font-bold text-lg"
                    key={template_name}
                    //@ts-ignore
                    href={routeList[template_name].href}
                  >
                    {template_name}
                  </Link>
                </SheetClose>
                <Separator className="mt-4" />
              </div>
            )
          })}
        </ul>
        <LogoutButton />
      </SheetContent>
    </Sheet>
  )
}

export default Mobile_menu
