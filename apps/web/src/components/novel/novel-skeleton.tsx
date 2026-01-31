import { Skeleton } from "@/components/ui/skeleton";

export function NovelCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-lg border">
            {/* Cover Image Skeleton */}
            <Skeleton className="aspect-[2/3] w-full" />

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
            </div>
        </div>
    );
}

export function NovelGridSkeleton({ count = 12 }: { count?: number }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: count }).map((_, i) => (
                <NovelCardSkeleton key={i} />
            ))}
        </div>
    );
}
