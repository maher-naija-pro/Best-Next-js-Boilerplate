"use client"

import { Button } from "@/components/ui/button"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import React from "react"

export default function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = React.useState("")

  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )

    if (!clientSecret) {
      return
    }
    // @ts-ignore
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      // @ts-ignore
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://rocke-t.com/fr/success"
      }
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <PaymentElement id="payment-element" />
      <Button disabled={isLoading} className="w-full my-10" type="submit">
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner">
              loading...
            </div>
          ) : (
            "Pay now"
          )}
        </span>
      </Button>
    </form>
  )
}
