import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./scustomSwiper.css";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={25}
      centeredSlides={true}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[Pagination, Autoplay, Navigation]}
      navigation={true}
      className="mySwiper w-[1024px] h-[484px] rounded-xl"
    >
      <SwiperSlide className="w-[1024px] h-[484px] rounded-xl">
        <img
          src="https://via.placeholder.com/1024"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[1024px] h-[484px] rounded-xl">
        <img
          src="https://via.placeholder.com/1024"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[1024px] h-[484px] rounded-xl">
        <img
          src="https://via.placeholder.com/1024"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[1024px] h-[484px] rounded-xl">
        <img
          src="https://via.placeholder.com/1024"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[1024px] h-[484px] rounded-xl">
        <img
          src="https://via.placeholder.com/1024"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
