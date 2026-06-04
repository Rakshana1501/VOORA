import "./VooraOneSea.css";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/image/fav.png";
import React, { useState, useEffect, useRef } from "react";
<<<<<<< HEAD
import vooraagasta from "../assets/image/heroagasta.webp";
import about from "../assets/image/oneseaabout.webp";
import plan1 from "../assets/image/project1.webp";
import plan2 from "../assets/image/project2.webp";
import plan3 from "../assets/image/project3.webp";
import plan4 from "../assets/image/project4.webp";
import news1 from "../assets/image/news1.webp";
import news2 from "../assets/image/news2.webp";
import news3 from "../assets/image/news3.webp";
import news4 from "../assets/image/news4.webp";
import news5 from "../assets/image/news5.webp";
import news6 from "../assets/image/news6.webp";
import news7 from "../assets/image/news7.webp";
import news8 from "../assets/image/news8.webp";
import news9 from "../assets/image/news9.webp";
import news10 from "../assets/image/news10.webp";
import news11 from "../assets/image/news11.webp";
import news12 from "../assets/image/news12.webp";
import news13 from "../assets/image/news13.webp";
import news14 from "../assets/image/news14.webp";
import news15 from "../assets/image/news15.webp";
import news16 from "../assets/image/news16.webp";
import news17 from "../assets/image/news17.webp";
import news18 from "../assets/image/news18.webp";
import news19 from "../assets/image/news19.webp";
import news20 from "../assets/image/news20.webp";
import news21 from "../assets/image/news21.webp";
import { FaChild, FaElevator } from "react-icons/fa6";
import LeadForm from "../components/LeadForm";
import {
  InteriorImg1, InteriorImg2, InteriorImg3,
  ExteriorImg1, ExteriorImg2, ExteriorImg3,
} from "../assets/imageUrls";

