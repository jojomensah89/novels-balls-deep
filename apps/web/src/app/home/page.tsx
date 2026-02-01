import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { RecentUpdates } from "@/components/recent-updates";
import { NewReleases } from "@/components/new-releases";
import { PopularNovels } from "@/components/popular-novels";
import { GenreGrid } from "@/components/genre-grid";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
                <RecentUpdates />
                <NewReleases />
                <PopularNovels />
                <GenreGrid />
            </main>
            <Footer />
        </div>
    );
}
