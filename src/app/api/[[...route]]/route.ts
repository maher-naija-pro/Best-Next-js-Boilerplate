import accounts from "@/app/api/[[...route]]/accounts"
import { Hono } from "hono"
import { logger } from "hono/logger"
import { handle } from "hono/vercel"

export const runtime = "nodejs"

const app = new Hono().basePath("/api")
app.use(logger())
const routes = app.route("/accounts", accounts)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes
