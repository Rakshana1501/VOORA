import { BrowserRouter, Routes, Route } from "react-router-dom";

import useReveal from "./hooks/useReveal";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import UpcomingProjects from "./components/UpcomingProjects";
import CompletedProjects from "./components/CompletedProjects";
import TrustStats from "./components/TrustStats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import HeroCarousel from "./components/HeroCarousel";
import CustomCursor from "./components/CustomCursor";

import VooraTechEdge from "./pages/VooraTechEdge";
import VooraOneSea from "./pages/VooraOneSea";
import Upcomingprojects from "./pages/Upcomingproject";
import Completed from "./pages/Completed";
import VooraAgastya from "./pages/VooraAgastya";

import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import VooraWestside from "./pages/VooraWestside";
import VooraBeckford from "./pages/VooraBeckford";
import VooraHighwayHaven from "./pages/VooraHighwayHaven";
import VooraTblock from "./pages/VooraVidyasagarTblock";
import VooraOceans27 from "./pages/VooraOceans27";
import CommercialCompleted from "./pages/CommercialCompleted";
import Portfolio from "./pages/Portfolio";
import ServicesPage from "./pages/ServicesPage";


function HomePage() {
  return (
    
    <main>
      <Preloader />

      <section className="banner-section">
      <HeroCarousel />
      </section>
      <Marquee />
      <About />
      <Services />
      <UpcomingProjects />
      <CompletedProjects />
      <TrustStats />
      <Testimonials />
      <Contact />
    </main>
  );
}

function AppContent() {
  useReveal();

  return (
    <>
      <ScrollToTop />
      <PageLoader />
        <CustomCursor />
      <Navbar />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/voora-tech-edge" element={<VooraTechEdge />} />
        <Route path="/voora-one-sea" element={<VooraOneSea />} />
        <Route path="/upcoming-section" element={<Upcomingprojects />} />
        <Route path="/voora-agastya" element={<VooraAgastya />} />
        <Route path="/voora-westside" element={<VooraWestside />} />
        <Route path="/voora-beckford" element={<VooraBeckford />} />
        <Route path="/voora-highway-haven" element={<VooraHighwayHaven />} />
        <Route path="/voora-vidyasagar-t-block" element={<VooraTblock />} />
        <Route path="/voora-oceans-27" element={<VooraOceans27 />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/commercial-completed" element={<CommercialCompleted />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services-page" element={<ServicesPage/>} />
      </Routes>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}