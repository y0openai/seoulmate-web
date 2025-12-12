import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import './Experience.css';

const experiences = [
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
    },
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="experience-title">{t('experience.sectionTitle')}</h2>
                    <p className="experience-subtitle">{t('experience.sectionSubtitle')}</p>
                </motion.div>
            </div>

            {/* Featured Video Section - Cinematic Experience */}
            <motion.div
                className="featured-video-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="video-glow-effect"></div>
                <div className="featured-video-container">
                    <video
                        className="featured-main-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/assets/smart_shopping.png" // Fallback image
                    >
                        {/* 
                            TODO: Replace with actual video file path. 
                            Users should upload their file to src/assets/videos/ 
                        */}
                        <source src="/assets/videos/crew_interview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="video-overlay-gradient"></div>

                    <div className="video-content-overlay">
                        <span className="video-label">CREW TESTIMONIAL</span>
                        <h3 className="video-headline">Real Experience</h3>
                        <p className="video-description">"Seoulmate, they made my layover unforgettable."</p>
                    </div>

                    <button className="video-unmute-btn" onClick={(e) => {
                        const video = e.target.closest('.featured-video-container').querySelector('video');
                        video.muted = !video.muted;
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                    </button>
                </div>
            </motion.div>

            <div className="experience-carousel">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="experience-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }} // Staggered after video
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
