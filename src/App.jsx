import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import FounderStory from './components/FounderStory';
import HowItWorks from './components/HowItWorks';
import Safety from './components/Safety';
import Experience from './components/Experience';
import LocalMate from './components/LocalMate';
import Footer from './components/Footer';
import './index.css';

function App() {
  const { t } = useTranslation();
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past Hero (approx 80vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <main>
        <Hero />
        <HowItWorks />
        <Safety />
        <FounderStory />
        <Experience />
        <LocalMate />
      </main>
      <Footer />

      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            className="sticky-cta-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://seoulmate-app.web.app/login" className="sticky-cta-button">
              {t('hero.cta')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
