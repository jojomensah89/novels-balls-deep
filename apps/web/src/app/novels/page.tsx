"use client";

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
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsStringEnum, useQueryStates } from "nuqs";
import { Loader2 } from "lucide-react";

const statusParser = parseAsStringEnum<"ongoing" | "completed" | "hiatus">([
    "ongoing",
    "completed",
    "hiatus",
]);

const sortByParser = parseAsStringEnum<
    "popularity" | "rating" | "updatedAt" | "title"
>(["popularity", "rating", "updatedAt", "title"]);

export default function NovelsPage() {
    const [params, setParams] = useQueryStates(
        {
            page: parseAsInteger.withDefault(1),
            limit: parseAsInteger.withDefault(24),
            status: statusParser,
            sortBy: sortByParser.withDefault("updatedAt"),
            order: parseAsStringEnum(["asc", "desc"]).withDefault("desc"),
        },
        {
            history: "push",
        }
    );

    // Fetch novels with React Query
    const { data, isLoading } = useQuery({
        queryKey: ["novels", params],
        queryFn: () => {
            const queryParams: any = {
                page: params.page.toString(),
                limit: params.limit.toString(),
                sortBy: params.sortBy,
                order: params.order,
            };

            if (params.status) {
                queryParams.status = params.status;
            }

            return novels.list(queryParams);
        },
    });

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Browse Novels</h1>
                    <p className="text-muted-foreground">
                        Discover {data?.data.length || 0} novels and counting
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {/* Status Filter */}
                    <div className="flex gap-2">
                        <Badge
                            variant={!params.status ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setParams({ status: null })}
                        >
                            All
                        </Badge>
                        <Badge
                            variant={params.status === "ongoing" ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setParams({ status: "ongoing", page: 1 })}
                        >
                            Ongoing
                        </Badge>
                        <Badge
                            variant={params.status === "completed" ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setParams({ status: "completed", page: 1 })}
                        >
                            Completed
                        </Badge>
                        <Badge
                            variant={params.status === "hiatus" ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setParams({ status: "hiatus", page: 1 })}
                        >
                            Hiatus
                        </Badge>
                    </div>

                    {/* Sort */}
                    <Select
                        value={params.sortBy}
                        onValueChange={(value) =>
                            setParams({
                                sortBy: value as "popularity" | "rating" | "updatedAt" | "title",
                                page: 1,
                            })
                        }
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="updatedAt">Latest Updated</SelectItem>
                            <SelectItem value="popularity">Most Popular</SelectItem>
                            <SelectItem value="rating">Highest Rated</SelectItem>
                            <SelectItem value="title">Title (A-Z)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Novels Grid */}
                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : (
                    <NovelGrid novels={data?.data || []} />
                )}

                {/* Pagination */}
                {data && data.pagination.page < data.pagination.totalPages && (
                    <div className="mt-12 flex justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setParams({ page: params.page + 1 })}
                        >
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
