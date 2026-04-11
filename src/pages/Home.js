import Hero from "../components/Hero/Hero";
import PlotCarousel from "../components/PlotCarousel/PlotCarousel";
import Navbar from "../components/Navbar/Navbar";
import Investment from "../components/Investment/Investment";
import YoutubeSection from "../components/YoutubeSection/YoutubeSection";
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
            <Gallery />
            <Investment />
            <YoutubeSection />
            <Testimonials />
            <QuickInquiry />
            <Footer />
        </>
    )
}

export default Home;