import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Investment from "../components/Investment/Investment";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import QuickInquiry from "../components/QuickInquiry/QuickInquiry";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Investment />
            <QuickInquiry />
            <Footer />
        </>
    )
}

export default Home;