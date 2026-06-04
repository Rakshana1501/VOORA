<<<<<<< HEAD
import React from "react";
import "./VooraTechEdge.css";

export default function VooraTechEdge() {
  return (
    <>
      {/* Hero Banner */}
      <section className="project-hero">
        <div className="project-overlay">
          <span className="project-badge">
            Premium Commercial Development
          </span>

          <h1>Voora Tech Edge</h1>

          <p>
            Smart commercial spaces designed for modern businesses,
            innovation, growth, and future-ready work environments.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="project-card">
            <h2>About Voora Tech Edge</h2>

            <p>
              Voora Tech Edge is a premium commercial development
              created for modern businesses. This page is currently
              a demo page for routing and navigation. You can later
              replace this content with actual project information,
              floor plans, galleries, amenities, location maps,
              brochures, and enquiry forms.
            </p>
          </div>

          <div className="project-card">
            <h2>Project Highlights</h2>

            <ul className="highlights">
              <li>Grade A Commercial Spaces</li>
              <li>Prime Business Location</li>
              <li>Modern Glass Facade Design</li>
              <li>Smart Office Infrastructure</li>
              <li>High-Speed Elevators</li>
              <li>Ample Parking Facilities</li>
              <li>24/7 Security & Maintenance</li>
              <li>Power Backup & Smart Utilities</li>
            </ul>
          </div>

          <div className="project-card">
            <h2>Why Choose Voora Tech Edge?</h2>

            <p>
              Designed for businesses that demand premium quality,
              strategic location advantages, and future-ready
              infrastructure. Voora Tech Edge provides the perfect
              environment for startups, enterprises, and corporate
              offices to thrive.
            </p>
          </div>
        </div>
      </section>
    </>
=======
import "./VooraTechEdge.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import tblockhero from "../assets/image/tblockhero.webp";
import about from "../assets/image/oneseaabout.webp"
import plan1 from "../assets/image/techplan1.webp"
import plan2 from "../assets/image/techplan2.webp"
import plan3 from "../assets/image/techplan3.jpg"
import plan4 from "../assets/image/techplan4.webp"
import plan5 from "../assets/image/techplan5.webp"
import news1 from "../assets/image/news1.webp"
import news2 from "../assets/image/news2.webp"
import news3 from "../assets/image/news3.webp"
import news4 from "../assets/image/news4.webp"
import news5 from "../assets/image/news5.webp"
import news6 from "../assets/image/news6.webp"
import news7 from "../assets/image/news7.webp"
import news8 from "../assets/image/news8.webp"
import news9 from "../assets/image/news9.webp"
import news10 from "../assets/image/news10.webp"
import news11 from "../assets/image/news11.webp"
import news12 from "../assets/image/news12.webp"
import news13 from "../assets/image/news13.webp"
import news14 from "../assets/image/news14.webp"
import news15 from "../assets/image/news15.webp"
import news16 from "../assets/image/news16.webp"
import news17 from "../assets/image/news17.webp"
import news18 from "../assets/image/news18.webp"
import news19 from "../assets/image/news19.webp"
import news20 from "../assets/image/news20.webp"
import news21 from "../assets/image/news21.webp"
import techinte1 from "../assets/image/techinte1.webp"
import techinte2 from "../assets/image/techinti2.webp"
import techinte3 from "../assets/image/techinti3.webp"
import techinte4 from "../assets/image/techinti4.webp"
import techinte5 from "../assets/image/techinti5.webp"
import techexte1 from "../assets/image/techexte1.webp"
import techexte2 from "../assets/image/techexte2.webp"
import techexte3 from "../assets/image/techexte3.webp"
import techexte4 from "../assets/image/techexte4.webp"
import techexte5 from "../assets/image/techexte5.webp"
import techprog1 from "../assets/image/techprog1.jpg"
import techprog2 from "../assets/image/techprog2.jpg"

const videos = [
  {
    src: "https://www.youtube.com/embed/byoTnV_YaTM",
    title: "Voora One Sea",
  },
  {
    src: "https://www.youtube.com/embed/byoTnV_YaTM",
    title: "Commercial Construction",
  },
  {
    src: "https://www.youtube.com/embed/byoTnV_YaTM",
    title: "Interior Design Showcase",
  },
  {
    src: "https://www.youtube.com/embed/byoTnV_YaTM",
    title: "Villa Project Tour",
  },
  {
    src: "https://www.youtube.com/embed/byoTnV_YaTM",
    title: "Project Walkthrough",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

/* =========================
   ANIMATION VARIANTS
========================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
const highlights = [
  "Floor Size: 21,496 sq. ft. per floor",
  "Total Saleable Area: 1,50,472 sq. ft.Comprehensive Access Control",
  "IGBC Gold Certification for Sustainable Design",
  "System and Advanced CCTV Surveillance",
  "Advanced Building Management System (BMS) for Integrated Building Controls",
  "Modular Floor Plate Design for Flexible Office Layouts",
  "Ample Parking with 154 Car Parking Slots and 280 Dedicated Two-Wheeler Parking",
  "Dedicated HT Power Supply, 100% Generator Backup, and Ample Power Allocation",
  "High-Efficiency Elevators with 26-Passenger Capacity",
  "Sustainable Water Management with Zero Discharge Design",
  "Futsal Turf, Pickle Ball Court, and AC Gym for Employee Wellness",
  "Private Rooms, Mother's Room, and Separate Dormitories for Employee Convenience",
  "Cafeteria for Convenient On-Site Dining",
  "6 High-Efficiency Passenger Elevators and 2 Dedicated Service Elevators",
  "Pressurised Ventilation in Fire Well Staircase Cores for Enhanced Safety",
  "Dedicated Fire Refuge Balconies for Emergency Evacuation",

];

const amenities = [
  { icon: "⚽", title: "Futsal Turf" },
  { icon: "🏓", title: "PickleBall Court" },
  { icon: "🏋️", title: "Modern Gym" },
  { icon: "❄️", title: "AC Gym" },
  { icon: "☕", title: "Cafeteria" },
  { icon: "🛗", title: "6 High-Capacity Elevators" },
  { icon: "🅿️", title: "Multi-Level Parking" },
  { icon: "🏢", title: "Air-Conditioned Lobby" },

  { icon: "✨", title: "Grand Lobby" },
  { icon: "🚒", title: "Fire Wells with Stairs" },
  { icon: "🔐", title: "Comprehensive Access Control System" },
  { icon: "📹", title: "Advanced CCTV Surveillance" },
  { icon: "🛡️", title: "Integrated Security" },

  { icon: "♻️", title: "Zero Discharge System" },
  { icon: "💧", title: "130,000L Sump" },
  { icon: "🚰", title: "Pressurized Water Supply System" },
  { icon: "🏭", title: "80,000-Litre Sewage Treatment Plant" },
  { icon: "🌧️", title: "50,000L Rainwater Sump" },
  { icon: "⚡", title: "100% Full Generator Backup" },
  { icon: "🔌", title: "10 VA Power Allocation" },
  { icon: "📡", title: "Multi-Provider Telecom Infrastructure" },

  { icon: "☀️", title: "Solar-Powered Common Area Lighting" },
  { icon: "❄️", title: "VRF AC System Provision" },
  { icon: "🚪", title: "Private Rooms for Visiting Employees" },
  { icon: "🤱", title: "Dedicated Mother's Room" },
  { icon: "🛏️", title: "Separate Dormitories for Men and Women" },
  { icon: "⚡", title: "Structural Earthing with Lightning Protection" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* =========================
   MODAL ANIMATION
========================= */

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalBox = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

/* =========================
   MAIN COMPONENT
========================= */

export default function VooraTblock() {
  const [expandedCards, setExpandedCards] = useState({});

  // VIDEO SLIDER
  
  const nextVideo = () => {
    if (videoIndex < videos.length - 2) {
      setVideoIndex((prev) => prev + 1);
    }
  };


  const prevVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex((prev) => prev - 1);
    }
  };

  const [open, setOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);



  const containerRef = useRef(null);

const scroll = (direction) => {
  if (containerRef.current) {
    const scrollAmount =
      window.innerWidth < 768 ? 320 : 600;

    containerRef.current.scrollBy({
      left: direction === "left"
        ? -scrollAmount
        : scrollAmount,
      behavior: "smooth",
    });
  }
};


const projectFaqs = [
  {
    question: "Where is Voora Vidyasagar Oswal Gardens T-Block located?",
    answer:
      "The project is strategically located in Korukkupet, Chennai — just 1.5 km from Washermanpet Metro Station, ensuring seamless connectivity to the rest of the city."
  },
  {
    question: "What configurations are available at T-Block?",
    answer:
      "Voora T-Block offers spacious 2, 3 and 4 BHK residences designed to suit modern families with flexible layouts, premium finishes and abundant natural light."
  },
  {
    question: "Is this project RERA approved?",
    answer:
      "Yes. Voora Vidyasagar Oswal Gardens T-Block is fully RERA-registered with all necessary statutory approvals from CMDA and DTCP, ensuring complete legal clarity."
  },
  {
    question: "What lifestyle amenities does the community offer?",
    answer:
      "Residents enjoy a modern clubhouse, landscaped gardens, swimming pool, fully-equipped gym, mini theatre, banquet hall, indoor sports areas, kids' play zone, jogging tracks and a serene yoga & meditation deck."
  },
  {
    question: "How secure is the community?",
    answer:
      "T-Block is a fully gated community with 24/7 CCTV surveillance, trained security personnel at all entry/exit points, video door phones and smart access control for resident safety."
  },
  {
    question: "What are the social and educational hubs nearby?",
    answer:
      "Top schools, colleges, multispecialty hospitals, shopping malls, dining destinations and major transport links are all within a short drive of the community."
  },
  {
    question: "Why invest in Korukkupet now?",
    answer:
      "Korukkupet is one of Chennai's fastest-evolving inner-city neighbourhoods, with strong metro connectivity, port-led economic growth and steady real estate appreciation — making it an ideal long-term investment."
  },
  {
    question: "Is there power backup and water supply?",
    answer:
      "Yes. The project provides reliable 100% power backup for common areas, individual unit backup, treated water supply, rainwater harvesting and a sewage treatment plant for sustainable living."
  },
  {
    question: "Are eco-friendly features included?",
    answer:
      "Absolutely. T-Block incorporates solar energy for common areas, rainwater harvesting, organic waste converters, landscaped green zones and energy-efficient lighting to promote sustainable, low-impact living."
  },
  {
    question: "How can I schedule a site visit or book a unit?",
    answer:
      "You can request a personalised site visit through the contact form on this page or reach our sales team directly. Our experts will guide you through pricing, floor plans, financing options and the entire booking process."
  },
];


const faqs = [
  {
    question: "What is the total land area of the Tech Edge project?",
    answer:
    "The total land area of the Tech Edge project is 17.41 grounds."
  },

  {
    question: "What is the total saleable area of the Tech Edge building?",
    answer:
      "The total saleable area of the Tech Edge building is approximately 1,50,472 sq. ft.",
  },

  {
    question: "How many floors does the Tech Edge building have?",
    answer:
    "The Tech Edge building has a configuration of B+G+7 floors."
  },

  {
    question: "What is the project's IGBC certification?",
    answer:
    "The Tech Edge project proudly holds the IGBC Gold Certification for its sustainable design and operations."
  },

  {
    question: "What amenities are available at the Tech Edge project?",
    answer:
    "Tech Edge offers a range of premium amenities, including futsal turf, a pickleball court, an AC gym, a cafeteria, and advanced building management systems."
  },

  
];

  // Plan images array for Swiper
  const planImages = [plan1, plan2, plan3, plan4, plan5];


const galleryData = {
  Interior: [
    techinte1,
    techinte2,
    techinte3,
    techinte4,
    techinte5,
  ],

  Exterior: [
    techexte1,
    techexte2,
    techexte3,
    techexte4,
    techexte5,
  ],

  "Site Progress": [
    techprog1,
    techprog2,
  ],
};


const newsData = [
  {
    image: news1,
    title: "DT Next",
  },
  {
    image: news2,
    title: "The Hindu",
  },
  {
    image: news3,
    title: "Times of India",
  },
  {
    image: news4,
    title: "Economic Times",
  },
  {
    image: news5,
    title: "DT Next",
  },
  {
    image: news6,
    title: "The Hindu",
  },
  {
    image: news7,
    title: "Times of India",
  },
  {
    image: news8,
    title: "Economic Times",
  },
  {
    image: news9,
    title: "DT Next",
  },
  {
    image: news10,
    title: "The Hindu",
  },
  {
    image: news12,
    title: "Times of India",
  },
  {
    image: news13,
    title: "Economic Times",
  },
  {
    image: news15,
    title: "DT Next",
  },
  {
    image: news16,
    title: "The Hindu",
  },
  {
    image: news17,
    title: "Times of India",
  },
  {
    image: news18,
    title: "Economic Times",
  },
  {
    image: news19,
    title: "DT Next",
  },
  {
    image: news20,
    title: "The Hindu",
  },
  {
    image: news21,
    title: "Times of India",
  },
];

const [activeTab, setActiveTab] = useState("Interior");
const [currentImage, setCurrentImage] = useState(0);

const images = galleryData[activeTab];

/* =========================
   GALLERY FUNCTIONS
========================= */

const nextGallerySlide = () => {
  setCurrentImage((prev) =>
    prev === images.length - 1 ? 0 : prev + 1
  );
};

const prevGallerySlide = () => {
  setCurrentImage((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};
/* =========================
   NEWS FUNCTIONS
========================= */

const [currentNews, setCurrentNews] = useState(0);

const nextNewsSlide = () => {
  setCurrentNews((prev) =>
    prev >= newsData.length - 2 ? 0 : prev + 1
  );
};

const prevNewsSlide = () => {
  setCurrentNews((prev) =>
    prev === 0 ? newsData.length - 2 : prev - 1
  );
};






const [currentSpec, setCurrentSpec] = useState(0);






  return (
    <div className="one-sea-page">
      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* Hero Section */}
      <section
        className="one-sea-hero"
        style={{
            backgroundImage: `url(${tblockhero})`,
        }}
      />

      {/* Ribbon Navigation */}
      <div className="project-ribbon">
        <div className="ribbon-container">
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
          <a href="#floorplans">Floor Plans</a>
          <a href="#gallery">Gallery</a>
          <a href="#faqs">FAQs</a>
        </div>
      </div>

      {/* =========================
          OVERVIEW (ANIMATED)
      ========================= */}
      <section id="overview" className="overview-section">
        <motion.div
          className="overview-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* IMAGE */}
          <motion.div className="overview-image" variants={imageVariant}>
            <img src={about} alt="Voora One Sea" />
          </motion.div>

          {/* CONTENT */}
          <motion.div className="overview-content">

            <motion.h4 variants={fadeUp}>OVERVIEW</motion.h4>

            <motion.h2 variants={fadeUp}>
                <span>Live a Future with Work-Life Balance</span>
            </motion.h2>

            {/* FEATURES */}
            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                "📐 Floor Size: 21,496 sq. ft. per floor",
                "🏢 Total Saleable Area: 1,50,472 sq. ft.",
                "🌿 IGBC Gold Certification for Sustainable Design",
                "🛡️ Access Control System and Advanced CCTV Surveillance",
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  whileHover={{ scale: 1.03, y: -4, backgroundColor: "rgba(255, 255, 255, 0.05)" }} 
                  whileTap={{ scale: 0.98 }} 
                  className="feature"
                >
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              className="cta-btn"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              One Sea View →
            </motion.button>

          </motion.div>
        </motion.div>
      </section>

      {/* =========================
          POPUP MODAL
      ========================= */}
      <AnimatePresence>
  {open && (
    <motion.div
      className="highlights-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpen(false)}
    >
      <motion.div
        className="highlights-popup"
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="highlights-close"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="highlights-header">
          <span>VOORA ONE SEA</span>
          <h2>Project Highlights</h2>
          <p>Luxury Living With Unmatched Sea Views</p>
        </div>
<div className="highlights-grid">
  {highlights.map((item, index) => (
    <motion.div
      key={index}
      className="highlight-item"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
    >
      <p>
        <img src={icon} alt="icon" />
        {item}
      </p>
    </motion.div>
  ))}
</div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Amenities */}
      <section id="amenities" className="amenities-section">

  <div className="amenities-wrapper">

    <div className="amenities-header">
      <h2>Amenities & Features</h2>
    </div>

    <motion.div
      className="amenities-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
    >
      {amenities.map((item, index) => (
        <motion.div
          className="amenity-card"
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            },
          }}
          whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="amenity-icon">{item.icon}</span>
          <h3>{item.title}</h3>
        </motion.div>
      ))}
    </motion.div>

  </div>

</section>


{/* =========================
    WALKTHROUGH SECTION
========================= */}
<section id="walkthrough" className="video-section-full">

  {/* TITLE */}
  <div className="container">
<div className="video-section">

          <div className="video-head">
            <span>PROJECT SHOWCASE</span>
            <h2>Explore Our Signature Developments</h2>
          </div>

          <button
            className="video-nav video-prev"
            onClick={prevVideo}
            disabled={videoIndex === 0}
          >
            ❮
          </button>

          <div className="video-slider">
            <div
  className="video-track"
  style={{
    transform: `translateX(-${
      window.innerWidth <= 768
        ? videoIndex * 100
        : videoIndex * 50
    }%)`,
  }}
>
              {videos.map((video, index) => (
                <div className="video-item" key={index}>
                  <div className="video-card">

                    <iframe
  src={video.src}
  title={video.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

                    <div className="video-overlay">
                      <h3>{video.title}</h3>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="video-nav video-next"
            onClick={nextVideo}
            disabled={videoIndex >= videos.length - 2}
          >
            ❯
          </button>

        </div>

</div>

</section>







    {/* =========================================================
        PROJECT PLANS — Premium Swiper Carousel
    ========================================================= */}
    <section id="floorplans" className="plans-section">
      <div className="plans-header">
        <span className="plans-badge">FLOOR LAYOUTS</span>
        <h2 className="plans-gold-title">Project Plans</h2>
        <p>Explore thoughtfully designed layouts that maximize space, ventilation, and luxury living comfort.</p>
      </div>

      <div className="plans-carousel-wrapper">
        {/* Left chevron */}
        <button className="plan-chevron plan-chevron-prev" aria-label="Previous plan">‹</button>

        <Swiper
          modules={[Navigation, Autoplay, Keyboard]}
          navigation={{
            nextEl: ".plan-chevron-next",
            prevEl: ".plan-chevron-prev",
          }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={600}
          grabCursor={true}
          breakpoints={{
            0:    { slidesPerView: 1,   spaceBetween: 16 },
            768:  { slidesPerView: 1,   spaceBetween: 20 },
            992:  { slidesPerView: 1.5, spaceBetween: 24 },
            1200: { slidesPerView: 2,   spaceBetween: 30 },
          }}
          className="plans-swiper"
        >
          {planImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="plan-glass-card"
                whileHover={{ scale: 1.02, y: -6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLightboxImg(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxImg(src)}
              >
                <img src={src} alt={`Floor Plan ${idx + 1}`} loading="lazy" />
                <div className="plan-card-overlay">
                  <span className="plan-card-label">Plan {idx + 1}</span>
                  <span className="plan-card-zoom">🔍 Click to enlarge</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right chevron */}
        <button className="plan-chevron plan-chevron-next" aria-label="Next plan">›</button>
      </div>
    </section>

    <section id="floorplans" className="plans-section">
      <div className="plans-header">
        <h2 className="plans-gold-title">Final Project</h2>
        <p>Explore thoughtfully designed layouts that maximize space, ventilation, and luxury living comfort.</p>
      </div>

      <div className="plans-carousel-wrapper">
        {/* Left chevron */}
        <button className="plan-chevron plan-chevron-prev" aria-label="Previous plan">‹</button>

        <Swiper
          modules={[Navigation, Autoplay, Keyboard]}
          navigation={{
            nextEl: ".plan-chevron-next",
            prevEl: ".plan-chevron-prev",
          }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={600}
          grabCursor={true}
          breakpoints={{
            0:    { slidesPerView: 1,   spaceBetween: 16 },
            768:  { slidesPerView: 1,   spaceBetween: 20 },
            992:  { slidesPerView: 1.5, spaceBetween: 24 },
            1200: { slidesPerView: 2,   spaceBetween: 30 },
          }}
          className="plans-swiper"
        >
          {planImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="plan-glass-card"
                whileHover={{ scale: 1.02, y: -6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLightboxImg(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxImg(src)}
              >
                <img src={src} alt={`Floor Plan ${idx + 1}`} loading="lazy" />
                <div className="plan-card-overlay">
                  <span className="plan-card-label">Plan {idx + 1}</span>
                  <span className="plan-card-zoom">🔍 Click to enlarge</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right chevron */}
        <button className="plan-chevron plan-chevron-next" aria-label="Next plan">›</button>
      </div>
    </section>

    {/* =========================================================
        LIGHTBOX MODAL
    ========================================================= */}
    <AnimatePresence>
      {lightboxImg && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImg(null)}
        >
          <motion.div
            className="lightbox-box"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              aria-label="Close lightbox"
              onClick={() => setLightboxImg(null)}
            >
              ✕
            </button>
            <img src={lightboxImg} alt="Floor plan enlarged view" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

<section className="spec-section">

  {/* HEADER */}
  

  {/* SLIDER */}
  

</section>



  <section id="gallery" className="premium-gallery">

  <div className="gallery-top">
    <h2>Project Gallery</h2>

    <div className="gallery-tabs">
      {Object.keys(galleryData).map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active-tab" : ""}
          onClick={() => {
            setActiveTab(tab);
            setCurrentImage(0);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>

  <div className="gallery-main">

    <button
      className="gallery-arrow"
      onClick={prevGallerySlide}
    >
      &#10094;
    </button>

    <AnimatePresence mode="wait">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt=""
        className="main-gallery-image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
      />
    </AnimatePresence>

    <button
      className="gallery-arrow"
      onClick={nextGallerySlide}
    >
      &#10095;
    </button>

  </div>

  <div className="gallery-thumbnails">
    {images.map((img, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <img
          src={img}
          alt=""
          className={`thumbnail ${
            currentImage === index ? "active-thumb" : ""
          }`}
          onClick={() => setCurrentImage(index)}
        />
      </motion.div>
    ))}
  </div>

</section>



    <section className="news-section">

      {/* TITLE */}
      <div className="news-header">
        <h2>
          <span>News</span> & Media
        </h2>
      </div>

      {/* SLIDER */}
      <div className="news-slider">

        {/* LEFT BUTTON */}
        <button
          className="news-btn left"
          onClick={prevNewsSlide}
        >
          &#10094;
        </button>

        {/* CARDS */}
        <div className="news-container">

          {newsData
.slice(currentNews, currentNews + 2)
            .map((item, index) => (

              <div className="news-card" key={index}>

                <div className="news-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="news-title">
                  <h3>{item.title}</h3>
                </div>

              </div>
            ))}

        </div>

        {/* RIGHT BUTTON */}
        <button
          className="news-btn right"
          onClick={nextNewsSlide}
        >
          &#10095;
        </button>

      </div>

    </section>


<section id="faqs" className="faq-section">

  <div className="faq-left">
   <iframe
  className="faq-iframe"
  src="https://www.google.com/maps/embed?pb=..."
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Voora One Sea Location"
/>
  </div>

  <div className="faq-right">

    <div className="faq-header">
      <h2>Frequently Asked Questions</h2>
    </div>

    <div className="faq-container">
      {faqs.map((faq, index) => (
        <details className="faq-item" key={index}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>

  </div>

</section>




<section className="download-brochure-section">

  <div className="download-brochure-overlay"></div>

  <div className="download-brochure-box">

    <span className="download-brochure-tag">
      EXCLUSIVE OFFER
    </span>

    <h2 className="download-brochure-title">
      Get Project Brochure
    </h2>

    <p className="download-brochure-text">
      Download floor plans, amenities, specifications and pricing details.
    </p>

    <form className="download-brochure-form">

      <div className="download-brochure-field">
        <input
          type="text"
          placeholder="Full Name"
          required
        />
      </div>

      <div className="download-brochure-field">
        <input
          type="tel"
          placeholder="Phone Number"
          required
        />
      </div>

      <div className="download-brochure-field">
        <input
          type="email"
          placeholder="Email Address"
          required
        />
      </div>

      <div className="download-brochure-field">
        <textarea
          rows="4"
          placeholder="Message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="download-brochure-btn"
      >
        Download Now
      </button>

    </form>

  </div>

</section>
    </div>
>>>>>>> VOORA-Rakshana
  );
}