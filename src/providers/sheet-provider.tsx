"use client"

import { EditAccountSheet } from "@/app/[locale]/(platforme)/admin/edit-account-sheet"
import { NewAccountSheet } from "@/app/[locale]/(platforme)/admin/new-account-sheet"
import { useMountedState } from "react-use"

export const SheetProvider = () => {
  const isMounted = useMountedState()

  if (!isMounted) return null

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  )
}
