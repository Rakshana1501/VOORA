import "./VooraOneSea.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
import { image } from "framer-motion/client";
import oceanhero from "../assets/image/oceanhero.webp";
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
  "Luxurious sea-facing residences offering panoramic views of the Bay of Bengal.",
  "Prime coastal location in Tondiarpet, Chennai, for a serene and scenic lifestyle.",
  "Thoughtfully designed layouts that blend indoor comfort with natural beauty.",
  "Contemporary architecture complements the elegance of coastal living.",
  "Exclusive clubhouse and landscaped terraces for relaxation and recreation.",
  "State-of-the-art fitness facilities for a well-balanced lifestyle.",
  "French-inspired design with 100+ exotic plants",
  "A perfect fusion of urban luxury and tranquil seaside living.",
];

const amenities = [
  { icon: "🏊", title: "Swimming Pool" },
  { icon: "🛝", title: "Kids Play Area" },
  { icon: "🌿", title: "Zen Garden with Timber Deck" },
  { icon: "🌴", title: "Raised Timber Pool Deck with Trellis" },
  { icon: "🌳", title: "Multipurpose Lawn & Party Lawn" },
  { icon: "👀", title: "Viewing Deck" },
  { icon: "🪑", title: "Outdoor Deck Area" },
  { icon: "🚶‍♂️", title: "Connecting Walkway" },
  { icon: "🏖️", title: "Sandpit & Stepping Stones with Grass Joints" },
  { icon: "🎱", title: "Billiards Room" },
  { icon: "🪑", title: "Seating Nook" },
  { icon: "🧘", title: "Yoga Room" },
  { icon: "🏋️", title: "Gym" },
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

export default function VooraOceans27() {
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

const projectFaqs = [
  {
    question: "Where is Voora Ocean's 27 located?",
    answer:
      "Voora Ocean's 27 is located in the prime coastal neighbourhood of Tondiarpet, Chennai — offering panoramic Bay of Bengal views with excellent access to the city centre, port and key business districts."
  },
  {
    question: "What residence configurations are available?",
    answer:
      "Ocean's 27 features thoughtfully designed sea-facing residences with multiple layouts that blend indoor comfort with sweeping outdoor views — ideal for modern families and lifestyle buyers."
  },
  {
    question: "Is this project RERA approved?",
    answer:
      "Yes. Voora Ocean's 27 is fully RERA-registered with all statutory approvals from CMDA, ensuring complete legal clarity and a safe investment."
  },
  {
    question: "What signature amenities does the community offer?",
    answer:
      "Residents enjoy a swimming pool, raised timber pool deck with trellis, zen garden, viewing deck, billiards room, yoga studio, gym, multipurpose lawn, kids' play area and a beautifully crafted French-inspired landscape."
  },
  {
    question: "How is connectivity from Tondiarpet?",
    answer:
      "Tondiarpet enjoys excellent connectivity via metro, suburban rail, the GNT Road and Inner Ring Road — placing Chennai Central, the Port and the Greater Northern business corridor within easy reach."
  },
  {
    question: "What schools, hospitals and lifestyle hubs are nearby?",
    answer:
      "Reputed schools, colleges, multispecialty hospitals, supermarkets, malls and well-known dining destinations are all within a short drive, supporting a balanced everyday lifestyle."
  },
  {
    question: "Are the residences truly sea-facing?",
    answer:
      "Yes. The community has been planned to maximise sea-facing units, with carefully oriented towers and large viewing decks designed to capture uninterrupted panoramic views of the Bay of Bengal."
  },
  {
    question: "What about security and safety?",
    answer:
      "Ocean's 27 is a fully gated development with 24/7 CCTV surveillance, video door phones, smart access control, trained security personnel and dedicated entry/exit points for residents and visitors."
  },
  {
    question: "Are sustainable and eco-friendly features included?",
    answer:
      "Absolutely. The project incorporates solar lighting in common areas, rainwater harvesting, sewage treatment, energy-efficient fixtures, organic waste management and over 100 exotic landscaped plant species."
  },
  {
    question: "How do I schedule a site visit or enquire about pricing?",
    answer:
      "You can request a private site visit through the contact form on this page or speak with our sales advisors directly. Our team will share floor plans, pricing, payment plans and walk you through the booking process."
  },
];

const faqData = [
  {
    title: "🏫 Schools",
    points: [
      "PSN Nursery and Primary School is located 850 metres.",
    ],
  },
  {
    title: "🎓 Colleges",
    points: [
      "Government Arts And Science College is located 1.7 km.",
    ],
  },
  {
    title: "Restaurants",
    points: [
      "Hotel Pandias located 550 m",
      "Kutta Magic Chicken Centre located 700 m",
      "Venkateshwara Udipi Hotel located 900 m.",
    ],
  },
  {
    title: "🏭 Mall",
    points: [
      "National Shopping Mall is located 1.6 km",
      "KBS Complex located 1.3 km.m",
    ],
  },
];





const galleryData = {
  Interior: [
    "https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2025/03/ch13-1024x680.webp.bv.webp?bv_host=voora.co.in",
    "https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/08/Voora.00_02_32_30.Still005-1-1024x576.jpg.bv.webp?bv_host=voora.co.in",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  ],

  Exterior: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  ],

  "Site Progress": [
    "https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/08/2.jpg.bv.webp?bv_host=voora.co.in",
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
    title: "STRUCTURE",
    points: [
      "RCC framed structure with seismic resistance.",
"Outer walls will be 8 thick and inner partition walls will be 4 thick.",
"Floor-to-floor height will be approximately 10 feet.",
    ],
  },

  {
    title: "FLOORING & WALL FINISHING",
    points: [
      "Premium vitrified tiles for the living, dining, bedrooms, and kitchen.",
      "Anti-skid ceramic tiles in toilets, balconies, and utility areas.",
      "Designer ceramic tiles in toilets up to the false ceiling.",

      "Kitchen dado up to 2 feet above the counter.",
    ],
  },

  {
    title: "WINDOWS AND VENTILATORS",
    points: [
      "UPVC windows with clear glass.",
            "UPVC ventilators in toilets with adjustable glass louvers.",

    ],
  },

  {
    title: "ELECTRICAL SERVICES",
    points: [
      "3-phase power supply with individual meters.",
"15A power plug points in the kitchen for heavy appliances and in toilets for geysers.",
"Common area lighting with energy-efficient LED fixtures.",
    ],
  },


  {
    title: " DOORS",
    points: [
      "Main door with a teak/solid wood frame and a flush shutter with melamine polish.",
"Internal doors with hardwood frames and flush shutters.",
"Water-resistant flush shutters for bathroom doors.",
    ],
  },

  {
    title: "PAINT",
    points: [
      "Interior walls finished with smooth putty and acrylic emulsion paint.",
"Exterior walls painted with weatherproof paint.",
"Enamel paint for metal grills and other steel works.",
    ],
  },

    {
    title: "PLUMBING AND SANITARY FITTINGS",
    points: [
"Premium brand sanitary fittings (Jaquar, Kohler, or equivalent).",
"Single-lever diverter and wall mixers in all toilets.",
"Provision for a geyser in each toilet.",
"Stainless steel sink with drainboard in the kitchen.",
"Concealed CPVC piping for water supply and PVC piping for drainage.",
    ],
  },

  {
    title: "ELECTRICAL FITTINGS",
    points: [
"Concealed copper wiring with modular switches of reputed make.",
"Adequate light, fan, and power points in every room.",
"AC points provided in the bedrooms and living room.",
"TV and telephone points in the living room and master bedroom.",
"ELCB & MCB panels for safety and protection.",
"Provision for inverter wiring.",
    ],
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
            backgroundImage: `url(${oceanhero})`,
        }}
      />

      {/* Ribbon Navigation */}
      <div className="project-ribbon">
        <div className="ribbon-container">
          <a href="#overview">Overview</a>
          <a href="#amenities">Amenities</a>
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
            <img src={about} alt="Voora One Sea" />
          </motion.div>

          {/* CONTENT */}
          <motion.div className="overview-content">

            <motion.h4 variants={fadeUp}>OVERVIEW</motion.h4>

            <motion.h2 variants={fadeUp}>
              Elegant Living with Panoramic  <span>Sea Views at Ocean’s27</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
            </motion.p>

            {/* FEATURES */}
            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                "🌊 Luxurious sea-facing residences offering panoramic views of the Bay of Bengal.",
                "📍 Prime coastal location in Tondiarpet, Chennai, for a serene and scenic lifestyle.",
                "🏗️ Architecturally distinct towers with premium finishes and sustainable design.",
                "🏊 Extensive range of amenities, including a clubhouse, gym, pools, and landscaped gardens.",
                
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.98 }} className="feature">
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
        {faqData.map((faq, index) => (
          <details className="faq-item" key={index}>
            <summary>{faq.title}</summary>
            <p>{faq.points.join(', ')}</p>
          </details>
        ))}
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
        src={plan1}
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


    <section id="plans" className="plans-section">

  {/* project final */}
  <div className="plans-header">
    <h2>Final Project</h2>
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
        src={plan1}
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





<section className="highwayfaq-section">
  <div className="highwayfaq-container">

    <div className="highwayfaq-header">
      <span className="highwayfaq-badge">FAQ'S</span>
      <h2 className="highwayfaq-title">
        Frequently Asked Questions
      </h2>
      <p className="highwayfaq-subtitle">
        Everything you need to know about Voora Ocean's 27.
      </p>
    </div>

    <div className="highwayfaq-list">
      {projectFaqs.map((faq, index) => (
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

    <button className="download-brochure-btn">
      Download Now
    </button>

  </div>

</section>
    </div>
  );
}