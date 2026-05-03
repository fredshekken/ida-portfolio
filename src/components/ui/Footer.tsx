'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="py-8 relative"
      style={{
        background: "transparent",
        borderTop: "none",
      }}
    >
      {/* Floating bubbles with white glow - rising from footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-visible" style={{ height: "400px" }}>
        {/* Footer glow emission */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`footer-glow-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: "50%",
              bottom: "-50px",
              transform: "translateX(-50%)",
              background: `radial-gradient(circle, rgba(255, 255, 255, ${0.2 - i * 0.03}) 0%, transparent 70%)`,
            }}
            animate={{ y: [-50, -350], opacity: [0.5, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
          />
        ))}

        {/* Rising bubbles with white glow from footer */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`footer-bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + (i % 4) * 2}px`,
              height: `${3 + (i % 4) * 2}px`,
              left: `${15 + (i * 8) % 70}%`,
              bottom: "-10px",
              background: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.6)",
            }}
            animate={{ y: [-10, -300], opacity: [0, 0.95, 0] }}
            transition={{ duration: 3.5 + (i % 5) * 0.5, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} Frieda Marie Magaan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}