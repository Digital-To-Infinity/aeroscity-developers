import AboutsUs from "../components/AboutsUs/AboutsUs";
import Footer from "../components/Footer/Footer";
import QuickInquiry from "../components/QuickInquiry/QuickInquiry";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutsUs />
            <About />
            <QuickInquiry />
            <Footer />
        </>
    )
}

export default AboutUs;