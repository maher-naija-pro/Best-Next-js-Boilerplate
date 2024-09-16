"use client"

import Mobile_menu from "@/app/[locale]/(platforme)/_components/_sidebar/mobile_menu"
import Sidebar_menu from "@/app/[locale]/(platforme)/_components/_sidebar/sidebar_menu"
import { routeList } from "@/app/[locale]/(platforme)/_constants/navbar_items"
import { Logo } from "@/components/Logo"
import { buttonVariants } from "@/components/ui/button"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface RouteProps {
  href: string
  label: string
}
const Navbar_plat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <nav className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <div className="container h-16 px-4 w-screen flex justify-between items-center">
          <div className="font-bold flex">
            <div className={cn("block md:!hidden")}></div>
            <Link href="/dashboard" className="ml-2 font-bold text-xl flex">
              <Logo />
            </Link>
          </div>

          {/* desktop */}
          <div className="hidden md:flex gap-2">
            <ul className="flex space-x-2">
              {routeList.map((route: RouteProps, i) => (
                <li key={i}>
                  <Link
                    href={route.href}
                    className={`text-[17px] ${buttonVariants({
                      variant: "ghost"
                    })}`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex gap-2">
            <div className="flex space-x-2"></div>
          </div>
        </div>
        {/* mobile */}
        <div className=" flex mt-3 ">
          <Mobile_menu />
          <Sidebar_menu />
          <div className={cn("block md:!hidden")}></div>
        </div>
      </NavigationMenu>
    </nav>
  )
}

export default Navbar_plat
