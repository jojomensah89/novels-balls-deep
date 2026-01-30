import { auth } from "@novels-balls-deep/auth";
import { env } from "@novels-balls-deep/env/server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { compress } from "hono/compress";
import { prettyJSON } from "hono/pretty-json";

// Middleware
import { errorHandler } from "./middleware/error-handler";

// Routes
import novels from "./routes/novels";
import chapters from "./routes/chapters";
import ratings from "./routes/ratings";
import translations from "./routes/translations";
import reading from "./routes/reading";
import users from "./routes/users";
import admin from "./routes/admin";

// Types for Hono context
type Env = {
  Bindings: {
    DB: D1Database;
  };
  Variables: {
    user: { id: string; email: string } | null;
  };
};

const app = new Hono<Env>();

// Global middleware (order matters!)
app.use("*", logger());
app.use("*", secureHeaders());
app.use("*", compress());

// Pretty JSON in development only
if (process.env.NODE_ENV === "development") {
  app.use("*", prettyJSON());
}

// CORS (before routes)
app.use(
  "/api/*",
  cors({
    origin: env.CORS_ORIGIN,
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// Auth routes (Better-Auth)
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

// API routes (domain-based)
app.route("/api/novels", novels);
app.route("/api/chapters", chapters);
app.route("/api/ratings", ratings);
app.route("/api/translations", translations);
app.route("/api/reading", reading);
app.route("/api/users", users);
app.route("/api/admin", admin);

// Health check
app.get("/health", (c) => c.json({ status: "ok", timestamp: Date.now() }));

// Root
app.get("/", (c) => c.text("NovelVerse API"));

// 404 handler
app.notFound((c) => c.json({ error: "Not Found" }, 404));

// Global error handler (must be last!)
app.onError(errorHandler);

// Export type for RPC client
export type AppType = typeof app;

export default app;

