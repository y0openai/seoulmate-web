import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './FounderStory.css';

const FounderStory = () => {
    const { t } = useTranslation();

    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    // Image side animation
    const imageVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Content side animation
    const contentVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Quote mark animation
    const quoteMarkVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    // Quote text animation
    const quoteVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Author animation
    const authorVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
            },
        },
    };

    // Values animation
    const valuesVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    // Split quote into lines
    const quoteLines = t('hero.founderStoryQuote').split('\n');

    return (
        <motion.div
            className="founder-story-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="founder-story-card">
                {/* Left: Image */}
                <motion.div
                    className="founder-story-image-side"
                    variants={imageVariants}
                >
                    <div className="founder-story-image-wrapper">
                        <img
                            src="/assets/Cofounders-profile.jpeg"
                            alt="Co-founders"
                            className="founder-story-image"
                        />
                        <div className="founder-story-image-glow" />
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    className="founder-story-content-side"
                    variants={contentVariants}
                >
                    {/* Quote Mark */}
                    <motion.div
                        className="founder-story-quote-mark"
                        variants={quoteMarkVariants}
                    />

                    {/* Quote Text */}
                    <div className="founder-story-quote-wrapper">
                        {quoteLines.map((line, idx) => (
                            <motion.p
                                key={idx}
                                className="founder-story-quote"
                                variants={quoteVariants}
                            >
                                {line || '\u00A0'}
                            </motion.p>
                        ))}
                    </div>

                    {/* Author Attribution */}
                    <motion.p
                        className="founder-story-author"
                        variants={authorVariants}
                    >
                        {t('hero.founderStoryAuthor')}
                    </motion.p>

                    {/* Values */}
                    <motion.div
                        className="founder-story-values-wrapper"
                        variants={valuesVariants}
                    >
                        <div className="founder-story-divider" />
                        <p className="founder-story-values">
                            {t('hero.founderStoryValues')}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FounderStory;
