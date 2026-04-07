import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Video2 from "../../assets/video2.mp4";
import Video3 from "../../assets/video3.mp4";
import Airport from "../../assets/airport.png";
import AtalSetu from "../../assets/atal-setu.png";
import Jnpt from "../../assets/jnpt-highway.png";
import Railway from "../../assets/railway-line.png";
import SeaLink from "../../assets/sea-link.png";
import Port from "../../assets/rewas-port.png";
import PopUpImg from "../../assets/pop-up-img.png";


const Hero = () => {

  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    {
      id: 1,
      src: Video2,
      title: "Mumbai 3.0",
      subtitle: "KSC Town"
    },
    {
      id: 2,
      src: Video3,
      title: "Aerocity Developers & Consultants",
      subtitle: ""
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

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
        <video
          key={currentVideo}
          src={slides[currentVideo].src}
          className="hero-video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />

        <div className="hero-overlay"></div>

        <div
          className={`hero-contents main-title ${currentVideo === 1 ? "second-video-layout" : ""}`}
          style={{
            opacity: scrollProgress < 0.15 ? 1 : 0,
            pointerEvents: scrollProgress < 0.15 ? 'auto' : 'none'
          }}
        >
          {currentVideo === 1 ? (
            <div className="hero-split-content">
              <div className="hero-left">
                <h1>{slides[currentVideo].title}</h1>
              </div>
              <div className="hero-right">
                <img src={PopUpImg} alt="popup" className="pop-up-hero-img" />
              </div>
            </div>
          ) : (
            <>
              <h1>{slides[currentVideo].title}</h1>
              {slides[currentVideo].subtitle && <p>{slides[currentVideo].subtitle}</p>}
            </>
          )}
        </div>

        {/* --- STAGE 1: CONTENT FROM RIGHT --- */}
        <div className={`info-card right-card ${scrollProgress > 0.20 && scrollProgress < 0.45 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>Navi Mumbai International Airport </h2>
            <img src={Airport} alt="airport-img" />
            <p>
              “The Navi Mumbai International Airport — the
              world’s first Greenfield airport with 4-way
              connectivity via road, rail, metro, and waterway
              — will also serve as a major domestic and
              international cargo hub, driving massive growth
              in trade and real estate values across Mumbai
              3.0.”
            </p>
          </div>
          <div className="info-card-desc">
            <h2>Atal Setu (MTHL)</h2>
            <img src={AtalSetu} alt="atalsetu-img" />
            <p>
              “The Atal Setu Sea Link — India’s longest sea
              bridge — seamlessly connects South
              Mumbai to Navi Mumbai and Mumbai 3.0,
              cutting travel time and accelerating regional
              growth.”
            </p>
          </div>
        </div>

        {/* --- STAGE 2: CONTENT FROM BOTTOM --- */}
        <div className={`info-card bottom-card ${scrollProgress > 0.45 && scrollProgress < 0.70 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>JNPT Highway</h2>
            <img src={Jnpt} alt="jnpt-img" />
            <p>
              “The JNPT Highway strengthens logistics and
              cargo connectivity between the port, airport,
              and Mumbai 3.0, making the region a key hub
              for trade and investment.”
            </p>
          </div>
          <div className="info-card-desc">
            <h2>The Nerul - Urban Railway Line</h2>
            <img src={Railway} alt="railway-img" />
            <p>
              “The Nerul–Uran railway line enhances
              direct connectivity to Navi Mumbai and
              Mumbai 3.0, boosting accessibility,
              development, and property demand across
              the corridor.”
            </p>
          </div>
        </div>

        {/* --- STAGE 3: CONTENT FROM LEFT --- */}
        <div className={`info-card left-card ${scrollProgress > 0.70 ? "active" : ""}`}>
          <div className="info-card-desc">
            <h2>Colaba - Urban Sea Link</h2>
            <img src={SeaLink} alt="sealink-img" />
            <p>
              “The upcoming Colaba–Uran Sea Link will
              directly connect South Mumbai to Navi
              Mumbai and Mumbai 3.0, reducing travel time
              and boosting premium residential and
              commercial demand across the corridor.”
            </p>
          </div>
          <div className="info-card-desc">
            <h2>Rewas Port</h2>
            <img src={Port} alt="port-img" />
            <p>
              “Rewas Port, a major upcoming deep-water port
              near Alibaug, will enhance cargo handling,
              trade, and logistics connectivity — driving
              industrial and real estate growth in the Mumbai
              3.0 region.”
            </p>
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