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
        description: "Explore the vision behind Space Credits and why interplanetary commerce needs a dedicated cryptocurrency. Learn about our mission to become the currency of Mars.",
        content: [
          "Every major leap in human civilization has been accompanied by a revolution in money. Barter gave way to shells, shells to coins, coins to paper, paper to digital. Each transition unlocked new forms of trade, new scales of cooperation, and new frontiers of expansion.",
          "We stand at the threshold of the greatest frontier yet: space. SpaceX targets Mars by the late 2020s. NASA's Artemis program is building permanent lunar infrastructure. Blue Origin, Rocket Lab, and dozens of others are driving launch costs to historic lows. The question is no longer whether humans will live on other planets -- it's when.",
          "And when they do, they'll need money that works.",
          "Traditional currencies are tethered to nation-states, central banks, and terrestrial infrastructure. SWIFT transfers take days on Earth -- imagine waiting for a wire transfer across 225 million kilometers of void. Even existing cryptocurrencies weren't designed for the unique challenges of interplanetary commerce: signal latency of 4-24 minutes between Earth and Mars, isolated network partitions during solar conjunctions, and the need for trustless settlement when no single government has jurisdiction.",
          "Space Credits was designed from first principles for this reality. Built on Solana's high-performance blockchain, SPACE implements a novel delayed-finality consensus mechanism that accounts for interplanetary signal latency. Transactions settle locally in milliseconds and achieve cross-planetary finality through our Gravity Sync Protocol -- a store-and-forward system inspired by the Interplanetary Internet protocols developed by Vint Cerf and NASA's Jet Propulsion Laboratory.",
          "But let's be honest: we're also a memecoin. We chose a supply of 420,691,337 tokens because we believe the future should be fun. The internet was built by people who put jokes in their RFCs. Linux was announced with 'just a hobby, won't be big and professional.' The best technology has always been built by people who refuse to take themselves too seriously.",
          "Space Credits is simultaneously the most ambitious and the most absurd cryptocurrency ever created. That's the point."
        ]
      },
      {
        number: 2,
        title: "Tokenomics: The Perfect Supply",
        description: "Discover why we chose 420,691,337 as our max supply. Understand the economics of a fixed-supply memecoin and how scarcity drives value.",
        content: [
          "The total supply of Space Credits is fixed at exactly 420,691,337 tokens. This number is not arbitrary -- it is the concatenation of three sacred integers of internet culture: 420, 69, and 1337. Together they form a supply cap that is both mathematically elegant and culturally significant.",
          "TOKEN DISTRIBUTION:",
          ">> 69% - Community Pool (290,276,822 SPACE): Distributed through liquidity mining, airdrops, community initiatives, and interplanetary staking rewards. The community IS the mission. No insider allocations, no VC lockups, no shadow wallets.",
          ">> 15% - Liquidity Reserve (63,103,700 SPACE): Locked in decentralized liquidity pools on Raydium and Orca. Liquidity is the oxygen of any token -- we're not launching without a full tank.",
          ">> 10% - Development Fund (42,069,134 SPACE): Vested over 4 years with a 1-year cliff. Funds protocol development, security audits, and the engineering of the Gravity Sync Protocol for actual Mars deployment.",
          ">> 4% - Mars Reserve (16,827,653 SPACE): Permanently locked until the first human sets foot on Mars. This is not a metaphor. These tokens are timelocked to a multi-sig controlled by a DAO that can only execute once verified Mars landing data is submitted on-chain.",
          ">> 2% - Meme Treasury (8,413,827 SPACE): Dedicated to community meme contests, content creation rewards, and the annual Space Credits Meme Olympics. Because culture is infrastructure.",
          "DEFLATIONARY MECHANICS: Every transaction burns 0.042% of the transfer amount. At scale, this creates persistent deflationary pressure while keeping individual burn amounts negligible. Over 10 years of projected transaction volume, approximately 3-7% of total supply will be permanently removed from circulation.",
          "ANTI-SNIPER PROTECTIONS: Launch includes a 30-second buy cooldown per wallet, max wallet cap of 1% total supply for the first 24 hours, and a progressive tax that starts at 15% and decays to 0% over the first 48 hours. Bots get rekt. Humans get fair entry."
        ]
      },
      {
        number: 3,
        title: "Technology: Solana Blockchain",
        description: "Deep dive into why Solana is the perfect blockchain for interplanetary transactions. Fast, cheap, and scalable.",
        content: [
          "We evaluated every major blockchain before choosing Solana. The decision came down to three non-negotiable requirements for interplanetary currency: speed, cost, and throughput.",
          "WHY NOT ETHEREUM? Ethereum is the grandfather of smart contract platforms, and we respect it deeply. But 12-second block times, $2-50 gas fees, and 15-30 TPS are not viable for a currency that needs to process micro-transactions across a solar system. Even with L2 rollups, the settlement guarantees introduce complexity that compounds with interplanetary latency.",
          "WHY NOT BITCOIN? Bitcoin is digital gold. It's perfect for what it is. But it's not designed for commerce -- 10-minute blocks, 7 TPS, and no native smart contract support make it unsuitable for the programmable money required by space infrastructure.",
          "WHY SOLANA: Solana processes 65,000+ transactions per second with 400ms block times and average fees of $0.00025. It uses Proof of History (PoH) -- a cryptographic clock that timestamps transactions before consensus, allowing validators to process blocks without waiting for network-wide agreement. This is critical for space applications where network latency is measured in minutes, not milliseconds.",
          "THE GRAVITY SYNC PROTOCOL: Our custom layer built on top of Solana's architecture. When Earth-Mars communication is active (most of the orbital period), transactions propagate normally with ~8-24 minute confirmation delays. During solar conjunction (when the Sun blocks direct communication for ~2 weeks every 26 months), Mars-side nodes operate as an independent partition with local consensus. When communication resumes, the Gravity Sync Protocol reconciles both chains using a deterministic conflict resolution algorithm based on stake-weighted timestamps.",
          "PROGRAM ARCHITECTURE: Space Credits is implemented as a Solana Program (smart contract) using Anchor framework. Key modules include: SPL token with custom transfer hooks for burn mechanics, a staking program with variable APY based on orbital mechanics (higher rewards during conjunction periods to incentivize holding), and a governance program for the Mars Reserve DAO.",
          "All code is open-source and has been audited by [REDACTED -- audit in progress]. The program is upgradeable via multi-sig governance with a 72-hour timelock on all changes."
        ]
      },
      {
        number: 4,
        title: "Roadmap: From Earth to Mars",
        description: "Our phased approach to becoming the first cryptocurrency on Mars. From launch to Mars colony integration.",
        content: [
          "PHASE 1 -- IGNITION [Q1-Q2 2026]: Token launch on Solana mainnet. Liquidity deployment on Raydium and Orca. Initial community building through meme campaigns, Twitter Spaces, and strategic partnerships with space-adjacent projects. CEX listings on tier-2 exchanges. Target: 10,000 holders, $10M market cap.",
          "PHASE 2 -- LOW EARTH ORBIT [Q3-Q4 2026]: Governance DAO deployment. Staking program launch with orbital-themed reward cycles. Integration with major Solana DeFi protocols (Jupiter, Marinade, Tensor). NFT collection: 'Space Cadet Membership Cards' with holder benefits. Partnership announcements with space technology companies. Target: 50,000 holders, $100M market cap.",
          "PHASE 3 -- TRANS-MARS INJECTION [2027]: Gravity Sync Protocol testnet launch. Academic paper submission on interplanetary blockchain consensus. Tier-1 CEX listings. Physical Space Credits merchandise and branded content. Sponsorship of a CubeSat mission carrying the Space Credits genesis block hash. Target: 200,000 holders, $500M market cap.",
          "PHASE 4 -- MARS ORBIT [2028-2029]: Gravity Sync Protocol mainnet deployment. Partnership with Mars mission operators for communication relay integration. Development of Mars-side light client specifications. Space Credits accepted as payment by at least one space tourism operator. The Mars Reserve DAO begins accepting proposals for post-landing fund allocation. Target: 1M+ holders.",
          "PHASE 5 -- LANDING [2030+]: When humans land on Mars, the Mars Reserve unlocks. Space Credits becomes the first cryptocurrency to operate on two planets simultaneously. The Gravity Sync Protocol processes its first real interplanetary transaction. History is made. The memes are legendary.",
          "CONTINGENCY PLANNING: If Mars colonization timelines shift (as they historically do), Space Credits remains a fully functional Solana token with real utility in DeFi, governance, and community. The Mars narrative is our north star, but the token works regardless of whether Elon is on schedule."
        ]
      },
      {
        number: 5,
        title: "Community: The Space Cadets",
        description: "Join our community of space enthusiasts, crypto believers, and meme connoisseurs. Together, we're going to Mars.",
        content: [
          "The Space Cadets are not just a community -- they're a movement. Every great cryptocurrency started with a group of people who believed in something bigger than a price chart. Bitcoin had cypherpunks. Ethereum had developers. Dogecoin had the internet. Space Credits has the Space Cadets.",
          "WHO ARE THE SPACE CADETS? Engineers who dream about Mars. Degens who dream about 100x. Memers who dream about the perfect shitpost. Scientists who dream about interplanetary civilization. Dreamers who dream about dreaming. If you've ever looked up at the night sky and thought 'I want to send money there,' you're already one of us.",
          "GOVERNANCE: Space Credits operates as a DAO (Decentralized Autonomous Organization). Every SPACE holder can vote on proposals proportional to their staked balance. Governance covers: protocol upgrades, treasury allocations, partnership approvals, meme contest winners, and the eventual Mars Reserve deployment plan. One token, one vote. No delegation to insiders. No shadow governance. The community decides everything.",
          "RANKS AND RECOGNITION: Space Cadets earn ranks based on contribution, not just holdings. Recruit (hold SPACE) -> Cadet (participate in governance) -> Pilot (contribute code or content) -> Commander (lead community initiatives) -> Admiral (core contributor status). Ranks are recorded on-chain as non-transferable badges and unlock access to exclusive channels, early feature access, and increased governance weight.",
          "THE MEME TREASURY: 2% of total supply is dedicated to rewarding the best content creators in the community. Monthly meme contests with SPACE prizes. Annual Space Credits Meme Olympics with live voting. Community-curated meme archive preserved on Arweave for permanent storage. The best memes of our generation, immortalized on a permanent blockchain. As it should be.",
          "JOIN THE MISSION: Twitter/X (@spacecredits), Telegram (t.me/space_credits), Discord (discord.gg/qf7abu3H). We don't promise financial returns. We promise the most entertaining ride to Mars you'll ever experience. Buckle up, Cadet."
        ]
      }
    ]
  },
  
  socialLinks: [
    { name: "Twitter", url: "https://x.com/spacecredits", icon: "X" },
    { name: "Telegram", url: "https://t.me/space_credits", icon: "TG" },
    { name: "Discord", url: "https://discord.gg/qf7abu3H", icon: "DC" },
    { name: "Dextools", url: "#", icon: "DX" }
  ],
  
  copyright: "// 2026 Space Credits - To Mars and Beyond"
};
