import { Toaster } from "@/components/ui/sonner"
import { auth } from "@/lib/auth/auth"
import { ThemeProvider } from "@/lib/theme"
import "@/styles/globals.css"
import { socialmetadata } from "@/texts-and-menues/social-meta-data"
import { GoogleTagManager } from "@next/third-parties/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import React from "react"
import { Suspense } from "react"

//add this after <GoogleTagManager gtmId="GTM-XYZ" />
export const metadata: Metadata = socialmetadata

const inter = Inter({
  subsets: ["latin"]
})
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "test",
  description: "desc"
}
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  //    <SpeedInsights  />
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          {" "}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {" "}
            <Suspense>{children}</Suspense>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
