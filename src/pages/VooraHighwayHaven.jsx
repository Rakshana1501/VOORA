import "./VooraHighwayHaven.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
import { image } from "framer-motion/client";
import hero3 from "../assets/image/hero3.webp";
import about from "../assets/image/highabout.webp";
import plan1 from "../assets/image/project1.webp"
import plan2 from "../assets/image/project2.webp"
import plan3 from "../assets/image/project3.webp"
import plan4 from "../assets/image/project4.webp"
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
import {
  FaSchool,
  FaUniversity,
  FaHospital,
  FaIndustry,
} from "react-icons/fa";
import heaven from "../assets/image/hevenplan1.webp"
import highabout from "../assets/image/highabout.webp"
import interior2 from "../assets/image/interior2.webp"
import interior3 from "../assets/image/interior3.webp"
import exterior1 from "../assets/image/exterior1.webp"
import exterior2 from "../assets/image/exterior2.webp"
import site1 from "../assets/image/site1.webp"
import site2 from "../assets/image/site2.webp"
import site3 from "../assets/image/site3.webp"





const videos = [
  {
    src: "https://www.youtube.com/embed/kkL35VA_3j8",
    title: "Voora HighWay Haven",
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
const projectHighlights = [
  "Strategically located along the 8-Lane NH 48 (Chennai–Bangalore Highway) for exceptional connectivity.",
  "Residential plots ranging from 534 sq.ft. to 2400 sq.ft., offering flexible options.",
  "DTCP and RERA-approved development ensuring a safe and secure investment.",
  "Lush green spaces and modern infrastructure within a peaceful gated community.",
  "Enjoy proximity to modern infrastructure within a secure and well-planned community.",
  "Chief Minister to lay foundation for Car Manufacturing Plant in Ranipet.",
  "Just 10 minutes from Panapakkam SIPCOT.",
  "Only 20 minutes from the upcoming Greenfield Airport.",
  "CM Stalin launched ₹1,500 Crore Hong Fu Group Non-Leather Footwear Investment creating 25,000 jobs.",
  "TATA Motors EV Plant with ₹9,000 Crore investment generating 5,000 employment opportunities."
];
const amenities = [
  { icon: "🏡", title: "Secure Gated Community" },
  { icon: "🛣️", title: "Wide Blacktop Roads" },
  { icon: "💡", title: "Sustainable Lighting" },
  { icon: "📹", title: "24/7 Surveillance" },

  { icon: "💧", title: "Potable Groundwater" },
  { icon: "🌳", title: "Expansive Green Spaces" },
  { icon: "⚡", title: "EB transformer provision" },
  { icon: "📐", title: "Clearly Demarcated Plots" },

  { icon: "🌿", title: "Abundant Landscaping" },
  { icon: "🛠️", title: "Complimentary 1 year maintenance" },
  { icon: "🚰", title: "Water Provision" },
  { icon: "🏘️", title: "Community-centric designes" },

  { icon: "🎉", title: "Party lawn" },
  { icon: "🏞️", title: "Landscaped 1-acre park" },
  { icon: "🚿", title: "Overhead water tank" },
  { icon: "🏀", title: "Mini basketball court. Cricket pitch." },
];

const lifeAroundItems = [
  {
    title: "🏫 Schools",
    points: [
      "Annai Sri Sarada Devi School – 3.2 km",
      "Sri Saraswathi Matric School – 5 km",
      "Oxford Public School – 7 km",
      "Velammal School – 8 km",
      "Government Higher Secondary School – 9 km",
    ],
  },
  {
    title: "🎓 Colleges",
    points: [
      "Arignar Anna College – 12 km",
      "Sri Ram Engineering College – 15 km",
      "Saveetha University – 18 km",
      "VIT Campus – 22 km",
      "Government Arts College – 20 km",
    ],
  },
  {
    title: "🏥 Hospitals",
    points: [
      "Government Hospital – 10 km",
      "Apollo Clinic – 8 km",
      "Be Well Hospital – 9 km",
      "Kanchi Hospital – 14 km",
      "Multi Speciality Medical Centre – 11 km",
    ],
  },
  {
    title: "🏭 Industrial Hubs",
    points: [
      "Panapakkam SIPCOT – 10 km",
      "TATA EV Plant – 12 km",
      "Hong Fu Group Footwear Plant – 14 km",
      "Upcoming Greenfield Airport Zone – 18 km",
      "Automobile Manufacturing Corridor – 16 km",
    ],
  },
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

export default function VooraHighwayHaven() {
  const [showHighlights, setShowHighlights] = useState(false);
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

  const highwayFaqs = [
    {
      question: "What kind of plots for sale in Kanchipuram does Voora offer?",
      answer:
        "Voora offers premium, DTCP-approved residential plots for sale in Kanchipuram at our Highway Haven project. These plots are part of a secure, gated community and range from 534 to 2,400 sq. ft."
    },
    {
      question: "What amenities are planned for Highway Haven?",
      answer:
        "The community includes landscaped gardens, recreational areas, a mini basketball court, a cricket pitch, and walking paths, ensuring a safe and enjoyable living environment."
    },
    {
      question: "What makes Highway Haven a good investment?",
      answer:
        "With plots for sale in Kanchipuram, this development is in a rapidly growing area, benefiting from proximity to major industries, transport hubs, and the Greenfield Airport. The strategic location, modern amenities, and sustainable design make it an attractive option for investors and homebuyers alike."
    },
    {
      question: "Will there be security within the community?",
      answer:
        "Yes, Highway Haven is a gated community with 24/7 security, CCTV surveillance, and professional security personnel, ensuring a safe and secure environment for all residents."
    },
    {
      question: "Where exactly are these plots in Panapakkam located?",
      answer:
        "Our plots in Panapakkam are strategically located on the Chennai-Bangalore Highway (NH 48). This prime location is just 10 minutes from the Panapakkam SIPCOT, placing it in a major economic growth zone."
    },
    {
      question: "Can I find a luxury plot for sale in Kanchipuram within this project?",
      answer:
        "Absolutely. Voora Highway Haven is designed as a premium community. Every plot for sale in Kanchipuram within our project comes with access to luxury amenities like a 1-acre park, sports facilities, and wide blacktop roads."
    },
    {
      question: "What makes this a good investment for someone searching for a plot in Kanchipuram?",
      answer:
        "This plot in Kanchipuram is an excellent investment due to its strategic highway location, proximity to the upcoming Greenfield Airport, and the rapid industrial development in the area, which promises high appreciation potential."
    },
    {
      question: "Are these plots suitable for immediate construction?",
      answer:
        "Yes. Voora has provided all essential infrastructure, including roads, water supply (OHT), and EB provisions. Once you purchase one of our Kanchipuram DTCP approved plots, you can plan your construction."
    },
    {
      question: "Is this a gated community plot development?",
      answer:
        "Yes, security is a priority. Voora Highway Haven is a fully secure, gated community with 24/7 surveillance, making it one of the safest options for plots for sale in Kanchipuram."
    },
  ];


  const faqs = [
    {
      question: "Schools",
      answer: (
        <>
          <FaSchool style={{ color: "#8b5cf6", marginRight: "8px" }} />
          Annai Sri Saradadevi School is located at 3.2 km.
          <br />
          <br />
          <FaSchool style={{ color: "#8b5cf6", marginRight: "8px" }} />
          Sri Saraswathi Matric School is located at 5 km.
        </>
      ),
    },

    {
      question: "Colleges",
      answer: (
        <>
          <FaUniversity style={{ color: "#8b5cf6", marginRight: "8px" }} />
          Sri Ramachandra Polytechnic College is located at 5.3 km.
          <br />
          <br />
          <FaUniversity style={{ color: "#8b5cf6", marginRight: "8px" }} />
          Jamia Madeenathul Ilm Arabic College is located at 1.5 km.
          <br />
          <br />
          <FaUniversity style={{ color: "#8b5cf6", marginRight: "8px" }} />
          Shri Sapthagiri Institute of Technology is located at 5.1 km.
        </>
      ),
    },

    {
      question: "Hospitals",
      answer: (
        <>
          <FaHospital style={{ color: "#ef4444", marginRight: "8px" }} />
          Government Hospital, Panapakkam is located nearby.
          <br />
          <br />
          <FaHospital style={{ color: "#ef4444", marginRight: "8px" }} />
          Sri Ramachandra Medical Facilities are easily accessible.
        </>
      ),
    },

    {
      question: "Industrial Corridor",
      answer: (
        <>
          <FaIndustry style={{ color: "#f59e0b", marginRight: "8px" }} />
          10 minutes from Panapakkam SIPCOT.
          <br />
          <br />
          <FaIndustry style={{ color: "#f59e0b", marginRight: "8px" }} />
          Tata Motors EV Plant – ₹9,000 Cr investment, 5,000 employees.
          <br />
          <br />
          <FaIndustry style={{ color: "#f59e0b", marginRight: "8px" }} />
          Hong Fu Group – ₹1,500 Cr investment, creating 25,000 jobs.
        </>
      ),
    },
  ];


  const galleryData = {
    Interior: [highabout, interior2, interior3],

    Exterior: [exterior1, exterior2, exterior2],

    "Site Progress": [site1, site2, site3],
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



  return (
    <div className="one-sea-page">
      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* Hero Section */}
      <section
        className="one-sea-hero"
        style={{
          backgroundImage: `url(${hero3})`,
        }}
      />

      {/* Ribbon Navigation */}
      <div className="project-ribbon">
        <div className="ribbon-container">
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
          <a href="#walkthrough">Walkthrough</a>
          <a href="#location">Location</a>
          <a href="#layoutplans">Layout Plans</a>
          <a href="#projectvideo">Project Video</a>
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
              Welcome to Highway Haven <span> –Your Future Awaits!</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
            </motion.p>

            {/* FEATURES */}
            <motion.div
              className="luxury-highlights"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <div className="premium-highlights">

                <div className="premium-item">
                  <div className="premium-icon">
                    📍
                  </div>

                  <div className="premium-text">
                    <h3>Prime Highway Connectivity</h3>
                    <p>
                      Strategically located on the 8-Lane NH 48
                      (Chennai–Bangalore Highway) offering seamless
                      access to major industrial and commercial hubs.
                    </p>
                  </div>
                </div>

                <div className="premium-item">
                  <div className="premium-icon">
                    🛡️
                  </div>

                  <div className="premium-text">
                    <h3>Secure Investment</h3>
                    <p>
                      DTCP & RERA Approved plotted development with
                      complete legal clarity and strong future appreciation.
                    </p>
                  </div>
                </div>

              </div>

              <button
                className="cta-btn"
                onClick={() => setShowHighlights(true)}
              >
                View All Highlights
                <span>→</span>
              </button>
            </motion.div>



          </motion.div>
        </motion.div>
      </section>

      {/* =========================
          POPUP MODAL
      ========================= */}
      <AnimatePresence>
        {showHighlights && (
          <motion.div
            className="highlights-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHighlights(false)}
          >
            <motion.div
              className="highlights-popup"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="highlights-close"
                onClick={() => setShowHighlights(false)}
              >
                ✕
              </button>

              <div className="highlights-header">
                <span>PROJECT HIGHLIGHTS</span>
                <h2>Why Invest Here?</h2>
              </div>

              <div className="highlights-grid">
                {projectHighlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    <p>
                      <img src={icon} alt="icon" />
                      {item}
                    </p>
                  </div>
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {amenities.map((item, index) => (
              <motion.div
                className="amenity-card"
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <span className="amenity-icon">
                  {item.icon}
                </span>

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
                  transform: `translateX(-${window.innerWidth <= 768
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


      <section id="plans" className="plans-section">

        {/* HEADER */}
        <div className="plans-header">
          <h2>Project Plans</h2>
          <p>
            Explore thoughtfully designed layouts that maximize space,
            ventilation, and luxury living comfort.
          </p>
        </div>

        {/* ARROWS */}
        <div className="plans-nav">
          <button
            className="nav-btn"
            onClick={() => scroll("left")}
          >
            ❮
          </button>

          <button
            className="nav-btn"
            onClick={() => scroll("right")}
          >
            ❯
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="plans-container" ref={containerRef}>

          <div className="plan-card">
            <img
              src={heaven}
              alt="2 BHK Plan"
            />
          </div>

          <div className="plan-card">
            <img
              src={plan2}
              alt="3 BHK Plan"
            />
          </div>

          <div className="plan-card">
            <img
              src={plan3}
              alt="Penthouse Plan"
            />
          </div>

          <div className="plan-card">
            <img
              src={plan4}
              alt="Plan 4"
            />
          </div>

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
                className={`thumbnail ${currentImage === index ? "active-thumb" : ""
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



      <section className="highwayfaq-section">
        <div className="highwayfaq-container">

          <div className="highwayfaq-header">
            <span className="highwayfaq-badge">FAQ'S</span>
            <h2 className="highwayfaq-title">
              Frequently Asked Questions
            </h2>
            <p className="highwayfaq-subtitle">
              Everything you need to know about the project.
            </p>
          </div>

          <div className="highwayfaq-list">
            {highwayFaqs.map((faq, index) => (
              <details key={index} className="highwayfaq-item">
                <summary className="highwayfaq-question">
                  {faq.question}
                </summary>

                <div className="highwayfaq-answer">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>


    </div>
  );
}       