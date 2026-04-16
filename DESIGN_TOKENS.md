# VANE Performance - Design Tokens

## Color Palette

### Primary Colors
- **Background**: `#121212` (Deep Charcoal) - Main dark background
- **Accent**: `#CCFF00` (Electric Lime) - Call-to-action, highlights, hover states
- **Surface**: `#1A1A1A` (Dark Charcoal) - Cards, containers, elevated surfaces
- **Neutral**: `#FFFFFF` (Pure White) - Primary text, contrast
- **Secondary Text**: `#B3B3B3` (Light Gray) - Secondary text, descriptions

### Semantic Tokens
```css
--background: #121212          /* Page background */
--surface: #1A1A1A             /* Cards, containers */
--surface-hover: #252525       /* Hover state for surfaces */
--foreground: #FFFFFF          /* Primary text */
--foreground-secondary: #B3B3B3 /* Secondary text */
--accent: #CCFF00              /* CTAs, highlights */
--accent-hover: #B3E600        /* Hover state for accent */
--accent-dark: #99CC00         /* Dark hover/pressed state */
--border: #2A2A2A              /* Borders, dividers */
--success: #4CAF50             /* Success states */
--warning: #FF9800             /* Warning states */
--error: #FF6B6B               /* Error states */
```

## Typography

### Font Families
- **Display Font**: `Bebas Neue` - Headlines, hero text (athletic, bold, premium)
- **Body Font**: `Inter` - Body text, descriptions, UI text (clean, modern, readable)

### Type Scale
```
H1 (Hero Headline):    font-size: 3.5rem (56px)  | font-weight: 700 | line-height: 1.2
H2 (Section Title):    font-size: 2.5rem (40px)  | font-weight: 700 | line-height: 1.2
H3 (Feature Title):    font-size: 1.75rem (28px) | font-weight: 700 | line-height: 1.3
H4 (Card Title):       font-size: 1.25rem (20px) | font-weight: 600 | line-height: 1.4
Body Large:            font-size: 1.125rem (18px)| font-weight: 400 | line-height: 1.6
Body Regular:          font-size: 1rem (16px)    | font-weight: 400 | line-height: 1.6
Body Small:            font-size: 0.875rem (14px)| font-weight: 400 | line-height: 1.5
Label:                 font-size: 0.75rem (12px) | font-weight: 600 | line-height: 1.3
```

## Spacing Scale
```
xs:  0.25rem (4px)
sm:  0.5rem (8px)
md:  1rem (16px)
lg:  1.5rem (24px)
xl:  2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

## Rounded Corners
```
sm:  0.25rem (4px)
md:  0.5rem (8px)
lg:  0.75rem (12px)
xl:  1rem (16px)
full: 9999px (fully rounded)
```

## Shadows
```
sm:   0 1px 2px 0 rgba(0, 0, 0, 0.5)
md:   0 4px 6px 0 rgba(0, 0, 0, 0.6)
lg:   0 10px 15px 0 rgba(0, 0, 0, 0.7)
xl:   0 20px 25px 0 rgba(0, 0, 0, 0.8)
accent: 0 0 20px rgba(204, 255, 0, 0.3)  /* Lime glow effect */
```

## Component Tokens

### Buttons
```
CTA Button:
  - Background: #CCFF00 (Electric Lime)
  - Text: #121212 (Deep Charcoal)
  - Padding: 16px 32px
  - Font Weight: 700
  - Border Radius: 8px
  - Hover: Background #B3E600

Secondary Button:
  - Background: transparent
  - Border: 2px solid #CCFF00
  - Text: #CCFF00
  - Padding: 14px 30px
  - Font Weight: 700
  - Border Radius: 8px
  - Hover: Background rgba(204, 255, 0, 0.1)
```

### Cards
```
Feature Card:
  - Background: #1A1A1A
  - Border: 1px solid #2A2A2A
  - Padding: 32px
  - Border Radius: 12px
  - Box Shadow: 0 4px 6px rgba(0, 0, 0, 0.6)
```

### Countdown Timer
```
Timer Box:
  - Background: rgba(204, 255, 0, 0.1)
  - Border: 1px solid #CCFF00
  - Number Text: #CCFF00 (bold, large)
  - Label Text: #B3B3B3
```

## Animations
```
Transition Default: 300ms ease-in-out
Fade In: opacity 0 → 1 over 300ms
Slide Up: translateY(20px) → 0 over 300ms
Glow Effect: box-shadow 0→20px rgba(204, 255, 0, 0.3) on hover
Pulse: subtle scale animation for CTAs on hover
```

## Responsive Breakpoints
```
Mobile:    < 640px
Tablet:    640px - 1024px
Desktop:   1024px - 1536px
Large:     > 1536px
```

## Design Principles
1. **Bold Typography** - Large, athletic headlines in Bebas Neue create premium feel
2. **High Contrast** - Lime accents pop against dark charcoal for instant attention
3. **Minimal Complexity** - 3-color palette keeps design clean and elite
4. **Generous Whitespace** - Breathing room between sections emphasizes quality
5. **Athletic Aesthetic** - Strong, direct, no fluff—just like Jaxson's coaching method
