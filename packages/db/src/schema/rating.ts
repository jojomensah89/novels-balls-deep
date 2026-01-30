import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index, unique } from "drizzle-orm/sqlite-core";
import { user } from "./auth";
import { translation } from "./translation";

export const translationRating = sqliteTable(
    "translation_rating",
    {
        id: text("id").primaryKey(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        translationId: text("translation_id")
            .notNull()
            .references(() => translation.id, { onDelete: "cascade" }),
        rating: integer("rating").notNull(), // 1-5
        review: text("review"), // Optional review text (50-500 characters)
        helpfulCount: integer("helpful_count").default(0).notNull(),
        createdAt: integer("created_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer("updated_at", { mode: "timestamp_ms" })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [
        index("translation_rating_user_idx").on(table.userId),
        index("translation_rating_translation_idx").on(table.translationId),
        unique("translation_rating_user_translation_unique").on(table.userId, table.translationId),
    ]
);

export const translationRatingRelations = relations(translationRating, ({ one }) => ({
    user: one(user, {
        fields: [translationRating.userId],
        references: [user.id],
    }),
    translation: one(translation, {
        fields: [translationRating.translationId],
        references: [translation.id],
    }),
}));
