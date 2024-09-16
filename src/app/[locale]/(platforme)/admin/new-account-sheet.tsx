import { AccountForm } from "@/app/[locale]/(platforme)/admin/account-form"
import { RegisterSchema } from "@/app/[locale]/(platforme)/admin/schema"
import { useCreateAccount } from "@/app/[locale]/(platforme)/admin/use-create-account"
import { useNewAccount } from "@/app/[locale]/(platforme)/admin/use-new-account"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { z } from "zod"

const formSchema = RegisterSchema.pick({
  name: true
})
type FormValues = z.input<typeof formSchema>

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount()

  const mutation = useCreateAccount()

  const onSubmit = (values: FormValues) => {
    //@ts-ignore
    mutation.mutate(values, {
      onSuccess: () => {
        onClose()
      }
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>Create a new account to track your transactions.</SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          disabled={mutation.isPending}
          //@ts-ignore
          defaultValues={{
            name: ""
          }}
        />
      </SheetContent>
    </Sheet>
  )
}
