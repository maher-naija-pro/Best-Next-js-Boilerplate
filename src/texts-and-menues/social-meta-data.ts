import type { Metadata } from "next"

interface platformnameProps {
  title: string
}

const platformname: platformnameProps = {
  title: "Nextboostjs"
}
//add this after <GoogleTagManager gtmId="GTM-XYZ" />
export const socialmetadata: Metadata = {
  title: platformname.title + " Build Your optimized web platform faster",

  description:
    "Launch your full-stack Next.js SaaS with" +
    platformname.title +
    ". Streamline development and build optimized, high-performance web platforms faster than ever. An all-in-one solution awaits!",
  twitter: {
    title: "Rocke-T Build Your optimized web platform faster",
    site: " @" + platformname.title,
    images: ["/cover.jpg"]
  },
  openGraph: {
    images: ["/cover.jpg"],
    title: platformname.title + " Build Your optimized web platform faster",
    url: "https://www." + platformname.title + ".com /",
    siteName: platformname.title,
    type: "website",
    description:
      "Launch your full-stack Next.js SaaS with " +
      platformname.title +
      ". Streamline development and build optimized, high-performance web platforms faster than ever. All-in-one solution awaits!"
  }
}
