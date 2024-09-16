import { MetadataRoute } from "next"


  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/"
    },
    sitemap: "https://rocke-t.com/sitemap.xml"
  }
}
