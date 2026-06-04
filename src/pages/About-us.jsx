import React from 'react';
import './About-us.css';
import '../components/About.css'
import hero2 from '../assets/image/about_us.webp';

const managementMembers = [
  {
    name: "Shri Voora Lakshminarasimha Rao",
    designation: "Founder & Chairman",
  },
  {
    name: "Pavan Voora",
    designation: "Managing Director",
  },
  {
    name: "Suman Voora",
    designation: "Managing Director",
  },
];
const awards = [
  {
    image: "https://voora.co.in/wp-content/uploads/2025/02/expo_2025.webp",
    title: "Punjab National Bank Expo-2025 (Most Preferred Builder)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/Mission-4.webp",
    title: "CIA World Builders & Infra Awards (Best Developer of the Year)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/cia-1.webp",
    title: "Times Realty Icons Chennai (Best Affordable Apartment Project)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/New-Project-77.webp",
    title: "Times Realty Icons Chennai (Best Luxury Villa Project)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/Cta.webp",
    title: "CIA World Builders & Infra Awards (Best Residential Project of the Year)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/resu.webp",
    title: "Construction Times Builders Awards (Best Developer of the Year)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/sli.webp",
    title: "Silicon India Chennai Real Estate Awards (Best Luxury Villa Project of the Year)"
  },
  {
    image: "https://voora.co.in/wp-content/uploads/2024/10/2014.webp",
    title: "Construction Industry Awards (Excellence in Gated Community)"
  }
];
const vooraCards = [
  {
    title: "Three Decades of Excellence",
    image: "https://voora.co.in/wp-content/uploads/2024/12/Three-Decades-of-Excellence%E2%80%8B.jpg",
    description:
      "Our rich heritage spans over three decades in Chennai’s real estate sector, achieving over 2 million sq.ft of residential and commercial developments."
  },
  {
    title: "Strategic Growth and Partnerships",
    image: "https://voora.co.in/wp-content/uploads/2024/12/Strategic-Growth-and-Partnerships.jpg",
    description:
      "Founded in 1995 under visionary leadership, Voora has expanded through strategic partnerships and business growth."
  },
  {
    title: "Unmatched Quality",
    image: "https://voora.co.in/wp-content/uploads/2024/12/All-Segments-with-Unmatched-Quality.jpg",
    description:
      "From affordable housing to luxury developments, every project reflects superior craftsmanship and innovation."
  },
  {
    title: "Trusted by Thousands",
    image: "https://voora.co.in/wp-content/uploads/2024/12/A-Name-Trusted-by-Thousand.jpg",
    description:
      "Thousands of satisfied homeowners have trusted Voora to deliver their dream homes and investment opportunities."
  }
];

export default function AboutUsPage() {
  return (
    <div className="one-sea-page">
      
      {/* HERO SECTION */}
      <section className="about-hero">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${hero2})` }}
        />
      </section>


      {/* VOORA HIGHLIGHTS */}
      <section className="voora-about-section">
        <div className="voora-about-header">
          <span>ABOUT VOORA</span>
          <h2>Building Trust for Over Three Decades</h2>
          <p>
            At Voora, our journey is defined by excellence,
            innovation, quality craftsmanship, and customer satisfaction.
          </p>
        </div>

        <div className="voora-about-grid">
          {vooraCards.map((card, index) => (
            <div className="voora-about-card" key={index}>
              <div className="voora-about-image">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="voora-about-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* MANAGEMENT MEMBERS */}
<section className="management-section">
  <div className="management-container">

    <div className="management-header">
      <h2>
        <span>Management</span> Members Profile
      </h2>
    </div>

    <div className="management-grid">
      {managementMembers.map((member, index) => (
        <div className="management-card" key={index}>
          <h3>{member.name}</h3>
          <h4>{member.designation}</h4>
        </div>
      ))}
    </div>

  </div>
</section>      <section className="why-voora-section">
  <div className="why-voora-container">

    <div className="why-voora-header">
      <h2>
        Why Choose <span>Voora?</span>
      </h2>
    </div>

    <div className="why-voora-content">
      <p>
        At Voora, we are driven by an unwavering pursuit of excellence that
        has defined our legacy over the past 30 years. We have transformed
        Chennai's skyline with over 20 internationally acclaimed projects.
        From IT parks along the OMR to residential apartments on the ECR and
        luxurious bungalows in prime locations, each of our creations stands
        as a testament to our commitment to quality and innovation.
      </p>

      <p>
        Our talented engineers and architects specialize in blending
        tradition with modern elegance. Each project is Vastu-compliant and
        integrates the latest global trends, ensuring that we meet the high
        standards our clients expect.
      </p>

      <p>
        By consistently exceeding expectations, Voora has earned the trust
        and loyalty of thousands, cementing our reputation as one of
        Chennai's most respected real estate developers.
      </p>
    </div>

    <div className="why-voora-stats">
      <div className="stat-card">
        <h3>30+</h3>
        <span>Years of Excellence</span>
      </div>

      <div className="stat-card">
        <h3>20+</h3>
        <span>Landmark Projects</span>
      </div>

      <div className="stat-card">
        <h3>2000+</h3>
        <span>Happy Families</span>
      </div>

      <div className="stat-card">
        <h3>2M+</h3>
        <span>Sq.Ft Delivered</span>
      </div>
    </div>

  </div>
</section>

  {/* AWARDS SECTION */}
<section className="awards-section">
  <div className="awards-container">

    <div className="awards-header">
      <h2>Awards & Recognition</h2>
    </div>

    <div className="awards-grid">
      {awards.map((award, index) => (
        <div className="award-card" key={index}>
          <div className="award-image">
            <img src={award.image} alt={award.title} />
          </div>

          <div className="award-content">
            <p>{award.title}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    </div>
  );

}