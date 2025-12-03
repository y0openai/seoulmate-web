# LAYO Design System & Visual Strategy

> **Status**: Draft
> **Last Updated**: 2025-12-03
> **Theme**: "Safe Adventure" (M3 + Neo-Brutalism)

## 1. Design Philosophy

We are blending the **usability and accessibility of Material Design 3 (M3)** with the **bold, raw energy of Neo-Brutalism**. This creates a unique aesthetic that feels both "trustworthy" (M3) and "exciting/hip" (Neo-Brutalism).

*   **Core Concept**: **"Structured Chaos"**
    *   **Structure**: M3 Grid, Spacing, and Interaction states ensure the app feels safe and familiar.
    *   **Chaos (Fun)**: Bold borders, high contrast, slight misalignments, and vibrant colors to evoke the excitement of a layover adventure.
*   **Interaction**: **Scroll-Telling**
    *   The story unfolds as the user scrolls. Elements don't just appear; they slide, rotate, and assemble to tell the narrative of "Match -> Meet -> Explore".
*   **Voice & Tone**: **Toss UX Writing Style**
    *   **Empathetic**: "Tired from the long flight? Let's make the next 4 hours count."
    *   **Concise**: "No planning needed."
    *   **Friendly**: "Meet your Seoulmate."

## 2. Color Palette

High contrast is key for Neo-Brutalism.

### Primary Colors
*   **Midnight Black** (`#0B0D14`): Background. Deep, infinite, premium.
*   **Neon Lime** (`#CCFF00`): Primary Accent. Used for CTAs, highlights, and key interactions. Represents energy and "Go".
*   **Paper White** (`#F5F5F5`): Text and Surface. Slightly off-white for readability.

### Secondary Colors (Functional)
*   **Electric Purple** (`#9D00FF`): Secondary Accent. Used for "Nightlife" or "Vibe" elements.
*   **Signal Blue** (`#0057FF`): Trust/Safety elements (Safe Zone, Tracking).
*   **Alert Red** (`#FF3B30`): Important warnings or "Hot" items.

## 3. Typography

*   **Font Family**: **Inter** (Google Fonts)
    *   Clean, readable, and versatile. Fits both M3 and Brutalism.
*   **Styles**:
    *   **Display**: `96px`, Black (900), Tight tracking (-2%). Used for big, bold headlines.
    *   **Heading**: `48px`, Bold (700).
    *   **Body**: `18px`, Regular (400). High readability.
    *   **Button**: `16px`, Bold (700), Uppercase.

## 4. UI Components (M3 x Neo-Brutalism)

### Buttons
*   **Shape**: Sharp corners (`border-radius: 0px` or `4px`) instead of M3's pill shape.
*   **Style**:
    *   **Primary**: Neon Lime background, Black text, **Thick Black Border (2px)**, Hard Drop Shadow (4px offset, no blur).
    *   **Secondary**: Transparent background, White border (2px), White text.

### Cards
*   **Shape**: M3 Card structure but with **2px solid borders** and **hard shadows**.
*   **Hover**: On hover, the shadow offset increases (e.g., 4px -> 8px), creating a tactile "lift" effect without blur.

### Layout & Spacing
*   **Grid**: 12-column grid (M3 standard).
*   **Spacing**: Generous whitespace to let the bold typography breathe.

## 5. Scroll-Telling Strategy

We will use `framer-motion` to trigger animations based on scroll position.

### Section 1: Hero
*   **Visual**: A split screen or collage of Crew & Local.
*   **Scroll Action**: As user scrolls down, the "LAYO" logo expands to fill the screen, then becomes transparent to reveal the map behind it.

### Section 2: Safety (The Trust Anchor)
*   **Visual**: A 3D-style map tilted 45 degrees.
*   **Scroll Action**:
    *   A "User Pin" moves along a path.
    *   "Safe Zones" pop up as blue shields as the pin passes them.
    *   **Text**: "We watch your back, so you can look forward."

### Section 3: How It Works
*   **Visual**: Three large cards (Match, Meet, Explore).
*   **Scroll Action**: Horizontal scroll (sticky container). The cards slide in from the right, stacking on top of each other like a deck of cards.

## 6. Asset Requirements

We need high-quality, generated images that fit this "Hip & Safe" vibe.

### Image List
1.  **Hero Image**: A stylish flight crew member (in uniform but relaxed) and a trendy local Korean friend laughing together at a neon-lit street food stall.
    *   *Keywords*: Nightlife, Street Food, Friendship, Diversity, Neon.
    ![Hero Image](/public/assets/hero.png)

2.  **Safety Abstract**: A stylized 3D map of Seoul with glowing "Safe Zones" and a connecting path. Minimalist and tech-focused.
    ![Safety Image](/public/assets/safety.png)

3.  **Experience - Food**: Close-up of Korean BBQ or vibrant street food, high saturation.
    ![Food Image](/public/assets/food.png)

4.  **Experience - Culture**: A modern take on Gyeongbokgung Palace (maybe with a fashion shoot vibe).
    ![Culture Image](/public/assets/culture.png)

5.  **Community**: A group of diverse crew members toasting drinks in a lounge setting.
    *   *(Pending Generation)*

## 7. Implementation Notes

*   **CSS Variables**: Define all colors and spacing in `:root`.
*   **Motion**: Use `useScroll` and `useTransform` from `framer-motion`.
*   **Responsiveness**: On mobile, stack the horizontal scroll sections vertically for better UX.
