import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PlotCarousel.css';
import PetrolPump from '../../assets/petrol_pump.png';
import Factory from '../../assets/factory_plot.png';
import Residential from '../../assets/residential_plot.png';
import Warehouse from '../../assets/warehouse_plot.png';
import Investment from '../../assets/investment_plot.png';

const plotCategories = [
  { id: 1, title: 'Petrolpump', image: PetrolPump, tag: 'Commercial', location: 'Panvel-Vira Corridor' },
  { id: 2, title: 'Factories', image: Factory, tag: 'Industrial', location: 'Navi Mumbai Extension' },
  { id: 3, title: 'Residential', image: Residential, tag: 'Lifestyle', location: 'Near Upcoming Airport' },
  { id: 4, title: 'Warehouse', image: Warehouse, tag: 'Logistics', location: 'JNPT Port Proximity' },
  { id: 5, title: 'Investment', image: Investment, tag: 'High Growth', location: 'Mumbai 3.0 Strategic Zone' },
];

const PlotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom loop logic for more items
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plotCategories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + plotCategories.length) % plotCategories.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  // Calculate position and scale for each card
  const getCardStyles = (index) => {
    const diff = index - currentIndex;
    
    // Normalize diff for circular carousel
    let normalizedDiff = diff;
    if (Math.abs(diff) > plotCategories.length / 2) {
      normalizedDiff = diff > 0 ? diff - plotCategories.length : diff + plotCategories.length;
    }

    const isActive = normalizedDiff === 0;
    const isSide = Math.abs(normalizedDiff) === 1;

    // Responsive spacing
    const xOffset = windowWidth <= 480 ? 160 : windowWidth <= 768 ? 220 : 300;

    return {
      scale: isActive ? 1.2 : isSide ? 0.85 : 0.7,
      opacity: isActive ? 1 : isSide ? 0.6 : 0.4,
      zIndex: isActive ? 10 : isSide ? 5 : 1,
      x: normalizedDiff * xOffset, // Dynamic distance between items
      rotateY: normalizedDiff * -15, // Subtle 3D rotation
    };
  };

  return (
    <section className="plot-carousel-section-new">
      <div className="carousel-container-new">
        <div className="heading-wrapper-new">
            <span className="section-badge">Exclusive Portfolios</span>
            <h2 className="carousel-heading-custom">Our Prime Locations</h2>
        </div>

        <div 
          className="carousel-viewport-new"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button className="nav-btn-circle prev" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          
          <button className="nav-btn-circle next" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>

          <div className="cards-stage">
            {plotCategories.map((plot, index) => {
              const styles = getCardStyles(index);
              return (
                <motion.div 
                  key={plot.id} 
                  className="plot-card-new"
                  initial={false}
                  animate={{
                    scale: styles.scale,
                    opacity: styles.opacity,
                    zIndex: styles.zIndex,
                    x: styles.x,
                    rotateY: styles.rotateY
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="card-image-wrapper">
                    <img src={plot.image} alt={plot.title} />
                    <div className="card-overlay-text">
                        <h3 className="card-title-minimal">{plot.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="carousel-dots-minimal">
          {plotCategories.map((_, index) => (
            <button
              key={index}
              className={`dot-minimal ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlotCarousel;
