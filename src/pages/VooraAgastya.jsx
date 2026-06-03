import "./VooraOneSea.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
import { image } from "framer-motion/client";
import vooraagasta from "../assets/image/heroagasta.webp";
import about from "../assets/image/oneseaabout.webp"
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
import InteriorImg1 from "../assets/image/Interior-img1.jpg";
import InteriorImg2 from "../assets/image/Interior-img2.jpg";
import InteriorImg3 from "../assets/image/Interior-img3.jpg";
import ExteriorImg1 from "../assets/image/Exterior-img1.jpg";
import ExteriorImg2 from "../assets/image/Exterior-img2.jpg";
import ExteriorImg3 from "../assets/image/Exterior-img3.png";
import { FaChild, FaElevator } from "react-icons/fa6";

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
  "The only premium high-rise residential tower in Tondiarpet",
  "Floors & Units: Stilt + 13 Floors | 52 Premium Apartments",
  "Configurations: 3 & 4 BHK Smart Homes ranging from 1800 sq. ft. - 2207 sq. ft",
  "Exclusive Sea Views: Uninterrupted views from the 5th floor onwards",
  "Smart Living: Homes integrated with advanced automation for secure and modern lifestyles",
  "Quality Assurance: 265+ quality checkpoints before handover",
  "Safety First: 25+ safety features for peace of mind",
  "10-year warranty on all fittings & features",
  "20-year structural warranty – a first in India",
  "Location: Situated on Tondiarpet Main Road, right next to Tondiarpet Metro Station",
 
];

