import Link from "next/link";

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className="py-8"
      style={{
        background: "transparent",
        borderTop: "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-sm"
          style={{ color: isDark ? "#7ECECA" : "rgba(255,255,255,0.6)" }}
        >
          © {new Date().getFullYear()} Frieda Marie Magaan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/fredshekken"
            target="_blank"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: isDark ? "#00C9A7" : "rgba(255,255,255,0.8)" }}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/ida-magaan" 
            target="_blank"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: isDark ? "#00C9A7" : "rgba(255,255,255,0.8)" }}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:your@email.com"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: isDark ? "#00C9A7" : "rgba(255,255,255,0.8)" }}
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}