import { NovelCard } from "./novel-card";

interface NovelGridProps {
    novels: Array<{
        id: string;
        slug: string;
        title: string;
        coverImage?: string | null;
        author: string;
        status: "ongoing" | "completed" | "hiatus";
        views?: number;
    }>;
    showProgress?: boolean;
    className?: string;
}

export function NovelGrid({ novels, showProgress, className }: NovelGridProps) {
    return (
        <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${className || ""}`}
        >
            {novels.map((novel) => (
                <NovelCard key={novel.id} novel={novel} showProgress={showProgress} />
            ))}
        </div>
    );
}
