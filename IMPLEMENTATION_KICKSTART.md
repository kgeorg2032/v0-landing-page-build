# IMPLEMENTATION_KICKSTART.md

## VANE Performance - Landing Page Implementation Plan

**Project**: VANE Performance Premium Coaching Landing Page  
**Client**: Jaxson Vane  
**Launch Date**: Ready for 7-day countdown deployment  
**Status**: Pre-Implementation Planning ✓

---

## Executive Overview

This document outlines the complete implementation strategy for the VANE Performance landing page—a high-conversion sales funnel targeting busy professionals (ages 30-45) seeking premium personal training and elite fitness coaching.

**Core Objectives**:
- Establish credibility and authority through Jaxson Vane's coaching method
- Drive qualified leads through a 7-day limited-time offer countdown
- Minimize friction with multiple strategically-placed CTAs
- Build anticipation for program launch with email capture

**Key Differentiator**: Athletic, premium aesthetic with Electric Lime accents against deep charcoal backgrounds—bold, direct, science-backed positioning.

---

## Phase 1: Design System & Foundation

### 1.1 Design Tokens (✓ COMPLETE - See DESIGN_TOKENS.md)
- **Color System**: Deep Charcoal (#121212), Electric Lime (#CCFF00), Pure White, Light Gray
- **Typography**: Bebas Neue (headlines) + Inter (body)
- **Spacing Scale**: Tailwind-aligned 4px–64px scale
- **Component Library**: Buttons, cards, timer boxes, modals

### 1.2 Global Styling Setup
**File**: `app/globals.css`
- Import Bebas Neue and Inter from Google Fonts
- Define CSS custom properties for all design tokens
- Set base typography and resets
- Configure Tailwind extend for custom tokens

**File**: `tailwind.config.ts`
- Extend theme with design tokens
- Configure font families
- Set color palette
- Define spacing and border radius scales

**File**: `app/layout.tsx`
- Add `bg-background` class to `<html>` tag
- Import fonts and apply font-sans, font-serif classes
- Set up metadata (title, description, og:image)
- Configure viewport for mobile responsiveness

### 1.3 Project Structure
```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              (Root layout with fonts + metadata)
│   ├── page.tsx                (Main landing page)
│   └── globals.css             (Design tokens + styles)
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      (Hero + athlete image)
│   │   ├── MethodSection.tsx    (Jaxson's method/credentials)
│   │   ├── FeaturesSection.tsx  (3-column features grid)
│   │   ├── ResultsSection.tsx   (Before/after + testimonials)
│   │   ├── PricingSection.tsx   (Single pricing card + modal trigger)
│   │   ├── FAQSection.tsx       (Accordion with objections)
│   │   └── FooterSection.tsx    (Footer with links + final CTA)
│   ├── common/
│   │   ├── Header.tsx           (Sticky header + logo)
│   │   ├── CountdownTimer.tsx   (7-day countdown)
│   │   ├── CTAButton.tsx        (Reusable lime CTA button)
│   │   └── PaymentModal.tsx     (Stripe modal placeholder)
│   └── ui/                      (shadcn/ui pre-installed)
├── hooks/
│   └── useCountdown.ts          (Custom countdown logic)
├── DESIGN_TOKENS.md             (Design system reference)
└── IMPLEMENTATION_KICKSTART.md  (This file)
```

---

## Phase 2: Component Development

### 2.1 Header Component
**File**: `components/common/Header.tsx`

**Features**:
- Sticky navigation (stays visible on scroll)
- Logo on left (VANE brand)
- "SECURE YOUR SPOT" CTA button on right (Electric Lime)
- Mobile hamburger menu (collapsible)
- Background: Deep Charcoal with border-bottom

**Props**: None (global state via context or atom)
**Breakpoints**: 
- Mobile (< 640px): Hamburger menu, full-width CTA
- Desktop (≥ 640px): Horizontal nav, right-aligned CTA

---

### 2.2 Hero Section
**File**: `components/sections/HeroSection.tsx`

**Structure**:
```
[Full-width background image: Athletic female trainer]
├── Dark overlay (rgba(0,0,0,0.4))
└── Content layer:
    ├── Countdown Timer (top-right)
    ├── Hero Headline (center): "TRANSFORM YOUR BODY. TRANSFORM YOUR LIFE."
    ├── Subheadline: "Join elite professionals getting results with the Jaxson Method."
    ├── CTA Button 1: "START YOUR TRANSFORMATION" (Lime, large)
    └── Trust badge: "Limited to 50 Clients | Science-Backed Method"
```

**Details**:
- Hero image: Athletic female personal trainer in dark setting with orange accent lighting
- Text color: Pure White with Electric Lime highlights
- Countdown timer: Shows 7 days remaining (updates in real-time)
- Animation: Subtle fade-in on load, CTAs have pulse glow on hover

**Tech**:
- Next.js Image component for optimization
- Custom countdown hook
- Framer Motion for animations

---

### 2.3 Jaxson's Method Section
**File**: `components/sections/MethodSection.tsx`

**Structure**:
```
Section heading: "THE JAXSON METHOD"
├── Coach credentials box
│   ├── Coach image/avatar
│   ├── Name: "Jaxson Vane"
│   ├── Credentials: "Certified Strength Coach | 15+ Years Elite Training"
│   ├── Philosophy: "Science-backed. Results-driven. No fluff."
│   └── CTA Button 2: "LEARN THE METHOD" (Secondary style)
└── Core philosophy statement (2-3 sentences)
```

**Details**:
- Background: Deep Charcoal surface card
- Credibility focus: Badges, years of experience, certifications
- Tone: Direct, confident, elite
- Layout: 2-column on desktop (image + text), 1-column on mobile

---

### 2.4 Program Features Section
**File**: `components/sections/FeaturesSection.tsx`

**Structure**:
```
Section heading: "WHAT YOU GET"
├── 3-column grid (1 column mobile, 2 tablet):
│   ├── Feature Card 1
│   │   ├── Icon (Lucide React)
│   │   ├── Title: "Custom Training Plan"
│   │   └── Description
│   ├── Feature Card 2
│   │   ├── Icon
│   │   ├── Title: "Weekly Check-Ins"
│   │   └── Description
│   └── Feature Card 3
│       ├── Icon
│       ├── Title: "Nutrition Guidance"
│       └── Description
└── Inline CTA: "See Full Program Details" (embedded in last card)
```

**Details**:
- Cards: Dark surface (#1A1A1A) with subtle border
- Icons: Lucide React (Target, MessageSquare, Apple, etc.)
- Hover effect: Subtle glow with lime accent border
- Description: 2-3 lines max
- Grid: Responsive (3 cols → 2 cols → 1 col)

---

### 2.5 Results & Social Proof Section
**File**: `components/sections/ResultsSection.tsx`

**Structure**:
```
Section heading: "RESULTS SPEAK FOR THEMSELVES"
├── Testimonial carousel / grid (4 visible, scroll on mobile):
│   ├── Client Result Card 1
│   │   ├── Before/After images (placeholder)
│   │   ├── Client name
│   │   ├── Result stat: "+12 lbs muscle, -8% body fat"
│   │   └── Quote: "Changed my life in 12 weeks."
│   ├── Client Result Card 2 ... 4
│   └── Navigation arrows (Prev/Next)
└── Video Testimonial (optional)
    ├── Play icon overlay
    └── "Click to watch Melissa's transformation"
```

**Details**:
- Cards: Stacked images + overlay text
- Stats: Bold, Electric Lime colored
- Quotes: Italic, Light Gray text
- Scroll: Horizontal on mobile, full grid on desktop
- CTA embedded: "See more results" or "Start your story"

---

### 2.6 Pricing Section
**File**: `components/sections/PricingSection.tsx`

**Structure**:
```
Section heading: "INVESTMENT IN YOU"
├── Pricing Card (centered, prominent)
│   ├── Price tag: "$997" or "3x $375" payment plan
│   ├── What's included:
│   │   ├── ✓ 12-week program
│   │   ├── ✓ Weekly coaching calls
│   │   ├── ✓ Custom meal plan
│   │   └── ... (4-5 items total)
│   ├── CTA Button 3: "SECURE YOUR SPOT NOW" (Lime, large)
│   ├── Secondary CTA: "Learn about payment plans"
│   └── 30-day money-back guarantee badge
└── Limited availability notice:
    "Only 50 spots available. 12 claimed so far."
```

**Details**:
- Card: Prominent, elevated shadow
- Price: Large, bold (Bebas Neue)
- Guarantee badge: Bottom-right corner
- CTAs: Primary triggers modal → Stripe checkout
- Availability meter: Subtle progress bar (optional)

---

### 2.7 FAQ Section
**File**: `components/sections/FAQSection.tsx`

**Structure**:
```
Section heading: "QUESTIONS? WE'VE GOT ANSWERS"
├── Accordion (4-5 items):
│   ├── Q1: "Is this for beginners or advanced athletes?"
│   │   └── A: "Both. The Jaxson Method scales to your level..."
│   ├── Q2: "What if I don't see results in 30 days?"
│   │   └── A: "Full refund, no questions asked..."
│   ├── Q3: "How much time per week do I need?"
│   │   └── A: "4-5 hours of focused training + meal prep..."
│   └── Q4: "Do I need a gym?"
│       └── A: "Most exercises are gym-based, but..."
└── Final CTA: "Still have questions? Email us"
```

**Details**:
- Accordion: Smooth expand/collapse
- Text: Dark charcoal background, white text
- Active state: Lime accent on left border
- Icons: Chevron icon (Lucide React) that rotates on open
- Mobile: Full-width accordion items

---

### 2.8 Footer Section
**File**: `components/sections/FooterSection.tsx`

**Structure**:
```
Footer background: Deep Charcoal (darker shade)
├── Section 1: Final CTA block
│   ├── Headline: "Ready to start? The clock is ticking."
│   └── CTA Button 4: "SECURE SPOT - LIMITED TIME" (Lime)
├── Section 2: Links grid
│   ├── Col 1: About (About Jaxson, Credentials, Success Stories)
│   ├── Col 2: Legal (Privacy Policy, Terms of Service, Disclaimer)
│   └── Col 3: Social (Instagram, LinkedIn, YouTube)
├── Section 3: Email signup (optional)
│   ├── "Stay updated on results & insights"
│   └── Email input + Subscribe button
└── Section 4: Copyright
    └── © 2024 VANE Performance. All rights reserved.
```

**Details**:
- Layout: 4-column grid on desktop, 1-column on mobile
- Links: Light gray, hover lime
- Final CTA: Prominent, mirrors header CTA
- Email signup: Optional, captures additional leads

---

### 2.9 Payment Modal Component
**File**: `components/common/PaymentModal.tsx`

**Structure** (Phase 2):
```
Modal overlay (darkened background)
├── Close button (X)
├── Title: "Secure Your Spot"
├── Price: "$997 (or 3x $375)"
├── Payment method tabs:
│   ├── "One-time payment"
│   └── "Payment plan (3x)"
├── Stripe payment form (placeholder for Phase 2)
│   ├── Card input fields
│   ├── Name, Email fields
│   └── "Complete Purchase" button
└── Money-back guarantee badge
```

**Details**:
- **Phase 1**: UI only, no real payment integration
- **Phase 2**: Connect to Stripe API
- Modal opens on CTA clicks (Header, Hero, Pricing section)
- Smooth open/close animations
- Mobile: Full-screen on small screens

---

### 2.10 Countdown Timer Component
**File**: `components/common/CountdownTimer.tsx`

**Structure**:
```
Timer display box:
├── Layout: Flex horizontal
└── For each unit (days, hours, minutes, seconds):
    ├── Bold number (Lime colored)
    ├── Label (Light gray): "DAYS", "HOURS", "MINS", "SECS"
    └── Divider (|)

Example display: "07 DAYS | 14 HOURS | 32 MINS | 18 SECS"
```

**Details**:
- Updates every second
- Uses custom `useCountdown` hook
- Color: Electric Lime for numbers
- Background: Subtle lime tint (rgba)
- Border: 1px solid lime
- Used in: Hero section + sticky header (optional)
- Placement: Top-right hero, above main CTA

**Hook** - `hooks/useCountdown.ts`:
```typescript
- Input: Launch date (7 days from now)
- Output: { days, hours, minutes, seconds }
- Behavior: Updates every 1000ms
- Edge case: Returns 0 when timer expires
```

---

## Phase 3: Integration & Interactions

### 3.1 Page-Level State Management
**Approach**: React Context + local state (no external state library for MVP)

**Global State**:
- `PaymentModalContext`: Open/close payment modal
- `CountdownContext`: Countdown timer data (shared across components)

**Implementation**:
```typescript
// context/PaymentModalContext.tsx
export const usePaymentModal = () => {
  // Returns: { isOpen, openModal, closeModal }
}

// context/CountdownContext.tsx
export const useCountdown = () => {
  // Returns: { days, hours, minutes, seconds, isExpired }
}
```

### 3.2 CTA Button Interactions
**4 Primary CTAs placed throughout**:

1. **Header CTA** ("SECURE YOUR SPOT")
   - Position: Sticky header, top-right
   - Action: Opens payment modal
   - Always visible on scroll

2. **Hero CTA** ("START YOUR TRANSFORMATION")
   - Position: Center of hero section
   - Action: Opens payment modal
   - Size: Extra large, prominent

3. **Pricing Section CTA** ("SECURE YOUR SPOT NOW")
   - Position: Center of pricing card
   - Action: Opens payment modal
   - Size: Large, bold

4. **Footer CTA** ("SECURE SPOT - LIMITED TIME")
   - Position: Top of footer section
   - Action: Opens payment modal
   - Size: Large, matches header/hero

**Button Hover States**:
- Background: Electric Lime → Lime Dark (#99CC00)
- Glow effect: Subtle box-shadow with lime
- Scale: Slight pulse animation (1.02x)

### 3.3 Modal Workflow (Phase 1 - UI Only)
```
User clicks any CTA button
  ↓
Payment modal opens (smooth fade animation)
  ↓
Modal displays:
  - Price ($997 or 3x $375)
  - "Coming Soon" or placeholder text
  - Close button (X)
  ↓
User can:
  - Close modal (press ESC or click X)
  - Click "Learn More" for more info
```

**Phase 2**: Replace placeholder with actual Stripe integration

### 3.4 Animations
**Using Framer Motion**:

- **Page Load**: Stagger fade-in (0.3s each element)
- **Section Scroll**: Fade-up on scroll (IntersectionObserver)
- **Button Hover**: Scale + glow pulse
- **Modal Open**: Backdrop fade + modal slide-up
- **Countdown Numbers**: Subtle number flip animation each second
- **Feature Cards**: Hover lift effect (translateY -4px)

---

## Phase 4: Responsive Design

### 4.1 Mobile-First Approach

| Breakpoint | Width | Layout Changes |
|------------|-------|-----------------|
| Mobile | < 640px | 1-column layout, full-width CTAs, hamburger menu, vertical accordion |
| Tablet | 640-1024px | 2-column grids, optimized spacing |
| Desktop | 1024px+ | 3-column grids, side-by-side sections |
| Large | > 1536px | Max-width container (1400px), centered |

### 4.2 Key Responsive Adjustments
- **Hero Section**: Image becomes background on mobile, text overlay centered
- **Features Grid**: 3 cols (desktop) → 2 cols (tablet) → 1 col (mobile)
- **Results Carousel**: Horizontal scroll on mobile, grid on desktop
- **Header**: Full menu (desktop) → hamburger (mobile)
- **CTAs**: Full-width buttons on mobile, auto-width on desktop
- **Countdown**: Smaller numbers on mobile (16px → 12px)
- **Pricing Card**: Max-width 500px, full-width on mobile

### 4.3 Touch Interactions (Mobile)
- Button ripple effect on tap
- Accordion smoothly expands
- Modal dismissible with swipe-down gesture
- Smooth scroll anchors for navigation

---

## Phase 5: SEO & Metadata

### 5.1 HTML Head (layout.tsx)
```typescript
export const metadata = {
  title: "VANE Performance | Elite Personal Coaching by Jaxson Vane",
  description: "Transform your body and life with the Jaxson Method. Science-backed personal training for busy professionals. Limited spots available.",
  keywords: "personal training, fitness coaching, elite coaching, Jaxson Vane",
  robots: "index, follow",
  openGraph: {
    title: "VANE Performance | Transform Your Life",
    description: "Join elite professionals...",
    image: "/og-image.jpg",
    url: "https://vaneperformance.com",
  },
}
```

### 5.2 Schema Markup (JSON-LD)
- Organization schema (Jaxson, contact)
- LocalBusiness schema (if applicable)
- SoftwareApplication schema (for coaching program)

---

## Phase 6: Performance & Optimization

### 6.1 Image Optimization
- Use Next.js `Image` component with:
  - `priority={true}` for hero image
  - `quality={85}` for balance
  - Responsive `srcSet` for different screen sizes
  - WebP format with JPEG fallback

### 6.2 Code Splitting
- Dynamic imports for heavy components (modals, accordions)
- Lazy load below-the-fold sections
- Tree-shake unused Lucide icons

### 6.3 Bundle Size
- Use only required shadcn/ui components
- Minify CSS/JS in production
- Implement font subsetting for Bebas Neue & Inter

---

## Implementation Timeline

### Week 1: Foundation
- [ ] Set up design tokens in globals.css & tailwind.config.ts
- [ ] Create layout.tsx with fonts and metadata
- [ ] Build Header and sticky navigation
- [ ] Build CountdownTimer component & hook

### Week 2: Hero & Features
- [ ] Design & implement HeroSection (with placeholder image)
- [ ] Build MethodSection with credentials
- [ ] Build FeaturesSection (3-column grid)
- [ ] Add animations (Framer Motion)

### Week 3: Social Proof & Pricing
- [ ] Build ResultsSection with carousel
- [ ] Build PricingSection with modal trigger
- [ ] Create PaymentModal (UI only)
- [ ] Add hover states and interactions

### Week 4: FAQ, Footer & Polish
- [ ] Build FAQSection with accordion
- [ ] Build FooterSection
- [ ] Implement responsive design (mobile/tablet/desktop)
- [ ] Test cross-browser compatibility
- [ ] Performance optimization & SEO

### Week 5: Testing & Launch
- [ ] QA: All CTAs, modals, animations, responsive layouts
- [ ] Accessibility audit (ARIA labels, contrast, keyboard nav)
- [ ] User testing (5-10 beta users)
- [ ] Final polish & deployment

---

## Success Metrics

### Conversion Goals
- CTA click-through rate: > 8%
- Modal open rate: > 70% of CTAs
- Email signup rate: > 15%
- Time on page: > 2 minutes

### Technical Goals
- Lighthouse Performance: > 80
- Page load time: < 2 seconds
- Mobile usability: 100% (Google Mobile-Friendly)

### Engagement Goals
- Countdown timer engagement: > 60% users see it
- Scroll depth: > 75% (FAQ section)
- Feature card hover rate: > 40%

---

## File Checklist for Implementation

```
✓ DESIGN_TOKENS.md (Design system reference)
✓ IMPLEMENTATION_KICKSTART.md (This plan)

TO CREATE:
[ ] app/layout.tsx (with fonts + metadata)
[ ] app/globals.css (design tokens + base styles)
[ ] tailwind.config.ts (extend with tokens)
[ ] components/common/Header.tsx
[ ] components/common/CountdownTimer.tsx
[ ] components/common/CTAButton.tsx
[ ] components/common/PaymentModal.tsx
[ ] components/sections/HeroSection.tsx
[ ] components/sections/MethodSection.tsx
[ ] components/sections/FeaturesSection.tsx
[ ] components/sections/ResultsSection.tsx
[ ] components/sections/PricingSection.tsx
[ ] components/sections/FAQSection.tsx
[ ] components/sections/FooterSection.tsx
[ ] hooks/useCountdown.ts
[ ] context/PaymentModalContext.tsx
[ ] context/CountdownContext.tsx
[ ] app/page.tsx (main landing page, imports all sections)
```

---

## Notes & Dependencies

### External Libraries (auto-installed)
- `framer-motion`: Animations
- `lucide-react`: Icons
- `tailwindcss`: Styling (already installed)
- `next`: Latest version
- `react`: Latest version

### Phase 2 (Not in MVP)
- Stripe integration (replace modal placeholder)
- Email service integration (Mailchimp, Resend, etc.)
- Analytics (Google Analytics 4, Mixpanel)
- A/B testing framework

### Assumptions
1. Hero image will be provided or generated
2. Before/after images are placeholder URLs (can be updated later)
3. Jaxson's branding is locked (colors, fonts, tone)
4. Payment integration happens in Phase 2
5. Email capture is optional in Phase 1

---

## Next Steps

1. **Approval**: Review this plan and confirm all sections/CTAs
2. **Design Tokens**: Verify color palette, fonts, spacing in DESIGN_TOKENS.md
3. **Begin Build**: Start with Phase 1 foundation (layout, globals, header)
4. **Weekly Check-ins**: Validate progress against timeline
5. **Launch**: Deploy and monitor conversion metrics

---

**Document Status**: Ready for Implementation  
**Last Updated**: 2024  
**Owner**: v0 Implementation Team
