import { useRef, useState } from "react";
import "./UpcomingProjects.css";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaRulerCombined,
  FaHome,
  FaThLarge ,
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
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import oneSea from "../assets/image/homeonesea.png";
import westSide from "../assets/image/westside.webp";
import agasthya from "../assets/image/heroagastiya.webp";
import highwayHaven from "../assets/image/herohighwayhaven.webp";
import beckford from "../assets/image/herobeckford.webp";
import oceans27 from "../assets/image/herooceans27.webp";

const projects = [
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

const filters = ["All Projects", "Residential", "Commercial"];

export default function UpcomingProjects() {
  const [filter, setFilter] = useState("All Projects");
  const trackRef = useRef(null);

  const visible = projects.filter(
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

  const openBrochure = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
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
                    <span className="grid-icon"><FaThLarge /></span>
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

                  <Link
  to={`/upcoming-section`}
  className="know-more-btn"
>
  Know More <FaArrowRight />
</Link>

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
  );
}
