import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Video2 from "../../assets/video2.mp4";
import Video3 from "../../assets/video3.mp4";
import Airport from "../../assets/airport.webp";
import AtalSetu from "../../assets/atal-setu.webp";
import Jnpt from "../../assets/jnpt-highway.jpeg";
import Railway from "../../assets/railway-line.avif";
import SeaLink from "../../assets/sea-link.jpeg";
import Port from "../../assets/jnpt-port.jpg";
import Virar from "../../assets/virar-alibaug-multi.jpg";
import Ranjanpada from "../../assets/ranjanpada-railway-station.jpg";
import HeroImage from "../../assets/hero-image.png";


const Hero = () => {

  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    {
      id: 0,
      type: "image",
      src: HeroImage,
      title: "",
      subtitle: ""
    },
    {
      id: 1,
      type: "video",
      src: Video2,
      title: "Mumbai 3.0",
      subtitle: "KSC Town"
    },
    {
      id: 2,
      type: "video",
      src: Video3,
      title: "Aerocity Developers & Consultants",
      subtitle: ""
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNextSlide = () => {
    setCurrentVideo((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (slides[currentVideo].type === "image") {
      const timer = setTimeout(() => {
        handleNextSlide();
      }, 5000); // Show image for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [currentVideo]);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrolled = -top;
        const totalScrollableHeight = height - windowHeight;

        let progress = scrolled / totalScrollableHeight;

        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky-track" ref={containerRef}>
      <div className="sticky-viewport">
        {slides[currentVideo].type === "video" ? (
          <video
            key={currentVideo}
            src={slides[currentVideo].src}
            className="hero-video"
            autoPlay
            muted
            playsInline
            onEnded={handleNextSlide}
          />
        ) : (
          <img
            key={currentVideo}
            src={slides[currentVideo].src}
            className="hero-video hero-image-content"
            alt="Hero"
          />
        )}

        <div className={`hero-overlay ${slides[currentVideo].type === "image" ? "image-overlay" : ""}`}></div>

        <div
          className="hero-contents main-title"
          style={{
            opacity: scrollProgress < 0.15 ? 1 : 0,
            pointerEvents: scrollProgress < 0.15 ? 'auto' : 'none'
          }}
        >
          <h1>{slides[currentVideo].title}</h1>
          {slides[currentVideo].subtitle && <p>{slides[currentVideo].subtitle}</p>}
        </div>

        {/* --- STAGE 1: CONTENT FROM RIGHT --- */}
        <div className={`info-card right-card ${scrollProgress > 0.20 && scrollProgress < 0.40 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>Navi Mumbai International Airport </h2>
            <img src={Airport} alt="airport-img" />
          </div>
          <div className="info-card-desc">
            <h2>Atal Setu (MTHL)</h2>
            <img src={AtalSetu} alt="atalsetu-img" />
          </div>
        </div>

        {/* --- STAGE 2: CONTENT FROM BOTTOM --- */}
        <div className={`info-card bottom-card ${scrollProgress > 0.40 && scrollProgress < 0.60 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>JNPT Highway</h2>
            <img src={Jnpt} alt="jnpt-img" />
          </div>
          <div className="info-card-desc">
            <h2>The Nerul - Urban Railway Line</h2>
            <img src={Railway} alt="railway-img" />
          </div>
        </div>

        {/* --- STAGE 3: CONTENT FROM LEFT --- */}
        <div className={`info-card left-card ${scrollProgress > 0.60 && scrollProgress < 0.80 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>Colaba - Urban Sea Link</h2>
            <img src={SeaLink} alt="sealink-img" />
          </div>
          <div className="info-card-desc">
            <h2>JNPT Port</h2>
            <img src={Port} alt="port-img" />
          </div>
        </div>

          {/* --- STAGE 4: CONTENT FROM TOP --- */}
        <div className={`info-card top-card ${scrollProgress > 0.80 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>Virar Alibaug Multi Modal Corridor</h2>
            <img src={Virar} alt="virar-img" />
          </div>
          <div className="info-card-desc">
            <h2>Ranjanpada Railway Station</h2>
            <img src={Ranjanpada} alt="ranjanpada-img" />
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <span key={index} className={`dot ${index === currentVideo ? "active" : ""}`}></span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;