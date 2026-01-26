import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, primaryKey, index } from "drizzle-orm/sqlite-core";
import { novel } from "./novel";

export const genre = sqliteTable("genre", {
    id: text("id").primaryKey(),
    name: text("name").notNull().unique(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    color: text("color").default("#8b5cf6"), // Default purple accent
    createdAt: integer("created_at", { mode: "timestamp_ms" })
        .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
        .notNull(),
});

// Junction table for many-to-many relationship
export const novelToGenre = sqliteTable(
    "novel_to_genre",
    {
        novelId: text("novel_id")
            .notNull()
            .references(() => novel.id, { onDelete: "cascade" }),
        genreId: text("genre_id")
            .notNull()
            .references(() => genre.id, { onDelete: "cascade" }),
    },
    (table) => [
        primaryKey({ columns: [table.novelId, table.genreId] }),
        index("novel_to_genre_novel_idx").on(table.novelId),
        index("novel_to_genre_genre_idx").on(table.genreId),
    ]
);

export const genreRelations = relations(genre, ({ many }) => ({
    novelToGenres: many(novelToGenre),
}));

export const novelToGenreRelations = relations(novelToGenre, ({ one }) => ({
    novel: one(novel, {
        fields: [novelToGenre.novelId],
        references: [novel.id],
    }),
    genre: one(genre, {
        fields: [novelToGenre.genreId],
        references: [genre.id],
    }),
}));
