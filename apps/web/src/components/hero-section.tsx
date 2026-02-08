"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, BookOpen, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ROTATION_INTERVAL = 10000;

interface HeroSectionProps {
    featuredNovels: any[];
}

export function HeroSection({ featuredNovels = [] }: HeroSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 300);
    }, [isTransitioning]);

    useEffect(() => {
        const interval = setInterval(() => {
            goToSlide((currentIndex + 1) % featuredNovels.length);
        }, ROTATION_INTERVAL);

        return () => clearInterval(interval);
    }, [currentIndex, goToSlide]);

    const currentNovel = featuredNovels[currentIndex];

    if (!currentNovel) {
        return null;
    }

    return (
        <section className="relative min-h-[auto] overflow-hidden pt-16 md:min-h-[85vh]">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

            <div className="relative mx-auto flex min-h-[auto] max-w-7xl flex-col items-center gap-8 px-4 py-8 md:min-h-[calc(85vh-4rem)] md:flex-row md:gap-12 md:py-20">
                {/* Novel Cover */}
                <div className="relative flex-shrink-0">
                    <div
                        className={cn(
                            "relative h-[300px] w-[200px] overflow-hidden rounded-lg shadow-2xl shadow-primary/20 transition-all duration-500 sm:h-[350px] sm:w-[240px] md:h-[480px] md:w-[320px]",
                            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        )}
                    >
                        <div className={cn("absolute inset-0 bg-gradient-to-br transition-all duration-500", currentNovel.gradient)} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center md:p-6">
                            <BookOpen className="mb-3 h-12 w-12 text-primary-foreground/80 md:mb-4 md:h-16 md:w-16" />
                            <h3 className="text-base font-bold text-primary-foreground md:text-xl">
                                {currentNovel.title}
                            </h3>
                            <p className="mt-1 text-xs text-primary-foreground/70 md:mt-2 md:text-sm">
                                by {currentNovel.author}
                            </p>
                        </div>
                        <div className="absolute left-3 top-3 md:left-4 md:top-4">
                            <Badge className="bg-primary text-xs text-primary-foreground md:text-sm">Featured</Badge>
                        </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/20 blur-2xl transition-all duration-500" />
                </div>

                {/* Novel Info */}
                <div
                    className={cn(
                        "flex flex-1 flex-col items-center text-center md:items-start md:text-left transition-all duration-500",
                        isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    )}
                >
                    {/* Genres */}
                    <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
                        {currentNovel.genres?.map((genre: string) => (
                            <Badge
                                key={genre}
                                variant="outline"
                                className="border-border/50 text-muted-foreground"
                            >
                                {genre}
                            </Badge>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="mb-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:mb-3 md:text-5xl lg:text-6xl">
                        {currentNovel.title}
                    </h1>

                    {/* Author */}
                    <p className="mb-4 text-base text-muted-foreground md:mb-6 md:text-lg">
                        by <span className="text-primary">{currentNovel.author}</span>
                    </p>

                    {/* Stats */}
                    <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm md:mb-6 md:justify-start md:gap-6 md:text-base">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary md:h-5 md:w-5" />
                            <span className="font-semibold text-foreground">{currentNovel.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Eye className="h-4 w-4 md:h-5 md:w-5" />
                            <span>{currentNovel.views}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
                            <span>{currentNovel.chapters} ch</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-chart-3 md:h-5 md:w-5" />
                            <span className="text-chart-3">{currentNovel.status}</span>
                        </div>
                    </div>

                    {/* Synopsis - Hidden on very small screens */}
                    <p className="mb-6 line-clamp-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:line-clamp-none md:mb-8 md:text-lg">
                        {currentNovel.synopsis}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap justify-center gap-3 md:justify-start md:gap-4">
                        <Button
                            size="default"
                            className="bg-primary px-6 text-sm text-primary-foreground hover:bg-primary/90 md:px-8 md:text-base"
                        >
                            Start Reading
                        </Button>
                        <Button
                            size="default"
                            variant="outline"
                            className="border-border/50 bg-transparent text-sm text-foreground hover:bg-secondary md:text-base"
                        >
                            Add to Library
                        </Button>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="mt-6 flex items-center justify-center  gap-2 md:mt-8 md:justify-start md:gap-3">
                        {featuredNovels.map((novel, index) => (
                            <button
                                key={novel.id}
                                onClick={() => goToSlide(index)}
                                className={cn(
                                    "h-4  rounded-full transition-all duration-300 cursor-pointer",
                                    index === currentIndex
                                        ? "w-12 bg-primary"
                                        : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                )}
                                aria-label={`Go to slide ${index + 1}: ${novel.title}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
