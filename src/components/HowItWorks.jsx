import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

// Import Videos
import vMatch from '../assets/videos/v_match.mp4';
import vMeet from '../assets/videos/v_meet.mp4';
import vSafety from '../assets/videos/v_safety.mp4';
import vExplore from '../assets/videos/v_explore.mp4';

const steps = [
    {
        id: 1,
        title: "Find Experiences",
        desc: "Discover unique local vibes curated just for crew.",
        video: vMatch
    },
    {
        id: 2,
        title: "Meet Local",
        desc: "Connect with verified Seoulmates instantly.",
        video: vMeet
    },
    {
        id: 3,
        title: "Share My Safety",
        desc: "Real-time location sharing for your peace of mind.",
        video: vSafety // Key Feature
    },
    {
        id: 4,
        title: "Discover Seoul",
        desc: "Dive into the night. It's time to explore.",
        video: vExplore
    }
];

const ParallaxSection = ({ step, index }) => {
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
                <h2 className="parallax-title">{step.title}</h2>
                <p className="parallax-desc">{step.desc}</p>
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
