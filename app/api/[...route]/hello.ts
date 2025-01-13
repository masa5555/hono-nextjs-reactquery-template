import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono()
  .get(
    "/",
    zValidator(
      "query",
      z.object({
        q: z.string(),
      }),
    ),
    (c) => {
      return c.json({
        message: "Hello from Hono!",
        status: 200,
      });
    },
  )
  .post("/", zValidator("json", z.object({})), (c) => {
    return c.json({
      message: "Hello from Hono!",
      status: 200,
    });
  });

export default app;
