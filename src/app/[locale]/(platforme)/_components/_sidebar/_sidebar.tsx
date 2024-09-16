"use client"

import { navItemsadmin } from "@/app/[locale]/(platforme)/_constants/menu_items"
import { navItems } from "@/app/[locale]/(platforme)/_constants/menu_items"
import { RoleGate } from "@/components/gates/role-gate-client"
import { Icons } from "@/components/icons"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Sidebar() {
  return (
    <nav className=" group w-[64px] bg-white dark:bg-slate-900 hidden h-screen border-r z-10 pt-20 md:block duration-500 hover:w-56">
      <div className="mt-3 space-y-4 py-4">
        <nav className="grid items-start gap-2">
          {navItems.map(item => {
            //@ts-ignore
            const Icon = Icons[item.icon || "arrowRight"]
            return (
              <Link
                href={item.href!}
                className="flex text-lg items-center gap-2 overflow-hidden  py-2  font-medium  "
              >
                <Icon className="ml-3 size-6" />
                <span className="mr-2 hidden group-hover:flex">{item.title}</span>
              </Link>
            )
          })}
        </nav>
        <Separator />
        <RoleGate>
          {" "}
          <nav className="grid items-start gap-2">
            {navItemsadmin.map(item => {
              //@ts-ignore
              const Icon = Icons[item.icon || "arrowRight"]
              return (
                <Link
                  href={item.href!}
                  className="flex text-lg items-center gap-2 overflow-hidden  py-2  font-medium hover:bg-accent "
                >
                  <Icon className="ml-3 size-6" />
                  <span className="mr-2 hidden group-hover:flex">{item.title}</span>
                </Link>
              )
            })}
          </nav>
        </RoleGate>
      </div>
    </nav>
  )
}
