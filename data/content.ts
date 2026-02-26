import { ContentData } from '@/types';

export const content: ContentData = {
  hero: {
    title: "Space Credits",
    tagline: "Your gains are not affected by gravity",
    description: "The cryptocurrency that's going to Mars with Elon. Built on Solana for lightning-fast interplanetary transactions.",
    ctaButtons: {
      primary: { text: "Buy Space Credits", href: "#", variant: 'primary' },
      secondary: { text: "Read Whitepaper", href: "/whitepaper", variant: 'secondary' }
    }
  },
  
  stats: [
    { value: "420,691,337", label: "Max Supply", icon: "[>]" },
    { value: "100%", label: "Community Owned", icon: "[*]" },
    { value: "Solana", label: "Blockchain", icon: "[~]" },
    { value: "Mars", label: "Destination", icon: "[+]" }
  ],
  
  about: {
    title: "What is Space Credits?",
    description: "Space Credits (SPACE) is the first decentralized memecoin designed for interplanetary commerce. Built on Solana for lightning-fast transactions, Space Credits is the official currency of the future Mars economy. With a fixed supply of 420,691,337 tokens (a perfect combination of meme numbers), your gains truly aren't affected by gravity."
  },
  
  mission: {
    title: "Our Mission",
    description: "To create the world's first space-ready cryptocurrency that will be used for commerce on Mars and beyond. We're not just going to the moon -- we're going all the way to Mars.",
    features: [
      {
        title: "Zero Gravity Trading",
        description: "Trade freely across planets without the weight of traditional finance. Our decentralized system works anywhere in the solar system with internet connectivity.",
        icon: "[VOID]"
      },
      {
        title: "Mars-Ready Infrastructure",
        description: "Built for the future of space commerce. When the first Mars colony launches, Space Credits will be ready to power its economy.",
        icon: "[MARS]"
      },
      {
        title: "Lightning Fast Transactions",
        description: "Powered by Solana's high-performance blockchain. Transactions settle in seconds, not minutes.",
        icon: "[FAST]"
      },
      {
        title: "Meme-Optimized Supply",
        description: "420,691,337 tokens. The supply is no accident -- it's 420 + 69 + 1337, the holy trinity of internet culture.",
        icon: "[LEET]"
      }
    ]
  },
  
  whitepaper: {
    title: "Space Credits Whitepaper",
    chapters: [
      {
        number: 1,
        title: "Introduction: Why Space?",
        description: "Explore the vision behind Space Credits and why interplanetary commerce needs a dedicated cryptocurrency. Learn about our mission to become the currency of Mars."
      },
      {
        number: 2,
        title: "Tokenomics: The Perfect Supply",
        description: "Discover why we chose 420,691,337 as our max supply. Understand the economics of a fixed-supply memecoin and how scarcity drives value."
      },
      {
        number: 3,
        title: "Technology: Solana Blockchain",
        description: "Deep dive into why Solana is the perfect blockchain for interplanetary transactions. Fast, cheap, and scalable."
      },
      {
        number: 4,
        title: "Roadmap: From Earth to Mars",
        description: "Our phased approach to becoming the first cryptocurrency on Mars. From launch to Mars colony integration."
      },
      {
        number: 5,
        title: "Community: The Space Cadets",
        description: "Join our community of space enthusiasts, crypto believers, and meme connoisseurs. Together, we're going to Mars."
      }
    ]
  },
  
  socialLinks: [
    { name: "Twitter", url: "https://twitter.com/spacecredits", icon: "X" },
    { name: "Telegram", url: "https://t.me/spacecredits", icon: "TG" },
    { name: "Discord", url: "https://discord.gg/spacecredits", icon: "DC" },
    { name: "Dextools", url: "#", icon: "DX" }
  ],
  
  copyright: "// 2026 Space Credits - To Mars and Beyond"
};
