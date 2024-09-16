"use client"

import { Get_userss } from "@/app/[locale]/(platforme)/users/_actions"
import { Button } from "@/components/ui/button"

export default function page() {
  const onSubmit = () => {
    const userss = Get_userss()
    console.log("🚀 ~ onSubmit ~ users:", userss)
  }
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">Hi, Welcome back 👋</h2>
      <form onSubmit={onSubmit}>
        <Button type="submit"> get usrrs</Button>
      </form>
    </>
  )
}
