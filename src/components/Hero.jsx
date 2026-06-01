import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Hero.css';

/* Small inline icon set themed to each stat */
const Icons = {
  years: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <line x1="9" y1="9" x2="9" y2="9.01" />
      <line x1="9" y1="13" x2="9" y2="13.01" />
    </svg>
  ),
  clients: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  awards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
};

const stats = [
  { icon: 'years', value: 15, suffix: '+', label: 'Years of Excellence' },
  { icon: 'projects', value: 250, suffix: '+', label: 'Projects Delivered' },
  { icon: 'clients', value: 500, suffix: '+', label: 'Happy Clients' },
  { icon: 'awards', value: 12, suffix: '', label: 'Awards Won' },
];

const heroImages = [
  "https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2025/06/Voora_One-Sea_View6_19-04-25-1.jpg.bv.webp?bv_host=voora.co.in",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
];

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const duration = 1500;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <strong ref={ref}>{val}{suffix}</strong>;
}

export default function Hero() {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(0);

  // Reset carousel when navigating to Home or other routes
  useEffect(() => {
    setCurrentImage(0);
  }, [location.pathname]);

  // Automatic image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge" data-reveal>EST ● 2008 ● Premium Construction</span>
          <h1 data-reveal className="d1">
            Building Future <br /> <span className="hl">Landmarks</span>
          </h1>
          <p data-reveal className="d2">
            We design, engineer and construct exceptional spaces that stand as
            testaments to architecture, innovation and craftsmanship and timeles elegancy.
          </p>
          <p>●●●Trusted by 500+ clients across 3 continents </p>
          <div className="hero-actions" data-reveal>
            <a href="#contact" className="btn btn-primary">Get Free Consultation</a>
            <a href="#projects" className="btn btn-ghost">View Projects</a>
          </div>
        </div>

        <div className="hero-visual" data-reveal="zoom">
          <img
            src={heroImages[currentImage]}
            alt="Futuristic architectural landmark"
            loading="eager"
            key={currentImage}
          />
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div className="hero-stat" key={s.label} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                <span className="hero-stat-icon">{Icons[s.icon]}</span>
                <CountUp target={s.value} suffix={s.suffix} />
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
