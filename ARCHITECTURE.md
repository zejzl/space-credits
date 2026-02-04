# Space Credits Next.js - Component Architecture

**Project:** Space Credits Memecoin Website Transformation  
**Stack:** Next.js 15 + TypeScript + Tailwind CSS  
**Status:** Planning Phase

---

## Component Tree

```
app/
├── layout.tsx (Root Layout)
│   ├── <Navigation />
│   ├── {children}
│   └── <Footer />
│
├── page.tsx (Home Page)
│   ├── <Hero />
│   └── <StatsGrid />
│
├── about/page.tsx
│   └── <AboutSection />
│
├── mission/page.tsx
│   ├── <MissionStatement />
│   └── <FeatureList />
│
└── whitepaper/page.tsx
    └── <WhitepaperChapters />
```

---

## Component Specifications

### 1. Navigation Component
**File:** `components/Navigation.tsx`

**Purpose:** Sticky navigation bar with smooth scroll

**Props:**
```typescript
interface NavigationProps {
  // No props - fully self-contained
}
```

**Features:**
- Sticky positioning (stays on scroll)
- Smooth scroll to sections
- Hover effects on links
- Logo with gradient text
- Mobile responsive (hamburger menu)

**Design:**
- Background: `rgba(46, 46, 46, 0.95)` with backdrop blur
- Border: 3px solid red (`#ff4757`)
- Logo: Gradient from red to green
- Links: White with red hover

---

### 2. Hero Component
**File:** `components/Hero.tsx`

**Purpose:** Landing section with main CTA

**Props:**
```typescript
interface HeroProps {
  title: string;
  tagline: string;
  ctaButtons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}
```

**Features:**
- Full viewport height
- Centered content
- Animated gradient background
- Two CTA buttons
- Responsive text sizing

**Design:**
- Title: 4rem (mobile: 2.5rem)
- Gradient background: Dark blue to dark gray
- Buttons: Rounded (50px), red and green
- Text shadow for depth

---

### 3. StatsGrid Component
**File:** `components/StatsGrid.tsx`

**Purpose:** Display key token statistics

**Props:**
```typescript
interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsGridProps {
  stats: Stat[];
}
```

**Features:**
- Grid layout (auto-fit, min 250px)
- Hover animations
- Border effects
- Responsive columns

**Design:**
- Background: `rgba(255, 255, 255, 0.1)`
- Border: 2px solid red
- Padding: 2rem
- Gap: 2rem

---

### 4. AboutSection Component
**File:** `components/AboutSection.tsx`

**Purpose:** Explain what Space Credits is

**Props:**
```typescript
interface AboutSectionProps {
  title: string;
  description: string;
  stats: Stat[];
}
```

**Features:**
- Full-width section
- Stats integration
- Rich text formatting
- Animated entrances

---

### 5. FeatureList Component
**File:** `components/FeatureList.tsx`

**Purpose:** Display mission features

**Props:**
```typescript
interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureListProps {
  features: Feature[];
}
```

**Features:**
- Grid layout (2 columns on desktop, 1 on mobile)
- Left border accent (green)
- Hover effects
- Icon support

**Design:**
- Background: `rgba(0, 0, 0, 0.3)`
- Border-left: 5px solid green
- Padding: 2rem

---

### 6. WhitepaperChapters Component
**File:** `components/WhitepaperChapters.tsx`

**Purpose:** Display whitepaper chapters

**Props:**
```typescript
interface Chapter {
  number: number;
  title: string;
  description: string;
}

interface WhitepaperChaptersProps {
  chapters: Chapter[];
}
```

**Features:**
- Stacked chapter cards
- Hover slide effect
- Chapter numbering
- Expandable sections (future)

**Design:**
- Background: `rgba(255, 255, 255, 0.05)`
- Hover: `translateX(10px)`
- Rounded corners: 10px

---

### 7. Footer Component
**File:** `components/Footer.tsx`

**Purpose:** Social links and copyright

**Props:**
```typescript
interface FooterProps {
  socialLinks: {
    name: string;
    url: string;
    icon?: React.ReactNode;
  }[];
  copyright: string;
}
```

**Features:**
- Social link grid
- Hover effects
- Dark background
- Responsive layout

**Design:**
- Background: `rgba(0, 0, 0, 0.5)`
- Links: White with green hover
- Gap: 2rem

---

## Shared Types

**File:** `types/index.ts`

```typescript
export interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
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
  icon?: React.ReactNode;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}
```

---

## Tailwind Custom Classes

**File:** `app/globals.css`

```css
@layer components {
  .gradient-text {
    @apply bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent;
  }
  
  .gradient-bg {
    @apply bg-gradient-to-br from-slate-900 to-slate-700;
  }
  
  .glass-effect {
    @apply bg-white/10 backdrop-blur-md;
  }
  
  .hover-lift {
    @apply transition-transform hover:-translate-y-1 hover:shadow-xl;
  }
  
  .section-container {
    @apply max-w-6xl mx-auto px-4 py-16;
  }
}
```

---

## Color Palette (Tailwind Config)

