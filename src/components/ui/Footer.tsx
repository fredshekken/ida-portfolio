export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        background: "transparent",
        borderTop: "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} Frieda Marie Magaan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}