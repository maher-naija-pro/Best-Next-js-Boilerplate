import { RegisterSchema } from "@/app/[locale]/(platforme)/admin/schema"
import db from "@/lib/db/db"
import { zValidator } from "@hono/zod-validator"
import bcrypt from "bcryptjs"
import { Hono } from "hono"
import { z } from "zod"

const app = new Hono()
  .get("/", async c => {
    const data2 = await db.user.findMany()
    return c.json({ data: data2 })
  })

  .delete(
    "/:id",
    zValidator(
      "param",
      z.object({
        id: z.string().optional()
      })
    ),
    async c => {
      const { id } = c.req.valid("param")
      if (!id) {
        return c.json({ error: "Missing id" }, 400)
      }

      const data = await db.user.delete({
        where: {
          id: id
        }
      })
      if (!data) {
        return c.json({ error: "Not found" }, 404)
      }

      return c.json({ data })
    }
  )
  .patch(
    "/:id",
    zValidator(
      "param",
      z.object({
        id: z.string().optional()
      })
    ),
    zValidator(
      "json",
      RegisterSchema.pick({
        name: true,
        email: true,
        password: true
      })
    ),
    async c => {
      const { id } = c.req.valid("param")
      const { name, password, email } = c.req.valid("json")

      if (!id) {
        return c.json({ error: "Missing id" }, 400)
      }

      const data = await db.user.update({
        where: {
          id: id
        },
        data: {
          name: name,
          password: password,
          email: email
        }
      })

      if (!data) {
        return c.json({ error: "Not found" }, 404)
      }

      return c.json({ data })
    }
  )
  .get(
    "/:id",
    zValidator(
      "param",
      z.object({
        id: z.string().optional()
      })
    ),

    async c => {
      const { id } = c.req.valid("param")

      if (!id) {
        return c.json({ error: "Missing id" }, 400)
      }

      const data = await db.user.findUnique({
        where: {
          id: id
        }
      })

      if (!data) {
        return c.json({ error: "Not found" }, 404)
      }

      return c.json({ data })
    }
  )
  .post(
    "/bulk-delete",

    zValidator(
      "json",
      z.object({
        ids: z.array(z.string())
      })
    ),
    async c => {
      const values = c.req.valid("json")
      const data = await db.$transaction(
        values.ids.map(Id =>
          db.user.delete({
            where: { id: Id }
          })
        )
      )

      return c.json({ data })
    }
  )
  .post(
    "/",
    zValidator(
      "json",
      RegisterSchema.pick({
        name: true,
        email: true,
        password: true
      })
    ),
    async c => {
      const { name, password, email } = c.req.valid("json")
      console.log("🚀 ~ name:", name)
      const hashedPassword = await bcrypt.hash(password, 10)

      const data2 = await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword
        }
      })

      return c.json({ data2 })
    }
  )
export default app
