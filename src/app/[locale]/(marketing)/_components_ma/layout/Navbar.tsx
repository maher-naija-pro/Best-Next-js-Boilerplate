"use client"

import Mobile_sidebar from "@/app/[locale]/(marketing)/_components_ma/layout/mobile_sidebar"
import Nav_buttons from "@/app/[locale]/(marketing)/_components_ma/layout/nav_buttons"
import Nav_desktop from "@/app/[locale]/(marketing)/_components_ma/layout/nav_desktop"
import { Logo } from "@/components/Logo"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="  flex translateFromTop justify-between items-center h-16 sticky   backdrop-blur-sm  z-10 light:bg-slate-50 bg-opacity-80 top-0">
      <div className="ml-10">
        {" "}
        <Link href="/">
          <Logo />
        </Link>
      </div>{" "}
      {/* desktop */}
      <Nav_desktop />
      <div className="flex">
        <Nav_buttons />
        <Mobile_sidebar />
      </div>
    </div>
  )
}

export default Navbar
