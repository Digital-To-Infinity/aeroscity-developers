import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './PlotCarousel.css';
import PetrolPump from '../../assets/petrol_pump.png';
import Factory from '../../assets/factory_plot.png';
import Residential from '../../assets/residential_plot.png';
import Warehouse from '../../assets/warehouse_plot.png';
import Investment from '../../assets/investment_plot.png';

const plotCategories = [
  { id: 1, title: 'Plots for Petrolpump', image: PetrolPump, tag: 'Commercial' },
  { id: 2, title: 'Plots for Factories', image: Factory, tag: 'Industrial' },
  { id: 3, title: 'Residential Plots', image: Residential, tag: 'Lifestyle' },
  { id: 4, title: 'Plots For Warehouse', image: Warehouse, tag: 'Logistics' },
  { id: 5, title: 'Investment Plots', image: Investment, tag: 'High Growth' },
];

const PlotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const trackRef = useRef(null);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1100) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
        const maxIndex = plotCategories.length - itemsToShow;
        return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
        const maxIndex = plotCategories.length - itemsToShow;
        return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Handle Drag / Swipe
  const onDragEnd = (event, info) => {
    const threshold = 30; // More sensitive
    const velocityThreshold = 500;
    
    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      handleNext();
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      handlePrev();
    }
  };

  return (
    <section className="plot-carousel-section">
      <div className="carousel-container">
        <div className="heading-wrapper">
            <span className="section-badge">Our Portfolios</span>
            <h2 className="carousel-heading-custom">Find Your Dream Plots With Aerocity</h2>
            <div className="heading-line"></div>
        </div>
        
        <div 
          className="carousel-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            ref={trackRef}
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {plotCategories.map((plot) => (
              <div 
                key={plot.id} 
                className="plot-card-wrapper"
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
              >
                <div className="plot-card">
                    <div className="plot-image-container">
                        <img 
                            src={plot.image} 
                            alt={plot.title} 
                            className="plot-image" 
                            draggable={false}
                        />
                    </div>
                    <div className="plot-info">
                        <h3>{plot.title}</h3>
                        <p className="plot-desc-small">Prime locations with high appreciation potential across Mumbai 3.0.</p>
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

export default PlotCarousel;
