"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const recentUpdates = [
    {
        id: 1,
        title: "Martial Peak",
        chapter: "Chapter 2847",
        timeAgo: "12 min ago",
        cover: "from-blue-600 to-purple-600",
    },
    {
        id: 2,
        title: "Solo Leveling",
        chapter: "Chapter 179",
        timeAgo: "24 min ago",
        cover: "from-violet-600 to-pink-600",
    },
    {
        id: 3,
        title: "Tales of Demons and Gods",
        chapter: "Chapter 489",
        timeAgo: "1 hour ago",
        cover: "from-orange-500 to-red-600",
    },
    {
        id: 4,
        title: "Against the Gods",
        chapter: "Chapter 1892",
        timeAgo: "2 hours ago",
        cover: "from-emerald-500 to-teal-600",
    },
    {
        id: 5,
        title: "I Shall Seal the Heavens",
        chapter: "Chapter 1614",
        timeAgo: "3 hours ago",
        cover: "from-cyan-500 to-blue-600",
    },
    {
        id: 6,
        title: "Coiling Dragon",
        chapter: "Chapter 806",
        timeAgo: "4 hours ago",
        cover: "from-amber-500 to-orange-600",
    },
    {
        id: 7,
        title: "Desolate Era",
        chapter: "Chapter 1234",
        timeAgo: "5 hours ago",
        cover: "from-rose-500 to-pink-600",
    },
    {
        id: 8,
        title: "The Beginning After The End",
        chapter: "Chapter 421",
        timeAgo: "6 hours ago",
        cover: "from-indigo-500 to-violet-600",
    },
];

export function RecentUpdates() {
    const isMobile = useIsMobile();

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
                <Carousel opts={{ align: "start", loop: true }} className="w-full" plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}>
                    {/* Section Header */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                Recent Updates
                            </h2>
                            <p className="mt-1 text-muted-foreground">
                                Catch up on the latest chapter releases
                            </p>
                        </div>
                        <div className="hidden gap-2 md:flex">
                            <CarouselPrevious
                                variant="outline"
                                size="icon"
                                className="static translate-y-0 border-border/50 bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
                            />
                            <CarouselNext
                                variant="outline"
                                size="icon"
                                className="static translate-y-0 border-border/50 bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
                            />
                        </div>
                    </div>

                    {/* Cards - Grid on mobile, Carousel on desktop */}
                    {isMobile ? (
                        <div className="grid grid-cols-2 gap-4">
                            {recentUpdates.slice(0, 6).map((novel) => (
                                <Link
                                    key={novel.id}
                                    href={`/novel/${novel.id}`}
                                    className="group"
                                >
                                    <div className="overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                                        {/* Cover */}
                                        <div className="relative aspect-[3/4] overflow-hidden">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${novel.cover}`}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <BookOpen className="h-10 w-10 text-foreground/30" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                            <Badge className="absolute right-2 top-2 bg-primary/90 text-xs text-primary-foreground">
                                                {novel.timeAgo}
                                            </Badge>
                                        </div>
                                        {/* Info */}
                                        <div className="p-3">
                                            <h3 className="line-clamp-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                                                {novel.title}
                                            </h3>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {novel.chapter}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <CarouselContent className="-ml-4">
                            {recentUpdates.map((novel) => (
                                <CarouselItem
                                    key={novel.id}
                                    className="basis-auto pl-4"
                                >
                                    <Link
                                        href={`/novel/${novel.id}`}
                                        className="group block"
                                    >
                                        <div className="w-[200px] overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                                            {/* Cover */}
                                            <div className="relative aspect-[3/4] overflow-hidden">
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-br ${novel.cover}`}
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <BookOpen className="h-12 w-12 text-foreground/30" />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                                <Badge className="absolute right-2 top-2 bg-primary/90 text-xs text-primary-foreground">
                                                    {novel.timeAgo}
                                                </Badge>
                                            </div>
                                            {/* Info */}
                                            <div className="p-3">
                                                <h3 className="line-clamp-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                                                    {novel.title}
                                                </h3>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {novel.chapter}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    )}

                    {/* View All Link */}
                    <div className="mt-6 text-center">
                        <Link
                            href="#"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            View All Updates
                        </Link>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
