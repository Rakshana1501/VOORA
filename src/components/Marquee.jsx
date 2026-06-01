import './Marquee.css'

const items = [
  'Luxury Villas',
  'Commercial Projects',
  'Interior Construction',
  'Smart Homes',
  'Renovation',
  'Urban Planning',
]

export default function Marquee() {
  // duplicate the list so the loop is seamless
  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="dot">◆</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
