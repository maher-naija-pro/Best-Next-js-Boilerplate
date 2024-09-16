"use client"

import { newVerification } from "@/app/[locale]/(auth)/new-verification/_actions"
import { HomeButton } from "@/components/buttons/home-button"
import { LoginButton } from "@/components/buttons/login-button"
import { CardWrapper } from "@/components/card-wrapper"
import { FormError } from "@/components/form_message/form-error"
import { FormSuccess } from "@/components/form_message/form-success"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get("token")

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError("Missing token!")
      return
    }

    newVerification(token)
      .then(data => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError("Something went wrong!")
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <>
      <HomeButton />
      <CardWrapper>
        <div className=" items-center w-full justify-center">
          {!success && !error && <BeatLoader />}
          <FormSuccess message={success} />

          {!success && <FormError message={error} />}
          {success && (
            <div className=" mt-5  ">
              <LoginButton>
                <Button className="w-full">login</Button>
              </LoginButton>
            </div>
          )}
        </div>
      </CardWrapper>
    </>
  )
}
