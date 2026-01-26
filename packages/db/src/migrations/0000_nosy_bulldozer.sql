CREATE TABLE `account` (
	`id` text PRIMARY KEY NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`password` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `account_userId_idx` ON `account` (`user_id`);--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE INDEX `session_userId_idx` ON `session` (`user_id`);--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`email_verified` integer DEFAULT false NOT NULL,
	`image` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `verification_identifier_idx` ON `verification` (`identifier`);--> statement-breakpoint
CREATE TABLE `chapter` (
	`id` text PRIMARY KEY NOT NULL,
	`translation_id` text NOT NULL,
	`chapter_number` integer NOT NULL,
	`title` text,
	`content` text NOT NULL,
	`word_count` integer DEFAULT 0,
	`source_url` text,
	`published_at` integer,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`translation_id`) REFERENCES `translation`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `chapter_translation_idx` ON `chapter` (`translation_id`);--> statement-breakpoint
CREATE INDEX `chapter_number_idx` ON `chapter` (`translation_id`,`chapter_number`);--> statement-breakpoint
CREATE TABLE `genre` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`color` text DEFAULT '#8b5cf6',
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `genre_name_unique` ON `genre` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `genre_slug_unique` ON `genre` (`slug`);--> statement-breakpoint
CREATE TABLE `novel_to_genre` (
	`novel_id` text NOT NULL,
	`genre_id` text NOT NULL,
	PRIMARY KEY(`novel_id`, `genre_id`),
	FOREIGN KEY (`novel_id`) REFERENCES `novel`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`genre_id`) REFERENCES `genre`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `novel_to_genre_novel_idx` ON `novel_to_genre` (`novel_id`);--> statement-breakpoint
CREATE INDEX `novel_to_genre_genre_idx` ON `novel_to_genre` (`genre_id`);--> statement-breakpoint
CREATE TABLE `novel` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`alternative_titles` text,
	`author` text,
	`cover_image` text,
	`description` text,
	`status` text DEFAULT 'ongoing' NOT NULL,
	`original_language` text DEFAULT 'Chinese',
	`total_chapters` integer DEFAULT 0,
	`views` integer DEFAULT 0,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `novel_slug_unique` ON `novel` (`slug`);--> statement-breakpoint
CREATE INDEX `novel_slug_idx` ON `novel` (`slug`);--> statement-breakpoint
CREATE INDEX `novel_status_idx` ON `novel` (`status`);--> statement-breakpoint
CREATE TABLE `translation` (
	`id` text PRIMARY KEY NOT NULL,
	`novel_id` text NOT NULL,
	`translator_name` text NOT NULL,
	`translator_team` text,
	`language` text DEFAULT 'English' NOT NULL,
	`is_official` integer DEFAULT false,
	`status` text DEFAULT 'ongoing' NOT NULL,
	`source_url` text,
	`chapter_count` integer DEFAULT 0,
	`last_chapter_at` integer,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`novel_id`) REFERENCES `novel`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `translation_novel_idx` ON `translation` (`novel_id`);--> statement-breakpoint
CREATE INDEX `translation_status_idx` ON `translation` (`status`);