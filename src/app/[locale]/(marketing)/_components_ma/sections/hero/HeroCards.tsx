"use client"

import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import ListSocial from "@/texts-and-menues/socials-link"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export const HeroCards = () => {
  const text = useTranslations("Herocards.open")
  const team = useTranslations("Herocards.team")
  const popular = useTranslations("Herocards.popular")

  console.log("🚀 ~ HeroCards ~ text:", text)

  return (
    <div className="hidden lg:flex  flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Opensource */}
      <Card className="absolute  bg-opacity-10 bg-blue-200 hover:scale-105 transition duration-800 left-[75px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between"> {text("title")}</CardTitle>
          <div>
            <span className="text-3xl font-bold">{text("span")}</span>
            <span className="text-muted-foreground"></span>
          </div>

          <CardDescription>{text("description")}</CardDescription>
        </CardHeader>

        <CardContent>
          <Link
            href={ListSocial.Github.href}
            target="_blank"
            className={`border w-full text-slate-900 bg-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700  text-base   ${buttonVariants(
              {
                variant: "secondary"
              }
            )}`}
          >
            <Icons.github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute  duration-200 bg-opacity-10 bg-blue-200 hover:scale-105 transition duration-800 right-[20px] top-2 w-72 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Image
            src="/avatar.webp"
            alt="user avatar"
            width={100}
            height={100}
            className="absolute -top-12 rounded-full w-24 h-24"
          />
          <CardTitle className="text-center">{team("title")}</CardTitle>
          <CardDescription className="font-normal text-primary">
            {team("description")}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p> {team("content")}</p>
        </CardContent>

        <CardFooter>
          <div className="space-x-2">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm"
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Icons.linkedin className="h-6 w-4" />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm"
              })}
            >
              <span className="sr-only">Github icon</span>
              <Icons.github className="h-6 w-4" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm"
              })}
            >
              <span className="sr-only">X icon</span>
              <Icons.twitter className="h-6 w-4" />
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute  bg-opacity-10 bg-blue-200 hover:scale-105 transition duration-800 top-[230px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Pro {popular("title")}
            <Badge variant="secondary" className="text-sm text-primary">
              {popular("badg")}
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">{popular("span")}</span>
            <span className="text-muted-foreground"> {popular("span2")}</span>
          </div>

          <CardDescription> {popular("description")}</CardDescription>
        </CardHeader>

        <CardContent>
          <Link className="cursor-pointer" key="register" href="/register">
            <Button className="border  hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700  text-base w-full">
              Start Now
            </Button>
          </Link>
        </CardContent>

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Full Advanced features", "Priority support"].map((benefit: string) => (
              <div key={benefit} className="flex items-center">
                <Icons.check className="text-green-500 w-5 h-5" />
                <h3 className="ml-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
      {/* Service */}
      <Card className="absolute bg-opacity-10 bg-blue-200 hover:scale-105 transition duration-800 w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-3 rounded-2xl">
            <Icons.bulb className="h-6 w-6 dark:text-orange-500 text-blue-500" />
          </div>
          <div>
            <CardTitle>Ship fast </CardTitle>
            <CardDescription className="text-md mt-2">
              Most advanced javascript meta framework 2024 .
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
