import { NovelBinSource } from "./sources/novelbin";
import { RoyalRoadSource } from "./sources/royalroad";
import { ScribbleHubSource } from "./sources/scribblehub";
import { FreeWebNovelSource } from "./sources/freewebnovel";
import type { Source, ScraperOptions } from "./types";

/**
 * Registry of all available novel sources
 */
export const SOURCES = {
    novelbin: NovelBinSource,
    royalroad: RoyalRoadSource,
    scribblehub: ScribbleHubSource,
    freewebnovel: FreeWebNovelSource,
} as const;

export type SourceId = keyof typeof SOURCES;

/**
 * Create a source instance by ID
 */
export function createSource(sourceId: SourceId, options?: ScraperOptions): Source {
    const SourceClass = SOURCES[sourceId];
    return new SourceClass(options);
}

/**
 * Get all available source IDs
 */
export function getAvailableSources(): SourceId[] {
    return Object.keys(SOURCES) as SourceId[];
}
