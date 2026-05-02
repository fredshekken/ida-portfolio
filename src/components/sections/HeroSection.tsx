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
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "transparent",
      }}
    >

      {/* Sun illustration removed */}

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
              y: -3,
              scale: 1.02,
              boxShadow: '0 12px 28px rgba(13,59,110,0.16), 0 0 0 1px rgba(13,59,110,0.18)',
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '14px 34px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 100%)',
              border: '1.5px solid rgba(26,143,160,0.95)',
              color: '#0D3B6E',
              fontWeight: 500,
              fontSize: '14px',
              boxShadow: 'inset 0 1px 14px rgba(255,255,255,0.2), 0 8px 20px rgba(13,59,110,0.12)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.5),transparent_34%)]" />
            <span className="relative z-10">View Projects</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ 
              y: -3,
              scale: 1.02,
              boxShadow: '0 12px 28px rgba(13,59,110,0.18), 0 0 0 1px rgba(13,59,110,0.15)',
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '14px 34px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #1A8FA0 0%, #20A9B5 55%, #1A8FA0 100%)',
              border: '1.5px solid rgba(255,255,255,0.22)',
              color: '#FFFFFF',
              fontWeight: 500,
              fontSize: '14px',
              boxShadow: 'inset 0 1px 14px rgba(255,255,255,0.16), 0 8px 20px rgba(13,59,110,0.16)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.32),transparent_34%)]" />
            <span className="relative z-10">Get in Touch</span>
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