import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "Property Investor",
    content: "Aerocity is the gold standard for plot investments. Their transparency and professional approach made my investment journey seamless. The appreciation potential here is huge!",
    rating: 5,
    location: "Mumbai, Maharashtra"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Home Owner",
    content: "Building my dream home started with the right plot. Aerocity provided a stress-free experience from registration to possession. Highly reliable developer!",
    rating: 5,
    location: "Pune, Maharashtra"
  },
  {
    id: 3,
    name: "Amit Singhania",
    role: "Business Owner",
    content: "I purchased an industrial plot for my logistics venture. The infrastructure connectivity promised by Aerocity is exceptional. A top-tier developer for professionals.",
    rating: 4,
    location: "Thane, Maharashtra"
  },
  {
    id: 4,
    name: "Rohan Kapoor",
    role: "Consultant",
    content: "The ROI I've seen in just 6 months is mind-blowing. Aerocity projects are in high-growth corridors. If you're looking for real wealth, start here.",
    rating: 5,
    location: "Navi Mumbai, Maharashtra"
  },
  {
    id: 5,
    name: "Ananya Desai",
    role: "NR Investor",
    content: "Being an NRI, trust was my biggest concern. Aerocity team made everything clear and simple. Their digital documentation process is efficient and trustworthy.",
    rating: 5,
    location: "Dubai, UAE"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - itemsToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - itemsToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const onDragEnd = (event, info) => {
    const threshold = 30;
    if (info.offset.x < -threshold) handleNext();
    else if (info.offset.x > threshold) handlePrev();
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
            <span className="testimonials-badge">REVIEWS & FEEDBACK</span>
            <h2 className="testimonials-heading">Happy Customers</h2>
            <div className="testimonials-underline"></div>
        </div>

        <div 
          className="testimonials-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            ref={trackRef}
            className="testimonials-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={onDragEnd}
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="testimonial-card-wrapper"
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
              >
                <div className="testimonial-card">
                  <div className="quote-icon-top">
                    <Quote size={40} fill="#c5a059" stroke="#c5a059" opacity={0.2} />
                  </div>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < item.rating ? "#c5a059" : "none"} 
                        stroke="#c5a059" 
                      />
                    ))}
                  </div>
                  <p className="testimonial-text">"{item.content}"</p>
                  <div className="testimonial-footer">
                    <div className="user-info">
                      <h3>{item.name}</h3>
                      <span>{item.role} • {item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
