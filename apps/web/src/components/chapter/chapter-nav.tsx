"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import Link from "next/link";

interface ChapterNavProps {
    novelSlug: string;
    currentChapter: number;
    totalChapters: number;
    chapterTitle?: string;
}

export function ChapterNav({
    novelSlug,
    currentChapter,
    totalChapters,
    chapterTitle,
}: ChapterNavProps) {
    const hasPrevious = currentChapter > 1;
    const hasNext = currentChapter < totalChapters;

    return (
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Previous Chapter */}
                    <Button
                        variant="ghost"
                        size="sm"
                        disabled={!hasPrevious}
                        asChild={hasPrevious}
                    >
                        {hasPrevious ? (
                            <Link href={`/novel/${novelSlug}/chapter/${currentChapter - 1}`}>
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Previous
                            </Link>
                        ) : (
                            <>
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Previous
                            </>
                        )}
                    </Button>

                    {/* Chapter Info */}
                    <div className="flex-1 text-center min-w-0">
                        <p className="text-sm font-medium truncate">
                            Chapter {currentChapter}
                            {chapterTitle && `: ${chapterTitle}`}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {currentChapter} / {totalChapters}
                        </p>
                    </div>

                    {/* Chapter List */}
                    <Button variant="ghost" size="sm" asChild>
                        <Link href={`/novel/${novelSlug}#chapters`}>
                            <List className="h-4 w-4 mr-1" />
                            Chapters
                        </Link>
                    </Button>

                    {/* Next Chapter */}
                    <Button
                        variant="ghost"
                        size="sm"
                        disabled={!hasNext}
                        asChild={hasNext}
                    >
                        {hasNext ? (
                            <Link href={`/novel/${novelSlug}/chapter/${currentChapter + 1}`}>
                                Next
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                        ) : (
                            <>
                                Next
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
