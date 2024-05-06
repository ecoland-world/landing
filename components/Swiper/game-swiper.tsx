"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
function GameSwiper() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>Game 1</SwiperSlide>
      <SwiperSlide>Game 2</SwiperSlide>
      <SwiperSlide>Game 3</SwiperSlide>
      <SwiperSlide>Game 4</SwiperSlide>
      <SwiperSlide>Game 5</SwiperSlide>
      <SwiperSlide>Game 6</SwiperSlide>
      <SwiperSlide>Game 7</SwiperSlide>
      <SwiperSlide>Game 8</SwiperSlide>
      <SwiperSlide>Game 9</SwiperSlide>
    </Swiper>
  );
}

export { GameSwiper };
