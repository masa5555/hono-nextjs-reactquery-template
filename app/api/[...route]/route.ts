import { Hono } from "hono";
import { handle } from "hono/vercel";

import helloRoute from "./hello";

export const runtime = "edge"; // or 'nodejs'

const app = new Hono().basePath("/api").route("/hello", helloRoute);

export const GET = handle(app);

export const POST = handle(app);

export type AppType = typeof app;
