import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TenTech — Catálogo de Projetos",
  description: "Desenvolvimento de sites, SEO, Google Maps, sistemas de gestão e automações.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
