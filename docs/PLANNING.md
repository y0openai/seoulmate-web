# LAYO Promotional Website Planning

> **Status**: Draft
> **Last Updated**: 2025-12-03
> **Objective**: Create a world-class promotional website for "LAYO" (Seoulmate's new brand identity for layovers) to attract Crews (primary) and Locals (secondary).

## 1. Project Overview

*   **Project Name**: LAYO (Short for Layover)
*   **Goal**: Effectively communicate the value of LAYO ("The best way to spend a short layover") and drive app installs/sign-ups.
*   **Target Audience**:
    1.  **Primary**: International Flight Crew (Layover focus, safety-conscious, looking for authentic experiences).
    2.  **Secondary**: Local Guides (Wanting to meet global friends, earn extra income, share culture).
*   **Key Mood**: **Safe, Trustworthy**, Premium, Global, Welcoming.

## 2. Core Message & Value Proposition

### For Crew (Primary)
*   **Headline**: "LAYO: Your Safe & Authentic Layover in Seoul"
*   **Sub-headline**: "Meet verified locals, explore hidden gems, and stay safe with our real-time tracking system."
*   **Key Benefits**:
    *   **Safety First**: Real-time tracking, Safe Zones, Verified Locals.
    *   **Time-Efficient**: Curated experiences for short layovers.
    *   **Authentic Connection**: Meet real Seoulites, not just tour guides.

### For Local (Secondary)
*   **Headline**: "Become a Seoulmate"
*   **Sub-headline**: "Share your Seoul with the world and make global friends."
*   **Key Benefits**:
    *   **Global Networking**: Meet crew members from top airlines.
    *   **Flexible Schedule**: Host tours when you are free.
    *   **Earn Income**: Monetize your local knowledge.

## 3. Site Structure (Sitemap)

The website will be a **Single Page Application (Landing Page)** with smooth scrolling sections.

1.  **Hero Section**
    *   High-impact visual (Crew & Local exploring Seoul).
    *   Clear Value Proposition.
    *   CTA: "Download App" / "Start Your Journey".
    *   Language Switcher (Sticky).

2.  **Safety Feature (Trust Anchor)**
    *   Highlight "Digital Bodyguard" features (Tracking, SOS).
    *   Visual: Map interface, Safety shield icon.
    *   *Why*: Addresses the #1 concern of the primary target (Safety).

3.  **How It Works (Crew Flow)**
    *   Step 1: Match (Find a Local).
    *   Step 2: Meet (Safe meeting point).
    *   Step 3: Explore (Enjoy the experience).

4.  **Experience Showcase**
    *   Carousel of popular experiences (Food, Nightlife, Culture).
    *   High-quality imagery.

5.  **Crew Lounge (Community)**
    *   Teaser of the exclusive community feature.
    *   "Join the conversation with other crews."

6.  **For Locals (Secondary CTA)**
    *   "Want to be a host?" section.
    *   Benefits for Locals.
    *   CTA: "Apply as Local".

7.  **Footer**
    *   Links to App Store / Play Store.
    *   Social Media links.
    *   Contact / Support.

## 4. Multilingual Strategy

*   **Supported Languages**: English (Default), Korean, Japanese.
*   **Implementation**:
    *   Use `react-i18next`.
    *   Language switcher prominent in the header.
    *   Content stored in JSON files for easy translation updates.

## 5. Technical Approach

### Standalone Project (`seoulmate-web`)
*   **Approach**: Create a new Vite project in `seoulmate-web`.
*   **Stack**:
    *   **Framework**: React 19 + Vite.
    *   **Styling**: CSS Modules (Vanilla CSS) + M3 Design System (Copied/Adapted from App).
    *   **Animation**: `framer-motion` (for "World-class" smooth animations).
*   **Pros**:
    *   Clean slate (No legacy code).
    *   Optimized for landing page performance (lighter bundle).
    *   Independent deployment.

## 6. Design & Resources

*   **Visual Style**:
    *   **Colors**: Deep Navy (Trust), Indigo/Purple (Premium/Mystery), Neon Lime (Vibrant Accent).
    *   **Typography**: Inter (Clean, Modern).
    *   **Imagery**: High-quality generated images depicting "Safe Nightlife", "Friendly Locals", "Seoul Landmarks".
*   **Asset Management**:
    *   All assets stored in `public/assets`.
    *   Placeholder images generated via DALL-E 3 (via Agent tool).

## 7. Next Steps (Execution Plan)

1.  **Approve Plan**: User reviews this document.
2.  **Design Phase**:
    *   Create `docs/DESIGN.md` (Detailed visual specs).
    *   Generate assets.
3.  **Development Phase**:
    *   Initialize `seoulmate-web` project.
    *   Implement sections one by one.
    *   Add multilingual support.
4.  **Review**: Final user check.
