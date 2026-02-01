# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start Vite dev server (http://localhost:5173)

# Building
npm run build        # Production build → dist/
npm run preview      # Preview production build locally

# Quality
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Build and deploy to Firebase Hosting
```

## Project Architecture

### Tech Stack
- **React 19** with Vite for fast development
- **i18next** for internationalization (EN, KO, JA)
- **Framer Motion** for scroll-based animations and transitions
- **Firebase Hosting** for deployment (deploys `dist/` folder)

### Component Structure
Single-page application with component-based architecture:
- Each component has a paired `.jsx` + `.css` file in `src/components/`
- Main layout: `App.jsx` → [LanguageSwitcher, Hero, HowItWorks, Safety, FounderStory, Experience, LocalMate, Footer]
- Sticky CTA appears after scrolling past hero section (triggered at 80vh scroll)

### Internationalization System
**Location**: `src/i18n.js` initializes i18next with translations from `src/locales/{en,ko,ja}.json`

**Usage Pattern**:
```jsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  return <h1>{t('hero.headline')}</h1>;
};
```

**Translation Structure**: Nested JSON with section-based keys:
- `hero.*` - Hero section content
- `safety.*` - Safety section content
- `howItWorks.*` - How It Works section
- `localMate.*` - Local Mates section
- `experience.*` - Experience section
- `footer.*` - Footer section

**Adding New Translations**:
1. Add key to all three locale files (`en.json`, `ko.json`, `ja.json`)
2. Use hierarchical keys matching component structure
3. Reference with `t('section.key')` in components

### Animation Patterns
**Scroll-based animations** using Framer Motion:
```jsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"]
});
const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
```

**Conditional animations** with AnimatePresence:
```jsx
<AnimatePresence>
  {condition && (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
    />
  )}
</AnimatePresence>
```

**Modal scroll lock**: When modals open, set `document.body.style.overflow = 'hidden'` and restore on close

### Firebase Deployment
- **Hosting config**: `firebase.json` configures SPA routing (all routes → `/index.html`)
- **Build artifact**: `dist/` folder contains production build
- **Deploy process**: `npm run deploy` builds and deploys in one command

## Important Notes

### Language Changes
When updating UI text:
1. Update all three locale files simultaneously to maintain parity
2. Keep translation keys consistent across languages
3. Test language switcher after changes

### Asset References
Assets in `public/assets/` are referenced with absolute paths: `/assets/filename.ext`

### Component Styling
Each component imports its own CSS file. Global styles in `src/index.css` and CSS variables in `src/styles/variables.css`.
