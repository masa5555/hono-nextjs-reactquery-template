import { hc } from "hono/client";

import type { AppType } from "./api/[...route]/route";

export const client = hc<AppType>("/");
