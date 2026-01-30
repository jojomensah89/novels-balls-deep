CREATE TABLE `translation_rating` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`translation_id` text NOT NULL,
	`rating` integer NOT NULL,
	`review` text,
	`helpful_count` integer DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`translation_id`) REFERENCES `translation`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `translation_rating_user_idx` ON `translation_rating` (`user_id`);--> statement-breakpoint
CREATE INDEX `translation_rating_translation_idx` ON `translation_rating` (`translation_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `translation_rating_user_translation_unique` ON `translation_rating` (`user_id`,`translation_id`);--> statement-breakpoint
CREATE TABLE `reading_list` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`is_default` integer DEFAULT false NOT NULL,
	`is_public` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `reading_list_user_idx` ON `reading_list` (`user_id`);--> statement-breakpoint
CREATE TABLE `reading_list_item` (
	`id` text PRIMARY KEY NOT NULL,
	`reading_list_id` text NOT NULL,
	`novel_id` text NOT NULL,
	`preferred_translation_id` text,
	`position` integer DEFAULT 0 NOT NULL,
	`added_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`reading_list_id`) REFERENCES `reading_list`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`novel_id`) REFERENCES `novel`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`preferred_translation_id`) REFERENCES `translation`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `reading_list_item_list_idx` ON `reading_list_item` (`reading_list_id`);--> statement-breakpoint
CREATE INDEX `reading_list_item_novel_idx` ON `reading_list_item` (`novel_id`);--> statement-breakpoint
CREATE TABLE `reading_progress` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`translation_id` text NOT NULL,
	`chapter_id` text NOT NULL,
	`progress` integer DEFAULT 0 NOT NULL,
	`last_read_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`translation_id`) REFERENCES `translation`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`chapter_id`) REFERENCES `chapter`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `reading_progress_user_idx` ON `reading_progress` (`user_id`);--> statement-breakpoint
CREATE INDEX `reading_progress_translation_idx` ON `reading_progress` (`translation_id`);--> statement-breakpoint
CREATE INDEX `reading_progress_user_translation_idx` ON `reading_progress` (`user_id`,`translation_id`);--> statement-breakpoint
ALTER TABLE `user` ADD `username` text;--> statement-breakpoint
ALTER TABLE `user` ADD `last_login_at` integer;--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);