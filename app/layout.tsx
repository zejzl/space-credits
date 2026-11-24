import type { Metadata } from "next";
import { Space_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/effects/PageTransition";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { SITE_URL, SOCIAL_URLS } from "@/utils/site";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: './' },
  title: {
    default: "Space Credits - Your gains are not affected by gravity",
    template: "%s | Space Credits"
  },
  description: "The first cryptocurrency designed for interplanetary commerce. Built on Solana for Mars and beyond. Max supply: 420,691,337 tokens.",
  keywords: ["cryptocurrency", "memecoin", "space", "mars", "solana", "blockchain", "DeFi", "space economy"],
  authors: [{ name: "Space Credits Team" }],
  creator: "Space Credits",
  openGraph: {
    title: "Space Credits - To Mars and Beyond",
    description: "The cryptocurrency that's not affected by gravity. Join us on the journey to Mars!",
    type: "website",
    url: "./",
    locale: "en_US",
    siteName: "Space Credits",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Space Credits - Cryptocurrency for Mars and Beyond'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Credits - To Mars and Beyond",
    description: "The cryptocurrency that's not affected by gravity. Join us on the journey to Mars!",
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00f0ff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Space Credits",
              "description": "The first cryptocurrency designed for interplanetary commerce",
              "url": SITE_URL,
              "logo": `${SITE_URL}/logo.jpg`,
              "sameAs": SOCIAL_URLS
            })
          }}
        />
      </head>
      <body className={`${outfit.className}`}>
        <ThemeProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'rgba(10, 14, 26, 0.95)',
                color: '#00f0ff',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '0',
                backdropFilter: 'blur(10px)',
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '0.875rem',
              },
              success: {
                iconTheme: {
                  primary: '#00f0ff',
                  secondary: '#0a0e1a'
                }
              }
            }}
          />
          <Navigation />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
