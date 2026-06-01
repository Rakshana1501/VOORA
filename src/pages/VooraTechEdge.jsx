import React from "react";
import "./VooraTechEdge.css";

export default function VooraTechEdge() {
  return (
    <>
      {/* Hero Banner */}
      <section className="project-hero">
        <div className="project-overlay">
          <span className="project-badge">
            Premium Commercial Development
          </span>

          <h1>Voora Tech Edge</h1>

          <p>
            Smart commercial spaces designed for modern businesses,
            innovation, growth, and future-ready work environments.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="project-card">
            <h2>About Voora Tech Edge</h2>

            <p>
              Voora Tech Edge is a premium commercial development
              created for modern businesses. This page is currently
              a demo page for routing and navigation. You can later
              replace this content with actual project information,
              floor plans, galleries, amenities, location maps,
              brochures, and enquiry forms.
            </p>
          </div>

          <div className="project-card">
            <h2>Project Highlights</h2>

            <ul className="highlights">
              <li>Grade A Commercial Spaces</li>
              <li>Prime Business Location</li>
              <li>Modern Glass Facade Design</li>
              <li>Smart Office Infrastructure</li>
              <li>High-Speed Elevators</li>
              <li>Ample Parking Facilities</li>
              <li>24/7 Security & Maintenance</li>
              <li>Power Backup & Smart Utilities</li>
            </ul>
          </div>

          <div className="project-card">
            <h2>Why Choose Voora Tech Edge?</h2>

            <p>
              Designed for businesses that demand premium quality,
              strategic location advantages, and future-ready
              infrastructure. Voora Tech Edge provides the perfect
              environment for startups, enterprises, and corporate
              offices to thrive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}