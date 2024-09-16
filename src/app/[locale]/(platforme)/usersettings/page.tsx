import { NewPasswordFormcom } from "@/app/[locale]/(auth)/new-password/_comp_new_pass"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
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

const page = async () => {
  const user = await currentUser()
  return (
    <div className=" grid grid-cols-1  ">
      <div className=" col-span-1 shadow-sm rounded-lg bg-white dark:bg-slate-900">
        <h2 className=" container mt-10 text-3xl font-bold tracking-tight">
          Hi, {user?.name} Welcome to your settings 👋
        </h2>

        <div className="mt-10 mb-10 container">
          <Table className="border  rounded-lg dark:bg-slate-950  dark:text-slate-50 bg-white">
            <TableBody>
              <TableRow className="">
                <TableCell className="font-bold">Name</TableCell>
                <TableCell className="font-medium">{user?.name}</TableCell>
              </TableRow>

              <TableRow className="">
                <TableCell className="font-bold">Password</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger className="bg-slate-700 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded">
                      {" "}
                      Reset password{" "}
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Reset pass?</DialogTitle>
                        <DialogDescription>
                          <NewPasswordFormcom />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
export default page
