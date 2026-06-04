import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [residentialSubOpen, setResidentialSubOpen] = useState(false);
  const [commercialSubOpen, setCommercialSubOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setResidentialOpen(false);
    setCommercialOpen(false);
    setResidentialSubOpen(false);
    setCommercialSubOpen(false);
  }, [location.pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setResidentialOpen(false);
        setCommercialOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleHashLink = (hash) => {
    if (location.pathname === "/") {
      // Already on home — scroll to section
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    setOpen(false);
  };

  return (
    <header className="navbar" ref={navRef}>
      <nav className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src=""
            alt="VOORA Logo"
            className="logo-img"
          />
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about-us">About</Link>
          </li>

          <li>
            <button
              type="button"
              className="nav-plain-btn"
              onClick={() => handleHashLink("#services")}
            >
              Services
            </button>
          </li>

          {/* Residential */}
          <li className="dropdown mobile-dropdown">
            <button
              type="button"
              className="mobile-dropdown-btn"
              onClick={() => setResidentialOpen(!residentialOpen)}
            >
              Residential
              <span>{residentialOpen ? "▲" : "▼"}</span>
            </button>

            <div className={`dropdown-menu ${residentialOpen ? "show" : ""}`}>
              <div className="dropdown-submenu">
                <button
                  type="button"
                  className="submenu-btn"
                  onClick={() => setResidentialSubOpen(!residentialSubOpen)}
                >
                  Ongoing Projects
                  <span>{residentialSubOpen ? "▲" : "▶"}</span>
                </button>

                <div className={`submenu ${residentialSubOpen ? "show" : ""}`}>
                  <Link to="/voora-one-sea" onClick={() => setOpen(false)}>Voora One Sea</Link>
                  <Link to="/voora-agastya" onClick={() => setOpen(false)}>Voora Agastya</Link>
                  <Link to="/voora-westside" onClick={() => setOpen(false)}>Voora Westside</Link>
                  <Link to="/voora-beckford" onClick={() => setOpen(false)}>Voora Beckford</Link>
                  <Link to="/voora-highway-haven" onClick={() => setOpen(false)}>Voora Highway Haven</Link>
                  <Link to="/voora-vidyasagar-t-block" onClick={() => setOpen(false)}>Voora Vidyasagar T-Block</Link>
                  <Link to="/voora-oceans-27" onClick={() => setOpen(false)}>Voora Ocean's 27</Link>
                </div>
              </div>

              <Link to="/upcoming-section" onClick={() => setOpen(false)}>Upcoming Projects</Link>
              <Link to="/completed" onClick={() => setOpen(false)}>Completed Projects</Link>
            </div>
          </li>

          {/* Commercial */}
          <li className="dropdown">
            <button
              type="button"
              className="mobile-dropdown-btn"
              onClick={() => setCommercialOpen(!commercialOpen)}
            >
              Commercial
              <span>{commercialOpen ? "▲" : "▼"}</span>
            </button>

            <div className={`dropdown-menu ${commercialOpen ? "show" : ""}`}>
              <div className="dropdown-submenu">
                <button
                  type="button"
                  className="submenu-btn"
                  onClick={() => setCommercialSubOpen(!commercialSubOpen)}
                >
                  Ongoing Projects
                  <span>{commercialSubOpen ? "▲" : "▶"}</span>
                </button>

                <div className={`submenu ${commercialSubOpen ? "show" : ""}`}>
                  <Link to="/voora-tech-edge" onClick={() => setOpen(false)}>Voora Tech Edge</Link>
                </div>
              </div>

              <Link to="/commercial-completed" onClick={() => setOpen(false)}>Completed Projects</Link>
            </div>
          </li>

          <li>
            <button
              type="button"
              className="nav-plain-btn"
              onClick={() => handleHashLink("#portfolio")}
            >
              Portfolio
            </button>
          </li>

          <li className="nav-cta-mobile">
            <button
              type="button"
              className="nav-plain-btn"
              onClick={() => handleHashLink("#top")}
            >
              Get Consultation
            </button>
          </li>
        </ul>

        <button
          type="button"
          className="nav-cta"
          onClick={() => handleHashLink("#top")}
        >
          Get Consultation
        </button>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}