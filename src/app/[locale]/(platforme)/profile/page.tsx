import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { currentUser } from "@/lib/auth/session_user"
import { FaUser, FaUserClock } from "react-icons/fa"

const page = async () => {
  const user = await currentUser()
  return (
    <div className="grid grid-cols-1">
      <div className=" col-span-1 shadow-sm rounded-lg bg-white dark:bg-slate-900">
        <h2 className=" container mt-10 text-3xl font-bold tracking-tight">
          Hi, {user?.name} Welcome to your profile 👋
        </h2>

        <div className="mt-10 mb-10 container  ">
          <Table className="border  rounded-lg dark:bg-slate-950  dark:text-slate-50 bg-white">
            <TableBody>
              <TableRow className="">
                <TableCell className=" font-bold">Image</TableCell>
                <TableCell className="font-medium">
                  <Avatar className="w-14 h-14">
                    <AvatarFallback className="w-40 bg-slate-300">
                      <FaUserClock />
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
              </TableRow>
              <TableRow className=" ">
                <TableCell className="font-bold">Name</TableCell>
                <TableCell className="font-medium  ">{user?.name}</TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell className="font-bold">Email</TableCell>
                <TableCell className="font-medium">{user?.email}</TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell className="font-bold">Role</TableCell>
                <TableCell className="font-medium">{user?.role}</TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell className="font-bold">2FA</TableCell>
                <TableCell className="font-medium">{user?.isTwoFactorEnabled}</TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell className="font-bold">IsOAuth</TableCell>
                <TableCell className="font-medium">{user?.isOAuth}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
export default page
