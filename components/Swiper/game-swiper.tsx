"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

import cosmic from "@/assets/characters/Cosmic.png";
import dark from "@/assets/characters/Dark.png";
import fire from "@/assets/characters/Fire.png";
import light from "@/assets/characters/Light.png";
import organic from "@/assets/characters/Organic.png";
import water from "@/assets/characters/Water.png";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
function GameSwiper() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={cosmic} alt="cosmic" className="h-[90%] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={dark} alt="cosmic" className="h-[90%] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={fire} alt="cosmic" className="h-[90%] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={organic} alt="cosmic" className="h-[90%] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={water} alt="cosmic" className="h-[90%] w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={light} alt="cosmic" className="h-[90%] w-auto" />
      </SwiperSlide>
    </Swiper>
  );
}

export { GameSwiper };
