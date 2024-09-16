"use client"

import { useCurrentUser } from "@/hooks/use-current-user"
import Link from "next/link"

interface RegisterButtonProps {
  children: React.ReactNode
  mode?: "modal" | "redirect"
  asChild?: boolean
}

export const RegisterButton = ({ children, mode = "redirect", asChild }: RegisterButtonProps) => {
  const user = useCurrentUser()

  return (
    <Link className="cursor-pointer" key="register" href="/register">
      {children}
    </Link>
  )
}
