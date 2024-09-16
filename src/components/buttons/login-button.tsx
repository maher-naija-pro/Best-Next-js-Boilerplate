"use client"

import { useCurrentUser } from "@/hooks/use-current-user"
import Link from "next/link"

interface LoginButtonProps {
  children: React.ReactNode
  mode?: "modal" | "redirect"
  asChild?: boolean
}

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
  const user = useCurrentUser()
  if (!user)
    return (
      <Link className="cursor-pointer" key="login" href="/login">
        {children}
      </Link>
    )
  else
    return (
      <Link className="cursor-pointer" key="Platform" href="/login">
        {children}
      </Link>
    )
}
