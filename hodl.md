---
name: Cinematic Automotive Atelier
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e9bcb6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#af8782'
  outline-variant: '#5e3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e30613'
  on-primary-container: '#fff5f3'
  inverse-primary: '#c0000c'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#c3c7cb'
  on-tertiary: '#2c3134'
  tertiary-container: '#6d7276'
  on-tertiary-container: '#f4f8fc'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#dfe3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#181c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-2xl:
    fontFamily: Space Grotesk
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 110%
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 120%
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 160%
  tech-spec:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 140%
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 160px
  element-gap: 32px
  container-padding: 64px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a high-end automotive restoration studio at midnight—where precision engineering meets architectural lighting. The brand personality is authoritative, meticulous, and cinematic, targeting ultra-high-net-worth collectors and automotive enthusiasts who value craftsmanship as much as performance.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**, characterized by deep matte backgrounds, "smoked" semi-transparent layers, and hyper-realistic metallic accents. Every element should feel "heavy" and mechanical, yet polished to a mirror finish. The emotional response is one of exclusive access to a high-tech sanctuary where heritage vehicles are reborn through modern science.

## Colors

The palette is anchored in **Deep Matte Black (#050505)** to create a void-like backdrop that mimics a professional photo studio. 

- **Precision Red (#E30613)** is used sparingly for critical interactions, status indicators, and "performance" highlights.
- **Glossy Graphite (#111111)** provides a subtle distinction for container surfaces.
- **Soft Chrome (#B8B8B8)** and **Luxury Silver (#C8CCD0)** serve as the primary content and iconography colors, providing a metallic, premium feel.
- **Chrome Gradient**: Use this strictly for high-impact accents, such as divider lines or "brushed aluminum" CTA states, to simulate light reflecting off polished metal.

## Typography

Typography follows an editorial hierarchy with a technical edge. 

- **Space Grotesk** is the voice of the machine: wide, geometric, and bold. Use it for hero statements and large numerical data (chassis numbers, torque specs).
- **Plus Jakarta Sans** (serving as a premium substitute for Clash Display) provides a modern, sophisticated bridge for sub-headlines.
- **Inter** handles all long-form reading with a neutral, utilitarian clarity.
- **IBM Plex Mono** is used for technical annotations, metadata, and "engineering log" details. 

*Note: Large display types should utilize tighter letter spacing to maintain an architectural, "locked-in" feel.*

## Layout & Spacing

This design system utilizes an **Extremely Generous Fluid Grid** to mirror the spatial luxury of a high-end gallery. 

- **Desktop**: A 12-column grid with 80px side margins and 24px gutters. Sections are separated by massive 160px vertical gaps to allow high-fidelity photography to breathe.
- **Mobile**: A 4-column grid with 20px margins. Padding remains expansive to avoid a "cluttered" feel even on small screens.
- **Alignment**: Use strict architectural alignment. Content should be either perfectly centered for cinematic impact or offset significantly to create an editorial, asymmetrical balance.

## Elevation & Depth

Depth is achieved through material property rather than traditional shadows. 

1.  **Base (0dp)**: #050505 Matte Black.
2.  **Surface (1dp)**: #111111 with a subtle 1px border of #FFFFFF (8% opacity) to define edges.
3.  **Smoked Glass (2dp)**: Background blur (20px to 40px) with #FFFFFF (6% opacity) fill. This is used for overlays, navigation bars, and floating spec sheets.
4.  **Floating Elements**: Instead of soft shadows, use high-contrast, razor-thin borders (0.5px to 1px) in Luxury Silver (#C8CCD0) or the Chrome Gradient to make elements "pop" against the dark background.

## Shapes

The shape language balances "sharp precision" with "premium comfort." 

Standard components (buttons, input fields, cards) use a **0.5rem (8px)** corner radius. For larger containers or immersive image cards, use **1rem (16px)**. Avoid full circles (pills) except for small status indicators; maintaining corner structure is essential to the "architectural" look of this design system.

## Components

### Buttons
- **Primary**: Solid Precision Red (#E30613) with white text. No shadow, 1px inset top-border for a "machined" look.
- **Secondary**: Transparent background with the Chrome Gradient applied to a 1px border. Hover state fills with a 10% white overlay.
- **Tertiary/Ghost**: IBM Plex Mono text with a 1px underline that expands from the center on hover.

### Cards
Cards are "Smoked Glass" containers. Use a backdrop-filter (blur) and the defined glass border. Content within should have generous 32px internal padding.

### Inputs
Fields are #111111 with a bottom-only 1px border in Soft Chrome. On focus, the border transitions to Precision Red.

### Technical Spec Lists
Use IBM Plex Mono. Labels should be 50% opacity Soft Chrome, with the values in High-Contrast Silver or White. Separate rows with a 0.5px semi-transparent line.

### Motion & Interaction
Motion must feel "engineered." Use **Power4.out** easing for transitions—fast start, long smooth deceleration. Elements should slide in with a subtle 20px offset, mimicking the movement of a precision-weighted camera slider.