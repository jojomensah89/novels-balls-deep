import Link from "next/link";
import {
    Swords,
    Sparkles,
    Heart,
    Skull,
    Rocket,
    Crown,
    Ghost,
    Gamepad2,
} from "lucide-react";

const genreIcons: Record<string, any> = {
    "Action": { icon: Swords, gradient: "from-red-500/20 to-orange-500/20", borderColor: "hover:border-red-500/50" },
    "Fantasy": { icon: Sparkles, gradient: "from-violet-500/20 to-purple-500/20", borderColor: "hover:border-violet-500/50" },
    "Romance": { icon: Heart, gradient: "from-pink-500/20 to-rose-500/20", borderColor: "hover:border-pink-500/50" },
    "Horror": { icon: Skull, gradient: "from-slate-500/20 to-gray-500/20", borderColor: "hover:border-slate-500/50" },
    "Sci-Fi": { icon: Rocket, gradient: "from-cyan-500/20 to-blue-500/20", borderColor: "hover:border-cyan-500/50" },
    "Royal": { icon: Crown, gradient: "from-amber-500/20 to-yellow-500/20", borderColor: "hover:border-amber-500/50" },
    "Supernatural": { icon: Ghost, gradient: "from-emerald-500/20 to-teal-500/20", borderColor: "hover:border-emerald-500/50" },
    "LitRPG": { icon: Gamepad2, gradient: "from-indigo-500/20 to-blue-500/20", borderColor: "hover:border-indigo-500/50" },
};

interface GenreGridProps {
    genres: any[];
}

export function GenreGrid({ genres = [] }: GenreGridProps) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                        Browse by Genre
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                        Find your next read by exploring genres
                    </p>
                </div>

                {/* Genre Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {genres.map((genre) => {
                        const style = genreIcons[genre.name] || { icon: Sparkles, gradient: "from-gray-500/20 to-gray-500/20", borderColor: "hover:border-gray-500/50" };
                        const Icon = style.icon;
                        return (
                            <Link
                                key={genre.name}
                                href={`/genre/${genre.name.toLowerCase()}`}
                                className="group"
                            >
                                <div
                                    className={`relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 ${style.borderColor} hover:shadow-lg`}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                                    />

                                    <div className="relative flex flex-col items-center text-center">
                                        <Icon className="mb-3 h-8 w-8 text-muted-foreground transition-colors group-hover:text-foreground" />
                                        <h3 className="font-semibold text-foreground">
                                            {genre.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {genre.count} novels
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/genres"
                        className="text-sm font-medium text-primary hover:underline"
                    >
                        View All Genres
                    </Link>
                </div>
            </div>
        </section>
    );
}
