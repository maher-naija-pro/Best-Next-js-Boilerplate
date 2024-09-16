"use client"

import { subscribe_newsletter } from "@/app/[locale]/(marketing)/(newsletter)/_action"
import { NewsletterSchema } from "@/app/[locale]/(marketing)/(newsletter)/_schemas"
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
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

interface FormErrorProps {
  message?: string
}

interface FormSuccessProps {
  message?: string
}

const Newsletter = () => {
  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: ""
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()
  const handleSubmit = (values: z.infer<typeof NewsletterSchema>) => {
    console.log("🚀 ~ startTransition ~ subscribe_newsletter:")
    setIsLoading(true)
    setError("")
    setSuccess("")
    startTransition(() => {
      subscribe_newsletter(values)
        .then(data => {
          form.reset()
          setSuccess(data.success)
          setError(data.error)
        })
        .catch(() => setError("Something went wrong"))
      console.log("all ok ")
    })
    console.log("🚀 ~ startTransition ~ subscribe_newsletter:")

    setIsLoading(false)
  }

  return (
    <section
      id="newsletter"
      className="w-full container py-24  inset-0 sm:dark:bg-[url(/grid.svg)] bg-auto "
    >
      <h3 className="text-center text-4xl md:text-5xl font-bold">
        Join Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Newsletter
        </span>
      </h3>
      <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Register for updates, news, and offers!
      </p>
      <div className=" container  flex flex-col justify-center max-w-96">
        <Form {...form}>
          <form className="   flex flex-col  gap-4 " onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="YourEmail@example.com"
                      type="email"
                      className="dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                      aria-label="Your Email"
                      id="Email"
                      autoComplete="o"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="border p-6 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700   font-semibold text-base"
              disabled={isPending}
              type="submit"
            >
              Subscribe
            </Button>
          </form>
          <FormSuccess message={success} />
          <FormError message={error} />
        </Form>
      </div>
    </section>
  )
}

export default Newsletter
