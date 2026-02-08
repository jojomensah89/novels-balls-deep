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

interface NewReleasesProps {
    releases: any[]; // Replace with specific type
}

export function NewReleases({ releases = [] }: NewReleasesProps) {
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
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                    New Releases
                                </h2>
                            </div>
                            <p className="mt-1 text-muted-foreground">
                                Discover freshly published novels
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
                            {releases.slice(0, 6).map((novel) => (
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
                                            <Badge className="absolute right-2 top-2 bg-accent/90 text-xs text-accent-foreground">
                                                {novel.releaseDate}
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className="absolute left-2 top-2 border-foreground/20 bg-background/60 text-xs text-foreground backdrop-blur-sm"
                                            >
                                                {novel.genre}
                                            </Badge>
                                        </div>
                                        {/* Info */}
                                        <div className="p-3">
                                            <h3 className="line-clamp-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                                                {novel.title}
                                            </h3>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                by {novel.author}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <CarouselContent className="-ml-4">
                            {releases.map((novel) => (
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
                                                <Badge className="absolute right-2 top-2 bg-accent/90 text-xs text-accent-foreground">
                                                    {novel.releaseDate}
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="absolute left-2 top-2 border-foreground/20 bg-background/60 text-xs text-foreground backdrop-blur-sm"
                                                >
                                                    {novel.genre}
                                                </Badge>
                                            </div>
                                            {/* Info */}
                                            <div className="p-3">
                                                <h3 className="line-clamp-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                                                    {novel.title}
                                                </h3>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    by {novel.author}
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
                            View All New Releases
                        </Link>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
