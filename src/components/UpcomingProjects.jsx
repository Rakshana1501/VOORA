import { useRef, useState } from 'react'
import './UpcomingProjects.css'

const projects = [
  {
    name: 'The Meridian Tower',
    type: 'Commercial',
    location: 'Downtown Metro City',
    status: 'Under Construction',
    completion: 'Q4 2025',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/12/westside-1.jpg.bv_resized_ipad.jpg.bv.webp?bv_host=voora.co.in',
  },
  {
    name: 'Villa Serenita',
    type: 'Residential',
    location: 'Hilltop Gardens',
    status: 'Planning',
    completion: 'Q1 2026',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/11/agastya.png.bv.webp?bv_host=voora.co.in',
  },
  {
    name: 'Crescent Business Hub',
    type: 'Commercial',
    location: 'Tech Park East',
    status: 'Under Construction',
    completion: 'Q3 2025',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/12/Main-view-2-1-scaled.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=voora.co.in',
  },
  {
    name: 'Aurora Residences',
    type: 'Residential',
    location: 'Lakeside Avenue',
    status: 'Planning',
    completion: 'Q2 2026',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/11/beckford.webp.bv.webp?bv_host=voora.co.in',
  },
  {
    name: 'Skyline Galleria',
    type: 'Commercial',
    location: 'Central District',
    status: 'Under Construction',
    completion: 'Q4 2025',
    img: 'https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/10/footer-bg.webp.bv_resized_mobile.webp.bv.webp?bv_host=voora.co.in',
  },
]

const filters = ['All Projects', 'Residential', 'Commercial']

export default function UpcomingProjects() {
  const [filter, setFilter] = useState('All Projects')
  const trackRef = useRef(null)

  const visible = projects.filter(
    (p) => filter === 'All Projects' || p.type === filter,
  )

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.up-card')
    const amount = card ? card.offsetWidth + 24 : 340
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="section upcoming" id="projects">
      <div className="container">
        <div className="up-head" data-reveal>
          <div>
            <span className="eyebrow">What Build</span>
            <h2 className="section-title">Iconic Ongoing Projects</h2>
          </div>
          <a href="#contact" className="btn btn-outline">View All Projects →</a>
        </div>

        <div className="up-controls" data-reveal>
          <div className="filter-tabs">
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
          <div className="up-arrows">
            <button onClick={() => scroll(-1)} aria-label="Previous">‹</button>
            <button onClick={() => scroll(1)} aria-label="Next">›</button>
          </div>
        </div>

        <div className="up-track" ref={trackRef}>
          {visible.map((p) => (
            <article className="up-card" key={p.name}>
              <div className="up-img" style={{ backgroundImage: `url(${p.img})` }}>
                <span className="up-status">{p.status}</span>
                <button className="up-go" aria-label="Open project">↗</button>
              </div>
              <div className="up-body">
                <span className="up-type">{p.type}</span>
                <h3>{p.name}</h3>
                <p>📍 {p.location}</p>
                <div className="up-meta">
                  <span>Completion</span>
                  <strong>{p.completion}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
