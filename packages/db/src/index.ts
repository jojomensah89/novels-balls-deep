import { env } from "@novels-balls-deep/env/server";
import { drizzle } from "drizzle-orm/d1";

// Initialize D1 database
export const db = drizzle(env.DB);

// Re-export schema for table imports
export * as schema from "./schema";

// Re-export drizzle-orm functions to avoid version conflicts
export { eq, like, desc, asc, and, or } from "drizzle-orm";
