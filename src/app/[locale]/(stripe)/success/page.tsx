"use client"

import { CardWrapper } from "@/components/card-wrapper"

export default function Home() {
  return (
    <CardWrapper>
      <h1>Congratulations! Your purchase was successful!</h1>
      <p>
        go back to dashboard <a href="/dashboard">here</a> to go to your dashboard.
      </p>
    </CardWrapper>
  )
}
