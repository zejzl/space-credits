# 🚀 Space Credits

> **Your gains are not affected by gravity**

Space Credits is the first cryptocurrency designed for interplanetary commerce. Built on Solana with Next.js, featuring stunning animations, interactive widgets, and a fully responsive design.

## ✨ Features

### 🎨 Visual Effects
- **Particle Background**: 100 interactive particles (50 on mobile) using TSParticles
- **Mouse Gradient**: Dynamic gradient that follows mouse movement
- **Parallax Scrolling**: Smooth parallax effects on hero elements
- **Glassmorphism**: Enhanced glass effects with blur and saturation
- **Neon Glows**: Multiple shadow layers for authentic neon effects

### 🎭 Animations
- **Scroll Reveal**: Elements animate into view using Intersection Observer
- **Animated Counters**: Smooth count-up animations with easing
- **Page Transitions**: Seamless transitions between routes
- **Hover Effects**: Interactive hover states on all cards and buttons
- **Confetti Celebrations**: Canvas confetti on copy actions

### 🧩 Interactive Components
- **Live Price Ticker**: Real-time price updates with AnimatePresence
- **Social Proof Banner**: Dynamic holder statistics
- **Copy Button**: One-click copy with celebration feedback
- **FAQ Accordion**: Smooth expand/collapse animations
- **Interactive Roadmap**: Visual timeline with status indicators
- **Tokenomics Chart**: Animated pie chart with Recharts

### 🎨 Theming
Three beautiful themes powered by next-themes:
- **Dark (Space)**: Default cosmic theme
- **Light**: Clean daytime theme
- **Mars**: Red planet theme

### 📱 Progressive Web App (PWA)
- Installable on mobile devices
- Offline support ready
- Custom app manifest
- Optimized icons

### ⚡ Performance
- Dynamic imports for heavy components
- Image optimization (AVIF/WebP)
- Server-side rendering where possible
- Reduced motion support for accessibility
- Optimized bundle size

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 with Turbopack
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Particles**: TSParticles
- **Themes**: next-themes
- **Notifications**: react-hot-toast
- **Confetti**: canvas-confetti
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
space-credits-next/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page with all sections
│   ├── loading.tsx              # Loading state
│   └── globals.css              # Global styles + theme variables
├── components/
│   ├── effects/                 # Visual effects
│   │   ├── ParticleBackground.tsx
│   │   ├── MouseGradient.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── PageTransition.tsx
│   ├── features/                # Feature components
│   │   ├── HowToBuy.tsx
│   │   ├── TokenomicsChart.tsx
│   │   ├── PriceTicker.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Roadmap.tsx
│   │   ├── TeamSection.tsx
│   │   └── FAQSection.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── AnimatedCounter.tsx
│   │   ├── CopyButton.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Skeleton.tsx
│   └── [other components]
├── data/                        # Content data
│   ├── faq.ts
│   ├── team.ts
│   ├── roadmap.ts
│   └── content.ts
├── hooks/                       # Custom React hooks
│   └── useAnimatedCounter.ts
├── providers/                   # Context providers
│   └── ThemeProvider.tsx
├── utils/                       # Utility functions
│   ├── animations.ts            # Framer Motion variants
│   └── seo.ts                   # SEO helpers
└── public/                      # Static assets
    └── manifest.json            # PWA manifest
```

## 🎯 Key Sections

1. **Hero**: Particle background with parallax floating emojis
2. **Social Proof**: Live holder statistics banner
3. **Stats Grid**: Animated counters with hover effects
4. **Price & Token**: Live ticker + copy address with confetti
5. **How to Buy**: 4-step interactive guide
6. **Tokenomics**: Animated pie chart with distribution
7. **Roadmap**: Visual timeline with 4 phases
8. **Team**: Anonymous astronaut cards
9. **FAQ**: Smooth accordion with 6 questions
10. **Final CTA**: Enhanced call-to-action section

## 🔧 Configuration

### Update Token Address
Edit `app/page.tsx` line 17:
```typescript
const TOKEN_ADDRESS = 'YourActualSolanaTokenAddress';
```

### Customize Themes
Edit CSS variables in `app/globals.css`:
```css
:root { /* Dark theme */ }
.light { /* Light theme */ }
.mars { /* Mars theme */ }
```

### Modify Animations
Edit animation variants in `utils/animations.ts`

## 📦 Build Output

```
Route (app)
┌ ○ /              (Home page)
├ ○ /about         (About page)
├ ○ /mission       (Mission page)
└ ○ /whitepaper    (Whitepaper page)

○  (Static)  prerendered as static content
```

## 🌐 Deploy

### Vercel (Recommended)
```bash
vercel --prod
```

### Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Deploy the `.next` folder

## 📝 License

This project is open source and available under the MIT License.

## 🚀 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for the space economy** 🌌
