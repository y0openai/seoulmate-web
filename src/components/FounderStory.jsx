import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import './FounderStory.css';

const FounderStory = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

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

            {/* Meet the Team Card */}
            <motion.div
                className="meet-team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="meet-team-icon">👥</div>
                <h3 className="meet-team-title">{t('meetTheTeam.title')}</h3>
                <p className="meet-team-subtitle">{t('meetTheTeam.subtitle')}</p>
                <button className="meet-team-cta">{t('meetTheTeam.cta')}</button>
            </motion.div>

            {/* Team Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="team-modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="team-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <button
                                className="team-modal-close"
                                onClick={() => setShowModal(false)}
                                aria-label={t('meetTheTeam.closeButton')}
                            >
                                <X size={24} />
                            </button>

                            {/* Founders Illustration */}
                            <motion.div
                                className="team-modal-image"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img
                                    src="/assets/locals/download (8).png"
                                    alt="Co-founders"
                                    className="founders-illustration"
                                />
                            </motion.div>

                            {/* Timeline */}
                            <div className="team-modal-timeline">
                                <h3 className="timeline-title">{t('meetTheTeam.timeline.title')}</h3>

                                {['step1', 'step2', 'step3', 'step4'].map((step, index) => (
                                    <motion.div
                                        key={step}
                                        className="timeline-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <div className="timeline-year">
                                            {t(`meetTheTeam.timeline.${step}.year`)}
                                        </div>
                                        <div className="timeline-content">
                                            <h4 className="timeline-step-title">
                                                {t(`meetTheTeam.timeline.${step}.title`)}
                                            </h4>
                                            <p className="timeline-step-desc">
                                                {t(`meetTheTeam.timeline.${step}.desc`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FounderStory;
