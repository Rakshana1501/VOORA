import './Upcomingproject.css'

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    title: 'Voora Agastya',
    location: 'Tondiarpet, Chennai',
    status: 'Coming Soon',
  },

//   {
//     image:
//       'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
//     title: 'Voora Ocean',
//     location: 'ECR, Chennai',
//     status: 'Ongoing',
//   },

//   {
//     image:
//       'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
//     title: 'Voora Elite',
//     location: 'OMR, Chennai',
//     status: 'Premium Living',
//   },
]

export default function Upcomingprojects() {
  return (
    <>
    
      {/* HERO SECTION */}
      <section
  className="upcoming-hero"
  style={{
    backgroundImage:
      "url('https://voora.co.in/wp-content/uploads/2025/05/Voora-bannar_16-01-24-02-2.png')",
  }}
>
  
</section>

        
      {/* PROJECT SECTION */}
      <section className="upcoming-section">

        {/* HEADING */}
        <div className="upcoming-heading">
          <span>OUR PROJECTS</span>
          <h2>Upcoming Projects</h2>
        </div>

        {/* CARDS */}
        <div className="project-grid">

          {projects.map((item, index) => (
            <div className="project-card" key={index}>

              {/* IMAGE */}
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >

                {/* OVERLAY */}
                <div className="project-overlay">

                  <h3>{item.title}</h3>

                </div>
              </div>

              {/* CONTENT */}
              <div className="project-content">

                <div className="project-location">
                  <span>📍</span>
                  <p>{item.location}</p>
                </div>

                <div className="project-status">
                  <span>◉</span>
                  <p>{item.status}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}