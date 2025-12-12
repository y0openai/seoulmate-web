import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

// Video paths are now referenced directly from public/assets/videos
const steps = [
    {
        id: 1,
        titleKey: "howItWorks.match.title",
        descKey: "howItWorks.match.desc",
        video: '/assets/videos/v_match.mp4'
    },
    {
        id: 2,
        titleKey: "howItWorks.meet.title",
        descKey: "howItWorks.meet.desc",
        video: '/assets/videos/v_meet.mp4'
    },
    {
        id: 3,
        titleKey: "howItWorks.safety.title",
        descKey: "howItWorks.safety.desc",
        video: '/assets/videos/v_safety.mp4' // Key Feature
    },
    {
        id: 4,
        titleKey: "howItWorks.explore.title",
        descKey: "howItWorks.explore.desc",
        video: '/assets/videos/v_explore.mp4'
    }
];

const ParallaxSection = ({ step, index }) => {
    const { t } = useTranslation();

    return (
        <section className="parallax-section">
            {/* Background Video */}
            <video
                className="parallax-bg-video"
                src={step.video}
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Content Overlay */}
            <motion.div
                className="parallax-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <span className="parallax-step-number">Step 0{step.id}</span>
                <h2 className="parallax-title">{t(step.titleKey)}</h2>
                <p className="parallax-desc">{t(step.descKey)}</p>
            </motion.div>
        </section>
    );
};

const HowItWorks = () => {
    return (
        <div className="parallax-container">
            {steps.map((step, index) => (
                <ParallaxSection key={step.id} step={step} index={index} />
            ))}
        </div>
    );
};

export default HowItWorks;