const amenities = [
  { icon: "🏛️", title: "Grand Lobby" },
  { icon: "🏠", title: "Smart Home Automation" },
  { icon: "💪", title: "Fully Equipped Gym" },
  {   icon: <FaChild />, title: "Kids Play Zone" },
  { icon: "🌿", title: "Terrace Party Lawn" },
  { icon: "⚡", title: "EV Charging Stations" },
  { icon: "🅿️", title: "Visitor Parking" },
  { icon: "📹", title: "24/7 CCTV Security" },
  {  icon: <FaElevator />, title: "Passenger & Stretcher Lift" },
  { icon: "🔋", title: "Power Backup" },
  { icon: "💧", title: "Rainwater Harvesting" },
  { icon: "🚰", title: "Water Softening Plant" },
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

export default function VooraAgastya() {
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


const faqs = [
  {
    question: "Where is the Project located?",
    answer:
    " Voora Agastya Heights is situated on Tondiarpet Main Road, right beside the Tondiarpet Metro Station. This prime location offers seamless connectivity across Chennai and is surrounded by reputed schools, hospitals, and shopping hubs for everyday convenience."
  },

  {
    question: "What types of apartments are available, and what are their size?",
    answer:
      " The project features spacious 3 BHK homes ranging from 1800 to 1928 sq. ft. and premium 4 BHK homes of 2207 sq. ft. Each apartment is thoughtfully designed to provide ample space, comfort, and modern living features.",
  },

  {
    question: "What makes this project unique in North Chennai?",
    answer:
      "Its blend of smart home automation, high-quality finishes, and a location directly next to the metro makes it stand out in the region. Residents enjoy a modern lifestyle with the convenience of excellent connectivity.",
  },

  {
    question: "What amenities are available?",
    answer:
      "Amenities include a gym, kids play area, landscaped terrace, yoga and meditation space, visitor parking, and more. Every facility is planned to enhance comfort, recreation, and community living.",
  },

  {
    question: "What warranties are provided?",
    answer:
    "Voora Agastya Heights offers a 20-year structural warranty and a 10-year warranty on fittings. These assurances reflect the project’s commitment to quality and long-lasting value."
  },

  {
    question: "Is the project environment-friendly?",
    answer:
    "Yes, it includes eco-friendly features such as rainwater harvesting, organic waste recycling, water softening plants, and landscaped green areas. These sustainable measures ensure a healthier environment for residents."
  },

];


const galleryData = {
   Interior: [
     InteriorImg1,
     InteriorImg2,
     InteriorImg3, 
  ],

  Exterior: [
    ExteriorImg1,
    ExteriorImg2,
    ExteriorImg3,
  ],

  "Site Progress": [
    "http://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/08/2.jpg.bv.webp?bv_host=voora.co.in",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
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




const specifications = [

  {
    title: " Structure",
   points: [
  "BRCC framed structure designed for earthquake resistance (Seismic Zone III) with pile foundation.",
  "Outer walls will be 200mm thick and inner partition walls will be 100mm thick solid blocks.",
  "Floor height (including slab) will be maintained at 3000mm."
],
  },

  {
    title: "Electrical",
   points: [
  "FRLS copper wiring of BIS quality (Polycab or equivalent).",
  "Modular switches and boxes from Havells, Crabtree, or equivalent brands.",
  "3-phase power supply with LT connection for all apartments.",
  "MCB and RCCB protection for enhanced electrical safety.",
  "2-way switches for fan and light points in all bedrooms.",
  "5 Amp sockets in living room, kitchen, and bedrooms for TV/data points.",
  "20 Amp power points provision for air conditioners in living, dining, and bedrooms."
],
  },

  {
    title: " Floor Finish",
    points: [
      "300x300mm premium anti-skid ceramic tiles in toilets.",
  "1200x600mm premium vitrified tiles in all bedrooms.",
  "1800x1200mm premium vitrified tiles in living, dining, and kitchen areas.",
  "Anti-skid tiles in balcony and utility areas.",
  "High-quality granite flooring in entrance lobby."
    ],
  },

  {
    title: "Windows & Doors",
   points: [
  "Main Door: Polished wood frame with laminated flush shutter and high-security digital lock system.",
  "Internal Doors & Frames: Polished wood frames with laminated flush shutters and anodized aluminium fittings.",
  "Solar Power: Provided for all common area lighting.",
  "Lightning Arresters: Installed in all towers for safety.",
  "Transformers with RMU units provided for each tower."
],
  },


  {
    title: "Wall Finish",
   points: [
  "Toilets: 600x1200mm premium ceramic tiles up to false ceiling height.",
  "Kitchen: Provision for electrical points and water lines (platform and wall finishes as per client scope).",
  "Utility: Ceramic tiles provided up to parapet wall height.",
  "Lift lobby walls: Full-body vitrified tiles (600x600mm) with granite jambs.",
  "600x1200mm premium vitrified tile flooring in living, dining, and all bedrooms.",
  "300x300mm anti-skid tile flooring in toilets.",
  "600x600mm anti-skid tiles in utility and balcony areas.",
  "600x600mm premium vitrified tile flooring in corridor and lobby areas.",
  "High-quality granite flooring in entrance lobby.",
  "Full-body vitrified tiles for staircase and landing areas."
],
  },

  {
    title: "Plumbing Fittings",
      points: [
  "Sanitary fittings: Jaquar / American Standard / Grohe or equivalent.",
  "CP fittings: Jaquar / American Standard / Grohe or equivalent.",
  "EWC: Floor-mounted closet with cistern and health faucet.",
  "Washbasins: Granite countertop washbasins with bottle trap in all toilets.",
  "Water supply: Overhead tank (OHT) with gravity pumping system.",
  "Shower & spout: Hot and cold diverters for shower and spout fixtures."  ],
  },
];

const [currentSpec, setCurrentSpec] = useState(0);

const nextSpecSlide = () => {

  if (currentSpec < specifications.length - 3) {
    setCurrentSpec(currentSpec + 1);
  } else {
    setCurrentSpec(0);
  }
};

const prevSpecSlide = () => {

  if (currentSpec > 0) {
    setCurrentSpec(currentSpec - 1);
  } else {
    setCurrentSpec(specifications.length - 3);
  }
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
            backgroundImage: `url(${vooraagasta})`,
        }}
      />

      {/* Ribbon Navigation */}
      <div className="project-ribbon">
        <div className="ribbon-container">
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
          <a href="#walkthrough">Walkthrough</a>
          <a href="#location">Location</a>
          <a href="#floorplans">Floor Plans</a>
          <a href="#specifications">Specifications</a>
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
      <img
        src="http://voora.co.in/wp-content/uploads/2025/08/cozy-studio-apartment-with-bedroom-living-space-scaled.jpg"
        alt="Premium Residence"
      />
    </motion.div>

    {/* CONTENT */}
    <motion.div className="overview-content">

      <motion.h4 variants={fadeUp}>
        OVERVIEW
      </motion.h4>

      <motion.h2 variants={fadeUp}>
        The Only High-Rise Residential Building 
        <span> In North Chennai's Tondiarpet</span>
      </motion.h2>

      <motion.p variants={fadeUp}>
       
      </motion.p>

      {/* FEATURES */}
      <motion.div
        className="feature-grid"
        variants={containerVariants}
      >
        {[
          "Premium high-rise residential tower in Tondiarpet",
          "Stilt + 13 Floors | 52 Premium Apartments",
          "3 & 4 BHK Smart Homes (1800 - 2207 sq.ft)",
          "Sea Views from the 5th floor onwards",
         
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="feature"
          >
            <p>✓ {item}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="cta-btn"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Project →
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
          <span>VOORA Agastya</span>
          <h2>Project Highlights</h2>
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




   
<section className="spec-section">

  {/* HEADER */}
  <div className="spec-header">
    <h2>Specifications</h2>
    <p>
      Premium quality materials and modern engineering standards
      crafted for luxury living.
    </p>
  </div>

  {/* SLIDER */}
  <div className="spec-slider-wrapper">

    {/* LEFT BUTTON */}
    <button
      className="spec-btn left"
      onClick={prevSpecSlide}
    >
      &#10094;
    </button>

    {/* CARDS */}
  `  <div className="spec-container">

     
{specifications
  .slice(currentSpec, currentSpec + 3)
  .map((item, index) => {

    const cardId = currentSpec + index;

    return (
      <div 
        className="spec-card" 
        key={cardId} 
        style={{ height: "100%" }}
      >

        <h3>{item.title}</h3>

        <div style={{ 
          maxHeight: expandedCards[cardId] ? 'none' : '180px', 
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '15px'
        }}>
          <ul>
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          
          {/* Fading gradient effect when collapsed */}
          {!expandedCards[cardId] && item.points.length > 3 && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50px',
              background: 'linear-gradient(transparent, rgba(255,255,255,1))'
            }} />
          )}
        </div>

        {item.points.length > 3 && (
          <span
            style={{ 
              color: '#d4af37', 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              textDecoration: 'underline',
              marginTop: 'auto',
              alignSelf: 'flex-start'
            }}
            onClick={() =>
              setExpandedCards((prev) => ({
                ...prev,
                [cardId]: !prev[cardId],
              }))
            }
          >
            {expandedCards[cardId] ? "Read Less" : "Read More"}
          </span>
        )}

      </div>
    );
  })}
    </div>

    {/* RIGHT BUTTON */}
    <button
      className="spec-btn right"
      onClick={nextSpecSlide}
    >
      &#10095;
    </button>

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
  <div className="gallery-track">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Thumbnail ${index + 1}`}
        className={`thumbnail ${
          currentImage === index ? "active-thumb" : ""
        }`}
        onClick={() => setCurrentImage(index)}
      />
    ))}
  </div>
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5988437841193!2d80.2889922!3d13.1245807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1db7a7b21d77cef%3A0x32dc353650271edd!2sVoora%20Agastya!5e0!3m2!1sen!2sin!4v1780377872283!5m2!1sen!2sin"
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
  );
}       
