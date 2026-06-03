import "./VooraBeckford.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
import { image } from "framer-motion/client";
import hero4 from "../assets/image/hero4.webp";
import about from "../assets/image/oneseaabout.webp"
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
import backford1 from "../assets/image/beckford-img1.webp"
import backford2 from "../assets/image/beckford-img2.webp"
import backford3 from "../assets/image/beckford-img3.webp"
import backford4 from "../assets/image/beckford-img4.webp"

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
"Exclusive five-story residence with just one luxury apartment per floor for unmatched privacy",
"Located on the prestigious Pycrofts Garden Road, combining elegance with urban convenience.",
"Spacious layouts and premium finishes that embody refined living",
"Thoughtfully crafted interiors designed to balance luxury and comfort",
"Nestled amidst lush greenery, offering a serene and peaceful environment",
"A perfect blend of exclusivity and convenience for discerning homeowners",
"A rare urban retreat that provides tranquility without compromising on accessibility",

];
const amenities = [
  { icon: "🚗", title: "Covered Car Parking", desc: "Safe and dedicated parking for residents" },
  { icon: "🔋", title: "100% Power Backup", desc: "Uninterrupted electricity for all common areas and homes" },
  { icon: "🧘", title: "Yoga & Meditation Zone", desc: "Peaceful open-air wellness space" },
  { icon: "💧", title: "Water Softener System", desc: "Ensures high-quality treated water supply" },
  { icon: "🔐", title: "Access-Controlled Entry", desc: "Secure gated entry with controlled access" },
  { icon: "🏋️", title: "Roof-Top Gymnasium", desc: "Fully equipped fitness space with skyline views" },
  { icon: "🔥", title: "Reticulated LPG Supply", desc: "Safe and centralized gas supply system" },
  { icon: "🏊‍♂️", title: "Swimming Pool & Kids Pool", desc: "Infinity-style pool with dedicated children’s pool" },

  { icon: "🏸", title: "Multipurpose Sports Court", desc: "Facilities for badminton, basketball, and more" },
  { icon: "🛠️", title: "Pressure Boosting Pumps", desc: "Ensures consistent water pressure across all floors" },
  { icon: "☀️", title: "Solar Power System", desc: "Eco-friendly energy for common areas" },
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

export default function VooraBeckford() {
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
    question: "What makes these new apartments in Nungambakkam by Voora so exclusive?",
    answer:
    "The Voora Beckford project offers unparalleled exclusivity. It is one of the few new projects in Nungambakkam featuring only one sprawling 4,500 sq. ft. apartment per floor, guaranteeing absolute privacy for residents."
  },

  {
    question: "I'm looking for new flats in Nungambakkam. What configurations are available?",
    answer:
      "Voora Beckford offers a single, ultra-luxurious configuration: an expansive 4 BHK. These are among the most spacious new flats in Nungambakkam, designed for those who desire a lavish living experience in the heart of the city.",
  },

  {
    question: "Are there any other Voora apartments near Nungambakkam?",
    answer:
      "While Voora has several premium projects across Chennai, the Beckford project is our flagship offering for luxury apartments in Nungambakkam itself, placing you directly in one of the city’s most prestigious locations.",
  },

  {
    question: "What are the key features of these Nungambakkam luxury apartments?",
    answer:
      "Voora’s Nungambakkam luxury apartments come with premium Italian marble flooring, a rooftop gymnasium, a landscaped terrace garden, 100% power backup, and high-end sanitary fittings from brands like Grohe.",
  },

  {
    question: "Why should I consider one of these new apartments in Nungambakkam for my family?",
    answer:
    "Nungambakkam is an ideal location with access to top-tier schools, premier hospitals, and high-end shopping. A new apartment in Nungambakkam from Voora places your family in a secure, serene, and well-connected environment."
  },

  {
    question: "As a new residential project, what sustainable features does Voora include?",
    answer:
    "Voora Beckford, one of the leading new projects in Nungambakkam, incorporates sustainable features like solar power for common areas and a drip irrigation system to ensure an eco-friendly and responsible lifestyle."
  },

  {
    question: "How does the privacy of these new flats in Nungambakkam compare to others?",
    answer:
    "The privacy is unmatched. Unlike typical apartment complexes, the “one home per floor” concept means you have no shared walls with neighbors, making these the most private new flats in Nungambakkam."
  },

  {
    question: "Are these apartments ready to move in, or is it an upcoming project?",
    answer:
    "The Voora Beckford project is a ready-to-occupy development. These luxury apartments in Nungambakkam have received their completion certificate, so you can move into your new home without delay."
  },

  {
    question: "What is the advantage of buying an apartment near Nungambakkam's central district?",
    answer:
      "Owning an apartment near Nungambakkam’s core means you are minutes away from the city’s best restaurants, consulates, and business hubs. The Voora Beckford project offers this prime accessibility while being nestled in a quiet, green lane.",
  },


  {
    question: "Why choose Voora for my search for Nungambakkam luxury apartments?",
    answer:
      "highly secure keyless digital locks, providing modern convenience and enhanced security for your family.",
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
    title: "PLUMBING FITTINGS",
    points: [
      "Sanitary fittings - Jaguar or equivalent.",
"CP Fittings - Jaguar or equivalent.",
"EWC - Floor mounted closet with cistern and health faucet.",
"Wash basin - Granite countertop washbasins with bottle trap in all toilets.",
"Shower spout - Hot and cold diverters for shower and spout.",
"Single bowl SS sink will be provided in Utility only.",
"Pneumatic pumping system will be provided for water lines.",
"Water meter will be provided."
    ],
  },

  {
    title: "FIRE FIGHTING SERVICES",
    points: [
      "Fire sprinklers will be provided inside apartment, corridors and basement/ground floor car park.",
      "Smoke detectors/heat detectors with fire alarms will be provided inside the apartment.",
      "Fire hydrants and fire hose reels will be provided in all floor lobby and external yard.",
      "Public address system will be provided.",
      "PFire refuge areas will be provided in each towers.",
    ],
  },

  {
    title: "STRUCTURE",
    points: [
      "RCC framed structure - Designed for earthquake resistance (Seismic Zone III) with pile foundation. Outer walls will be 165mm/200mm thick and inner partition walls will be 100mm thick RCC walls.",
      "Floor Height (Including Slab) - Will be maintaned at 2950mm",
    ],
  },

  {
    title: "ELECTRICAL SERVICES",
    points: [
      "Solar power - Provided for all common area lighting.",
"Safety equipment - Lightining arresters will be provided in all towers.",
"Transformers with RMU units for each tower.",
    ],
  },


  {
    title: "FLOOR FINISH",
    points: [
      "600x1200mm - Premium vitrified tile flooring in the living room, dining room and all bedrooms.",
"300x300mm - Premium anti-skid tile flooring in toilets.",
"600x600mm Anti-skid premium tiles flooring in utility and balcony.",
"600x600mm - Premium vitrified tile flooring in corridor and lobby area.",
"High quality granite for entrance lobby flooring.",
"Full body vitrified tiles for Staircase and landings area.",
    ],
  },

  {
    title: "DOORS",
    points: [
      "Main doors - Polished wood frame and laminated flush-door shutter with highly secured digital locks.",
"Bedroom doors - Polished wood frame and laminated flush-door shutter with anodised fittings.",
"Toilet doors - Polished wood frame with waterproof flush door shutters with anodized fittings.",
    ],
  },

    {
    title: "WALL FINISH",
    points: [
"Toilets – 300x600mm premium ceramic tiles upto 7’6”.",
"Kitchen - Kitchen wall tile and platform on client scope (we will provide electrical points and water lines).",
"Utility - Ceramic tiles will be provided up to the parapet wall height.",
"Lift wall in lobby – Full body vitrified tiles of size 600x600mm and jambs with granite finish.",
"Lift wall in entrance lobby – High quality granite/marble.",
    ],
  },

  {
    title: "PAINT FINISHES",
    points: [
"Internal walls - Finished with 2 coats of putty, 1 coat of primer & 2 coats of premium emulsion paint.",
"Exterior walls - Finished with 1 coat of primer and superior quality texture finish with color as per architect design.",
"Ceiling finish - Finished with 2 coats of putty, 1 coat of primer and 2 coats of premium distemper.",
    ],
  },

  {
    title: "JOINERIES ",
    points: [
"Living, bedroom,kitchen - UPVC sliding windows having clear toughened glass, with sill granite.",
"Toilets - UPVC ventilators with provision for exhaust fan and openable shutter for ODU access.",
    ],
  },

  {
    title: "SECURITY",
    points: [
      "24x7 CCTV surveillance.",
      "Video door phone.",
      "Smart access control.",
      "Security cabin at entrance.",
    ],
  },

  {
    title: "LIFTS",
    points: [
      "High-speed automatic elevators.",
      "Dedicated service lift.",
      "Emergency alarm system.",
      "Premium branded lifts.",
    ],
  },

  {
    title: "WATER SUPPLY",
    points: [
      "Underground sump provided.",
      "Hydro pneumatic system.",
      "Rainwater harvesting.",
      "Water treatment plant.",
    ],
  },

  {
    title: "PARKING",
    points: [
      "Covered car parking.",
      "EV charging provision.",
      "Visitor parking area.",
      "Wide driveway access.",
    ],
  },

  {
    title: "AMENITIES",
    points: [
      "Swimming pool.",
      "Gymnasium.",
      "Kids play area.",
      "Clubhouse facilities.",
    ],
  },


  {
    title: "ELECTRICALS",
    points: [
      "Wires - Fire Retardant Low Smoke (FRLS) copper wire of a quality BIS, polycab or equivalent.",
"Switches - Modular boxes and switches of Havells/Crabtree or equivalent.",
"3-phase supply for all units with LT connnection.",
"Safety device - MCB & RCCB (Residual Current Circuit Breaker).",
"2-way switches for fan and light points in all bedrooms.",
"5 amp - One socket will be provided in all main switch boards and two nos in kitchen.",
"15 amp - Provided for washing machine and two nos. in kitchen.",
"Foot lamp - Provided in all bedrooms.",
"TV - Point provided in living and bedrooms with 3 nos. of 5-amp sockets.",
"Data - Point provided in living and bedrooms.",
"Air conditioner - 20-amp socket and control switch will be provided for living, dining and bedrooms.",
"Exhaust fan - 5-amp socket will be provided in all toilets.",
"Chimney - 5Amp socket will be provided in kitchen with exhaust hole.",
"Geyser - 15-amp socket will be provided in all toilets.",
"Aquaguard - 5Amp socket and water line will be provided above the kitchen sink.",
"Power Backup - 1 BHK-500W, 2 BHK-750W, 3 BHK - 1000W through ACCL.",
"Power backup for common area - 100% power backup for all common areas like STP,",
"Water softener plant, lift and other services.",
    ],
  },

  {
    title: "COMMON FACILITIES",
    points: [
"Lifts - Adequate passenger lifts, stretcher lift/service lift will be provided for each tower.",
"STP - Will be provided for treating 100% sewage effluent and treated water will be used for toilet flushing and gardening purpose.",
"Water softener plant will be provided.",
"Garbage chute - Automated garbage chutes will be provided for each tower.",
"OWC - Organic Waste Convertor will be provided.",
"Piped gas - The reticulated gas supply will be provided with metering system.",
"Surveillance - 24/7 CCTV surveillance system will be installed in all common areas at ground floor only.",
"EV charging station for car and bike will be provided.",
"DTH - Provision for data and TV will be provided for each apartment.",
"Rainwater Harvesting System will be provided.",
"Landscape - Green belt will be provided through out the site.",
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
            backgroundImage: `url(${hero4})`,
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
            <img src={about} alt="Voora One Sea" />
          </motion.div>

          {/* CONTENT */}
          <motion.div className="overview-content">

            <motion.h4 variants={fadeUp}>OVERVIEW</motion.h4>

            <motion.h2 variants={fadeUp}>
              Peaceful Living at the<span> Heart of the City</span>
            </motion.h2>


            {/* FEATURES */}
            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                "📍 Exclusive five-story residence with just one luxury apartment per floor for unmatched privacy.",
                "🏗️ Located on the prestigious Pycrofts Garden Road, combining elegance with urban convenience.",
             
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="feature">
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
  Explore Project  →
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
          <span>VOORA BECKFORD</span>
          <h2>Project Highlights</h2>
        <p>BECKFORD — An Icon of Modern Waterfront Living</p>
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
        src={backford1}
        alt="2 BHK Plan"
      />
    </div>

    <div className="plan-card">
      <img
        src={backford2}
        alt="3 BHK Plan"
      />
    </div>

    <div className="plan-card">
      <img
        src={backford3}
        alt="Penthouse Plan"
      />
    </div>
 <div className="plan-card">
      <img
        src={backford4}
        alt="Penthouse Plan"
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
  );
}       