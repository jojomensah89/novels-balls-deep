import { SearchBar } from "@/components/common/search-bar";
import { NovelGrid } from "@/components/novel/novel-grid";
import { Button } from "@/components/ui/button";
import { novels } from "@/lib/api";
import { generateHomeMetadata } from "@/lib/seo/metadata";
import {
  generateWebSiteSchema,
  renderStructuredData,
} from "@/lib/seo/structured-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = generateHomeMetadata();

export default async function HomePage() {
  // Fetch popular novels
  const { data: popularNovels } = await novels.list({
    sortBy: "popularity",
    limit: "12",
  });

  // Fetch latest updates
  const { data: latestNovels } = await novels.list({
    sortBy: "updated",
    limit: "12",
  });

  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      {renderStructuredData(websiteSchema)}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Discover Your Next
              <br />
              Great Read
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore thousands of translated novels with community-rated
              translations
            </p>
            <SearchBar />
          </div>
        </section>

        {/* Popular Novels */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular Novels</h2>
              <Button variant="ghost" asChild>
                <Link href="/novels?sortBy=popularity">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <NovelGrid novels={popularNovels} />
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest Updates</h2>
              <Button variant="ghost" asChild>
                <Link href="/novels?sortBy=updated">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <NovelGrid novels={latestNovels} />
          </div>
        </section>

        {/* Browse by Genre */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Action",
                "Romance",
                "Fantasy",
                "Adventure",
                "Mystery",
                "Sci-Fi",
                "Horror",
                "Comedy",
              ].map((genre) => (
                <Button key={genre} variant="outline" asChild>
                  <Link href={`/novels/genre/${genre.toLowerCase()}`}>
                    {genre}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

