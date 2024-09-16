import { NextResponse, NextRequest } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2024-06-20"
})

export async function POST(req: NextRequest) {
  const { data } = await req.json()
  const { amount } = data
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "USD"
    })
    console.log("🚀 ~ POST ~ ok:", paymentIntent)
    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400
    })
  }
}
