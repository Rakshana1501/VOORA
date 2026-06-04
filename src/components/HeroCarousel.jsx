import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import hero1 from "../assets/image/hero1.webp";
import hero2 from "../assets/image/hero2.webp";
import hero3 from "../assets/image/hero3.webp";
import hero4 from "../assets/image/hero4.webp";
import hero5 from "../assets/image/hero5.webp";

import "./HeroCarousel.css";

const slides = [
  {
    image: hero1,
  },
  {
    image: hero2,
  },
  {
    image: hero3,
  },
  {
    image: hero4,
  },
  {
    image: hero5,
  },
];

export default function HeroCarousel() {
  return (
    <section className="hero-section">

      {/* Navbar Area */}
      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* Banner Area */}
      <div className="hero-banner">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1100}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <img
                  src={slide.image}
                  alt={`banner-${index}`}
                  className="slide-image"
                />
                <div className="slide-overlay"></div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}