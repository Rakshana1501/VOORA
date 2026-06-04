import "./VooraOneSea.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
import {
  FaSchool,
  FaUniversity,
  FaHospital,
  FaIndustry,
} from "react-icons/fa";
import { image } from "framer-motion/client";
import tblockhero from "../assets/image/tblockhero.webp";
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
import tblockabout from "../assets/image/tblockheroabout.webp"


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
  
];

const amenities = [
  { icon: "🚶", title: "Gated Community" },
  { icon: "🅿️", title: "Reliable Power Backup", desc: "Convenient parking space for electric buggies" },
  { icon: "🧘", title: "Modern Gym", desc: "Peaceful open-air yoga and meditation zone" },
  { icon: "🌳", title: "Kids’ Play Area", desc: "Shaded green area with natural seating spaces" },
  { icon: "🎋", title: "Association Room", desc: "Serene landscaped bamboo-themed garden" },
  { icon: "🚶‍♂️", title: "CCTV Surveillance", desc: "Relaxing pathway designed for health and wellness walks" },
  { icon: "🏊", title: "Beautifully Landscaped Spaces", desc: "Luxury infinity-style swimming pool" },
  { icon: "👶", title: "Mini Theatre", desc: "Safe and fun shallow pool for children" },

  { icon: "🏸", title: "Supermarket", desc: "Space for badminton, basketball, and more" },
  { icon: "🏐", title: "Banquet Hall", desc: "Fun outdoor recreational play zone" },
  { icon: "🚴", title: "Creche", desc: "Dedicated cycling path surrounded by greenery" },
  { icon: "♟️", title: "Clinic", desc: "Relaxed seating with indoor-outdoor board games" },
  { icon: "🛝", title: "Solar Energy", desc: "Safe and vibrant play zone for kids" },
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
              Step into a World of Elevated Living at  <span>Voora Vidyasagar Oswal Gardens T-Block</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
            </motion.p>

            {/* FEATURES */}
            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                "🌊 Spacious 2, 3, and 4 BHK residences designed for modern living and convenience.",
                "📍 Prime location in Korukkupet, just 1.5 km from Washermanpet Metro Station for seamless connectivity.",
                "🏗️Close proximity to Chennai’s top schools, hospitals, shopping hubs, and transport links.",
                "🏊 EContemporary design paired with thoughtful features for an elevated lifestyle.",

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
            <span className="faq-eyebrow">EXPLORE THE NEIGHBOURHOOD</span>
            <h2>Life Around Voora Vidyasagar</h2>
            <p className="faq-subhead">
              A quick look at the schools, colleges, hospitals and industrial corridors that surround the community.
            </p>
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

      <section id="faqs" className="highwayfaq-section">
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