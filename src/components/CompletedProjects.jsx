import { useState } from 'react'
import './CompletedProjects.css'

const projects = [
  { name: 'The Grand Manor', type: 'Residential', year: '2024',
    img: 'https://voora.co.in/wp-content/uploads/2025/04/commercial.jpg' },
  { name: 'Azure Palm Villa', type: 'Villas', year: '2023',
    img: 'https://voora.co.in/wp-content/uploads/2025/05/Voora-bannar_16-01-24-02-2.png' },
  { name: 'Nova Office Park', type: 'Commercial', year: '2024',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/08/Untitled-design.png.bv_resized_mobile.png.bv.webp?bv_host=voora.co.in' },
  { name: 'Lumière Interiors', type: 'Interior', year: '2023',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/08/one-ser.webp.bv_resized_mobile.webp.bv.webp?bv_host=voora.co.in' },
  { name: 'Crest Residences', type: 'Residential', year: '2022',
    img: 'https://voora.co.in/wp-content/uploads/2025/01/commercial_completed.webp' },
  { name: 'Onyx Boutique Hotel', type: 'Commercial', year: '2024',
    img: 'https://voora.co.in/wp-content/uploads/2025/04/commercial.jpg Premium Construction & Design' },
  { name: 'Coastal Glass Villa', type: 'Villas', year: '2024',
    img: 'https://voora.co.in/wp-content/uploads/2025/01/shreeram_voora.webp' },
  { name: 'The Loft Studio', type: 'Interior', year: '2022',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/11/investment_models.webp.bv.webp?bv_host=voora.co.in' },
]

const filters = ['All Projects', 'Residential', 'Commercial', 'Villas']

export default function CompletedProjects() {
  const [filter, setFilter] = useState('All Projects')
  const visible = projects.filter(
    (p) => filter === 'All Projects' || p.type === filter,
  )

  return (
    <section className="section completed" id="portfolio">
      <div className="container">
        <div className="cp-head" data-reveal>
          <div>
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title">Completed Projects</h2>
          </div>
          <a href="#contact" className="btn btn-outline">Explore All Projects →</a>
        </div>

        <div className="filter-tabs cp-tabs" data-reveal>
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="cp-grid">
  {visible.map((p, i) => (
    <article key={i} className="up-card">

      <div
        className="up-img"
        style={{
          backgroundImage: `url(${p.img})`
        }}
      >
        <span className="up-status">
          Completed
        </span>

        <button
          className="up-go"
          aria-label="Open project"
        >
          ↗
        </button>
      </div>

      <div className="up-body">

        <span className="up-type">
          {p.type}
        </span>

        <h3>{p.name}</h3>

        <p>📍 Chennai</p>

        <div className="up-meta">
          <span>Completed</span>
          <strong>{p.year}</strong>
        </div>

      </div>

    </article>
  ))}
</div>
      </div>
    </section>
  )
}
