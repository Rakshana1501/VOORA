import './Services.css'

const services = [
  {
    icon: '🏠',
    title: 'Residential',
    text: 'Custom homes & villas crafted around the way you live.',
  },
  {
    icon: '🏢',
    title: 'Commercial Buildings',
    text: 'Offices, retail and mixed-use spaces built to perform.',
  },
  {
    icon: '🛋️',
    title: 'Interior Design',
    text: 'Refined interiors that balance beauty and function.',
  },
  {
    icon: '🔧',
    title: 'Renovation',
    text: 'Breathing new life into existing structures.',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-head">
          <div data-reveal>
            <span className="eyebrow">What We Build</span>
            <h2 className="section-title">
              Our Services <br className="br-only" />
              <span className="thin">End to End Construction</span>{' '}
              <span className="accent">Solution</span>
            </h2>
          </div>
          <a href="#projects" className="btn btn-outline" data-reveal="right">
            View All Services →
          </a>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article className={`service-card d${i + 1}`} data-reveal key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact" className="service-link">
                Learn More <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
