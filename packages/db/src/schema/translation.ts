import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { novel } from "./novel";
import { chapter } from "./chapter";

// Translation status enum values
export type TranslationStatus = "ongoing" | "completed" | "dropped";

export const translation = sqliteTable(
    "translation",
    {
        id: text("id").primaryKey(),
        novelId: text("novel_id")
            .notNull()
            .references(() => novel.id, { onDelete: "cascade" }),
        translatorName: text("translator_name").notNull(),
        translatorTeam: text("translator_team"),
        language: text("language").default("English").notNull(),
        isOfficial: integer("is_official", { mode: "boolean" }).default(false),
        status: text("status").$type<TranslationStatus>().default("ongoing").notNull(),
        sourceUrl: text("source_url"), // Where this translation was scraped from
        chapterCount: integer("chapter_count").default(0),
        lastChapterAt: integer("last_chapter_at", { mode: "timestamp_ms" }),
        createdAt: integer("created_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer("updated_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [
        index("translation_novel_idx").on(table.novelId),
        index("translation_status_idx").on(table.status),
    ]
);

export const translationRelations = relations(translation, ({ one, many }) => ({
    novel: one(novel, {
        fields: [translation.novelId],
        references: [novel.id],
    }),
    chapters: many(chapter),
}));
