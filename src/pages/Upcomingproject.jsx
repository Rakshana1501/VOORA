import './Upcomingproject.css'
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaRulerCombined,
  FaHome,
  FaBed,
  FaCalendarAlt,
  FaTag,
  FaDownload,
  FaArrowRight,
  FaTimes,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaRegEye,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useRef } from 'react';

import oneSea from "../assets/image/homeonesea.png";
import westSide from "../assets/image/westside.webp";
import agasthya from "../assets/image/heroagastiya.webp";
import highwayHaven from "../assets/image/herohighwayhaven.webp";
import beckford from "../assets/image/herobeckford.webp";
import oceans27 from "../assets/image/herooceans27.webp";

const projectData = [
  {
      name: "Voora One Sea",
      type: "Residential",
      location: "Next to Mayajaal, ECR",
      Acres: "11.06 Acres",
      Units: "1039 Units",
      BHK: "2, 3 BHK",
      Price: "₹7199/sqft",
      completion: "Aug 2028",
      img: oneSea,
    },
    {
      name: "Voora WestSide",
      type: "Residential",
      location: "Manapakkam, Chennai",
      Acres: "1.5 Acres",
      Units: "77 Units",
      BHK: "2 & 3 BHK",
      Price: "₹13000/sqft",
      completion: "Ready to occupy",
      img: westSide,
    },
    {
      name: "Voora Agasthya",
      type: "Residential",
      location: "Tondiarpet, chennai",
      Acres: "0.55 Acres",
      Units: "54 Units",
      BHK: "3 & 4 BHK",
      Price: "₹12499/sqft",
      completion: "Mar 2028",
      img: agasthya,
    },
    {
      name: "Voora Highway Haven",
      type: "Residential",
      location: "Panapakkam, Kanchipuram",
      Acres: "11.33 Acres",
      Units: "269 Units",
      // BHK: "Plot",
      Price: "₹1500/sqft",
      completion: "Ready to occupy",
      img: highwayHaven,
    },
    {
      name: "Voora Beckford",
      type: "Residential",
      location: "Nungabakkam, Chennai",
      Acres: " Acres",
      Units: "5 Units",
      BHK: "4BHK",
      Price: "₹30000/sqft",
      completion: "",
      img: beckford,
    },
    {
      name: "Voora Ocean's 27",
      type: "Residential",
      location: "Tondiarpet, North Chennai",
      Acres: "1.8 Acres",
      Units: "132 Units",
      BHK: "2, 3 & 4 BHK",
      Price: "₹",
      completion: "Ready to occupy",
      img: oceans27,
    },
    {
      name: "Voora Tech Edge",
      type: "Commercial",
      location: "Next to Mayajaal, ECR",
      Acres: "6.5 Acres",
      Units: "544 Units",
      BHK: "2, 3 & 4 BHK Apartments",
      // Price: "",
      // completion: "",
      img: oneSea,
    },
];

