import Link from "next/link";
import { BookOpen } from "lucide-react";

const footerLinks = {
    browse: [
        { label: "All Novels", href: "/browse" },
        { label: "Rankings", href: "/rankings" },
        { label: "Latest Updates", href: "/latest" },
        { label: "Completed", href: "/completed" },
    ],
    genres: [
        { label: "Action", href: "/genre/action" },
        { label: "Fantasy", href: "/genre/fantasy" },
        { label: "Romance", href: "/genre/romance" },
        { label: "Sci-Fi", href: "/genre/sci-fi" },
    ],
    community: [
        { label: "Forums", href: "/forums" },
        { label: "Discord", href: "/discord" },
        { label: "Authors", href: "/authors" },
        { label: "Reviews", href: "/reviews" },
    ],
    support: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-card/50">
            <div className="mx-auto max-w-7xl px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <BookOpen className="h-7 w-7 text-primary" />
                            <span className="text-xl font-bold text-foreground">
                                NovelVerse
                            </span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Your portal to thousands of web novels. Discover, read, and track
                            your favorite stories.
                        </p>
                    </div>

                    {/* Browse */}
                    <div>
                        <h3 className="mb-4 font-semibold text-foreground">Browse</h3>
                        <ul className="space-y-2">
                            {footerLinks.browse.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Genres */}
                    <div>
                        <h3 className="mb-4 font-semibold text-foreground">Genres</h3>
                        <ul className="space-y-2">
                            {footerLinks.genres.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="mb-4 font-semibold text-foreground">Community</h3>
                        <ul className="space-y-2">
                            {footerLinks.community.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-4 font-semibold text-foreground">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} NovelVerse. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Terms
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
