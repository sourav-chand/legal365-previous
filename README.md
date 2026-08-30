# Legal365 - Dual-Purpose Legal Platform

A modern, accessible legal platform built with Next.js featuring both academic programs and legal services marketplace.

## 🎨 Design System - Casebound Ledger Aesthetic

### Color Palette
- **Ink Navy** (`#0F1B2D`) - Primary background, headers
- **Parchment** (`#F7F5EF`) - Light sections, forms
- **Brass Gold** (`#B08D57`) - Primary accent, CTAs
- **Slate Blue** (`#1E3A5F`) - Secondary panels
- **Oxblood** (`#8A1F2B`) - Marketplace accent
- **Sage** (`#26301F`) - Success states

### Typography
- **Display**: Source Serif 4 - Headlines, serif moments
- **Body/UI**: Inter - All interface elements
- **Mono**: IBM Plex Mono - Stats, prices, data

### Signature Element
**Case Seal** - A circular brass emblem with scale/balance motif that appears throughout:
- Hero trust badge
- Service price tags
- Form success states
- Animated entrance (rotate + scale)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
legal365/
├── app/
│   ├── globals.css          # Design system tokens & utilities
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage with all sections
├── components/
│   ├── ui/                   # Design system components
│   │   ├── button.tsx        # Button variants
│   │   ├── card.tsx          # Card components
│   │   ├── case-seal.tsx     # Signature seal icon
│   │   ├── input.tsx         # Form inputs
│   │   ├── textarea.tsx      # Form textarea
│   │   ├── label.tsx         # Form labels
│   │   └── ledger-line.tsx   # Decorative divider
│   ├── header.tsx            # Sticky nav with mega-dropdown
│   ├── hero.tsx              # Hero with dual-track selector
│   ├── about-section.tsx     # About & Trust
│   ├── why-choose-section.tsx # Value propositions
│   ├── academic-programs.tsx  # Course catalog with filters
│   ├── legal-services.tsx     # Services marketplace
│   ├── blog-section.tsx       # Latest insights
│   ├── agent-cta.tsx          # Agent partnership CTA
│   ├── contact-section.tsx    # Contact form
│   └── footer.tsx             # Footer with links
└── lib/
    └── utils.ts              # Utility functions
```

## ✨ Key Features

### Dual-Track Experience
- **Academic Wing** - Law degree programs with brass gold accent
- **Marketplace Wing** - Legal services with oxblood accent
- Track selector in hero switches visual mode

### Animations (Framer Motion)
- Orchestrated hero load sequence (badge → headline → stats)
- Scroll-triggered reveals (fade + rise, staggered)
- Count-up animations for statistics
- Case Seal rotate-in on success states
- Hover effects with precise timing (150-200ms)

### Responsive Design
- Mobile-first approach
- Hamburger menu with full-screen overlay
- Single-column stacks on mobile
- Touch-optimized interactions

### Accessibility
- WCAG AA compliant contrast ratios
- Visible keyboard focus (brass 2px outline)
- Semantic HTML structure
- ARIA labels on interactive elements
- `prefers-reduced-motion` support
- Real label text (no placeholder-only forms)

## 🎯 Components Overview

### Header
- Sticky positioning with height shrink on scroll
- Brass hairline border appears when scrolled
- Mega-dropdown for About section (2-column grid with icons)
- Mobile hamburger menu with full-screen overlay

### Hero
- Animated paper-grain background texture
- Trust badge with pulsing glow
- Staggered headline animation (80ms delay per line)
- Dual CTAs with hover scale effects
- Track selector chips (College/Marketplace)
- Animated stat strip with count-up numbers
- Editorial photo with Case Seal badge overlay

### Academic Programs
- Filter tabs with animated underline
- 3-column course grid
- Image zoom on hover (1.05 scale)
- Category and mode badges
- Animated arrow on "View Details" link

### Legal Services
- Oxblood accent differentiation
- Fixed-price display with Case Seal icon
- Case tracking stepper preview
- Progress bar animation on scroll into view

### Contact Form
- Split layout (details left, form right)
- Inline validation with color-coded errors
- Segmented control for inquiry purpose
- Animated Case Seal on submit success
- Form resets after 3 seconds

### Footer
- 4-column layout
- Large watermark Case Seal (opacity 5%)
- Social links with hover effects
- Brass hairline divider

## 🎨 Motion Guidelines

All animations follow judicial precision:
- **Fast**: 150ms - UI feedback
- **Base**: 200ms - Hover states
- **Slow**: 300ms - Reveals
- **Slower**: 400ms - Complex transitions

Easing: `ease-out` for all transitions (no bouncy effects)

## 🔧 Customization

### Update Colors
Edit `app/globals.css` CSS variables in `:root`

### Modify Content
- Course data: `components/academic-programs.tsx`
- Services: `components/legal-services.tsx`
- Blog posts: `components/blog-section.tsx`
- Contact details: `components/contact-section.tsx`
- Footer links: `components/footer.tsx`

### Adjust Animations
Motion settings in individual component files using Framer Motion `transition` props

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large: > 1280px

## ♿ Accessibility Checklist

- ✅ Color contrast meets WCAG AA
- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements
- ✅ Semantic HTML landmarks
- ✅ Alt text on images
- ✅ ARIA labels on icon buttons
- ✅ Form labels properly associated
- ✅ Reduced motion support
- ✅ Touch targets 44x44px minimum

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Source Serif 4, Inter, IBM Plex Mono)
- **Type Safety**: TypeScript

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

## 🤝 Contributing

Contributions welcome! Please follow the existing code style and design system tokens.

---

Built with precision and care for the legal profession. 🏛️⚖️
