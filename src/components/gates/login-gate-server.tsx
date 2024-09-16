import { PageError } from "@/components/error_page/page-error"
import { currentUser } from "@/lib/auth/session_user"

interface LoginGateProps {
  children: React.ReactNode
}
export default async function LoginGate({ children }: LoginGateProps) {
  const user = await currentUser()
  if (!user) {
    return <PageError message="Please login to view this content!" />
  }

  return <>{children}</>
}
