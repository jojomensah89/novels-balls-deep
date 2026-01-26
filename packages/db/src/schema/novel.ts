import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { translation, novelToGenre } from "./index";

// Novel status enum values
export type NovelStatus = "ongoing" | "completed" | "hiatus";

export const novel = sqliteTable(
    "novel",
    {
        id: text("id").primaryKey(),
        slug: text("slug").notNull().unique(),
        title: text("title").notNull(),
        alternativeTitles: text("alternative_titles", { mode: "json" }).$type<string[]>(),
        author: text("author"),
        coverImage: text("cover_image"),
        description: text("description"),
        status: text("status").$type<NovelStatus>().default("ongoing").notNull(),
        originalLanguage: text("original_language").default("Chinese"),
        totalChapters: integer("total_chapters").default(0),
        views: integer("views").default(0),
        createdAt: integer("created_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer("updated_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [
        index("novel_slug_idx").on(table.slug),
        index("novel_status_idx").on(table.status),
    ]
);

export const novelRelations = relations(novel, ({ many }) => ({
    translations: many(translation),
    novelToGenres: many(novelToGenre),
}));