// Mapping of project names to custom description paragraphs for the view modal
const descriptionMap = {
  "Voora One Sea": `Voora One Sea is a landmark residential development located next to Mayajaal on the iconic East Coast Road (ECR). Spanning an impressive 11.06 acres, this premium project offers 1,039 thoughtfully designed 2 & 3 BHK apartments that redefine coastal living. Every residence is crafted to maximise natural light, cross-ventilation, and panoramic sea-facing views, ensuring a living experience that feels like a perpetual vacation. With world-class amenities including a grand clubhouse, infinity pool, landscaped gardens, and dedicated children's play areas, Voora One Sea delivers a lifestyle that seamlessly blends luxury with the tranquillity of beachside living. Its strategic location ensures easy access to IT corridors, reputed schools, hospitals, and entertainment hubs along the ECR stretch.`,
  "Voora WestSide": `Voora WestSide is a boutique residential enclave nestled in the rapidly developing neighbourhood of Manapakkam, Chennai. Spread across 1.5 acres, this exclusive development features just 77 meticulously designed 2 & 3 BHK apartments, ensuring an intimate and close-knit community experience. Each home is thoughtfully planned with spacious interiors, premium finishes, and modern amenities that cater to the discerning homebuyer. Manapakkam's strategic position offers excellent connectivity to major IT parks, the Chennai bypass, and key commercial centres, making Voora WestSide the perfect choice for professionals and families seeking a peaceful yet well-connected address in West Chennai.`,
  "Voora Agasthya": `Voora Agasthya is a premium residential project located in the vibrant neighbourhood of Tondiarpet, Chennai. Designed across 0.55 acres, this compact yet luxurious development offers 54 spacious 3 & 4 BHK apartments that epitomise modern urban living. Every unit is crafted with attention to detail, featuring contemporary architecture, high-quality finishes, and intelligent space planning that maximises comfort and functionality. Residents enjoy access to a well-equipped fitness centre, landscaped terraces, and community spaces designed to foster a vibrant neighbourhood spirit. Tondiarpet's excellent connectivity to the city's commercial hubs, waterfront promenades, and cultural landmarks makes Voora Agasthya a compelling address for those seeking elevated living in North Chennai.`,
  "Voora Highway Haven": `Voora Highway Haven is an expansive plotted development situated in Panapakkam, Kanchipuram, spanning a generous 11.33 acres with 269 premium plots designed for those who envision building their dream home from the ground up. Each plot is RERA-approved and Vaastu-compliant, with well-laid-out roads, underground drainage, and 24/7 security infrastructure already in place. Surrounded by lush greenery and positioned along the bustling highway corridor, Voora Highway Haven offers the rare combination of serene countryside charm with seamless city connectivity. Residents benefit from proximity to reputed educational institutions, healthcare facilities, and upcoming commercial zones, making it an ideal investment for families and discerning buyers.`,
  "Voora Beckford": `Voora Beckford is an ultra-luxury residential project located in the prestigious neighbourhood of Nungambakkam, one of Chennai's most coveted addresses. This exclusive development comprises just 5 bespoke 4 BHK residences, each spanning generous floor plates with premium finishes, imported fixtures, and bespoke interiors that reflect the pinnacle of luxury living. Designed for the elite few, every home at Voora Beckford offers unparalleled privacy, expansive living spaces, and panoramic city views. Nungambakkam's prime location places residents within walking distance of upscale dining, boutique retail, five-star hotels, and key business districts, making Voora Beckford the definitive address for those who demand nothing but the finest.`,
  "Voora Ocean's 27": `Voora Ocean's 27 is a contemporary residential development located in Tondiarpet, North Chennai, spanning 1.8 acres with 132 thoughtfully designed 2, 3 & 4 BHK apartments. This project brings a fresh wave of modern living to North Chennai with its striking architecture, spacious layouts, and a curated suite of lifestyle amenities including a rooftop infinity pool, state-of-the-art gymnasium, multipurpose hall, and beautifully landscaped gardens. Each residence is designed to capture abundant natural light and ventilation, creating bright, airy living spaces that feel welcoming at every hour. Strategically positioned with excellent road and rail connectivity, Voora Ocean's 27 offers the ideal blend of urban convenience and coastal serenity.`
};

const filters = ["All Projects", "Residential"];

const PAGE_TYPE = "Residential";

const defaultHighlights = [
  "RERA Approved Premium Development",
  "World-Class Clubhouse & Amenities",
  "Prime Location with Easy Connectivity",
  "Vaastu Compliant Spacious Layouts",
  "Lush Green Landscaped Surroundings",
  "24/7 Security & Smart Home Features",
];


