import { AppConfig } from "@/i18n"
import authConfig from "@/lib/auth/auth.config"
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  apidocsPrefix,
  apistripePrefix
} from "@/routes"
import NextAuth from "next-auth"
import createMiddleware from "next-intl/middleware"

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  defaultLocale: AppConfig.defaultLocale
})
const { auth } = NextAuth(authConfig)
//@ts-ignore
export default auth(req => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isApistripeRoute = nextUrl.pathname.startsWith(apistripePrefix)
  const isApidocsRoute = nextUrl.pathname.startsWith(apidocsPrefix)
  if (isApistripeRoute) {
    return null
  }
  if (isApiAuthRoute) {
    return null
  }
  if (isApidocsRoute) {
    return null
  }

  return intlMiddleware(req)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}
