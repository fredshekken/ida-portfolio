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
      <div className="relative overflow-x-hidden">
        <Navbar isDark={isDark} setIsDark={setIsDark} scrollDepth={scrollDepth} />
        {children}
        <Footer isDark={isDark} />
      </div>
    </ThemeContext.Provider>
  );
}