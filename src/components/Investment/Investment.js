import { useState, useEffect } from 'react';
import './Investment.css'; 
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";
import Img7 from "../../assets/img7.png";
import Img8 from "../../assets/img8.png";

// Content from the image
const newsItems = [
  {
    id: 1,
    title: "'ब्लॅकस्टोन'ची पाच हजार कोटींची गुंतवणूक",
    description: "राज्यातील २० हजार तरुणांना रोजगार संधी. 'ब्लॅकस्टोन' उद्योग समूह राज्यात ५ हजार कोटींची गुंतवणूक करणार असून, यामुळे २० हजार तरुणांना रोजगाराच्या संधी निर्माण होणार आहेत.",
    date: "13/02/2025",
    imageSrc: Img1

  },
  {
    id: 2,
    title: "नवी मुंबईत 'डिस्नेलँड'च्या धर्तीवर थीम पार्क",
    description: "२०० हेक्टर जागेवर उभारणार. 'एमएमआरडीए'ने यासाठी जागतिक स्तरावर स्वारस्य देकार मागवले आहेत. आंतरराष्ट्रीय दर्जाचे पर्यटन केंद्र म्हणून ओळख निर्माण करण्याचा प्रयत्न.",
    date: "20/02/2025",
    imageSrc: Img2
  },
  {
    id: 3,
    title: "तिसऱ्या मुंबईसाठी एक लाख कोटी",
    description: "मुंबई, नवी मुंबई, ठाणे आणि रायगड जिल्ह्याला जोडणाऱ्या 'तिसऱ्या मुंबई'साठी (KSC) एक लाख कोटींची गुंतवणूक अपेक्षित आहे.",
    date: "20/02/2025",
    imageSrc: Img3
  },
  {
    id: 4,
    title: "CIDCO To Develop World-Class Navi Mumbai Aerocity",
    description: "Seeks Consultancy Firm For Master Plan. CIDCO has issued a Request for Proposal (RFP) to appoint a consultancy firm for preparing the Master Plan for Navi Mumbai Aerocity.",
    date: "12/02/2025",
    imageSrc: Img4
  },
  {
    id: 5,
    title: "BookMyShow Signs Rs 1700 Crore MoU with CIDCO",
    description: "For Outdoor Entertainment Arena. The project involves an investment of ₹1700 crore and is expected to create 500 jobs in the state.",
    date: "23/01/2025",
    imageSrc: Img5
  },
  {
    id: 6,
    title: "Reliance Industries Acquires Maharashtra's Largest Industrial Land Parcel",
    description: "For ₹2,200 Crore near NMIA and MTHL. Reliance Industries Ltd has acquired 3,700 acres of land in Navi Mumbai for setting up an integrated industrial area.",
    date: "22/01/2025",
    imageSrc: Img6
  },
  {
    id: 7,
    title: "मुंबई विमानतळ ते थेट नवी मुंबई विमानतळ, कशी असेल मेट्रो-८?",
    description: "प्रस्तावित मेट्रो-८ मार्गिकेचा सविस्तर प्रकल्प अहवाल (डीपीआर) तयार करण्याचे काम वेगाने सुरू आहे.",
    date: "22/01/2025",
    imageSrc: Img7
  },
  {
    id: 8,
    title: "'एमएमआर'मध्ये आंतरराष्ट्रीय शैक्षणिक केंद्र",
    description: "मुंबई महानगर प्रदेशात (एमएमआर) आंतरराष्ट्रीय दर्जाचे शैक्षणिक केंद्र उभारण्यात येणार आहे. यासाठी 'एमएमआरडीए'ने पुढाकार घेतला आहे.",
    date: "20/02/2025",
    imageSrc: Img8
  }
];

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayTime = 5000; 

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
    }, autoPlayTime);

    return () => clearInterval(timer); 
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Why Invest in Mumbai 3.0 OR KSC New Town</h2>
        <h3 className="section-subtitle">Latest News & Developments</h3>

        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {newsItems.map((item) => (
              <div className="carousel-slide" key={item.id}>
                <div className="news-card">
                  <div className="news-image">
                    <img src={item.imageSrc} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h4 className="news-title">{item.title}</h4>
                    <p className="news-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {/* <button className="carousel-arrow prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-arrow next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button> */}

          {/* Indicators */}
          <div className="carousel-indicators">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment; 