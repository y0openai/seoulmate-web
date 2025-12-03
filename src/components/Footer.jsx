import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-cta-section">
                <h2>{t('footer.readyTitle')}</h2>
                <p>{t('footer.readyDesc')}</p>
                <a href="https://seoulmate-app.web.app/login" className="footer-cta-button">{t('hero.cta')}</a>
            </div>

            <div className="footer-content">
                <div className="footer-brand">
                    <h2>LAYO</h2>
                    <p>{t('footer.brandDesc')}</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h3>{t('footer.company')}</h3>
                        <a href="#">{t('footer.about')}</a>
                        <a href="#">{t('footer.careers')}</a>
                        <a href="#">{t('footer.press')}</a>
                    </div>
                    <div className="link-group">
                        <h3>{t('footer.support')}</h3>
                        <a href="#">{t('footer.help')}</a>
                        <a href="#">{t('footer.safety')}</a>
                        <a href="#">{t('footer.terms')}</a>
                    </div>
                    <div className="link-group">
                        <h3>{t('footer.legal')}</h3>
                        <a href="#">{t('footer.privacy')}</a>
                        <a href="#">{t('footer.cookies')}</a>
                        <a href="#">{t('footer.licenses')}</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
