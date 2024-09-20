"use client"

import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import ListSocial from "@/texts-and-menues/socials-link"
import { useTranslations } from "next-intl"
import Link from "next/link"

export const HeroButton = () => {
  const text = useTranslations("HeroButtons")
  return (
    <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row gap-4 ">
      {" "}
      <Link
        href="/register"
        className={` border  bg-red-900 border-slate-800 text-slate-50  hover:text-slate-800 bg-hover:border-slate-900 hover:bg-slate-50 text-lg  w-full   ${buttonVariants()}`}
      >
        <Icons.fire className="mr-3 h-5 w-5" />
        {text("Started")}
      </Link>
      <Link
        href={ListSocial.Github.href}
        target="_blank"
        className={`   border hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700  text-base   w-full 
          ${buttonVariants()}`}
      >
        <Icons.github className="mr-3 h-5 w-5" />
        {text("Github")}
      </Link>
    </div>
  )
}
