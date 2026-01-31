import { NovelGrid } from "@/components/novel/novel-grid";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { novels } from "@/lib/api";

interface NovelsPageProps {
    searchParams: {
        page?: string;
        limit?: string;
        status?: "ongoing" | "completed" | "hiatus";
        sortBy?: "popularity" | "rating" | "updated" | "title";
        order?: "asc" | "desc";
    };
}

export default async function NovelsPage({ searchParams }: NovelsPageProps) {
    const page = searchParams.page || "1";
    const limit = searchParams.limit || "24";
    const status = searchParams.status;
    const sortBy = searchParams.sortBy || "updated";
    const order = searchParams.order || "desc";

    const { data: novelsList, pagination } = await novels.list({
        page,
        limit,
        status,
        sortBy,
        order,
    });

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Browse Novels</h1>
                    <p className="text-muted-foreground">
                        Discover {novelsList.length} novels and counting
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {/* Status Filter */}
                    <div className="flex gap-2">
                        <Badge
                            variant={!status ? "default" : "outline"}
                            className="cursor-pointer"
                        >
                            All
                        </Badge>
                        <Badge
                            variant={status === "ongoing" ? "default" : "outline"}
                            className="cursor-pointer"
                        >
                            Ongoing
                        </Badge>
                        <Badge
                            variant={status === "completed" ? "default" : "outline"}
                            className="cursor-pointer"
                        >
                            Completed
                        </Badge>
                        <Badge
                            variant={status === "hiatus" ? "default" : "outline"}
                            className="cursor-pointer"
                        >
                            Hiatus
                        </Badge>
                    </div>

                    {/* Sort */}
                    <Select defaultValue={sortBy}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="updated">Latest Updated</SelectItem>
                            <SelectItem value="popularity">Most Popular</SelectItem>
                            <SelectItem value="rating">Highest Rated</SelectItem>
                            <SelectItem value="title">Title (A-Z)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Novels Grid */}
                <NovelGrid novels={novelsList} />

                {/* Pagination */}
                {pagination.hasMore && (
                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" size="lg">
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
