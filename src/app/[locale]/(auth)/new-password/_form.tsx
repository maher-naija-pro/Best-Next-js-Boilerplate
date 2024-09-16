"use client"

import { NewPasswordFormcom } from "@/app/[locale]/(auth)/new-password/_comp_new_pass"
import { CardWrapper } from "@/components/card-wrapper"

export const NewPasswordForm = () => {
  return (
    <>
      <CardWrapper>
        <NewPasswordFormcom />
      </CardWrapper>
    </>
  )
}
