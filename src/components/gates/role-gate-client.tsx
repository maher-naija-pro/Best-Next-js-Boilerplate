"use client"

import { useCurrentRole } from "@/hooks/use-current-role"

interface RoleGateProps {
  children: React.ReactNode
}
export const RoleGate = ({ children }: RoleGateProps) => {
  const Role = useCurrentRole()

  if (Role != "ADMIN") {
    return ""
  }

  return <>{children}</>
}
