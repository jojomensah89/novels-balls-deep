"use client";

import Link from "next/link";
import { Star, BookOpen, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const popularNovels = [
    {
        id: 1,
        title: "Solo Leveling",
        author: "Chugong",
        rating: 4.9,
        views: "12.5M",
        chapters: 270,
        genres: ["Action", "Fantasy"],
        cover: "from-violet-600 to-purple-800",
    },
    {
        id: 2,
        title: "The Beginning After The End",
        author: "TurtleMe",
        rating: 4.8,
        views: "8.2M",
        chapters: 421,
        genres: ["Fantasy", "Reincarnation"],
        cover: "from-blue-600 to-indigo-800",
    },
    {
        id: 3,
        title: "Omniscient Reader's Viewpoint",
        author: "Singshong",
        rating: 4.9,
        views: "7.8M",
        chapters: 551,
        genres: ["Fantasy", "Apocalypse"],
        cover: "from-emerald-500 to-teal-700",
    },
    {
        id: 4,
        title: "Lord of the Mysteries",
        author: "Cuttlefish",
        rating: 4.9,
        views: "6.4M",
        chapters: 1394,
        genres: ["Mystery", "Fantasy"],
        cover: "from-amber-500 to-orange-700",
    },
    {
        id: 5,
        title: "Reverend Insanity",
        author: "Gu Zhen Ren",
        rating: 4.8,
        views: "5.9M",
        chapters: 2334,
        genres: ["Xianxia", "Dark"],
        cover: "from-rose-500 to-red-700",
    },
    {
        id: 6,
        title: "Martial Peak",
        author: "Momo",
        rating: 4.7,
        views: "5.1M",
        chapters: 6009,
        genres: ["Martial Arts", "Cultivation"],
        cover: "from-cyan-500 to-blue-700",
    },
];

export function PopularNovels() {
    const isMobile = useIsMobile();

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                        Trending This Week
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                        Most popular novels among our readers
                    </p>
                </div>

                {/* Novel Grid - Single column on mobile, multi-column on larger screens */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {(isMobile ? popularNovels.slice(0, 4) : popularNovels).map((novel, index) => (
                        <Link key={novel.id} href={`/novel/${novel.id}`} className="group">
                            <div className="relative flex gap-3 overflow-hidden rounded-lg border border-border/50 bg-card p-3 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:gap-4 sm:p-4">
                                {/* Ranking Number */}
                                <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-br-lg bg-primary text-sm font-bold text-primary-foreground sm:h-10 sm:w-10 sm:text-lg">
                                    {index + 1}
                                </div>

                                {/* Cover */}
                                <div className="relative h-28 w-20 flex-shrink-0 overflow-hidden rounded-md sm:h-32 sm:w-24">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${novel.cover}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <BookOpen className="h-6 w-6 text-foreground/30 sm:h-8 sm:w-8" />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5 sm:py-1">
                                    <div className="min-w-0">
                                        <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary sm:text-base">
                                            {novel.title}
                                        </h3>
                                        <p className="mt-0.5 truncate text-xs text-muted-foreground sm:text-sm">
                                            {novel.author}
                                        </p>
                                        <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2">
                                            {novel.genres.map((genre) => (
                                                <Badge
                                                    key={genre}
                                                    variant="outline"
                                                    className="border-border/50 px-1 py-0 text-[10px] text-muted-foreground sm:px-1.5 sm:text-xs"
                                                >
                                                    {genre}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground sm:mt-2 sm:gap-4 sm:text-xs">
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                            <Star className="h-3 w-3 fill-primary text-primary sm:h-3.5 sm:w-3.5" />
                                            <span className="font-medium text-foreground">
                                                {novel.rating}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                            <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                            <span>{novel.views}</span>
                                        </div>
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                            <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                            <span>{novel.chapters} ch</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="#"
                        className="text-sm font-medium text-primary hover:underline"
                    >
                        View Full Rankings
                    </Link>
                </div>
            </div>
        </section>
    );
}
