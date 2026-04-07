import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import PlotCarousel from "../components/PlotCarousel/PlotCarousel";
import Navbar from "../components/Navbar/Navbar";
import Investment from "../components/Investment/Investment";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import QuickInquiry from "../components/QuickInquiry/QuickInquiry";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <PlotCarousel />
            <About />
            <Gallery />
            <Investment />
            <Testimonials />
            <QuickInquiry />
            <Footer />
        </>
    )
}

export default Home;