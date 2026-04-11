import './Footer.css';
import logo from '../../assets/aerocity-logo.png';
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* --- COLUMN 1: Company Info & Contact --- */}
                <div className="footer-col company-info">
                    <img src={logo} alt="Aerocity Logo" className="footer-logo" />
                    <p className="company-desc">
                        A tradition of trust. We are your partners in growth, guiding you through the smart city revolution of the Navi Mumbai region.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <MapPin size={20} className="footer-icon" />
                            <span>A-308, Hermes Atrium, Sector-11, C.B.D Belapur, Navi Mumbai- 400614</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="footer-icon" />
                            <div>
                                <a href="tel:+918355913457">+91 83559 13457</a>
                                <span> | </span>
                                <a href="tel:+918655532474">+91 86555 32474</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="footer-icon" />
                            <a href="mailto:info@aerocitydevelopers.com">info@aerocitydevelopers.com</a>
                        </div>
                    </div>
                </div>

                {/* --- COLUMN 2: Quick Links --- */}
                <div className="footer-col quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/legal">Legal</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* --- COLUMN 3: Social Media & Newsletter --- */}
                <div className="footer-col social-media">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media for latest updates, news, and exclusive offers.</p>
                    <div className="social-icons">
                        <a
                            href="https://www.youtube.com/@aerocitydevelopersofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <Youtube size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/aerocitydevelopersofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        {/* Update with your actual Facebook URL */}
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>

            </div>

            {/* --- Copyright Bar --- */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Aerocity Developers & Consultants. All Rights Reserved. | Crafted By <a href="https://digitaltoinfinity.com/" target="_blank" rel="noopener noreferrer">Dignity To Infinity</a></p>
            </div>
        </footer>
    );
};

export default Footer;