import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

export const AppConfig = {
  name: "Nextjs Starter",
  locales: ["en", "fr"],
  defaultLocale: "en"
}

export default getRequestConfig(async ({ locale }) => {
  if (!AppConfig.locales.includes(locale)) notFound()

  return {
    messages: (await import(`./locales/${locale}.json`)).default
  }
})
