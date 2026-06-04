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


import About from '../components/About';

export default function AboutUsPage() {
    return (
        <div className="one-sea-page">
            <section className="about-hero">
                {/* Add Hero Image Here */}
            </section>
            
            <section className="overview-section">
                <div className="overview-container">
                    <div className="overview-content">
                        <h2>About <span>Voora</span></h2>
                        <About />
                    </div>
                </div>
            </section>
        </div>
    );
}
