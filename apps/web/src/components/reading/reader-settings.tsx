"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export function ReaderSettings() {
    const { theme, setTheme } = useTheme();
    const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");

    const fontSizes = {
        sm: "text-base",
        base: "text-lg",
        lg: "text-xl",
        xl: "text-2xl",
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-12 w-12 rounded-full shadow-lg">
                        <Settings className="h-5 w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Reader Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {/* Font Size */}
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                        Font Size
                    </DropdownMenuLabel>
                    <div className="flex gap-1 p-2">
                        <Button
                            size="sm"
                            variant={fontSize === "sm" ? "default" : "outline"}
                            onClick={() => setFontSize("sm")}
                            className="flex-1"
                        >
                            A
                        </Button>
                        <Button
                            size="sm"
                            variant={fontSize === "base" ? "default" : "outline"}
                            onClick={() => setFontSize("base")}
                            className="flex-1 text-base"
                        >
                            A
                        </Button>
                        <Button
                            size="sm"
                            variant={fontSize === "lg" ? "default" : "outline"}
                            onClick={() => setFontSize("lg")}
                            className="flex-1 text-lg"
                        >
                            A
                        </Button>
                        <Button
                            size="sm"
                            variant={fontSize === "xl" ? "default" : "outline"}
                            onClick={() => setFontSize("xl")}
                            className="flex-1 text-xl"
                        >
                            A
                        </Button>
                    </div>

                    <DropdownMenuSeparator />

                    {/* Theme */}
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                        Theme
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
