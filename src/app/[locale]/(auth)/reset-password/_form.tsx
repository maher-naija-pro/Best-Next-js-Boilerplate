"use client"

import { ResetFormContent } from "@/app/[locale]/(auth)/reset-password/_formcontant"
import { CardWrapper } from "@/components/card-wrapper"

export const ResetForm = () => {
  return (
    <>
      <CardWrapper>
        <ResetFormContent />
      </CardWrapper>
    </>
  )
}
