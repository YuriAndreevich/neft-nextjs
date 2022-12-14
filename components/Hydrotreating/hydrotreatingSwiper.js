import React from "react";
import IMG1 from "../../public/img/hydrotreating/hydrotreatingSlider/1.jpg";
import IMG2 from "../../public/img/hydrotreating/hydrotreatingSlider/2.jpg";
import IMG3 from "../../public/img/hydrotreating/hydrotreatingSlider/3.jpg";
import IMG4 from "../../public/img/hydrotreating/hydrotreatingSlider/4.jpg";
import IMG5 from "../../public/img/hydrotreating/hydrotreatingSlider/5.jpg";
import IMG6 from "../../public/img/hydrotreating/hydrotreatingSlider/6.jpg";
import IMG7 from "../../public/img/hydrotreating/hydrotreatingSlider/7.jpg";
import IMG8 from "../../public/img/hydrotreating/hydrotreatingSlider/8.jpg";
import IMG9 from "../../public/img/hydrotreating/hydrotreatingSlider/9.jpg";
import IMG10 from "../../public/img/hydrotreating/hydrotreatingSlider/10.jpg";
import IMG11 from "../../public/img/hydrotreating/hydrotreatingSlider/11.jpg";
import IMG12 from "../../public/img/hydrotreating/hydrotreatingSlider/12.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Image from "next/image";

import "swiper/scss";
import "swiper/scss/pagination";

function hydrotreatingSwiper() {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop
    >
      <SwiperSlide>
        <Image src={IMG1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG10} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG11} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={IMG12} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default hydrotreatingSwiper;
