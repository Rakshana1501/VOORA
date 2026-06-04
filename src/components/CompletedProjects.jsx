import { useRef, useState } from "react";
import "./CompletedProjects.css";
<<<<<<< HEAD
=======
import { captureLead } from "../utils/tracker";
>>>>>>> c91bb80f55339f6a8a3a2f9f53787a27d40826c1

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
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import vooraashwin from "../assets/image/vooraaswin.webp";
import vooranarayana from "../assets/image/vooranarayana.webp";
import vooraprakash from "../assets/image/vooraprakash.webp";
import vooravilla96 from "../assets/image/vooravilla96.webp";
import vooravidyasagar from "../assets/image/vooravidhya.webp";
import voorasaraswathi from "../assets/image/voorasaraswathi.webp";
import vooragithanjali from "../assets/image/vooragitanjali.webp";
import vooravijayasree from "../assets/image/vooravijayasree.webp";
import voorapritvi from "../assets/image/voorapritvi.webp";
import vooraradhahomes from "../assets/image/vooraradhahomes.webp";
import voorajktower from "../assets/image/voorajktower.webp";
import voorasreela from "../assets/image/voorasreelaterraces.webp";



const projects = [
  {
    name: "Voora Ashwin",
    type: "Residential",
    location: "T. Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooraashwin,
  },
  {
    name: "Voora TRM Court",
    type: "Residential",
    location: "Mylapore, Chennai",
    Acres: "4.2 Acres",
    Units: "320 Units",
    BHK: "2 & 3 BHK Apartments",
    Price: "₹1 CR Onwards",
    completion: "Q1 2026",
    img: vooraashwin,
  },
  {
    name: "Voora Narayana",
    type: "Residential",
    location: "Purasaiwakkam, Chennai",
    Acres: "5.8 Acres",
    Units: "410 Units",
    BHK: "3 & 4 BHK SEA=Facing Apartments",
    Price: "₹2.3 crows Onwards",
    completion: "Q3 2025",
    img: vooranarayana,
  },
  {
    name: "Voora Prakash",
    type: "Residential",
    location: "Vijayaraghava Road, T. Nagar, Chennai",
    Acres: "3.9 Acres",
    Units: "280 Units",
    BHK: "2 & 3 BHK",
    Price: "₹1500 Per Sq.ft",
    completion: "Q2 2026",
    img: vooraprakash,
  },
  {
    name: "Voora Villa 96",
    type: "Residential",
    location: "ECR – Sholinganallur, Chennai",
    Acres: "7.1 Acres",
    Units: "600 Units",
    BHK: "4BHK",
    Price: "₹11 CR Onwards",
    completion: "Q4 2025",
    img: vooravilla96,
  },
  {
    name: "Voora Vidyasagar Oswal Garden",
    type: "Residential",
    location: "Phase -I Korukkupet, Chennai",
    Acres: "7.1 Acres",
    Units: "600 Units",
    BHK: "4BHK",
    Price: "₹2.7 CR Onwards",
    completion: "Q4 2025",
    img: vooravidyasagar,
  },
  {
    name: "Voora Saraswathi",
    type: "Residential",
    location: "Hindi Prachar Sabha Road, T. Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorasaraswathi,
  },

  {
    name: "Voora Gitanjali",
    type: "Residential",
    location: "T.Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooragithanjali,
  },

  {
    name: "Voora Vijayasree",
    type: "Residential",
    location: "Dr.B.N. Road, T. Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooravijayasree,
  },

  {
    name: "Voora Pritvi",
    type: "Residential",
    location: "ECR, Kottivakkam, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorapritvi,
  },

  {
    name: "Voora Radha Homes",
    type: "Residential",
    location: "Harrington Road, Chetpet, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooraradhahomes,
  },

  {
    name: "Voora J K Tower",
    type: "Commercial",
    location: "T.Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorajktower,
  },

  {
    name: "Voora Sreela Terrace",
    type: "Commercial",
    location: "Adyar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorasreela,
  },
];

const filters = ["All Projects", "Residential", "Commercial"];

export default function CompletedProjects() {
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

<<<<<<< HEAD
=======
  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');
    const formData = {
      name: inputs[0]?.value || '',
      phone: inputs[1]?.value || '',
      email: inputs[2]?.value || '',
      message: inputs[3]?.value || '',
      project: selectedProject?.name || '',
    };
    captureLead('Completed Projects Brochure Form', formData);
    alert(`Thank you! Your brochure download for ${selectedProject?.name} has started.`);
    closeModal();
  };

>>>>>>> c91bb80f55339f6a8a3a2f9f53787a27d40826c1
  return (
    <section className="section upcoming" id="projects">
      <div className="container">

        <div className="up-head">
          <div>
            <span className="eyebrow">Our Completed Projects</span>
            <h2 className="section-title">Completed Projects</h2>
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

                  <a
                    href={`/project/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="know-more-btn"
                  >
                    Know More <FaArrowRight />
                  </a>

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

<<<<<<< HEAD
              <form className="brochure-form">
=======
              <form className="brochure-form" onSubmit={handleBrochureSubmit}>
>>>>>>> c91bb80f55339f6a8a3a2f9f53787a27d40826c1

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
