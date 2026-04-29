import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "Ida Magaan | Frontend & Full Stack Developer",
  description:
    "Portfolio of Frieda Marie Magaan — CS student, UI/UX designer, and full stack developer based in Manila.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}