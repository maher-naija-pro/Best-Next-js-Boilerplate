"use client"

import { demo } from "@/app/[locale]/(marketing)/company/contact/_action"
import { DemoSchema } from "@/app/[locale]/(marketing)/company/contact/_schemas"
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
import { Textarea } from "@/components/ui/textarea"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const DemoFormContent = () => {
  const [error, setError] = useState<string | undefined>("")

  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof DemoSchema>>({
    defaultValues: {
      email: "",
      message: "",
      name: ""
    }
  })

  const onSubmit = (values: z.infer<typeof DemoSchema>) => {
    setError("")
    setSuccess("")
    console.log("🚀 ~ demo~ values")
    startTransition(() => {
      demo(values).then(data => {
        console.log("🚀 ~ register ~ data:", data)
        setSuccess(data?.success)
        setError(data?.error)
      })
    })
  }

  return (
    <>
      <p className=" text-center py-6 text-5xl">Contact Us </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                      disabled={isPending}
                      placeholder="Your Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      autoComplete="o"
                      className="dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                      placeholder="YourEmail@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                      disabled={isPending}
                      placeholder="your message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="py-9">
            <FormSuccess message={success} />
            <FormError message={error} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full py-4   border hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700  text-base  "
            >
              <a> {isPending ? "Loading..." : "Send message"} </a>
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
