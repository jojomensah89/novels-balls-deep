import { auth } from "@novels-balls-deep/auth";
import { env } from "@novels-balls-deep/env/server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { prettyJSON } from "hono/pretty-json";
import { swaggerUI } from "@hono/swagger-ui";

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

// Swagger UI for API documentation
app.get(
  "/docs",
  swaggerUI({
    url: "/spec",
  })
);

// OpenAPI spec endpoint
app.get("/spec", (c) =>
  c.json({
    openapi: "3.0.0",
    info: {
      title: "NovelVerse API",
      version: "1.0.0",
      description: "API for managing novels, chapters, ratings, and translations",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Development server",
      },
    ],
    paths: {
      "/api/novels": {
        get: {
          summary: "Get all novels",
          tags: ["Novels"],
          responses: {
            "200": {
              description: "List of novels",
            },
          },
        },
      },
      "/api/chapters": {
        get: {
          summary: "Get all chapters",
          tags: ["Chapters"],
          responses: {
            "200": {
              description: "List of chapters",
            },
          },
        },
      },
      "/api/ratings": {
        get: {
          summary: "Get all ratings",
          tags: ["Ratings"],
          responses: {
            "200": {
              description: "List of ratings",
            },
          },
        },
      },
      "/api/translations": {
        get: {
          summary: "Get all translations",
          tags: ["Translations"],
          responses: {
            "200": {
              description: "List of translations",
            },
          },
        },
      },
      "/api/reading": {
        get: {
          summary: "Get reading progress",
          tags: ["Reading"],
          responses: {
            "200": {
              description: "Reading progress data",
            },
          },
        },
      },
      "/api/users": {
        get: {
          summary: "Get all users",
          tags: ["Users"],
          responses: {
            "200": {
              description: "List of users",
            },
          },
        },
      },
      "/health": {
        get: {
          summary: "Health check",
          tags: ["System"],
          responses: {
            "200": {
              description: "Server health status",
            },
          },
        },
      },
    },
  })
);

// Root
app.get("/", (c) => c.text("NovelVerse API"));

// 404 handler
app.notFound((c) => c.json({ error: "Not Found" }, 404));

// Global error handler (must be last!)
app.onError(errorHandler);

export type AppType = typeof app;

export default app;

