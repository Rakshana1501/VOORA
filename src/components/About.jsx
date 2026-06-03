import { useState } from "react";
import "./About.css";

const features = [
  {
    icon: "🏗️",
    title: "Premium Materials",
    text: "Only the finest, certified building materials."
  },
  {
    icon: "👷",
    title: "Expert Engineers",
    text: "Seasoned professionals on every project."
  },
  {
    icon: "🌿",
    title: "Sustainable Build",
    text: "Eco-conscious, energy-efficient design."
  },
  {
    icon: "⏱️",
    title: "Timely Delivery",
    text: "On-schedule completion, every time."
  }
];

export default function About() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-media" data-reveal="left">
          <img
            src="http://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/12/Untitled-design-8-1.jpg.bv.webp?bv_host=voora.co.in"
            alt="Modern luxury home at dusk"
          />
          <div className="about-exp">
            <strong>30</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="about-copy" data-reveal="right">
          <span className="eyebrow">One of The Leading &amp; Builders in Chennai</span>
          <h2 className="section-title">Where Vision Meets Craft</h2>
          <p>
  Welcome to Voora, a leading builders in Chennai-based real estate company
  with a legacy spanning over 30 years. Renowned for creating remarkable
  residential and commercial landmarks, Voora has left an indelible mark on
  Chennai’s skyline...

  <span
    className="read-more-link"
    onClick={() => setShowModal(true)}
  >
    Read More
  </span>
</p>

<div className="features-mini">
  <div className="features-mini-grid">
    {features.map((item, index) => (
      <div className="feature-mini-card" key={index}>
        <div className="feature-mini-icon">
          {item.icon}
        </div>

        <div className="feature-mini-content">
          <h4>{item.title}</h4>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
      {showModal && (
  <div className="about-modal-overlay">
    <div className="about-modal">
      <button
        className="close-btn"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>

      <h2>About Voora</h2>

      <p>
        Welcome to Voora, a leading builders in Chennai-based real estate company with a legacy spanning over 30 years. Renowned for creating remarkable residential and commercial landmarks, Voora has left an indelible mark on Chennai’s skyline.
      </p>

      <p>
        Voora’s portfolio features various properties, from towering high-rise
        apartments and opulent villas to contemporary commercial complexes.
        Every unit is meticulously crafted, offering exceptional value to our
        esteemed buyers through prime locations, superior craftsmanship, and
        thoughtful design.
      </p>

      <p>
        With an unwavering focus on quality, Voora has earned a reputation for
        delivering projects that exemplify precision, sustainability, and timely
        completion. This success stems from our strong backward integration and
        stringent quality control measures.
      </p>

      <p>
        Today, the name “Voora” is synonymous with trust, excellence, and
        customer satisfaction—a legacy shaped by the loyalty and confidence of
        our clients.
      </p>

      <p>
        Founded by the visionary Shri Voora Lakshminarasimha Rao, the company
        is now helmed by his sons, Pavan Voora and Suman Voora, whose leadership
        continues to uphold the tradition of excellence and progress.
      </p>
    </div>
  </div>
)}
    </section>
  )
}
