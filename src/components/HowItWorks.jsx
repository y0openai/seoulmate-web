import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

const steps = [
    {
        id: 1,
        icon: '🤝',
        titleKey: 'howItWorks.step1.title',
        descKey: 'howItWorks.step1.desc'
    },
    {
        id: 2,
        icon: '📍',
        titleKey: 'howItWorks.step2.title',
        descKey: 'howItWorks.step2.desc'
    },
    {
        id: 3,
        icon: '🎉',
        titleKey: 'howItWorks.step3.title',
        descKey: 'howItWorks.step3.desc'
    }
];

const HowItWorks = () => {
    const { t } = useTranslation();

    return (
        <section className="how-it-works-section">
            <div className="how-it-works-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">{t('howItWorks.title')}</h2>
                    <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
                </motion.div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="step-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="step-icon-wrapper">
                                <span className="step-icon">{step.icon}</span>
                                {index < steps.length - 1 && <div className="step-connector" />}
                            </div>
                            <h3 className="step-title">{t(step.titleKey)}</h3>
                            <p className="step-desc">{t(step.descKey)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