export default function Upcomingprojects() {
    const [filter, setFilter] = useState("All Projects");
    const trackRef = useRef(null);

    const residentialOnly = projectData.filter((p) => p.type === PAGE_TYPE);

    const visible = residentialOnly.filter(
    (p) => filter === "All Projects" || p.type === filter
  );
  
    const scroll = (dir) => {
      const track = trackRef.current;
      if (!track) return;
  
      const card = track.querySelector(".up-card");
      const amount = card ? card.offsetWidth + 28 : 380;
  
      track.scrollBy({
        left: dir * amount,
        behavior: "smooth",
      });
    };
  
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const [showView, setShowView] = useState(false);
    const [viewProject, setViewProject] = useState(null);

    const openBrochure = (project) => {
      setSelectedProject(project);
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
      setSelectedProject(null);
    };

    const openView = (project) => {
      setViewProject(project);
      setShowView(true);
    };

    const closeView = () => {
      setShowView(false);
      setViewProject(null);
    };
  
  return (
    <>
    
      {/* HERO SECTION */}
      <section
  className="upcoming-hero"
  style={{
    backgroundImage:
      "url('https://voora.co.in/wp-content/uploads/2025/05/Voora-bannar_16-01-24-02-2.png')",
  }}
>
  
</section>

        
      {/* PROJECT SECTION */}
      <section className="section upcoming" id="projects">
            <div className="container">
      
              <div className="up-head">
                <div>
                  <span className="eyebrow">What Build</span>
                  <h2 className="section-title">Upcoming Projects</h2>
                </div>
      
                <a href="#contact" className="btn btn-outline">
                  View All Projects <FaArrowRight />
                </a>
              </div>
      
              <div className="up-controls">
      
                <div className="filter-tabs">
                  {filters.map((f) => (
                    <button
                      key={f}
                      className={filter === f ? "active" : ""}
                      onClick={() => setFilter(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
      
                <div className="up-arrows">
                  <button onClick={() => scroll(-1)} aria-label="Previous">
                    <FaChevronLeft />
                  </button>
      
                  <button onClick={() => scroll(1)} aria-label="Next">
                    <FaChevronRight />
                  </button>
                </div>
      
              </div>
      
              <div className="up-track" ref={trackRef}>
      
                {visible.map((p) => (
                  <article className="up-card" key={p.name}>
      
                    <div
                      className="up-img"
                      style={{ backgroundImage: `url(${p.img})` }}
                    >
                      <span className="up-type">
                        <FaBuilding /> {p.type}
                      </span>
      
                      <span className="up-price-badge">
                        <FaTag /> {p.Price}
                      </span>
      
                      <button className="up-go" aria-label="Open Project">
                        <FiArrowUpRight />
                      </button>
      
                      <div className="up-img-bottom">
                        <h3>{p.name}</h3>
                        <p className="up-location">
                          <FaMapMarkerAlt /> {p.location}
                        </p>
                      </div>
                    </div>
      
                    <div className="up-body">
      
                      <div className="up-grid">
      
                        <div className="grid-item">
                          <span className="grid-icon"><FaBed /></span>
                          <div className="grid-text">
                            <span>Configuration</span>
                            <strong>{p.BHK}</strong>
                          </div>
                        </div>
      
                        <div className="grid-item">
                          <span className="grid-icon"><FaHome /></span>
                          <div className="grid-text">
                            <span>Units</span>
                            <strong>{p.Units}</strong>
                          </div>
                        </div>
      
                        <div className="grid-item">
                          <span className="grid-icon"><FaRulerCombined /></span>
                          <div className="grid-text">
                            <span>Land Area</span>
                            <strong>{p.Acres}</strong>
                          </div>
                        </div>
      
                        <div className="grid-item">
                          <span className="grid-icon"><FaCalendarAlt /></span>
                          <div className="grid-text">
                            <span>Completion</span>
                            <strong>{p.completion}</strong>
                          </div>
                        </div>
      
                      </div>
      
                      <div className="up-actions">

                        <button
                          className="know-more-btn"
                          onClick={() => openView(p)}
                        >
                          <FaRegEye /> View More
                        </button>

                        <button
                          className="brochure-btn"
                          onClick={() => openBrochure(p)}
                        >
                          <FaDownload /> Brochure
                        </button>

                      </div>
      
                    </div>
      
                  </article>
                ))}
      
              </div>
      
              {showView && viewProject && (
                <div className="view-overlay" onClick={closeView}>
                  <div
                    className="view-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="close-modal view-close"
                      onClick={closeView}
                      aria-label="Close"
                    >
                      <FaTimes />
                    </button>

                    <div
                      className="view-left"
                      style={{ backgroundImage: `url(${viewProject.img})` }}
                    >
                      <span className="view-type-badge">
                        <FaBuilding /> {viewProject.type}
                      </span>
                      <span className="view-price-badge">
                        <FaTag /> {viewProject.Price}
                      </span>
                      <div className="view-left-bottom">
                        <h3>{viewProject.name}</h3>
                        <p>
                          <FaMapMarkerAlt /> {viewProject.location}
                        </p>
                      </div>
                    </div>

                    <div className="view-right">
                      <span className="view-tag">Project Overview</span>
                      <h2>{viewProject.name}</h2>
                      <p className="view-desc">
                        {viewProject.name && descriptionMap[viewProject.name] ? descriptionMap[viewProject.name] : `A signature ${viewProject.type.toLowerCase()} address by Voora — thoughtfully designed at ${viewProject.location} to deliver elevated living, premium amenities and timeless value.`}
                      </p>

                      <div className="view-points">
                        <div className="view-point">
                          <span className="view-point-icon">
                            <FaBed />
                          </span>
                          <div>
                            <span>Configuration</span>
                            <strong>{viewProject.BHK}</strong>
                          </div>
                        </div>

                        <div className="view-point">
                          <span className="view-point-icon">
                            <FaHome />
                          </span>
                          <div>
                            <span>Total Units</span>
                            <strong>{viewProject.Units}</strong>
                          </div>
                        </div>

                        <div className="view-point">
                          <span className="view-point-icon">
                            <FaRulerCombined />
                          </span>
                          <div>
                            <span>Land Area</span>
                            <strong>{viewProject.Acres}</strong>
                          </div>
                        </div>

                        <div className="view-point">
                          <span className="view-point-icon">
                            <FaCalendarAlt />
                          </span>
                          <div>
                            <span>Completion</span>
                            <strong>{viewProject.completion}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="view-highlights">
                        <h4>Key Highlights</h4>
                        <ul>
                          {defaultHighlights.map((h) => (
                            <li key={h}>
                              <FaCheckCircle /> {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="view-cta-row">
                        <button
                          className="view-cta-primary"
                          onClick={() => {
                            closeView();
                            openBrochure(viewProject);
                          }}
                        >
                          <FaDownload /> Download Brochure
                        </button>
                        <a href="#contact" className="view-cta-ghost">
                          Enquire Now <FaArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showModal && (
                <div className="brochure-overlay" onClick={closeModal}>
      
                  <div
                    className="brochure-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
      
                    <button className="close-modal" onClick={closeModal} aria-label="Close">
                      <FaTimes />
                    </button>
      
                    <div className="modal-header">
                      <span className="modal-tag">Premium Brochure</span>
                      <h3>{selectedProject?.name}</h3>
                      <p>Fill the details to download the brochure</p>
                    </div>
      
                    <form className="brochure-form">
      
                      <div className="input-wrap">
                        <FaUser />
                        <input type="text" placeholder="Full Name" required />
                      </div>
      
                      <div className="input-wrap">
                        <FaPhone />
                        <input type="tel" placeholder="Phone Number" required />
                      </div>
      
                      <div className="input-wrap">
                        <FaEnvelope />
                        <input type="email" placeholder="Email Address" required />
                      </div>
      
                      <div className="input-wrap input-wrap--textarea">
                        <FaCommentDots />
                        <textarea rows="3" placeholder="Message (Optional)" />
                      </div>
      
                      <button type="submit" className="download-btn">
                        <FaDownload /> Download Brochure
                      </button>
      
                    </form>
      
                  </div>
      
                </div>
              )}
      
            </div>
          </section>
    </>
  )
}