import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { RecentUpdates } from "@/components/recent-updates";
import { NewReleases } from "@/components/new-releases";
import { PopularNovels } from "@/components/popular-novels";
import { GenreGrid } from "@/components/genre-grid";
import { Footer } from "@/components/footer";
import { generateHomeMetadata } from "@/lib/seo/metadata";
import { home } from "@/lib/api";

export const metadata = generateHomeMetadata();

export default async function Home() {
  const [featured, updates, releases, genres, popular] = await Promise.all([
    home.getFeatured().then((res) => res.data).catch(() => []),
    home.getRecentUpdates().then((res) => res.data).catch(() => []),
    home.getNewReleases().then((res) => res.data).catch(() => []),
    home.getGenres().then((res) => res.data).catch(() => []),
    home.getPopular().then((res) => res.data).catch(() => []),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection featuredNovels={featured} />
        <RecentUpdates updates={updates} />
        <NewReleases releases={releases} />
        <PopularNovels novels={popular} />
        <GenreGrid genres={genres} />
      </main>
      <Footer />
    </div>
  );
}
