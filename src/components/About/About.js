import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { ShieldCheck, MapPin, Users, TrendingUp, Scale, Building2 } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Data for the 6 Points
  const features = [
    {
      id: 1,
      icon: <ShieldCheck size={40} />,
      title: "Trust & Transparency",
      desc: "We are one of Maharashtra’s most trusted organizations, built on a foundation of ethical business practices and complete transparency."
    },
    {
      id: 2,
      icon: <MapPin size={40} />,
      title: "Mumbai 3.0 Vision",
      desc: "Actively shaping the future of Third Mumbai, offering prime opportunities near Navi Mumbai International Airport and Panvel."
    },
    {
      id: 3,
      icon: <Scale size={40} />,
      title: "100% Legal Process",
      desc: "Peace of mind guaranteed. All our projects are backed by 100% legal processes, ensuring your investment is safe and secure."
    },
    {
      id: 4,
      icon: <Users size={40} />,
      title: "Elite Clientele",
      desc: "Trusted by Bureaucrats, Defense Officers, Advocates, Teachers, and Professionals who demand nothing but the best."
    },
    {
      id: 5,
      icon: <TrendingUp size={40} />,
      title: "Long-Term Growth",
      desc: "We don’t just sell plots; we build wealth. Our focus is on high-appreciation zones that secure your financial future."
    },
    {
      id: 6,
      icon: <Building2 size={40} />,
      title: "Aerocity Consultants",
      desc: "More than developers, we are consultants guiding you through the smart city revolution of the Navi Mumbai region."
    },
  ];

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        
        {/* Header Section */}
        <div className={`about-header ${isVisible ? "animate-up" : ""}`}>
          <h4 className="sub-heading">Who We Are</h4>
          <h2 className="main-heading">Aerocity Developers & Consultants</h2>
          <p className="intro-text">
            Welcome to one of Maharashtra’s most trusted and transparent real estate organizations. 
            At Aerocity, we don’t just sell plots — we build <strong>trust, security, and long-term growth</strong>. 
            Backed by genuine investment opportunities, we are shaping the skyline of Mumbai 3.0.
          </p>
        </div>

        {/* 6 Points Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-card ${isVisible ? "animate-card" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }} 
            >
              <div className="icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default About;