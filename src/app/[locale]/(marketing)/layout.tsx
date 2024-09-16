import Footer from "./_components_ma/layout/Footer"
import Navbar from "./_components_ma/layout/Navbar"
import { ModeToggle } from "@/components/ModeToggle"
import ScrollToTop from "@/components/ScrollToTop"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

export default async function Layout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()
  return (
    <main>
      <Navbar />
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      <Footer />
      <ScrollToTop />
      <ModeToggle />{" "}
    </main>
  )
}
