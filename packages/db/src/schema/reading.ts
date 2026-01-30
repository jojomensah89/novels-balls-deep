import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { translation } from "./translation";
import { chapter } from "./chapter";
import { novel } from "./novel";

// Track user reading progress
export const readingProgress = sqliteTable(
    "reading_progress",
    {
        id: text("id").primaryKey(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        translationId: text("translation_id")
            .notNull()
            .references(() => translation.id, { onDelete: "cascade" }),
        chapterId: text("chapter_id")
            .notNull()
            .references(() => chapter.id, { onDelete: "cascade" }),
        progress: integer("progress").default(0).notNull(), // Percentage 0-100
        lastReadAt: integer("last_read_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
    },
    (table) => [
        index("reading_progress_user_idx").on(table.userId),
        index("reading_progress_translation_idx").on(table.translationId),
        index("reading_progress_user_translation_idx").on(table.userId, table.translationId),
    ]
);

// User-created reading lists
export const readingList = sqliteTable(
    "reading_list",
    {
        id: text("id").primaryKey(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        name: text("name").notNull(),
        isDefault: integer("is_default", { mode: "boolean" }).default(false).notNull(),
        isPublic: integer("is_public", { mode: "boolean" }).default(false).notNull(),
        createdAt: integer("created_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer("updated_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [index("reading_list_user_idx").on(table.userId)]
);

// Junction table for novels in reading lists
export const readingListItem = sqliteTable(
    "reading_list_item",
    {
        id: text("id").primaryKey(),
        readingListId: text("reading_list_id")
            .notNull()
            .references(() => readingList.id, { onDelete: "cascade" }),
        novelId: text("novel_id")
            .notNull()
            .references(() => novel.id, { onDelete: "cascade" }),
        preferredTranslationId: text("preferred_translation_id").references(() => translation.id, {
            onDelete: "set null",
        }),
        position: integer("position").default(0).notNull(), // For ordering
        addedAt: integer("added_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
    },
    (table) => [
        index("reading_list_item_list_idx").on(table.readingListId),
        index("reading_list_item_novel_idx").on(table.novelId),
    ]
);

// Relations
export const readingProgressRelations = relations(readingProgress, ({ one }) => ({
    user: one(user, {
        fields: [readingProgress.userId],
        references: [user.id],
    }),
    translation: one(translation, {
        fields: [readingProgress.translationId],
        references: [translation.id],
    }),
    chapter: one(chapter, {
        fields: [readingProgress.chapterId],
        references: [chapter.id],
    }),
}));

export const readingListRelations = relations(readingList, ({ one, many }) => ({
    user: one(user, {
        fields: [readingList.userId],
        references: [user.id],
    }),
    items: many(readingListItem),
}));

export const readingListItemRelations = relations(readingListItem, ({ one }) => ({
    readingList: one(readingList, {
        fields: [readingListItem.readingListId],
        references: [readingList.id],
    }),
    novel: one(novel, {
        fields: [readingListItem.novelId],
        references: [novel.id],
    }),
    preferredTranslation: one(translation, {
        fields: [readingListItem.preferredTranslationId],
        references: [translation.id],
    }),
}));
