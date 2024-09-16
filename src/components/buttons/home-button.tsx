"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HomeButton = () => {
  return (
    <div className=" absolute left-0 sm:px-5 py-3 ">
      <Link className="cursor-pointer" key="home" href="/">
        <Button className="dark:bg-black sdark:hover:bg-slate-700 text-white rounded-full  sm:px-7  ">
          <Icons.back className="h-4 w-4 mr-2" />
          Home
        </Button>
      </Link>
    </div>
  )
}
