import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import logoLayo from '../assets/logo_layo.png';

const Hero = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="hero-section">
            <div className="hero-background">
                <img src="/assets/Gemini_Generated_Image_pxslzppxslzppxsl.png" alt="Seoulmate Hero" />
                <div className="hero-overlay"></div>
            </div>

            <motion.div
                className="hero-content"
                style={{ y: textY, opacity }}
            >
                <img src={logoLayo} alt="LAYO Logo" className="hero-logo" />
                <h1 className="hero-title">
                    LAYO<span className="hero-title-subtle">VER</span>
                </h1>
                <h2 className="hero-headline">{t('hero.headline')}</h2>
                <p className="hero-subheadline">{t('hero.subHeadline')}</p>
                <a href="https://seoulmate-app.web.app/login" className="cta-button">{t('hero.cta')}</a>
            </motion.div>
        </section>
    );
};

export default Hero;
