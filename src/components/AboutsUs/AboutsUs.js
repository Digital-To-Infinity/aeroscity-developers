import { useRef } from "react";
import "./AboutsUs.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Compass, Ruler, Layers, Key, ShieldCheck, Gem, Users, TrendingUp } from "lucide-react";

// --- Animation Variants ---
const textReveal = {
  hidden: { y: 100, opacity: 0, skewY: 5 },
  visible: { y: 0, opacity: 1, skewY: 0, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } }
};

// --- 3D Card Component (More Animated) ---
const ValueCard3D = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div
      className="value-card-3d"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -15,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 20px 50px rgba(197, 160, 89, 0.2)"
      }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="card-border-glow"></div>
      <div className="icon-wrapper">
        <Icon size={36} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
};

// --- Sticky Blueprint Step ---
const BlueprintStep = ({ number, title, desc }) => {
  return (
    <motion.div
      className="blueprint-step"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

const AboutsUs = () => {
  const containerRef = useRef(null);

  // Parallax & Reveal Logic
  const revealRef = useRef(null);
  const { scrollYProgress: revealProgress } = useScroll({
    target: revealRef,
    offset: ["start end", "center center"]
  });
  const maskWidth = useTransform(revealProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="about-us-wrapper" ref={containerRef}>

      {/* --- HERO: The Golden Vision --- */}
      <section className="about-hero">
        <div className="hero-grid-overlay"></div>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" className="hero-bg" />

        <div className="hero-content container">
          <div className="overflow-hidden">
            <motion.span variants={textReveal} initial="hidden" animate="visible" className="gold-overline">
              EST. 2010 • NAVI MUMBAI
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h1 variants={textReveal} initial="hidden" animate="visible" custom={0.1}>
              CRAFTING THE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 variants={textReveal} initial="hidden" animate="visible" custom={0.3} className="gold-text-hero">
              GOLD STANDARD.
            </motion.h1>
          </div>

          <motion.div
            className="scroll-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ArrowDown className="bounce-gold" size={24} />
          </motion.div>
        </div>
      </section>


      {/* --- SECTION 2: The Blueprint (Sticky Scroll) --- */}
      <section className="blueprint-section section-padding">
        <div className="container blueprint-flex">

          {/* Sticky Left Side */}
          <div className="blueprint-sticky">
            <h2 className="huge-text">THE<br /><span className="gold-stroke"> PLAN</span></h2>
            <div className="gold-line-vertical"></div>
          </div>

          {/* Scrolling Right Side */}
          <div className="blueprint-steps">
            <BlueprintStep
              number="01"
              title="Site Visit & Selection"
              desc="Explore our prime locations near Navi Mumbai International Airport, JNPT, or KSC Township. Our experts will guide you through the various plot options available and help you choose the one that fits your investment goals."
            />
            <BlueprintStep
              number="02"
              title="Legal Verification"
              desc="Once you express interest, we provide you with the two-search report and all legal papers. You can verify the 7/12, 8A, Mutation Entry, and Akarbandh through your own legal counsel. We believe in 100% transparency before any commitment."
            />
            <BlueprintStep
              number="03"
              title="Documentation Preparation"
              desc="We prepare all the necessary legal drafts, including the Vatani Patrak and Plot Naksha. We ensure that the paper trail is flawless and the title is 'clear and marketable'."
            />
            <BlueprintStep
              number="04"
              title="Express Registration"
              desc="This is where Aerocity stands apart. We proceed with the official government registration of the plot in your name first. We keep you informed throughout this 'express' process to ensure you are the legal owner on record."
            />
            <BlueprintStep
              number="05"
              title="Final Payment & Handover"
              desc="Only after the registration process is successfully initiated/completed do we request the final payment. Once done, we hand over the complete set of original documents, making you a proud and secure landowner in Navi Mumbai."
            />
          </div>

        </div>
      </section>

      {/* --- SECTION 3: The Philosophy Reveal (Creative Animation) --- */}
      <section ref={revealRef} className="philosophy-section section-padding">
        <div className="container grid-split">
          <div className="philosophy-text">
            <h4 className="gold-subtitle">// OUR PHILOSOPHY</h4>
            <h2>More Than Land. <br /><span className="gold-text">A Legacy.</span></h2>
            <p>At Aerocity, we don't just sell plots; we curate the canvas for your future. Whether it's the "Third Mumbai" initiative or the smart city revolution, we ensure you are positioned at the center of growth.</p>
            <br />
            <p>We combine legal precision with architectural vision to deliver assets that appreciate not just in value, but in life quality.</p>
          </div>

          <div className="image-reveal-wrapper">
            {/* The Gold Line that opens the image */}
            <motion.div className="reveal-mask" style={{ width: maskWidth }}>
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop" alt="Luxury Building" />
            </motion.div>
            <div className="image-placeholder">
              <span>Loading Vision...</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: 3D Core Values (Animated Cards) --- */}
      <section className="values-section section-padding">
        <div className="container">
          <motion.div className="section-header center">
            <h2>Our Core <span className="gold-text">Values</span></h2>
            <p>The pillars that hold up every Aerocity project.</p>
          </motion.div>

          <div className="cards-grid-3d">
            <ValueCard3D
              icon={ShieldCheck}
              title="Transparency"
              desc="Crystal clear documentation. Zero hidden clauses. We believe trust is the ultimate currency."
            />
            <ValueCard3D
              icon={Gem}
              title="Premium Quality"
              desc="From location selection to infrastructure, we settle for nothing less than the gold standard."
            />
            <ValueCard3D
              icon={TrendingUp}
              title="High Growth"
              desc="Strategic locations in NAINA and KSC zones ensuring maximum appreciation for your investment."
            />
            <ValueCard3D
              icon={Users}
              title="Client Focus"
              desc="A dedicated relationship manager for every client, guiding you from site visit to possession."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutsUs;