// Core types for Space Credits components

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Chapter {
  number: number;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroContent {
  title: string;
  tagline: string;
  description: string;
  ctaButtons: {
    primary: CTAButton;
    secondary: CTAButton;
  };
}

export interface AboutContent {
  title: string;
  description: string;
}

export interface MissionContent {
  title: string;
  description: string;
  features: Feature[];
}

export interface WhitepaperContent {
  title: string;
  chapters: Chapter[];
}

export interface ContentData {
  hero: HeroContent;
  stats: Stat[];
  about: AboutContent;
  mission: MissionContent;
  whitepaper: WhitepaperContent;
  socialLinks: SocialLink[];
  copyright: string;
}
