"use client"

import { Button } from "@/components/ui/button"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { signIn, useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import NewWindow from "react-new-window"

export const Social = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
  const [isPendinggoogle, setgoogle] = useState(false)
  const [popup, setPopUp] = useState(false)
  const { data: session, status } = useSession()
  const [isPendinggithub, setgithub] = useState(false)

  const onClickgoogle = () => {
    setgoogle(true)
    signIn("google", {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT // Default to home page if no
    })
    setgoogle(false)
  }
  const onClickgithub = () => {
    setPopUp(true)
    setgithub(true)
  }

  return (
    <div className="flex sm:flex-row flex-col  items-center w-full gap-y-5 sm:gap-x-2">
      <Button
        disabled={isPendinggoogle}
        size="lg"
        className="w-full  hover:bg-slate-900 bg-slate-50 text-slate-900 hover:text-slate-50"
        variant="outline"
        onClick={() => onClickgoogle()}
      >
        {" "}
        <FcGoogle className="h-5 w-5 mr-4" />
        <a> {isPendinggoogle ? "Loading..." : "Google"}</a>
      </Button>
      <Button
        disabled={isPendinggithub}
        size="lg"
        className="w-full  hover:bg-slate-900  bg-slate-50 text-slate-900  hover:text-slate-50 "
        variant="outline"
        onClick={() => onClickgithub()}
      >
        <FaGithub className="h-5 w-5 mr-4" />
        <a> {isPendinggithub ? "Loading..." : "Github"}</a>
      </Button>{" "}
      {popup ? (
        <NewWindow
          url="/testauth"
          onUnload={() => {
            setgithub(false)
          }}
        />
      ) : null}
    </div>
  )
}
