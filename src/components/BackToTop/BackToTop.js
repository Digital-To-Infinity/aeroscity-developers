import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            // Show button if scrolled down more than 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // Clean up event listener
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className={`back-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
            <ArrowUp size={24} color="#fff" />
        </div>
    );
};

export default BackToTop;
