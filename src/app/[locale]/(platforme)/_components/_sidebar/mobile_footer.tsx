"use client"

import { Icons } from "@/components/icons"
import Link from "next/link"

const Mobile_footer = () => {
  return (
    <div className=" sm:hidden border-b-[2px] border  bottom-0 w-full fixed bg-slate-100 z-10 flex  flex-row h-14 items-center justify-center  left-0">
      <div className="  flex mb-0 gap-16 flex-row">
        <Link href="/">
          <Icons.back className="size-8 dark:hover:text-slate-200 hover:text-slate-400 dark:text-slate-900" />
        </Link>
        <Link href="/dashboard">
          <Icons.dashboard className="size-8 dark:hover:text-slate-200 hover:text-slate-400 dark:text-slate-900" />{" "}
        </Link>
        <Link href="/">
          <Icons.home className="size-8 dark:hover:text-slate-200 hover:text-slate-400 dark:text-slate-900" />{" "}
        </Link>
      </div>
    </div>
  )
}

export default Mobile_footer
