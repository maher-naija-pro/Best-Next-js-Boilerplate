"use client"

import { DemoFormContent } from "@/app/[locale]/(marketing)/company/contact/_form_content"
import { CardWrapper } from "@/components/card-wrapper"

export const DemoForm = () => {
  return (
    <div className="mt-10">
      <CardWrapper>
        <DemoFormContent />
      </CardWrapper>
    </div>
  )
}
