"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeContext } from "@/context/ThemeContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollDepth(scrollPosition / maxScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        {/* Full document height gradient — stretches with content */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            background: isDark
              ? 'linear-gradient(180deg, #0D2A4A 0%, #0A1F3D 15%, #071828 30%, #050F20 50%, #040C1A 70%, #030810 85%, #020508 100%)'
              : 'linear-gradient(180deg, #B8E4F9 0%, #7ECECA 15%, #2A9BAD 30%, #1A6B8A 50%, #0D3B6E 70%, #071F3D 85%, #020A1A 100%)',
          }}
        />
        <Navbar isDark={isDark} setIsDark={setIsDark} scrollDepth={scrollDepth} />
        {children}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}