const videos = [
  {
    src: "https://www.youtube-nocookie.com/embed/byoTnV_YaTM",
    title: "Voora One Sea",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/byoTnV_YaTM",
    title: "Commercial Construction",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/byoTnV_YaTM",
    title: "Interior Design Showcase",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/byoTnV_YaTM",
    title: "Villa Project Tour",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/byoTnV_YaTM",
=======
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
>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
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
=======
  "Located on ECR at Kanathur",
  "1-acre natural lake inside the community",
  "Total Land Area 11.06 Acres",
  "Grand Club spread across 60,000 sq. ft",
  "Tallest tower in ECR with 41 floors",
  "100% eco-sensitive with 1,000+ trees",
  "Spread Across 4 Towers",
  "French-inspired design with 100+ exotic plants",
  "2 & 3 BHK - (1112 sq.ft to 1584 sq.ft)",
  "Largest project in ECR with 1039 apartments in Phase 1",
  "Fastest Handover Fit-out completion in just 2.5 years*",
  "First project in Chennai offering both sea and backwater views",
  "Unparalleled 40+ world-class amenities",
  "85% Open Space",
  "265+ quality checkpoints before handover",
  "Exclusive sea-view café—the only one in ECR",
  "25+ Safety Features",
  "Sky Amphitheatre",
  "20-year structure warranty—a first in India",
  "2.7-acres podium space",
  "10-year warranty on fittings and features",
  "Grand Entrance Lobby",
  "IGBC Pre-Certified Gold-Rated Green Homes",
  "Fastest elevator with the speed of 2.5 secs per floor",
];

const amenities = [
  { icon: "🚶", title: "Pedestrian Entry", desc: "Safe and elegant dedicated walking entrance" },
  { icon: "🅿️", title: "Buggy Parking", desc: "Convenient parking space for electric buggies" },
  { icon: "🧘", title: "Yoga Pavilion", desc: "Peaceful open-air yoga and meditation zone" },
  { icon: "🌳", title: "Tree Court with Seating", desc: "Shaded green area with natural seating spaces" },
  { icon: "🎋", title: "Bamboo Garden", desc: "Serene landscaped bamboo-themed garden" },
  { icon: "🚶‍♂️", title: "Therapeutic Walkway", desc: "Relaxing pathway designed for health and wellness walks" },
  { icon: "🏊", title: "Swimming Pool", desc: "Luxury infinity-style swimming pool" },
  { icon: "👶", title: "Kids Pool", desc: "Safe and fun shallow pool for children" },

  { icon: "🏸", title: "Multipurpose Sports Court", desc: "Space for badminton, basketball, and more" },
  { icon: "🏐", title: "Tether Ball Area", desc: "Fun outdoor recreational play zone" },
  { icon: "🚴", title: "Cycling Track", desc: "Dedicated cycling path surrounded by greenery" },
  { icon: "♟️", title: "Pavilion with Game Tables", desc: "Relaxed seating with indoor-outdoor board games" },
  { icon: "🛝", title: "Children’s Play Area", desc: "Safe and vibrant play zone for kids" },
  { icon: "🐕", title: "Dog Walk Area", desc: "Dedicated space for pets and walking trails" },
  { icon: "💦", title: "Water Archway", desc: "Decorative water feature walkway entrance" },
  { icon: "🌱", title: "Planting Island", desc: "Green island zones for eco-friendly landscaping" },

  { icon: "🧘‍♀️", title: "Meditation Pavilion", desc: "Quiet space for mindfulness and relaxation" },
  { icon: "🌉", title: "Floating Deck", desc: "Water-facing deck for leisure and gatherings" },
  { icon: "🐟", title: "Bio Pond", desc: "Eco-friendly natural pond ecosystem" },
  { icon: "🌺", title: "Aroma Garden", desc: "Fragrant flower garden with calming atmosphere" },
  { icon: "🗿", title: "Feature Sculpture", desc: "Artistic landmark installations across the landscape" },
  { icon: "🏖️", title: "Lounge Pool", desc: "Relaxation pool with seating and leisure space" },
  { icon: "⚽", title: "Mini Soccer Field", desc: "Compact turf ground for football practice" },
  { icon: "🏏", title: "Cricket Practice Net", desc: "Dedicated training nets for cricket lovers" },

  { icon: "🏃", title: "Jogging Track", desc: "Scenic track for daily fitness and running" },
  { icon: "🏟️", title: "Sports Viewing Gallery", desc: "Seating area to enjoy live sports activities" },
  { icon: "♟️", title: "Chess Board Area", desc: "Outdoor giant chess play zone" },
  { icon: "⛱️", title: "Sand Play Area", desc: "Soft sand zone for kids recreation" },
  { icon: "🌊", title: "Natural Pond (1 Acre)", desc: "Large eco pond enhancing natural beauty" },
  { icon: "🏛️", title: "Block Entry Plaza", desc: "Grand entrance plaza with premium design" }
>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
    " Voora Agastya Heights is situated on Tondiarpet Main Road, right beside the Tondiarpet Metro Station. This prime location offers seamless connectivity across Chennai and is surrounded by reputed schools, hospitals, and shopping hubs for everyday convenience."
=======
    "The project is located in Kanathur, ECR (East Coast Road), Chennai, offering a prime location with stunning views and easy access to key areas."
>>>>>>> VOORA-Rakshana
  },

  {
    question: "What types of apartments are available, and what are their size?",
    answer:
<<<<<<< HEAD
      " The project features spacious 3 BHK homes ranging from 1800 to 1928 sq. ft. and premium 4 BHK homes of 2207 sq. ft. Each apartment is thoughtfully designed to provide ample space, comfort, and modern living features.",
  },

  {
    question: "What makes this project unique in North Chennai?",
    answer:
      "Its blend of smart home automation, high-quality finishes, and a location directly next to the metro makes it stand out in the region. Residents enjoy a modern lifestyle with the convenience of excellent connectivity.",
=======
      "The project offers spacious 2 & 3 BHK homes, with sizes ranging from 1100 sq. ft. to 1600 sq. ft., providing ample living space for families of different needs.",
  },

  {
    question: "What makes this project unique in Chennai?",
    answer:
      "This is the first project in Chennai that offers both sea and backwater views, along with the tallest tower in ECR, standing at 41 floors. It is also the only project in the area that features a sea-view café, adding a luxurious touch to the living experience.",
>>>>>>> VOORA-Rakshana
  },

  {
    question: "What amenities are available?",
    answer:
<<<<<<< HEAD
      "Amenities include a gym, kids play area, landscaped terrace, yoga and meditation space, visitor parking, and more. Every facility is planned to enhance comfort, recreation, and community living.",
=======
      "Residents can enjoy 40+ world-class amenities, including a grand 60,000 sq. ft. clubhouse, a one-acre natural pond within the community, and smart home integrations in all units to enhance convenience and modern living.",
>>>>>>> VOORA-Rakshana
  },

  {
    question: "What warranties are provided?",
    answer:
<<<<<<< HEAD
    "Voora Agastya Heights offers a 20-year structural warranty and a 10-year warranty on fittings. These assurances reflect the project’s commitment to quality and long-lasting value."
  },

  {
    question: "Is the project environment-friendly?",
    answer:
    "Yes, it includes eco-friendly features such as rainwater harvesting, organic waste recycling, water softening plants, and landscaped green areas. These sustainable measures ensure a healthier environment for residents."
  },

=======
    "The project offers a 20-year structural warranty, which is a first-of-its-kind initiative in India, along with a 10-year warranty on fittings and features, ensuring long-term durability and quality assurance."
  },

  {
    question: "How environmentally friendly is the community?",
    answer:
    "The project is designed as a 100% environmentally sensitive community, featuring over 1000 trees, efficient water conservation methods, energy-saving initiatives, and proper waste management systems to promote sustainable living."
  },

  {
    question: "What types of apartments and flats in ECR does Voora offer for sale?",
    answer:
    "Voora’s new project offers a range of luxury apartments in ECR, including spacious 1, 2, and 3 BHK flats for sale. Each unit is designed for modern living in Chennai’s most scenic corridor."
  },

  {
    question: "Are these genuine sea-facing apartments in Chennai?",
    answer:
    "Absolutely. This is a premier sea-facing apartment project, featuring the tallest tower on the ECR. Most of our flats offer stunning, direct sea views or tranquil backwater views, providing a genuine coastal living experience."
  },

  {
    question: "Is this one of the new residential projects in ECR, Chennai?",
    answer:
      "Yes, this is one of the most anticipated new projects in ECR. As an upcoming project, it features the latest in construction technology, smart home integration, and contemporary design, making it a prime investment.",
  },

  {
    question: "Are there eco-friendly features in the project?",
    answer:
      "Yes, the project includes eco-friendly landscaping, natural ponds, green spaces, and IGBC Gold-rated sustainable development features.",
  },

  {
    question: "What makes these ECR luxury apartments stand out?",
    answer:
      "Beyond the prime location, our ECR luxury apartments by Voora stand out due to their IGBC Gold-Rated eco-conscious design, premium interior finishes, a 20-year structural warranty, and an exclusive 40,000 sq. ft. clubhouse.",
  },

  {
    question: "Why should I trust a Voora residential project in ECR?",
    answer:
      "With over 30 years of experience in Chennai’s real estate, Voora has a legacy of trust and quality. Choosing this residential project in ECR means you are investing with a reputable developer known for timely delivery and excellence in construction.",
  },

  {
    question: "Where can I find beach view apartments in Chennai for sale with good amenities?",
    answer:
    "You’ve found them. Voora’s project on the ECR is the definitive answer for anyone searching for beach view apartments in Chennai for sale. We combine breathtaking views with a comprehensive list of lifestyle amenities unmatched in the area."
  },
