"use client"

import { Social } from "../_components_auth/social"
import { register } from "./_action"
import { RegisterSchema } from "./_schemas"
import { CardWrapper } from "@/components/card-wrapper"
import { FormError } from "@/components/form_message/form-error"
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
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      name: ""
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    console.log("🚀 ~ register ~ values")
    startTransition(() => {
      register(values).then(data => {
        console.log("🚀 ~ register ~ data:", data)

        setError(data.error)
        if (data.success) {
          router.push("/check-mail")
        }
      })
    })
  }

  return (
    <>
      <CardWrapper>
        <div className="  text-center mt-2 text-2xl  ">Sign-up</div>
        <p className="mt-3 mb-3 text-sm px-3"> Already have an account? </p>

        <Link className="font-semibold mt-3" href="/login">
          <Button className="px-0  mb-3 border bg-slate-50 text-slate-900  hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-900 dark:hover:text-slate-50 border-slate-400 font-semibold text-base w-full">
            Login{" "}
          </Button>
        </Link>

        <Form {...form}>
          <div className="grid grid-cols-5 py-2 gap-3">
            <div className="col-span-1">
              <Separator />
            </div>

            <div className="text-center col-span-3 text-sm">Social Singn-up</div>
            <div className="col-span-1">
              <Separator />
            </div>
          </div>

          <Social />
          <div className="grid grid-cols-5 py-3 ">
            <div className="col-span-2">
              <Separator />
            </div>

            <div className="text-center">Or</div>

            <div className="col-span-2">
              <Separator />
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="hover:scale-105 dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                        disabled={isPending}
                        placeholder="Your name"
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
                        className="hover:scale-105 dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                        placeholder="Name@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="hover:scale-105 dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                        autoComplete="o"
                        disabled={isPending}
                        placeholder="***********"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirmation</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className=" hover:scale-105 dark:hover:bg-slate-700 hover:bg-slate-200 bg-muted/50  "
                        disabled={isPending}
                        autoComplete="o"
                        placeholder="**********"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="py-3">
              <FormError message={error} />
              <Button
                disabled={isPending}
                type="submit"
                className="border bg-slate-900 text-slate-50  hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-50  dark:hover:text-slate-900 border-slate-900 font-semibold text-base w-full py-4"
              >
                <a> {isPending ? "Loading..." : "Create an account"} </a>
              </Button>
            </div>
          </form>
          <p className=" text-center text-xs">
            By signing in, you agree to our
            <Link className=" font-bold  text-sm cursor-pointer" href="/legal/terms-of-service">
              {" "}
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className=" font-bold  text-sm cursor-pointer" href="/legal/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </Form>
      </CardWrapper>
    </>
  )
}
