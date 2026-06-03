import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {

  const [residentialOpen, setResidentialOpen] = useState(false);
const [commercialOpen, setCommercialOpen] = useState(false);

const [residentialSubOpen, setResidentialSubOpen] = useState(false);
const [commercialSubOpen, setCommercialSubOpen] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  

  const ongoingProjects = [
  "Voora Tech Edge",
];

  return (
<header className="navbar">
      <nav className="container nav-inner">
        {/* Logo */}
<Link to="/" className="logo"></Link>
  <img
    src="data:image/png+xml;base64,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"
    alt="VOORA Logo"  
    className="logo-img"
  />

        <ul className={`nav-links ${open ? "open" : ""}`}>

          <li>
<Link to="/">Home</Link>
          </li>

          <li>
<a href="/about-us">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
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
  onClick={() =>
    setCommercialSubOpen(
      !commercialSubOpen
    )
  }
>
  Ongoing Projects
  <span>{commercialSubOpen ? "▲" : "▶"}</span>
</button>
<div
  className={`submenu ${
    commercialSubOpen ? "show" : ""
  }`}
>      <Link to="/voora-one-sea">
        Voora One Sea
      </Link>

      <Link to="/voora-agastya">
      Voora Agastya
      </Link>

      <Link to="/voora-westside">
        Voora Westside
      </Link>

      <Link to="/voora-beckford">
        Voora Beckford
      </Link>

      <Link to="/voora-highway-haven">
        Voora Highway Haven
      </Link>

      <Link to="/voora-vidyasagar-t-block">
        Voora Vidyasagar Oswal Garden T_Block
      </Link>

      <Link to="/voora-oceans-27">
        Voora Ocean's 27
      </Link>
    </div>
  </div>

  

              <Link to="/upcoming-section">
  Upcoming Projects
</Link>
              <Link to="/completed">
  Completed Projects
</Link>
            </div>
          </li>

          {/* Commercial */}
        <li className="dropdown">
<button
  type="button"
  className="mobile-dropdown-btn"
  onClick={() =>
  setCommercialSubOpen(!commercialSubOpen)
}
>
  Commercial
    <span>{commercialOpen ? "▲" : "▼"}</span>
</button>

<div
  className={`dropdown-menu ${
    commercialOpen ? "show" : ""
  }`}
>
    <div className="dropdown-submenu">
      <button
  type="button"
  className="submenu-btn"
  onClick={() =>
  setResidentialSubOpen(!residentialSubOpen)
}
>
  Ongoing Projects
  <span>{residentialSubOpen ? "▲" : "▶"}</span>
</button>

<div
  className={`submenu ${
    residentialSubOpen ? "show" : ""
  }`}
>
          <Link to="/voora-tech-edge">
  Voora Tech Edge
</Link>
      </div>
    </div>

    <Link to="/commercial-completed">
  Completed Projects
</Link>

  </div>
</li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#insights">Insights</a>
          </li>

          <li className="nav-cta-mobile">
            <a href="#contact">Get Consultation</a>
          </li>
        </ul>

        <a href="#contact" className="nav-cta">
          Get Consultation
        </a>

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