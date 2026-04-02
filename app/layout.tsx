// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "COTECH SERVICES - IT ",
  description: "Solutions IT & Systèmes Intelligents",
  icons: {
    icon: "/images/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-gray-50 text-gray-900"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
