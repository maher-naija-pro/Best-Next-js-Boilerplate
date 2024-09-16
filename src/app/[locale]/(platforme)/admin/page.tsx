"use client"

import { columns } from "./columns"
import { useBulkDeleteAccounts } from "@/app/[locale]/(platforme)/admin/use-bulk-delete-accounts"
import { useGetAccounts } from "@/app/[locale]/(platforme)/admin/use-get-accounts"
import { useNewAccount } from "@/app/[locale]/(platforme)/admin/use-new-account"
import { DataTable } from "@/components/data-table"
import RoleGate from "@/components/gates/role-gate-server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
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
import { Loader2, Plus } from "lucide-react"
import { The_Nautigal } from "next/font/google"

const page = async () => {
  //const user = await currentUser();
  const newAccount = useNewAccount()
  const accountsQuery = useGetAccounts()
  const accounts = accountsQuery.data
  const deleteAccounts = useBulkDeleteAccounts()

  console.log("🚀 ~ page ~ accounts:", accounts)

  const isDisabled = accountsQuery.isLoading

  if (accountsQuery.isLoading) {
    return (
      <>
        <div className="max-w-screen-2xl mx-auto w-full pb-10 mt-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, You are admin loading user data 👋
          </h2>
          <Card className="border-none drop-shadow-sm">
            <CardHeader>
              <Skeleton className="h-80 w-full" />
            </CardHeader>
            <CardContent>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Loader2 className="size-6 text-slate-300 animate-spin" />
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    )
  }

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">Hi, You are admin 👋</h2>
      <div className="max-w-screen-2xl mx-auto w-full pb-10  mt-10">
        <Card className="border-none drop-shadow-sm">
          <CardHeader className="gap-y-1  lg:justify-between">
            <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>
            <Button onClick={newAccount.onOpen} size="sm">
              <Plus className="size-4 mr-2" />
              Add new
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable
              filterKey="name"
              columns={columns}
              //@ts-ignore
              data={accounts}
              onDelete={row => {
                const ids = row.map(r => r.original.id)
                deleteAccounts.mutate({ ids })
              }}
              disabled={isDisabled}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default page
