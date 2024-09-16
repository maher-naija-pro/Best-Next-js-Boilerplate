import db from "@/lib/db/db"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
    console.log("🚀 ~ POST webhook ~ event:", event.type)
  } catch (error) {
    return new NextResponse("Webhook error", { status: 400 })
  }
  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === "checkout.session.completed") {
    console.log("🚀 ~ POST ~ completed:")
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    if (!session?.metadata?.orgId) {
      return new NextResponse("Org ID is required", { status: 400 })
    }
    console.log("🚀 updateDB subscription")
    await db.orgSubscription.create({
      data: {
        orgId: session?.metadata?.orgId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
      }
    })
  }

  if (event.type === "invoice.payment_succeeded") {
    console.log("🚀 ~ POST ~ payment_succeeded:")
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    await db.orgSubscription.update({
      where: {
        stripeSubscriptionId: subscription.id
      },
      data: {
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
      }
    })
  }
  if (event.type === "payment_intent.succeeded") {
    console.log("🚀 ~ POST ~ payment_intent.succeeded")
    const paymentIntent = event.data.object
    console.log(`PaymentIntent status: ${paymentIntent.status}`)
  }
  if (event.type === "payment_intent.payment_failed") {
    console.log("🚀 ~ POST ~ payment_intent.payment_failed")
    const paymentIntent = event.data.object
    console.log(`❌ Payment failed: ${paymentIntent.last_payment_error?.message}`)
  }
  if (event.type === "charge.succeeded") {
    console.log("🚀 ~ POST ~ charge.succeeded")
    const charge = event.data.object
    console.log(`Charge id: ${charge.id}`)
  }

  return new NextResponse(null, { status: 200 })
}
