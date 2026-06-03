import { useEffect } from "react";
import './Services.css'

const services = [
  {
    icon: '🏡',
    title: 'Residential Construction',
    text: 'Design and build premium villas, apartments, and custom homes tailored to modern living.'
  },
  {
    icon: '🏬',
    title: 'Commercial Projects',
    text: 'Smartly planned office spaces, retail outlets, and business complexes built for performance.'
  },
  {
    icon: '📍',
    title: 'Plot Development',
    text: 'Well-planned plots with infrastructure and clear documentation for future investment.'
  },
  {
    icon: '🧱',
    title: 'Construction Services',
    text: 'High-quality construction with strong materials, modern techniques, and timely delivery.'
  }
];

export default function Services() {

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section services" id="services">
      <div className="container">

        <div className="services-head">
          <div data-reveal>
            <span className="eyebrow">What We Build</span>
            <h2 className="section-title">
              Our Services <br className="br-only" />
              <span className="thin">End to End Construction</span>{" "}
              <span className="accent">Solution</span>
            </h2>
          </div>

          <a href="#service" className="btn btn-outline" data-reveal="right">
            View All Services →
          </a>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`service-card d${i + 1}`}
              data-reveal="up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#service" className="service-link">
                Learn More <span>→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}