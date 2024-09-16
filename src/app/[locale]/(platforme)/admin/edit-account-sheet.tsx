import { RegisterSchema } from "@/app/[locale]/(platforme)/admin/schema"
import { AccountForm } from "@/app/[locale]/(platforme)/admin/account-form"
import { useDeleteAccount } from "@/app/[locale]/(platforme)/admin/use-delete-account"
import { useEditAccount } from "@/app/[locale]/(platforme)/admin/use-edit-account"
import { useGetAccount } from "@/app/[locale]/(platforme)/admin/use-get-account"
import { useOpenAccount } from "@/app/[locale]/(platforme)/admin/use-open-account"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useConfirm } from "@/hooks/use-confirm"
import { Loader2 } from "lucide-react"
import { z } from "zod"

const formSchema = RegisterSchema.pick({
  name: true,
})

type FormValues = z.input<typeof formSchema>

export const EditAccountSheet = () => {
  const { isOpen, onClose, id } = useOpenAccount()

  console.log({
    isOpen,
    id,
  })

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this account.",
  )

  const accountQuery = useGetAccount(id)
  const editMutation = useEditAccount(id)
  const deleteMutation = useDeleteAccount(id)

  const isPending = editMutation.isPending || deleteMutation.isPending

  const isLoading = accountQuery.isLoading

  const onSubmit = (values: FormValues) => {
    //@ts-ignore
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose()
      },
    })
  }

  const onDelete = async () => {
    const ok = await confirm()

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose()
        },
      })
    }
  }

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      }

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Edit Account</SheetTitle>
            <SheetDescription>Edit an existing account</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              disabled={isPending}
              //@ts-ignore
              defaultValues={defaultValues}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
