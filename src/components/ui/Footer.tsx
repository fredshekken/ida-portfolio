import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        background: "transparent",
        borderTop: "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} Frieda Marie Magaan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/fredshekken"
            target="_blank"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-brand)' }}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/ida-magaan" 
            target="_blank"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-brand)' }}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:your@email.com"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-brand)' }}
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}