import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/aerocity-logo.png";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();
    const navbarTheme = true;

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close Mobile Menu
    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${sticky ? "dark-nav" : ""} ${navbarTheme ? "contact-nav" : ""}`}>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`mobile-nav-overlay ${mobileMenuOpen ? "active" : ""}`}
                onClick={closeMenu}
            ></div>

            {/* Nav Links */}
            <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="/legal" onClick={closeMenu}>Legal</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>

            <div
                className={`menu-hamburger-animated ${mobileMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    );
};

export default Navbar;