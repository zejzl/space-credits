export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'announcement' | 'partnership' | 'development' | 'community';
  image?: string;
  author: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Space Credits Launches on Solana with Record-Breaking First Day',
    excerpt: 'Over 1,000 holders joined the mission in the first 24 hours as Space Credits officially launches on the Solana blockchain.',
    content: `
We're thrilled to announce the successful launch of Space Credits on the Solana blockchain! In just 24 hours, we've welcomed over 1,000 holders to our community, proving that the vision of interplanetary currency resonates with crypto enthusiasts worldwide.

**Launch Highlights:**
- Over 1,000 holders in first 24 hours
- $500K+ in initial liquidity locked
- Zero technical issues - smooth liftoff! 🚀
- Trending on crypto Twitter and Telegram

**What's Next:**
Our immediate focus is on community building and exchange listings. We're in active discussions with several DEXs and CEXs for listings. CoinGecko and CoinMarketCap applications have been submitted.

Thank you to everyone who believed in the vision from day one. This is just the beginning of our journey to Mars!
    `,
    date: '2025-02-03',
    category: 'announcement',
    author: 'Space Credits Team'
  },
  {
    id: '2',
    title: 'Partnership Announcement: Space Credits x MetaMars Metaverse',
    excerpt: 'Space Credits becomes the official currency of MetaMars, a cutting-edge Mars colonization metaverse game.',
    content: `
We're excited to announce our first major partnership: Space Credits is now the official in-game currency for MetaMars, an upcoming Mars colonization metaverse launching in Q2 2025!

**Partnership Details:**
- Space Credits will be the primary currency for all MetaMars transactions
- Players can buy virtual land, resources, and equipment with SPACE tokens
- Exclusive NFT drops for Space Credits holders
- Joint marketing campaigns and community events

**Why This Matters:**
This partnership proves that Space Credits isn't just a memecoin - it's building real utility in the growing space-themed crypto ecosystem. MetaMars has over 50,000 waitlist signups and backing from major gaming VCs.

**Benefits for Holders:**
- Early access to MetaMars beta for top SPACE holders
- Exclusive in-game items and avatars
- Bonus SPACE token rewards for gameplay
- Voting rights on MetaMars development decisions

Stay tuned for more partnership announcements. We're in talks with several other space-tech and gaming projects!
    `,
    date: '2025-02-02',
    category: 'partnership',
    author: 'Captain Anonymous'
  },
  {
    id: '3',
    title: 'Development Update: Staking Mechanism Coming in March',
    excerpt: 'Our development team is working on a staking system that will allow holders to earn passive rewards.',
    content: `
Big news from the dev team! We're building a staking mechanism that will launch in March 2025, allowing Space Credits holders to stake their tokens and earn passive rewards.

**Staking Features:**
- Flexible staking periods (30, 90, 180 days)
- APY ranges from 8-15% depending on lock period
- No minimum stake amount
- Compound rewards automatically
- Early unstaking possible with small penalty

**Technical Details:**
Built on Solana's high-performance blockchain, our staking smart contract has been audited by CertiK (audit report will be published before launch). The rewards pool is funded by a dedicated 5% of total supply.

**Timeline:**
- Feb 15: Testnet launch for community testing
- Feb 28: Audit report published
- March 10: Mainnet staking goes live

**Why Staking?**
Staking rewards long-term believers while reducing circulating supply, which supports price stability. It also gives the community a way to participate in network security and governance.

More details coming soon. Join our Telegram for the latest updates!
    `,
    date: '2025-01-31',
    category: 'development',
    author: 'The Rocket Scientist'
  },
  {
    id: '4',
    title: 'Community Milestone: 10,000 Holders Reached!',
    excerpt: 'Space Credits community grows to 10,000 holders as the mission to Mars gains momentum.',
    content: `
🎉 We did it! Space Credits has officially reached 10,000 holders!

This incredible milestone was reached just two weeks after launch, showcasing the strong belief in our mission to create the first interplanetary cryptocurrency.

**Community Stats:**
- 10,000+ token holders
- 15,000+ Telegram members
- 8,000+ Twitter followers
- 500+ daily active traders

**Thank You Celebration:**
To celebrate, we're hosting special community events:

1. **10K Holder Giveaway**: 1,000,000 SPACE tokens distributed to random holders
2. **Meme Contest**: Best Space Credits meme wins 500,000 SPACE
3. **AMA Session**: Join us Thursday at 8 PM UTC for a special AMA

**What's Driving Growth:**
- Strong social media presence and viral memes
- Zero-tax policy attracting serious traders
- Solid tokenomics and transparent team
- Real utility being built (staking, partnerships)
- Growing belief in space economy future

**Next Milestones:**
- 25,000 holders
- First CEX listing
- $10M market cap
- Partnerships with space-tech companies

Thank you to every single holder who's part of this journey. Together, we're going to Mars! 🚀🔴
    `,
    date: '2025-01-28',
    category: 'community',
    author: 'Star Navigator'
  },
  {
    id: '5',
    title: 'Whitepaper V2.0 Released: Technical Deep Dive',
    excerpt: 'Updated whitepaper includes detailed technical specifications and expanded roadmap through 2030.',
    content: `
We've published an updated whitepaper that provides a comprehensive technical overview of Space Credits architecture, economics, and long-term vision.

**What's New in V2.0:**
- Detailed smart contract architecture
- Interplanetary transaction protocol specifications
- Mars colony integration framework
- Enhanced tokenomics modeling
- 5-year roadmap through 2030
- Partnership strategy outline

**Key Technical Highlights:**

**Latency Solutions:**
Mars is 3-22 minutes away at light speed. Our protocol handles this with:
- Optimistic confirmation for small transactions
- Multi-signature escrow for large transactions
- Automated dispute resolution
- Earth-based liquidity pools for instant settlement

**Scalability:**
Built on Solana for:
- 65,000 transactions per second
- Sub-second confirmation times
- Minimal transaction fees (<$0.01)
- Energy-efficient Proof of Stake

**Security:**
- Multi-signature treasury wallets
- Time-locked team tokens
- Regular security audits
- Bug bounty program launching soon

**Read the Full Whitepaper:**
Available now on our website at /whitepaper

We encourage technical community members to review and provide feedback. Join our Discord #technical-discussion channel!
    `,
    date: '2025-01-25',
    category: 'development',
    author: 'Dr. Moonshot'
  }
];
