export interface RoadmapPhase {
  phase: string;
  title: string;
  status: 'completed' | 'in-progress' | 'future';
  items: string[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Liftoff",
    status: "completed",
    items: [
      "Token launch on Solana",
      "Website and social media",
      "Initial community building",
      "First DEX listing (Raydium)"
    ]
  },
  {
    phase: "Phase 2",
    title: "Orbit Achieved",
    status: "in-progress",
    items: [
      "10,000+ holders milestone",
      "CMC & CoinGecko listings",
      "Influencer partnerships",
      "First CEX listing",
      "Staking mechanism launch"
    ]
  },
  {
    phase: "Phase 3",
    title: "Moon Landing",
    status: "future",
    items: [
      "50,000+ holders",
      "Major CEX listings",
      "Space Credits NFT collection",
      "Metaverse integration",
      "Charity: Space education programs"
    ]
  },
  {
    phase: "Phase 4",
    title: "Mars Mission",
    status: "future",
    items: [
      "100,000+ holders",
      "Space Credits mobile app",
      "GameFi integration",
      "Partnership with space companies",
      "First crypto accepted on Mars (2030 goal)"
    ]
  }
];
