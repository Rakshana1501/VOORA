import { useState } from 'react'
import './Testimonials.css'
import ClientStories from './ClientStories'


const videos = [
  {
<<<<<<< HEAD
    src: "https://www.youtube-nocookie.com/embed/byoTnV_YaTM",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/fw4zdP5sywM",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/cpd8ienDJgA",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/zkVxve-uOeA",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/iO4aofTnM4Q",
=======
    src: "https://www.youtube.com/embed/byoTnV_YaTM",
  },
  {
    src: "https://www.youtube.com/embed/fw4zdP5sywM",
  },
  {
    src: "https://www.youtube.com/embed/cpd8ienDJgA",
  },
  {
    src: "https://www.youtube.com/embed/zkVxve-uOeA",
  },
  {
    src: "https://www.youtube.com/embed/iO4aofTnM4Q",
>>>>>>> VOORA-Rakshana
  },
];


const reviews = [
  {
    text: 'ARKHE transformed our vision into a breathtaking reality. Every detail was executed with craftsmanship we had never seen before.',
    name: 'Rajesh Sharma',
    role: 'Villa Owner',
  },
  {
    text: 'From blueprint to handover, the team was meticulous and transparent. Our office complex was delivered ahead of schedule.',
    name: 'Priya Nair',
    role: 'CEO, Novatech',
  },
  {
    text: 'The interiors exceeded our expectations. Beautiful, functional and finished to the highest standard imaginable.',
    name: 'Arjun Mehta',
    role: 'Homeowner',
  },
  {
    text: 'Professional, reliable and genuinely passionate about design. ARKHE is now our go-to construction partner.',
    name: 'Sneha Kapoor',
    role: 'Property Developer',
  },
  {
    text: 'They listened, advised and built exactly what we dreamed of — on budget and stress-free.',
    name: 'Vikram Reddy',
    role: 'Restaurant Owner',
  },
]


export default function Testimonials() {

  const [videoIndex, setVideoIndex] = useState(0);
  const [start, setStart] = useState(0);

  const perView = 3;
  const maxStart = reviews.length - perView;

  // TESTIMONIALS
  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  // VIDEO SLIDER
  const nextVideo = () => {
    if (videoIndex < videos.length - 2) {
      setVideoIndex((prev) => prev + 1);
    }
  };

  const prevVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex((prev) => prev - 1);
    }
  };

  return (
<<<<<<< HEAD
    <section className="section testimonials">
=======
    <section className="section testimonials" id="insights">
>>>>>>> VOORA-Rakshana
      <div className="container">

        {/* VIDEO SECTION */}
        <div className="video-section">

          <div className="video-head">
            <span>PROJECT SHOWCASE</span>
            <h2>Explore Our Signature Developments</h2>
          </div>

          <button
            className="video-nav video-prev"
            onClick={prevVideo}
            disabled={videoIndex === 0}
          >
            ❮
          </button>

          <div className="video-slider">
            <div
              className="video-track"
              style={{
                transform: `translateX(-${videoIndex * 50}%)`,
              }}
            >
              {videos.map((video, index) => (
  <div className="video-item" key={index}>
    <div className="video-card">

      <iframe
        src={video.src}
        title={video.title}
<<<<<<< HEAD
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; compute-pressure"
=======
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
>>>>>>> VOORA-Rakshana
        allowFullScreen
      />

      <div className="video-overlay">
        <h3>{video.title}</h3>
      </div>

    </div>
  </div>
))}
            </div>
          </div>

          <button
            className="video-nav video-next"
            onClick={nextVideo}
            disabled={videoIndex >= videos.length - 2}
          >
            ❯
          </button>

        </div>

<<<<<<< HEAD
{/* Reviews Section - KEEP AS IT IS */}
    <div className="ts-head">
             <span className="eyebrow">Client Feedback</span>
       <h2 className="section-title">
         What Our Clients Say
       </h2>
=======
{/* Reviews Section */}
    <div className="ts-head">
       <span className="ts-eyebrow">TESTIMONIALS</span>
       <h2 className="ts-title">
         What Our Clients Say
       </h2>
       <p className="ts-subtitle">
         Real stories from the families and businesses who chose us — sharing their experiences of craftsmanship, trust, and timeless living.
       </p>
       <span className="ts-divider"></span>
>>>>>>> VOORA-Rakshana
     </div>

       <div className="ts-viewport" data-reveal>
           <div
             className="ts-track"
            style={{ transform: `translateX(-${start * (100 / perView)}%)` }}
           >
             {reviews.map((r) => (
               <div className="ts-cell" key={r.name}>
                 <article className="ts-card">
<<<<<<< HEAD
                   <span className="ts-quote">”</span>
                   <p>{r.text}</p>
                   <div className="ts-stars">★★★★★</div>
                  <div className="ts-person">
                     <span className="ts-avatar">{r.name.charAt(0)}</span>
                     <div>
=======
                   <div className="ts-person">
                     <span className="ts-avatar">{r.name.charAt(0)}</span>
                     <div className="ts-person-meta">
>>>>>>> VOORA-Rakshana
                       <strong>{r.name}</strong>
                       <span>{r.role}</span>
                     </div>
                   </div>
<<<<<<< HEAD
=======
                   <div className="ts-stars">★★★★★</div>
                   <p>{r.text}</p>
>>>>>>> VOORA-Rakshana
                 </article>
               </div>
             ))}
           </div>
         </div>

         <div className="ts-dots">
           <button onClick={prev} disabled={start === 0} aria-label="Previous">‹</button>
           {Array.from({ length: maxStart + 1 }).map((_, i) => (
             <button
               key={i}
               className={`dot ${start === i ? 'active' : ''}`}
               onClick={() => setStart(i)}
               aria-label={`Go to slide ${i + 1}`}
            />
           ))}
          <button onClick={next} disabled={start === maxStart} aria-label="Next">›</button>
         </div>

         <ClientStories />
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> VOORA-Rakshana
