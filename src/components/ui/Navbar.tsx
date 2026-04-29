"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-surface/70">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-muted hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-6 rounded-full bg-surface-light border border-white/10 flex items-center px-1 transition-colors duration-200"
        >
          <span
            className={cn(
              "w-4 h-4 rounded-full transition-all duration-300 text-xs flex items-center justify-center",
              darkMode ? "translate-x-6 bg-accent" : "translate-x-0 bg-muted"
            )}
          />
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-px bg-current mb-1"></span>
          <span className="block w-5 h-px bg-current mb-1"></span>
          <span className="block w-5 h-px bg-current"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-mid border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wide text-muted hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}