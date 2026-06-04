import './ServicesPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

/* ------------------- DATA ------------------- */
const servicesData = [
  { icon: '🏠', title: 'Residential Construction', desc: 'Turn‑key homes built to the highest standards of quality, sustainability and design.' },
  { icon: '🏢', title: 'Commercial Construction', desc: 'Premium office, retail and mixed‑use spaces that inspire productivity and prestige.' },
  { icon: '🏙️', title: 'Luxury Apartments', desc: 'Iconic high‑rise living with panoramic sea‑views, smart‑home tech and elite amenities.' },
  { icon: '🏡', title: 'Villa Development', desc: 'Bespoke villas with private gardens, pools and meticulous craftsmanship.' },
  { icon: '🎨', title: 'Interior Design', desc: 'Curated interiors that blend art, functionality and timeless elegance.' },
  { icon: '📋', title: 'Project Management', desc: 'End‑to‑end coordination ensuring on‑time delivery, cost control and flawless execution.' },
  { icon: '📈', title: 'Property Development', desc: 'Strategic land acquisition, planning and execution for high‑value assets.' },
  { icon: '🖊️', title: 'Architectural Planning', desc: 'Award‑winning concepts that optimise space, light and sustainability.' },
];

const whyChooseData = [
  { icon: '🗓️', title: 'Industry Experience', value: 25 },
  { icon: '🏆', title: 'Project Excellence', value: 180 },
  { icon: '😊', title: 'Client Satisfaction', value: 170 },
  { icon: '🔧', title: 'Quality Assurance', value: 99 },
  { icon: '⏱️', title: 'Timely Delivery', value: 100 },
  { icon: '👥', title: 'Professional Team', value: 120 },
];

const timelineSteps = [
  { icon: '💼', title: 'Consultation', desc: 'Understanding client vision and feasibility.' },
  { icon: '📐', title: 'Planning', desc: 'Strategic master‑plan, budgeting and approvals.' },
  { icon: '🖌️', title: 'Design', desc: 'Architectural and interior design with 3D visualisation.' },
  { icon: '🚧', title: 'Construction', desc: 'On‑site execution with premium craftsmanship.' },
  { icon: '🔑', title: 'Delivery', desc: 'Hand‑over of a ready‑to‑live masterpiece.' },
];

const featuredProjects = [
  { img: 'techinte1.webp', name: 'VOORA Sea Breeze', location: 'ECR, Chennai', category: 'Luxury Apartments', desc: 'A 41‑storey sea‑view tower with IGBC Gold certification.' },
  { img: 'techinte2.webp', name: 'VOORA Villa Enclave', location: 'Korukkupet', category: 'Villas', desc: 'Exclusive villas with private pools and landscaped gardens.' },
  { img: 'techinte3.webp', name: 'VOORA Commercial Hub', location: 'North Chennai', category: 'Commercial', desc: 'State‑of‑the‑art office spaces with smart‑building systems.' },
];

const testimonials = [
  { author: 'Rohan Mehta', role: 'CEO, Oceanic Ltd.', quote: 'VOORA delivered beyond expectations – flawless execution, premium finishes and on‑time delivery.', img: 'news1.webp' },
  { author: 'Anita Shah', role: 'Founder, Shah Interiors', quote: 'Their interior design team turned our vision into a timeless masterpiece. Highly recommend!', img: 'news2.webp' },
  { author: 'Kumar Patel', role: 'Investor', quote: 'The ROI on VOORA’s residential projects is unparalleled. Trustworthy and transparent.', img: 'news3.webp' },
];

const faqs = [
  { q: 'What is the typical project timeline?', a: 'From design to hand‑over, most projects complete in 18‑30 months depending on scale.' },
  { q: 'Do you offer design‑build services?', a: 'Yes – we manage architecture, interior design, permits and construction under one roof.' },
  { q: 'What sustainability certifications do you pursue?', a: 'We target IGBC Gold and LEED certifications on all major developments.' },
  { q: 'Can I customise my villa layout?', a: 'Absolutely – our design team works closely with you to tailor every detail.' },
];

/* ------------------- ANIMATIONS ------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function ServicesPage() {
  const [lightboxImg, setLightboxImg] = useState(null);
  return (
    <div id="services-page" className="services-page">

      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="hero-overlay" />
        
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section">
        <div className="intro-text" data-aos="fade-up">
          <h2>Our Commitment to Excellence</h2>
          <p>With a legacy of over two decades, we deliver projects that redefine luxury living. From concept to completion, our multidisciplinary team ensures every detail reflects precision, sustainability and sophisticated aesthetics.</p>
        </div>
        <div className="intro-image" data-aos="fade-up">
          <img src={new URL('../assets/image/hero1.webp', import.meta.url).href} alt="Luxury building" />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="services-grid">
          {servicesData.map((s, i) => (
            <motion.div className="service-card" key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="learn-btn">Learn More</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <h2 className="section-title">Why Choose Voora</h2>
        <div className="why-cards">
          {whyChooseData.map((item, i) => (
            <motion.div className="why-card" key={i} whileHover={{ y: -6, scale: 1.02 }}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <motion.div className="counter" animate={{ count: item.value }} transition={{ duration: 1.5, ease: 'easeOut' }}>{Math.round(item.value).toLocaleString()}+</motion.div>
            </motion.div>
          ))}
        </div>
      </section>

        <section className="timeline-section">
          <h2 className="section-title">Our Process</h2>
          <div className="timeline-row">
            {timelineSteps.map((step, i) => (
              <div className="timeline-card" key={i}>
                <div className="timeline-header">
                  <div className="timeline-icon">{step.icon}</div>
                  <span className="timeline-step-num">Step 0{i + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-cards">
          {featuredProjects.map((p, i) => (
            <motion.div className="project-card" key={i} whileHover={{ scale: 1.03, y: -6 }}>
              <img src={new URL(`../assets/image/${p.img}`, import.meta.url).href} alt={p.name} />
              <div className="proj-info">
                <h3>{p.name}</h3>
                <span className="proj-location">{p.location}</span>
                <span className="proj-category">{p.category}</span>
                <p>{p.desc}</p>
                <button className="view-project-btn">View Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <Swiper modules={[Navigation, Autoplay, Keyboard]} navigation autoplay={{ delay: 5000, disableOnInteraction: false }} loop keyboard={{ enabled: true }} className="testimonials-swiper">
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div className="testimonial-card" whileHover={{ y: -4 }}>
                <img src={new URL(`../assets/image/${t.img}`, import.meta.url).href} alt={t.author} />
                <p className="quote">“{t.quote}”</p>
                <h4>{t.author}</h4>
                <span>{t.role}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      

      

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <div className="contact-item"><span className="contact-icon">📞</span><span>+91‑98765‑43210</span></div>
        <div className="contact-item"><span className="contact-icon">✉️</span><span>info@vooraconstruction.com</span></div>
        <div className="contact-item"><span className="contact-icon">📍</span><span>Korukkupet, Chennai, Tamil Nadu</span></div>
        <div className="contact-item"><span className="contact-icon">💬</span><span>WhatsApp: +91‑98765‑43210</span></div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxImg(null)}>
            <motion.div className="lightbox-box" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }} onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" aria-label="Close" onClick={() => setLightboxImg(null)}>✕</button>
              <img src={lightboxImg} alt="Project enlarged view" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
