import { env } from "@novels-balls-deep/env/server";
import { drizzle } from "drizzle-orm/d1";

import * as schema from "./schema";

// Pass schema to enable query builder and relational queries
export const db = drizzle(env.DB, { schema });

// Re-export drizzle-orm functions to avoid version conflicts
export { eq, like, desc, asc, and, or } from "drizzle-orm";
