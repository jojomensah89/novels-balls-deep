import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { novels } from "@/lib/api";
import { BookOpen, Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NovelPageProps {
    params: {
        slug: string;
    };
}

export default async function NovelPage({ params }: NovelPageProps) {
    const { data: novel } = await novels.getBySlug(params.slug);

    if (!novel) {
        notFound();
    }

    const statusColors = {
        ongoing: "bg-green-500/10 text-green-500 border-green-500/20",
        completed: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        hiatus: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-64 bg-gradient-to-b from-muted/50 to-background">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
                <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    {/* Cover Image */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative aspect-[2/3] w-full max-w-[300px] rounded-lg overflow-hidden shadow-2xl border">
                            {novel.coverImage ? (
                                <Image
                                    src={novel.coverImage}
                                    alt={novel.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                                    <span className="text-6xl font-bold text-muted-foreground/20">
                                        {novel.title.charAt(0)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="w-full max-w-[300px] mt-4 space-y-2">
                            <Button className="w-full" size="lg">
                                <BookOpen className="mr-2 h-4 w-4" />
                                Start Reading
                            </Button>
                            <Button variant="outline" className="w-full">
                                Add to Library
                            </Button>
                        </div>
                    </div>

                    {/* Novel Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge className={statusColors[novel.status]}>
                                    {novel.status}
                                </Badge>
                            </div>
                            <h1 className="text-4xl font-bold mb-2">{novel.title}</h1>
                            <p className="text-lg text-muted-foreground">by {novel.author}</p>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                                <span className="font-semibold">4.5</span>
                                <span className="text-muted-foreground text-sm">(1.2k)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye className="h-5 w-5 text-muted-foreground" />
                                <span className="font-semibold">
                                    {novel.views?.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-muted-foreground" />
                                <span className="font-semibold">245 Chapters</span>
                            </div>
                        </div>

                        <Separator />

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {novel.description ||
                                    "No description available for this novel yet."}
                            </p>
                        </div>

                        {/* Tabs */}
                        <Tabs defaultValue="chapters" className="w-full">
                            <TabsList>
                                <TabsTrigger value="chapters">Chapters</TabsTrigger>
                                <TabsTrigger value="translations">Translations</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            </TabsList>

                            <TabsContent value="chapters" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center py-8">
                                            Chapter list will be displayed here
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="translations" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center py-8">
                                            Available translations will be displayed here
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center py-8">
                                            User reviews will be displayed here
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
