import "./Completed.css";
import { motion, AnimatePresence } from "framer-motion";
import { desc } from "framer-motion/client";
import { useState } from "react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Aswin",
    location: "T. Nagar, Chennai",
    desc: "Voora Aswin masterfully combines modern luxury with timeless elegance, creating a serene haven in the heart of Chennai. Thoughtfully designed to captivate the senses, Aswin offers a harmonious blend of comfort, sophistication, and exclusivity.<br>Each 4 BHK residence spans 3,000 sq. ft., occupying an entire floor across five exclusive units. Set on 2 grounds, these homes ensure unmatched privacy and grandeur, making Aswin a true masterpiece for discerning homeowners."
},
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Trm Court",
    location: "Mylapore, Chennai",
    desc: "Located on Dr. Ranga Road in the culturally vibrant neighborhood of Mylapore.Exclusive development with only five luxurious “villaments.”Spacious 3 BHK flat for sale in mylapore residences spanning 2520 sq. ft. for villa-style living.Each home occupies an entire floor for optimal privacy and spaciousness.Two large balconies offering scenic views of Mylapore’s greenery and landmarks.Designed to blend elegance, comfort, and fine living.A serene setting in a central location for the best of both worlds.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Narayana",
    location: "Purasaiwakkam, Chennai",
    desc: "Voora Narayana presents a collection of spacious 3 & 4 BHK residences meticulously crafted to balance comfort, style, and practicality. Ranging from 2,073 to 2,465 sq. ft., these homes are thoughtfully designed with attention to detail, offering quality finishes, functional layouts, and an inviting ambience, making every moment at home truly special.</br> The five-story building with stilt parking seamlessly blends elegance and convenience. Situated in Purasaiwakkam, a well-connected and vibrant neighbourhood, Voora Narayana places you within easy reach of schools, hospitals, shopping centres, and dining establishments. The building’s smart design maximises natural light and ventilation, creating a warm, harmonious living environment for its residents."
  },
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Prakash",
    location: "Vijayaraghava Road, T. Nagar",
    desc: "Voora Prakash, located on the renowned Vijayaraghava Road in T. Nagar, is a premium residential development spanning 25,000 sq. ft. Designed for families and individuals seeking both comfort and convenience, the project offers spacious homes within a stilt + 4-floor layout. </br>Nestled in a vibrant neighbourhood, Voora Prakash offers easy access to schools, hospitals, shopping centres, and public transport, ensuring a seamless and connected lifestyle. With its thoughtful design and prime location, it strikes the perfect balance between modern living and urban accessibility, making it an ideal home for those who desire both peace and convenience in the heart of the city.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Villa 96",
    location: "ECR – Sholinganallur, Chennai",
    desc: "Voora Villa 96, nestled in Injambakkam near the vibrant East Coast Road (ECR) in Chennai, presents an exclusive collection of 96 independent villas designed for contemporary living. Spanning across 230,000 sq. ft., this residential development ensures each home offers a private sanctuary of comfort and elegance. With spacious interiors that invite natural light and a serene atmosphere, Voora Villa 96 provides a peaceful retreat without compromising on convenience. Located just moments away from top schools, healthcare centres, and shopping malls, it’s the ideal choice for families seeking a perfect blend of tranquillity and connectivity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    title: "Vidyasagar Oswal Garden",
    location: "Phase -I Korukkupet, Chennai",
    desc: "Voora Vidyasagar Oswal Garden is a sprawling residential complex nestled in the vibrant neighbourhood of Korukkupet. Spanning an expansive 9,73,840 sq. ft., this thoughtfully designed development agastya-feature-features 18 blocks with stilt + 4 floors, offering a perfect blend of space and comfort for modern families.</br>Designed with families in mind, the complex combines contemporary functionality with a strong sense of community. The spacious layout ensures privacy while fostering connectivity through well-maintained green spaces and shared amenities. Residents can easily access essential services like schools, hospitals, and shopping areas, making everyday living both convenient and comfortable.<br>More than just a residential complex, Voora Vidyasagar Oswal Garden is a thriving community where urban living meets peaceful surroundings. With its extensive design and serene environment, it’s an ideal address for those seeking the perfect balance of comfort, accessibility, and a sense of belonging.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Saraswathi",
    location: "Hindi Prachar Sabha Road, T. Nagar, Chennai",
    desc: "Voora Saraswathi, located on the vibrant Hindi Prachar Sabha Road in T. Nagar, spans 22,000 sq. ft. across two blocks with a stilt + 4-floor design. This residential complex offers a perfect blend of modern living and tranquillity in the heart of Chennai. With spacious homes designed for comfort and functionality, residents enjoy easy access to schools, shopping centres, transport hubs, and other essential amenities, ensuring convenience at every step. Whether you’re looking for a peaceful retreat or a dynamic urban lifestyle, Voora Saraswathi is the ideal choice for families seeking the best of both worlds.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Gitanjali",
    location: "T.Nagar, Chennai",
    desc: "Situated on Bazullah Road, T. Nagar, Voora Gitanjali is a residential complex offering 21,700 sq. ft. of thoughtfully designed living space. With a stilt and four upper floors, this property stands as a landmark address in one of Chennai’s most sought-after neighbourhoods, known for its vibrant character and seamless connectivity.<br>Voora Gitanjali provides the best of both worlds—a quiet, serene living environment amidst the hustle and bustle of the city. Its central location ensures easy access to key amenities such as schools, healthcare centres, shopping hubs, and public transport, making everyday living convenient and stress-free.<br>As a trusted name in T. Nagar’s residential community, Voora Gitanjali symbolises accessible and comfortable living in a prime location, blending urban convenience with a peaceful lifestyle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Vijayasree",
    location: "Dr.B.N. Road, T. Nagar, Chennai",
    desc: "Nestled in Chennai’s bustling T. Nagar, Voora Vijayasree is a unique development offering vibrant commercial spaces and serene residential living under one roof. The ground floor agastya-feature-features premium shop spaces, perfectly positioned to benefit from T. Nagar’s energetic commercial pulse. Above, the thoughtfully designed residential units provide calm with modern conveniences and elegant architecture.<br>This iconic development spans 35,000 sq. ft., offering an unmatched combination of connectivity and comfort in the heart of the city.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Pritvi",
    location: "ECR, Kottivakkam, Chennai",
    desc: "Located along the scenic East Coast Road (ECR) in the serene neighbourhood of Kottivakkam, Voora Pritvi is a thoughtfully designed residential apartment spanning an impressive 65,000 sq. ft. With its Ground + 1 floor structure, this complex combines modern aesthetics with functional layouts to create a peaceful and comfortable living environment.<br>Voora Pritvi is crafted to provide open, airy spaces with abundant natural light, making it an ideal choice for those seeking a relaxed lifestyle away from the city’s hustle. Its thoughtfully planned layout ensures privacy and tranquillity, while its prime location offers seamless connectivity to essential amenities, including schools, shopping centres, and ECR’s coastal attractions.<br>Offering a balanced lifestyle, Voora Pritvi perfectly blends the charm of suburban living with the convenience of urban proximity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    title: "Voora Radha Homes",
    location: "Harrington Road, Chetpet, Chennai",
    desc: "Voora Radha Homes, located in the vibrant neighbourhood of Kottivakkam, is a prestigious residential complex designed with quality and convenience in mind. Spanning an expansive 22,000 square feet, this property offers a perfect blend of luxury and homely warmth, encapsulating the essence of refined living in a serene setting.<br>Carefully crafted to meet the aspirations of modern families, Voora Radha Homes agastya-feature-features G+1 floors with thoughtfully designed spaces that prioritise comfort and functionality. It is surrounded by lush landscaping and provides a peaceful environment ideal for relaxation and rejuvenation while being conveniently close to essential amenities such as schools, shopping centres, healthcare facilities, and recreational hubs.",
  },
];

