"use client";

import { motion } from "framer-motion";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isDark } = useTheme();
  const GithubIcon = Github;
  const LinkedinIcon = Linkedin;

  const socials = [
    { href: "https://github.com/fredshekken", icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ida-magaan", icon: LinkedinIcon, label: "LinkedIn" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(to bottom, #050D1A, #0A1F3D, #1C3A5E)"
          : "linear-gradient(to bottom, #B8E4F9, #7ECECA, #1A8FA0)",
      }}
    >

      {/* Sun illustration */}
      <div className="absolute top-16 left-24 w-40 h-40 rounded-full bg-gradient-radial from-[#ffd966] via-[#f6a623] to-transparent opacity-90 blur-sm" />
      <div className="absolute top-16 left-24 w-32 h-32 rounded-full bg-gradient-to-br from-[#ffe066] to-[#f6a623]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl font-bold text-[#1a2a5e] leading-none tracking-tight mb-4"
        >
          Frieda Magaan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#1a2a5e] text-xl md:text-2xl font-medium mb-3"
        >
          Computer Science Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[#1a2a5e]/80 text-base md:text-lg mb-10"
        >
          UI/UX Designer & Web Developer exploring the depths of web development
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-4 mb-10"
        >
          <motion.a
            href="#projects"
            whileHover={{
              boxShadow: '0 0 25px rgba(255,255,255,0.5)',
              y: -2 
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '12px 32px',
              borderRadius: '999px',
              background: 'rgba(13, 59, 110, 0.3)',
              border: '1.6px solid #1A8FA0',
              color: '#0D3B6E',
              fontWeight: 500,
              fontSize: '14px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ 
              boxShadow: '0 0 25px rgba(255,255,255,0.5)',
              y: -2 
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '12px 32px',
              borderRadius: '999px',
              background: '#1A8FA0',
              color: '#FFFFFF',
              fontWeight: 500,
              fontSize: '14px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              initial={false}
              whileHover={{ 
                backgroundColor: '#0D3B6E',
                color: '#ffffff',
                boxShadow: '0 0 20px rgba(255,255,255,0.4)',
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(13, 59, 110, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0D3B6E',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              <s.icon style={{ width: '20px', height: '20px' }} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}