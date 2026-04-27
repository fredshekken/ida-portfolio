import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Frieda Marie Magaan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/fredshekken"
            target="_blank"
            className="text-muted hover:text-accent text-sm transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/ida-magaan"
            target="_blank"
            className="text-muted hover:text-accent text-sm transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:friedamagaan23@gmail.com"
            className="text-muted hover:text-accent text-sm transition-colors duration-200"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}