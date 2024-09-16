"use client"

import { FormError } from "@/components/form_message/form-error"
import { useCurrentUser } from "@/hooks/use-current-user"

interface RoleGateProps {
  children: React.ReactNode
}
export const LoginGate = ({ children }: RoleGateProps) => {
  const user = useCurrentUser()
  if (!user) {
    return <FormError message="Please login to view this content!" />
  }

  return <>{children}</>
}
