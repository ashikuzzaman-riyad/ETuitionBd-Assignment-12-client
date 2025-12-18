import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const images = [
    "https://i.ibb.co.com/ccnTcCQn/Picture5-1-e1596690386660.png",
    "https://i.ibb.co.com/Wpf0Ryfg/how-the-expensive-education-can-change-into-the-affordable-online-education.png",
    "https://i.ibb.co.com/99fr0D14/online-tutorials-concept-52683-37480.jpg",
  ];

  return (
    <div className="container mx-auto my-10 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[320px] md:h-[600px] rounded-[32px] overflow-hidden group">
              {/* Image */}
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
              />

              {/* Dark soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

              {/* Glass blur bottom fade */}
              <div className="absolute bottom-0 left-0 w-full h-24 backdrop-blur-md bg-white/5" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
