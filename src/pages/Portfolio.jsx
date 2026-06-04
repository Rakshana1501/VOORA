import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import "./Portfolio.css";

import hero1 from "../assets/image/hero1.webp";
import hero2 from "../assets/image/hero2.webp";
import hero3 from "../assets/image/hero3.webp";
import hero4 from "../assets/image/hero4.webp";
import oneSea from "../assets/image/homeonesea.png";
import agastya from "../assets/image/heroagasta.webp";
import westside from "../assets/image/herowestside.webp";
import beckford from "../assets/image/herobeckford.webp";
import highway from "../assets/image/herohighwayhaven.webp";
import oceans from "../assets/image/herooceans27.webp";
import tblock from "../assets/image/tblockhero.webp";
import techedge from "../assets/image/ongoing-1.webp";
import resCompleted from "../assets/image/residentialcompleted.webp";
import comCompleted from "../assets/image/commercialcompleted.webp";

const projects = [
  {
    id: 1,
    image: oneSea,
    link: "/voora-one-sea",
  },
  {
    id: 2,
    image: agastya,
    link: "/voora-agastya",
  },
  {
    id: 3,
    image: westside,
    link: "/voora-westside",
  },
  {
    id: 4,
    image: beckford,
    link: "/voora-beckford",
  },
  {
    id: 5,
    image: highway,
    link: "/voora-highway-haven",
  },
  {
    id: 6,
    image: oceans,
    link: "/voora-oceans-27",
  },
  {
    id: 7,
    image: tblock,
    link: "/voora-vidyasagar-t-block",
  },
  {
    id: 8,
    image: techedge,
    link: "/voora-tech-edge",
  },
  {
    id: 9,
    image: resCompleted,
    link: "/completed",
  },
  {
    id: 10,
    image: comCompleted,
    link: "/commercial-completed",
  },
];

const stats = [
  { value: 30, suffix: "+", label: "Years of Legacy" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 25000, suffix: "+", label: "Happy Families" },
  { value: 12, suffix: "M+", label: "Sq. Ft. Crafted" },
];

const journey = [
  {
    year: "1994",
    title: "Foundation",
    text: "Founded with a vision to redefine real estate in Chennai through honesty and craftsmanship.",
  },
  {
    year: "2005",
    title: "Residential Excellence",
    text: "Expanded into landmark residential developments across prime Chennai neighbourhoods.",
  },
  {
    year: "2015",
    title: "Commercial Vision",
    text: "Entered the commercial real estate space with Grade-A workspaces and IT parks.",
  },
  {
    year: "2024",
    title: "Future Forward",
    text: "Delivering sea-facing skyscrapers, gated communities and sustainable mixed-use destinations.",
  },
];

const awards = [
  { title: "Realty Excellence", year: "2023", body: "Best Residential Developer — Chennai" },
  { title: "Times Property", year: "2022", body: "Customer Choice Builder of the Year" },
  { title: "CREDAI Honour", year: "2021", body: "Sustainable Design & Construction" },
  { title: "ET Now Award", year: "2020", body: "Brand of the Year — Real Estate South" },
];

/* ===== ANIMATIONS ===== */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

/* ===== COUNTER ===== */

function Counter({ end, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ===== MAIN ===== */

export default function Portfolio() {

  return (
    <div className="portfolio-page">

      {/* HERO */}
      <HeroCarousel />

      {/* STATS */}
      <section className="pf-stats">
        <motion.div
          className="pf-stats-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((s, i) => (
            <motion.div className="pf-stat" key={i} variants={fadeUp} custom={i}>
              <h2>
                <Counter end={s.value} suffix={s.suffix} />
              </h2>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FILTER + PROJECT GRID */}
      <section id="projects" className="pf-projects">
        <motion.div
          className="pf-section-head"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span className="pf-eyebrow dark" variants={fadeUp}>
            FEATURED WORK
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Projects That Define Our Craft
          </motion.h2>
          <motion.p variants={fadeUp}>
            Browse our complete body of work across residential, commercial,
            ongoing and completed developments.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div className="pf-grid" layout>
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <motion.div
                key={p.id || i}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="pf-card"
              >
                <div className="pf-card-media">
                  <img src={p.image} alt="Voora Project" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section id="journey" className="pf-journey">
        <div className="pf-journey-bg" style={{ backgroundImage: `url(${hero3})` }} />
        <div className="pf-journey-overlay" />

        <div className="pf-journey-inner">
          <motion.div
            className="pf-section-head light"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span className="pf-eyebrow" variants={fadeUp}>
              OUR JOURNEY
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Three Decades of Building Trust
            </motion.h2>
          </motion.div>

          <div className="pf-timeline">
            {journey.map((j, i) => (
              <motion.div
                className="pf-step"
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="pf-step-year">{j.year}</span>
                <span className="pf-step-dot" />
                <div className="pf-step-card">
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="pf-awards">
        <motion.div
          className="pf-section-head"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span className="pf-eyebrow dark" variants={fadeUp}>
            RECOGNITION
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Honoured for Excellence
          </motion.h2>
        </motion.div>

        <motion.div
          className="pf-awards-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((a, i) => (
            <motion.div
              className="pf-award-card"
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <span className="pf-award-icon">★</span>
              <span className="pf-award-year">{a.year}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="pf-cta">
        <motion.div
          className="pf-cta-inner"
          style={{ backgroundImage: `url(${hero4})` }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="pf-cta-overlay" />
          <div className="pf-cta-content">
            <motion.span
              className="pf-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              READY TO BUILD WITH US?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Let's craft your next landmark together.
            </motion.h2>
            <motion.div
              className="pf-cta-actions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Link to="/" className="pf-btn pf-btn-primary">
                Schedule a Consultation
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
