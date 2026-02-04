import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Credits - Your gains are not affected by gravity",
  description: "The first cryptocurrency designed for interplanetary commerce. Built on Solana for Mars and beyond. Max supply: 420,691,337 tokens.",
  keywords: ["cryptocurrency", "memecoin", "space", "mars", "solana", "blockchain"],
  authors: [{ name: "Space Credits Team" }],
  openGraph: {
    title: "Space Credits - To Mars and Beyond",
    description: "The cryptocurrency that's not affected by gravity. Join us on the journey to Mars!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