```typescript
// tailwind.config.ts
const colors = {
  primary: '#ff4757',      // Red
  secondary: '#2ed573',    // Green
  dark: '#1e272e',         // Dark blue-gray
  darker: '#2c3e50',       // Darker blue-gray
  light: '#ffffff',        // White
  'glass-white': 'rgba(255, 255, 255, 0.1)',
  'glass-black': 'rgba(0, 0, 0, 0.3)',
}
```

---

## Data Structure

**File:** `data/content.ts`

```typescript
export const content = {
  hero: {
    title: "Space Credits",
    tagline: "Your gains are not affected by gravity",
    description: "The cryptocurrency endorsed by Elon Musk for Mars",
    ctaButtons: {
      primary: { text: "Buy Now", href: "#" },
      secondary: { text: "Whitepaper", href: "/whitepaper" }
    }
  },
  
  stats: [
    { value: "420,691,337", label: "Max Supply" },
    { value: "100%", label: "Community Owned" },
    { value: "Solana", label: "Blockchain" },
    { value: "🚀", label: "To Mars" }
  ],
  
  about: {
    title: "What is Space Credits?",
    description: "Space Credits is the first cryptocurrency designed for interplanetary commerce..."
  },
  
  features: [
    {
      title: "Zero Gravity Trading",
      description: "Your gains are not affected by gravity - trade freely across planets",
      icon: "🚀"
    },
    {
      title: "Mars-Ready",
      description: "Built for the future of space commerce and interplanetary transactions",
      icon: "🔴"
    },
    {
      title: "Elon-Endorsed",
      description: "The official memecoin of Mars colonization (in our dreams)",
      icon: "🎯"
    }
  ],
  
  chapters: [
    {
      number: 1,
      title: "Introduction",
      description: "Why Space Credits will revolutionize interplanetary commerce"
    },
    {
      number: 2,
      title: "Tokenomics",
      description: "420,691,337 tokens - the perfect meme supply"
    },
    {
      number: 3,
      title: "Mars Roadmap",
      description: "From Earth to Mars: our journey to the red planet"
    }
  ],
  
  socialLinks: [
    { name: "Twitter", url: "#", icon: "𝕏" },
    { name: "Telegram", url: "#", icon: "✈️" },
    { name: "Discord", url: "#", icon: "💬" }
  ]
}
```

---

## File Structure (Complete)

```
space-credits-next/
├── app/
│   ├── layout.tsx           # Root layout with nav + footer
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── mission/
│   │   └── page.tsx         # Mission page
│   ├── whitepaper/
│   │   └── page.tsx         # Whitepaper page
│   └── globals.css          # Tailwind + custom styles
│
├── components/
│   ├── Navigation.tsx       # Sticky nav
│   ├── Hero.tsx             # Hero section
│   ├── StatsGrid.tsx        # Stats display
│   ├── AboutSection.tsx     # About content
│   ├── FeatureList.tsx      # Feature cards
│   ├── WhitepaperChapters.tsx # Chapter list
│   └── Footer.tsx           # Footer with social links
│
├── data/
│   └── content.ts           # All content data
│
├── types/
│   └── index.ts             # TypeScript interfaces
│
├── public/
│   └── images/
│       ├── image-1.jpg      # Copy from old project
│       ├── image-2.jpg
│       └── ... (10 total)
│
├── tailwind.config.ts       # Custom colors
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## Implementation Order

### Phase 1: Foundation (30 min)
1. ✅ Set up Tailwind custom classes
2. ✅ Create types/index.ts
3. ✅ Create data/content.ts
4. ✅ Copy images to public/

### Phase 2: Core Components (1 hour)
5. ✅ Navigation component
6. ✅ Footer component
7. ✅ Hero component
8. ✅ StatsGrid component

### Phase 3: Content Components (45 min)
9. ✅ AboutSection component
10. ✅ FeatureList component
11. ✅ WhitepaperChapters component

### Phase 4: Pages (30 min)
12. ✅ app/layout.tsx
13. ✅ app/page.tsx (Home)
14. ✅ app/about/page.tsx
15. ✅ app/mission/page.tsx
16. ✅ app/whitepaper/page.tsx

### Phase 5: Polish (30 min)
17. ✅ Animations and transitions
18. ✅ Mobile responsive testing
19. ✅ Image optimization
20. ✅ SEO metadata

**Total Time:** ~3 hours

---

## Key Improvements Over Original

| Aspect | Old (Static) | New (Next.js) |
|--------|-------------|---------------|
| **Performance** | Regular HTML | SSG + Image optimization |
| **Bundle Size** | Full page load | Code splitting |
| **Routing** | Page reloads | Client-side navigation |
| **Images** | 10x JPGs (2MB+) | Next/Image optimized |
| **Maintenance** | Duplicate HTML | Reusable components |
| **SEO** | Basic meta tags | Next.js metadata API |
| **Animations** | CSS only | Framer Motion (optional) |
| **Type Safety** | None | Full TypeScript |

---

## Next Steps

1. **Start building?** - Begin with Phase 1 (foundation)
2. **Review plan?** - Any changes to component structure?
3. **See code examples?** - I can show you Hero.tsx implementation

What would you like to do first? 🚀
