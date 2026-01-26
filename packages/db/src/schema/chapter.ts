import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { translation } from "./translation";

export const chapter = sqliteTable(
  "chapter",
  {
    id: text("id").primaryKey(),
    translationId: text("translation_id")
      .notNull()
      .references(() => translation.id, { onDelete: "cascade" }),
    chapterNumber: integer("chapter_number").notNull(),
    title: text("title"),
    content: text("content").notNull(),
    wordCount: integer("word_count").default(0),
    sourceUrl: text("source_url"), // Original chapter URL for reference
    publishedAt: integer("published_at", { mode: "timestamp_ms" }),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("chapter_translation_idx").on(table.translationId),
    index("chapter_number_idx").on(table.translationId, table.chapterNumber),
  ]
);

export const chapterRelations = relations(chapter, ({ one }) => ({
  translation: one(translation, {
    fields: [chapter.translationId],
    references: [translation.id],
  }),
}));
