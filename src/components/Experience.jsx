import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        image: '/assets/food.png',
        titleKey: 'experience.food.title',
        descKey: 'experience.food.desc',
        tag: 'Food'
    },
    {
        id: 2,
        image: '/assets/culture.png',
        titleKey: 'experience.culture.title',
        descKey: 'experience.culture.desc',
        tag: 'Culture'
    },
    {
        id: 3,
        image: '/assets/hero.png',
        titleKey: 'experience.nightlife.title',
        descKey: 'experience.nightlife.desc',
        tag: 'Nightlife',
        video: '/assets/서울_밤_남대문_포장마차_이야기.mp4'
    },
    {
        id: 4,
        image: '/assets/smart_shopping_2.png',
        titleKey: 'experience.smartShopping.title',
        descKey: 'experience.smartShopping.desc',
        tag: 'Shopping',
        video: '/assets/로컬_가이드_승무원_쇼핑_돕기.mp4'
    }
];

const Experience = () => {
    const { t } = useTranslation();
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleCardClick = (video) => {
        if (video) {
            setSelectedVideo(video);
        }
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <section className="experience-section">
            <div className="experience-header">
                <h2 className="experience-title">Curated for Crew</h2>
                <p className="experience-subtitle">Short on time? We've got you covered.</p>
            </div>

            <div className="experience-carousel">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="experience-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        onClick={() => handleCardClick(exp.video)}
                        style={{ cursor: exp.video ? 'pointer' : 'default' }}
                    >
                        <div className="card-image">
                            <img src={exp.image} alt={t(exp.titleKey)} />
                            <span className="card-tag">{exp.tag}</span>
                            {exp.video && (
                                <div className="play-icon-overlay">
                                    ▶
                                </div>
                            )}
                        </div>
                        <div className="card-content">
                            <h3>{t(exp.titleKey)}</h3>
                            <p>{t(exp.descKey)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="video-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeVideo}
                    >
                        <motion.div
                            className="video-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-button" onClick={closeVideo}>
                                <X size={24} />
                            </button>
                            <video controls autoPlay className="modal-video">
                                <source src={selectedVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
