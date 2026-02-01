import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './LocalMate.css';

const locals = [
    {
        id: 1,
        nameKey: 'localMate.card1.name',
        tagsKey: 'localMate.card1.tags',
        descKey: 'localMate.card1.desc',
        image: '/assets/locals/fe_007.jpg'
    },
    {
        id: 2,
        nameKey: 'localMate.card2.name',
        tagsKey: 'localMate.card2.tags',
        descKey: 'localMate.card2.desc',
        image: '/assets/locals/ma_005.jpg'
    },
    {
        id: 3,
        nameKey: 'localMate.card3.name',
        tagsKey: 'localMate.card3.tags',
        descKey: 'localMate.card3.desc',
        image: '/assets/locals/fe_014.jpg'
    },
    {
        id: 4,
        nameKey: 'localMate.card4.name',
        tagsKey: 'localMate.card4.tags',
        descKey: 'localMate.card4.desc',
        image: '/assets/locals/ma_013.png'
    }
];

const LocalMate = () => {
    const { t } = useTranslation();

    return (
        <section className="local-mate-section">
            <div className="local-mate-header">
                <div className="section-badge">{t('localMate.badge')}</div>
                <h2 className="section-title">{t('localMate.title')}</h2>
                <p className="section-subtitle">{t('localMate.subtitle')}</p>
            </div>

            <div className="local-cards-container">
                {locals.map((local, index) => (
                    <motion.div
                        key={local.id}
                        className="local-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="card-image-wrapper">
                            <img src={local.image} alt={t(local.nameKey)} />
                            <div className="card-overlay"></div>
                        </div>
                        <div className="card-info">
                            <h3 className="local-name">{t(local.nameKey)}</h3>
                            <div className="local-tags">
                                {t(local.tagsKey, { returnObjects: true }).map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                            <p className="local-desc">"{t(local.descKey)}"</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LocalMate;
