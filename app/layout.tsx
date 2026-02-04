import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/effects/PageTransition";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://spacecredits.com'),
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
    locale: "en_US",
    siteName: "Space Credits",
    images: [
      {
        url: '/og-image.png',
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
    images: ['/og-image.png']
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Space Credits",
              "description": "The first cryptocurrency designed for interplanetary commerce",
              "url": "https://spacecredits.com",
              "logo": "https://spacecredits.com/logo.png",
              "sameAs": [
                "https://twitter.com/spacecredits",
                "https://t.me/spacecredits"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'rgba(30, 30, 46, 0.95)',
                color: '#fff',
                border: '1px solid rgba(255, 71, 87, 0.3)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              },
              success: {
                iconTheme: {
                  primary: '#2ed573',
                  secondary: '#fff'
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
