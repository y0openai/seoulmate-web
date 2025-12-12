import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, ShieldCheck, Siren } from 'lucide-react';
import './Safety.css';

const Safety = () => {
    const { t } = useTranslation();

    return (
        <section className="safety-section">
            <div className="safety-container">
                <motion.div
                    className="safety-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="safety-title">{t('safety.title')}</h2>
                    <p className="safety-description">{t('safety.description')}</p>
                    <div className="safety-badges">
                        <div className="badge">
                            <MapPin className="badge-icon icon-lime" />
                            <span>Real-time Tracking</span>
                        </div>
                        <div className="badge">
                            <ShieldCheck className="badge-icon icon-purple" />
                            <span>Safe Zones</span>
                        </div>
                        <div className="badge">
                            <Siren className="badge-icon icon-red" />
                            <span>Emergency SOS</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="safety-visual"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="map-card">
                        <img src="/assets/safety.png" alt="Safety Map" />
                        <div className="radar-pulse"></div>
                        <div className="user-pin"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="social-proof-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="social-proof-text">{t('safety.socialProof')}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Safety;
