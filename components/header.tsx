"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link"

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures that the component has mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents rendering of the toggle before the component is mounted
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative h-14 max-w-screen-2xl flex items-center justify-between">
        <span className="font-bold italic sm:inline-block">CodeScanner</span>

        {/* Top-right container */}
        <div className="absolute top-3 right-0 flex items-center space-x-10 p-1">
          {/* Theme toggle button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-gray-700"
            aria-checked={theme === "dark"}
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={`${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4 text-gray-800" />
              ) : (
                <Sun className="h-4 w-4 text-yellow-500" />
              )}
            </span>
          </button>
          <Link
              href="/about"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              About Us
            </Link>
        </div>
      </div>
    </header>
  );
}