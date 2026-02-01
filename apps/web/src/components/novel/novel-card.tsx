import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NovelCardProps {
    novel: {
        id: string;
        slug: string;
        title: string;
        coverImage?: string | null;
        author: string;
        status: "ongoing" | "completed" | "hiatus";
        views?: number;
        // Add genre relation when available
    };
    showProgress?: boolean;
    progress?: number;
}

export function NovelCard({ novel, showProgress, progress }: NovelCardProps) {
    const statusColors = {
        ongoing: "bg-green-500/10 text-green-500 border-green-500/20",
        completed: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        hiatus: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    };

    return (
        <Link href={`/novel/${novel.slug}`}>
            <Card className="group overflow-hidden hover:shadow-lg transition-smooth cursor-pointer h-full">
                <CardHeader className="p-0">
                    <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                        {novel.coverImage ? (
                            <Image
                                src={novel.coverImage}
                                alt={novel.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-smooth"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                                <span className="text-4xl font-bold text-muted-foreground/20">
                                    {novel.title.charAt(0)}
                                </span>
                            </div>
                        )}
                        <div className="absolute top-2 right-2">
                            <Badge
                                variant="secondary"
                                className={`${statusColors[novel.status]} backdrop-blur-sm`}
                            >
                                {novel.status}
                            </Badge>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-4">
                    <h3 className="font-semibold text-base line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                        {novel.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                        {novel.author}
                    </p>

                    {showProgress && progress !== undefined && (
                        <div className="mt-3">
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                <span>Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}
                </CardContent>

                {novel.views !== undefined && (
                    <CardFooter className="p-4 pt-0">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground w-full">
                            <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                <span>4.5</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>{novel.views?.toLocaleString()} views</span>
                            </div>
                        </div>
                    </CardFooter>
                )}
            </Card>
        </Link>
    );
}
