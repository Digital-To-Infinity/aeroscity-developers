import { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import PlotView1 from "../../assets/plot-view1.png";
import PlotView2 from "../../assets/plot-view2.png";
import PlotDemo1 from "../../assets/plot-demacration1.png";
import PlotDemo2 from "../../assets/plot-demacration2.png";
import PlotBookings1 from "../../assets/plot-bookings1.png";
import PlotBookings2 from "../../assets/plot-bookings2.png";
import PlotRegistration1 from "../../assets/plot-registration1.png";
import PlotRegistration2 from "../../assets/plot-registration2.png";

const Gallery = () => {

  const [openRows, setOpenRows] = useState([]);
  const sectionRef = useRef(null);

  const rows = [
    {
      id: 1,
      title: "Actual Plot View",
      subtitle: "What You See Is What You Get",
      desc: "We believe in transparency. Before you invest, witness the actual site reality. Level, clear, and ready for development.",
      leftImg: PlotView1,
      rightImg: PlotView2
    },
    {
      id: 2,
      title: "Plot Demarcation",
      subtitle: "Name Boards & Boundaries",
      desc: "Every inch accounted for. We provide clear demarcation with physical name boards for every customer, ensuring 100% possession security.",
      leftImg: PlotDemo1, 
      rightImg: PlotDemo2 
    },
    {
      id: 3,
      title: "Plot Bookings",
      subtitle: "Celebrations of Trust",
      desc: "Join the growing Aerocity family. Our office is buzzing with customers securing their financial future in Mumbai 3.0.",
      leftImg: PlotBookings1,
      rightImg: PlotBookings2
    },
    {
      id: 4,
      title: "Plot Registration",
      subtitle: "Legal Ownership Delivered",
      desc: "The final step to your legacy. We facilitate smooth registration processes, handing over the legal title deeds to our proud owners.",
      leftImg: PlotRegistration1,
      rightImg: PlotRegistration2
    }
  ];

  // Logic: When section is in view, open rows one by one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          rows.forEach((row, index) => {
            setTimeout(() => {
              setOpenRows((prev) => [...prev, row.id]);
            }, index * 1500); 
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="showcase-section" ref={sectionRef}>
      <div className="showcase-header">
        <h2>The Aerocity Journey</h2>
        <p>From Selection to Possession</p>
      </div>

      <div className="showcase-container">
        {rows.map((row) => (
          <div 
            key={row.id} 
            className={`book-row ${openRows.includes(row.id) ? 'open' : ''}`}
          >
            {/* CENTRAL */}
            <div className="center-spine">
              <div className="spine-content">
                <h3>{row.title}</h3>
                <h5>{row.subtitle}</h5>
                <p>{row.desc}</p>
              </div>
            </div>

            {/* LEFT WING */}
            <div className="wing left-wing">
              <img src={row.leftImg} alt={`${row.title} Left`} />
              <div className="img-overlay"></div>
            </div>

            {/* RIGHT WING */}
            <div className="wing right-wing">
              <img src={row.rightImg} alt={`${row.title} Right`} />
              <div className="img-overlay"></div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;