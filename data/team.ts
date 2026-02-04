export interface TeamMember {
  name: string;
  role: string;
  emoji: string;
  bio: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Captain Anonymous",
    role: "Mission Commander",
    emoji: "👨‍🚀",
    bio: "Leading the charge to Mars with over 9000 hours of blockchain experience. Loves rockets and red candles equally."
  },
  {
    name: "Dr. Moonshot",
    role: "Chief Tokenomics Officer",
    emoji: "🧑‍🔬",
    bio: "PhD in Memeology. Designed the perfect token distribution while sipping Tang in zero gravity."
  },
  {
    name: "The Rocket Scientist",
    role: "Lead Developer",
    emoji: "👨‍💻",
    bio: "Codes faster than the speed of light. Built the entire smart contract during a single Mars orbital period."
  },
  {
    name: "Star Navigator",
    role: "Community Manager",
    emoji: "🧑‍✈️",
    bio: "Guides our community through the cosmos. Available 24/7 in all time zones across the solar system."
  }
];
