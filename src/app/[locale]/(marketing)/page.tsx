import CTA from "@/app/[locale]/(marketing)/_components_ma/sections/CTA"
import Features from "@/app/[locale]/(marketing)/_components_ma/sections/Features"
import Newsletter from "@/app/[locale]/(marketing)/_components_ma/sections/Newsletter"
import Stack from "@/app/[locale]/(marketing)/_components_ma/sections/Stack"
import Hero from "@/app/[locale]/(marketing)/_components_ma/sections/hero/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <CTA />
      <Features />
      <Newsletter />
    </>
  )
}
