import "./Marquee.css";
import {
  FaBuilding,
  FaKey,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaHandshake,
  FaHammer,
} from "react-icons/fa";

const items = [
  { text: "Luxury Villas", icon: <FaKey /> },
  { text: "Commercial Projects", icon: <FaBuilding /> },
  { text: "Prime Locations", icon: <FaMapMarkedAlt /> },
  { text: "Architecture Excellence", icon: <FaDraftingCompass /> },
  { text: "Quality Construction", icon: <FaHammer /> },
  { text: "Trusted Developer", icon: <FaHandshake /> },
];

export default function Marquee() {
  const loop = [...items, ...items];

  return (
    <section className="marquee-ribbon">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <div className="marquee-item" key={index}>
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}