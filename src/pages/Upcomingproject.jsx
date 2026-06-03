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
    BHK: "2, 3 & BHK",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: oneSea,
  },
  {
    name: "Voora WestSide",
    type: "Residential",
    location: "Manapakkam, Chennai",
    Acres: "4.2 Acres",
    Units: "320 Units",
    BHK: "2 & 3 BHK Apartments",
    Price: "₹1 CR Onwards",
    completion: "Q1 2026",
    img: westSide,
  },
  {
    name: "Voora Agasthya",
    type: "Residential",
    location: "Tondiarpet, chennai",
    Acres: "5.8 Acres",
    Units: "410 Units",
    BHK: "3 & 4 BHK SEA=Facing Apartments",
    Price: "₹2.3 crows Onwards",
    completion: "Q3 2025",
    img: agasthya,
  },
  {
    name: "Voora Highway Haven",
    type: "Residential",
    location: "Panapakkam, Kanchipuram",
    Acres: "3.9 Acres",
    Units: "280 Units",
    BHK: "2 & 3 BHK",
    Price: "₹1500 Per Sq.ft",
    completion: "Q2 2026",
    img: highwayHaven,
  },
  {
    name: "Voora Beckford",
    type: "Residential",
    location: "Nungabakkam, Chennai",
    Acres: "7.1 Acres",
    Units: "600 Units",
    BHK: "4BHK",
    Price: "₹11 CR Onwards",
    completion: "Q4 2025",
    img: beckford,
  },
  {
    name: "Voora Ocean's 27",
    type: "Residential",
    location: "Tondiarpet, North Chennai",
    Acres: "7.1 Acres",
    Units: "600 Units",
    BHK: "4BHK",
    Price: "₹2.7 CR Onwards",
    completion: "Q4 2025",
    img: oceans27,
  },
  {
      name: "Voora Tech Edge",
      type: "Commercial",
      location: "Next to Mayajaal, ECR",
      Acres: "6.5 Acres",
      Units: "544 Units",
      BHK: "2, 3 & 4 BHK Apartments",
      Price: "₹7199 Per Sq.ft",
      completion: "Q4 2025",
      img: oneSea,
    },
];

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
      "url('http://voora.co.in/wp-content/uploads/2025/05/Voora-bannar_16-01-24-02-2.png')",
  }}
>
  
</section>

        
      {/* PROJECT SECTION */}
      <section className="section upcoming" id="projects">
            <div className="container">
      
              <div className="up-head">
                <div>
                  <span className="eyebrow">What Build</span>
                  <h2 className="section-title">Ongoing Projects</h2>
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
                        A signature {viewProject.type.toLowerCase()} address by
                        Voora — thoughtfully designed at {viewProject.location}{" "}
                        to deliver elevated living, premium amenities and
                        timeless value.
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
