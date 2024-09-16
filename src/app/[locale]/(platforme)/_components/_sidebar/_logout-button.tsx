"use client"

import { logout } from "@/app/[locale]/(auth)/(logout)/_actions"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface LogoutButtonProps {
  children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter()
  const onClick = () => {
    console.log("🚀 ~LogoutButton click ")
    logout()
  }
  return (
    <Link onClick={onClick} className="cursor-pointer mt-4  flex flex-col" key="home" href="/">
      Logout
    </Link>
  )
}
