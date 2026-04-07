import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Video1 from "./assets/video1.mp4";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import ContactUs from "./pages/ContactUs";
import Project from "./pages/Project";
import AboutUs from "./pages/AboutUs";
import Legal from "./pages/Legal";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackToTop from "./components/BackToTop/BackToTop";
import ContactPopup from "./components/ContactPopup/ContactPopup";

function App() {

  const [showIntro, setShowIntro] = useState(true);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <div className="intro-container">
          <video
            src={Video1}
            autoPlay
            muted
            playsInline
            className="intro-video"
            onEnded={handleVideoEnd}
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
          <FloatingContact />
          <BackToTop />
          <ContactPopup />
        </>
      )}
    </>
  );
}

export default App;