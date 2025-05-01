"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b bg-background text-foreground sticky top-0 z-50">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <nav className="space-x-6 hidden md:block">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/projects" className="hover:text-primary">Projects</Link>
        <Link href="/about" className="hover:text-primary">About</Link>
        <Link href="/contact" className="hover:text-primary">Contact</Link>
      </nav>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </header>
  );
}
