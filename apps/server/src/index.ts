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
          parameters: [
            {
              name: "page",
              in: "query",
              schema: { type: "integer", default: 1 },
            },
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 20 },
            },
            {
              name: "status",
              in: "query",
              schema: {
                type: "string",
                enum: ["ongoing", "completed", "hiatus"],
              },
            },
            {
              name: "sortBy",
              in: "query",
              schema: {
                type: "string",
                enum: ["popularity", "rating", "updatedAt", "title"],
                default: "updatedAt",
              },
            },
            {
              name: "order",
              in: "query",
              schema: { type: "string", enum: ["asc", "desc"], default: "desc" },
            },
          ],
        },
      },
      "/api/chapters": {
        get: {
          summary: "Get all chapters",
          tags: ["Chapters"],
          parameters: [
            {
              name: "translationId",
              in: "query",
              required: true,
              schema: { type: "string", format: "uuid" },
            },
            {
              name: "page",
              in: "query",
              schema: { type: "integer", default: 1 },
            },
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 20 },
            },
          ],
          responses: {
            "200": {
              description: "List of chapters",
            },
          },
        },
      },
      "/api/chapters/{id}": {
        get: {
          summary: "Get chapter by ID",
          tags: ["Chapters"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string", format: "uuid" },
            },
          ],
          responses: {
            "200": {
              description: "Chapter details",
            },
            "404": {
              description: "Chapter not found",
            },
          },
        },
      },
      "/api/ratings": {
        post: {
          summary: "Create or update a rating",
          tags: ["Ratings"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["translationId", "rating"],
                  properties: {
                    translationId: { type: "string", format: "uuid" },
                    rating: { type: "number", minimum: 1, maximum: 5 },
                    review: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Rating created",
            },
          },
        },
      },
      "/api/ratings/{id}": {
        delete: {
          summary: "Delete a rating",
          tags: ["Ratings"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string", format: "uuid" },
            },
          ],
          responses: {
            "200": {
              description: "Rating deleted",
            },
          },
        },
      },
      "/api/reading/list": {
        get: {
          summary: "Get reading list",
          tags: ["Reading"],
          responses: {
            "200": {
              description: "Reading list items",
            },
          },
        },
        post: {
          summary: "Add novel to reading list",
          tags: ["Reading"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["novelId", "status"],
                  properties: {
                    novelId: { type: "string", format: "uuid" },
                    status: {
                      type: "string",
                      enum: ["reading", "completed", "plan_to_read", "dropped"],
                    },
                  },
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Added to list",
            },
          },
        },
      },
      "/api/reading/list/{id}": {
        patch: {
          summary: "Update reading list status",
          tags: ["Reading"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string", format: "uuid" },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["status"],
                  properties: {
                    status: {
                      type: "string",
                      enum: ["reading", "completed", "plan_to_read", "dropped"],
                    },
                  },
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Status updated",
            },
          },
        },
        delete: {
          summary: "Remove from reading list",
          tags: ["Reading"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string", format: "uuid" },
            },
          ],
          responses: {
            "200": {
              description: "Removed from list",
            },
          },
        },
      },
      "/api/reading/progress": {
        post: {
          summary: "Update reading progress",
          tags: ["Reading"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["chapterId", "progress"],
                  properties: {
                    chapterId: { type: "string", format: "uuid" },
                    progress: { type: "number", minimum: 0, maximum: 100 },
                  },
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Progress updated",
            },
          },
        },
      },
      "/api/translations": {
        get: {
          summary: "Get all translations",
          tags: ["Translations"],
          parameters: [
            {
              name: "novelId",
              in: "query",
              schema: { type: "string", format: "uuid" },
            },
            {
              name: "language",
              in: "query",
              schema: { type: "string" },
            },
            {
              name: "page",
              in: "query",
              schema: { type: "integer", default: 1 },
            },
            {
              name: "limit",
              in: "query",
              schema: { type: "integer", default: 20 },
            },
            {
              name: "sortBy",
              in: "query",
              schema: {
                type: "string",
                enum: ["chapters", "rating", "updatedAt"],
                default: "updatedAt",
              },
            },
            {
              name: "order",
              in: "query",
              schema: { type: "string", enum: ["asc", "desc"], default: "desc" },
            },
          ],
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
      "/api/users/me": {
        get: {
          summary: "Get current user profile",
          tags: ["Users"],
          responses: {
            "200": {
              description: "User profile",
            },
            "401": {
              description: "Unauthorized",
            },
          },
        },
      },
      "/api/admin/novels": {
        post: {
          summary: "Create a new novel",
          tags: ["Admin"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["title", "slug", "author", "status"],
                  properties: {
                    title: { type: "string" },
                    slug: { type: "string" },
                    author: { type: "string" },
                    status: { type: "string", enum: ["ongoing", "completed", "hiatus"] },
                    description: { type: "string" },
                    coverImage: { type: "string", format: "uri" },
                  },
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Novel created",
            },
          },
        },
      },
      "/api/admin/stats": {
        get: {
          summary: "Get admin statistics",
          tags: ["Admin"],
          responses: {
            "200": {
              description: "Statistics data",
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

