"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navLinks = [
        { href: "/browse", label: "Browse" },
        { href: "/rankings", label: "Rankings" },
        { href: "/genres", label: "Genres" },
        { href: "/latest", label: "Latest" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <BookOpen className="h-7 w-7 text-primary" />
                    <span className="text-xl font-bold text-foreground">NovelVerse</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Search & Actions */}
                <div className="hidden items-center gap-3 md:flex">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search novels..."
                            className="w-64 pl-9 bg-secondary border-border/50 focus:border-primary"
                        />
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <User className="h-5 w-5" />
                    </Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Search */}
            {isSearchOpen && (
                <div className="border-t border-border/50 bg-background/95 px-4 py-3 backdrop-blur-xl md:hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search novels..."
                            className="w-full pl-9 bg-secondary border-border/50"
                            autoFocus
                        />
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
                    <nav className="flex flex-col px-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
                            <Button variant="outline" className="w-full justify-start bg-transparent">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </Button>
                            <Button className="w-full bg-primary text-primary-foreground">
                                Sign In
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
