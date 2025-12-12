import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import logoLayo from '../assets/logo_layo.png';

const Hero = () => {
    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);

    // Original Animation Refs
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (showVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showVideo]);

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

                <div className="hero-actions">
                    <a href="https://seoulmate-app.web.app/login" className="cta-button primary">{t('hero.cta')}</a>

                    <button className="cta-button secondary glass" onClick={() => setShowVideo(true)}>
                        <span className="play-icon">▶</span> Watch Brand Film
                    </button>
                </div>
            </motion.div>

            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        className="video-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            className="video-modal-container"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setShowVideo(false)}>×</button>
                            <video controls autoPlay className="full-brand-video">
                                <source src="/assets/videos/brand_film.mp4?v=2" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
