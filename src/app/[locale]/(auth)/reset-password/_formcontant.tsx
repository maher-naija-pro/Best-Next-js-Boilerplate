"use client"

import { reset } from "@/app/[locale]/(auth)/reset-password/_actions"
import { ResetSchema } from "@/app/[locale]/(auth)/reset-password/_schemas"
import { FormError } from "@/components/form_message/form-error"
import { FormSuccess } from "@/components/form_message/form-success"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Tsukimi_Rounded } from "next/font/google"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const ResetFormContent = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: ""
    }
  })

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      reset(values).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <>
      <p className="mt-4 mb-4 text-center  text-2xl">RESET PASWORD </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      className="dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                      placeholder="name@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full border bg-slate-900 text-slate-50  hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-50  dark:hover:text-slate-900 border-slate-900 font-semibold text-base"
          >
            <a> {isPending ? "Loading..." : "Send reset email"} </a>
          </Button>
        </form>
      </Form>

      <p className=" font-light mt-4 "> Please check you mail to reset your pass</p>
    </>
  )
}
