import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const Nav_buttons = () => {
  return (
    <div className="container hidden lg:flex gap-4 ">
      <Link href="/login" className={` text-lg underline mt-1 hover:underline-offset-4 }`}>
        Sign-In
      </Link>{" "}
      <Link
        href="/register"
        className={`
           bg-red-800 border  hover:bg-slate-800  dark:text-white   ${buttonVariants()}`}
      >
        Start NOW <Icons.next className="h-6 w-4 ml-2" />
      </Link>
    </div>
  )
}
export default Nav_buttons