export default function Completed() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* HERO */}
      <section
        className="upcoming-hero"
        style={{
          backgroundImage:
            "url('https://voora.co.in/wp-content/uploads/2025/05/Voora-bannar_16-01-24-02-2.png')",
        }}
      />

      {/* SECTION */}
      <section className="upcoming-section">
        <div className="upcoming-heading">
          <span>OUR PROJECTS</span>
          <h2>Completed Projects</h2>
        </div>

        {/* GRID */}
        <div className="project-grid">
          {projects.map((item, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="project-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>

              <div className="project-content">
                <div className="project-location">
                  <span>📍</span>
                  <p>{item.location}</p>
                </div>

                <button
                  className="view-btn"
                  onClick={() => setSelected(item)}
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL POPUP */}
      {/* MODAL POPUP */}
<AnimatePresence>
  {selected && (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        className="modal-box"
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT IMAGE */}
        <div className="modal-left">
          <img src={selected.image} alt={selected.title} />
        </div>

        {/* RIGHT CONTENT */}
        {/* RIGHT CONTENT */}
<div className="modal-right">
  <h2 className="modal-title">{selected.title}</h2>

  <p className="modal-location">📍 {selected.location}</p>

  <p
    className="modal-desc"
    dangerouslySetInnerHTML={{ __html: selected.desc }}
  />

  <div className="modal-actions">
    <button onClick={() => setSelected(null)}>Close</button>
  </div>
</div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}