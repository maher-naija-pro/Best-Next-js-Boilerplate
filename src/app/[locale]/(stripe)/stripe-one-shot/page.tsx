"use client"

import PaymentForm from "@/app/[locale]/(stripe)/componant_stripe/PaymentForm"
import { CardWrapper } from "@/components/card-wrapper"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
export default function Home() {
  const [clientSecret, setClientSecret] = React.useState("")

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/stripe/oneshot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { amount: 89 } })
    })
      .then(res => res.json())
      .then(data => {
        console.log("🚀 ~ React.useEffect ~ data:", data)
        return setClientSecret(data.clientSecret)
      })
  }, [])

  const options = {
    clientSecret
  }
  return (
    <div className="App">
      {clientSecret && (
        <CardWrapper>
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </CardWrapper>
      )}
    </div>
  )
}
