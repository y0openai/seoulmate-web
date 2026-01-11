import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './FounderStory.css';

const FounderStory = () => {
    const { t } = useTranslation();

    // Container animation for the entire section
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    // Quote mark icon animation
    const quoteMarkVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Quote text animation
    const quoteVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
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

    // Divider animation
    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
                delay: 0.2,
            },
        },
    };

    // Values animation
    const valuesVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.15,
            },
        },
    };

    // Profile image animation
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.25,
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
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* Quote Mark Icon */}
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

            {/* Profile Image */}
            <motion.img
                src="/assets/founder-profile.png"
                alt="Founder"
                className="founder-story-image"
                variants={imageVariants}
            />

            {/* Author Attribution */}
            <motion.p
                className="founder-story-author"
                variants={authorVariants}
            >
                {t('hero.founderStoryAuthor')}
            </motion.p>

            {/* Divider Line */}
            <motion.div
                className="founder-story-divider"
                variants={dividerVariants}
            />

            {/* Values */}
            <motion.p
                className="founder-story-values"
                variants={valuesVariants}
            >
                {t('hero.founderStoryValues')}
            </motion.p>
        </motion.div>
    );
};

export default FounderStory;
