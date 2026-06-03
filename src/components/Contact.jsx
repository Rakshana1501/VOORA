import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';



const stats = [
  { icon: 'years', value: 15, suffix: '+', label: 'Years of Excellence' },
  { icon: 'projects', value: 250, suffix: '+', label: 'Projects Delivered' },
  { icon: 'clients', value: 500, suffix: '+', label: 'Happy Clients' },
  { icon: 'awards', value: 12, suffix: '', label: 'Awards Won' },
];

const heroImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
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

          const start = performance.now();
          const duration = 1400;

          const animate = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.4 });

    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <strong ref={ref}>{val}{suffix}</strong>;
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((p) => (p === heroImages.length - 1 ? 0 : p + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="hero" id="top">

      <div className="container hero-inner">

        {/* FORM CARD */}
        <div className="contact-card">

  <h2 className="contact-title">Book Free Site Visit</h2>

  <form className="contact-form" onSubmit={handleSubmit}>

    {/* ROW 1 */}
    <div className="form-row">
      <div className="form-group">
        <input id="name" type="text" required placeholder="Enter your full name" />
        <label></label>
      </div>

      <div className="form-group">
        <input id="email" type="email" required placeholder="Enter your email address" />
        <label></label>
      </div>
    </div>

    {/* ROW 2 */}
    <div className="form-row">
      <div className="form-group">
        <input id="phone" type="tel" required placeholder="Enter mobile number" />
        <label></label>
      </div>

      <div className="form-group">
        <input id="designation" type="text" required placeholder="Your designation (e.g. Engineer)" />
        <label></label>
      </div>
    </div>

    {/* ROW 3 */}
    <div className="form-row">
      <div className="form-group">
        <input id="profile" type="text" required placeholder="Your profile (e.g. Working / Student)" />
        <label></label>
      </div>

      <div className="form-group">
        <input id="location" type="text" required placeholder="Preferred location (e.g. Chennai)" />
        <label></label>
      </div>
    </div>

    {/* PLAN */}
    <div className="form-row">
      <div className="form-group">
        <select id="planDuration" defaultValue="" required>
          <option value="" disabled hidden>Select your preferred duration</option>
          <option value="immediate">Immediate</option>
          <option value="1month">1 Month Plan - Quick Start</option>
          <option value="3months">3 Months Plan - Short Term Growth</option>
          <option value="6months">6 Months Plan - Structured Learning</option>
          <option value="9months">9 Months Plan - Deep Mastery</option>
          <option value="12months">12 Months Plan - Full Journey Program</option>
        </select>
        <label></label>
      </div>
    </div>

    <button type="submit" className="btn-submit">
      {sent ? "✓ Sent Successfully" : "Book Free Consultation"}
    </button>

  </form>
</div>

        {/* HERO IMAGE + STATS */}
        <div className="hero-visual">

          <img src={heroImages[currentImage]} alt="project" />

          <div className="hero-stats">
            {stats.map((s, i) => (
              <div
                className="hero-stat"
                key={s.label}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <strong>
                  <CountUp target={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}