>>>>>>> VOORA-Rakshana
];


const galleryData = {
<<<<<<< HEAD
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
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
=======
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
>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
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
=======
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
>>>>>>> VOORA-Rakshana
    ],
  },

  {
<<<<<<< HEAD
    title: "Windows & Doors",
   points: [
  "Main Door: Polished wood frame with laminated flush shutter and high-security digital lock system.",
  "Internal Doors & Frames: Polished wood frames with laminated flush shutters and anodized aluminium fittings.",
  "Solar Power: Provided for all common area lighting.",
  "Lightning Arresters: Installed in all towers for safety.",
  "Transformers with RMU units provided for each tower."
],
=======
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
>>>>>>> VOORA-Rakshana
  },


  {
<<<<<<< HEAD
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
=======
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



  
  
  
>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
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
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
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
=======
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
              Enjoy Your Sea Facing View <span>At ECR With Voora</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Voora ONE SEA is a premium luxury residential development located near
              the coastline.
            </motion.p>

            {/* FEATURES */}
            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                "📍 Located on ECR at Kanathur",
                "🏗️ Spread Across 4 Towers",
                "🌊 Sea & Backwater Views",
                "🏡 2 & 3 BHK Luxury Homes",
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
  One Sea View →
</motion.button>

          </motion.div>
        </motion.div>
      </section>
>>>>>>> VOORA-Rakshana

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
<<<<<<< HEAD
          <span>VOORA Agastya</span>
          <h2>Project Highlights</h2>
=======
          <span>VOORA ONE SEA</span>
          <h2>Project Highlights</h2>
          <p>Luxury Living With Unmatched Sea Views</p>
>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
=======
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
>>>>>>> VOORA-Rakshana




<<<<<<< HEAD
   
=======



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

>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
   
=======

     
>>>>>>> VOORA-Rakshana
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

<<<<<<< HEAD
  
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
=======
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
>>>>>>> VOORA-Rakshana

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
<<<<<<< HEAD
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5988437841193!2d80.2889922!3d13.1245807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1db7a7b21d77cef%3A0x32dc353650271edd!2sVoora%20Agastya!5e0!3m2!1sen!2sin!4v1780377872283!5m2!1sen!2sin"
=======
  src="https://www.google.com/maps/embed?pb=..."
>>>>>>> VOORA-Rakshana
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Voora One Sea Location"
/>
  </div>
<<<<<<< HEAD
<div className="faq-right">
   <div className="faq-header">
=======

  <div className="faq-right">

    <div className="faq-header">
>>>>>>> VOORA-Rakshana
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
<<<<<<< HEAD
</div>

</section>

=======

  </div>

</section>


>>>>>>> VOORA-Rakshana
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

<<<<<<< HEAD
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
=======
    <button className="download-brochure-btn">
      Download Now
    </button>
>>>>>>> VOORA-Rakshana

  </div>

</section>
<<<<<<< HEAD

{/* ─── ENQUIRY LEAD FORM ─────────────────────────────── */}
<section style={{ padding: '60px 20px', background: '#0e0e0e', textAlign: 'center' }}>
  <h2 style={{ color: '#c9a227', marginBottom: 8, fontSize: '1.6rem' }}>
    Interested in Voora Agastya Heights?
  </h2>
  <p style={{ color: '#aaa', marginBottom: 28 }}>
    Book a free site visit with our property experts today.
  </p>
  <LeadForm projectName="Voora Agastya Heights" triggerLabel="Book Free Site Visit →" />
</section>

    </div>
  );
}       
=======
    </div>
  );
}       
>>>>>>> VOORA-Rakshana
