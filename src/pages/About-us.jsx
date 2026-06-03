import React from 'react';
import './About-us.css';
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
