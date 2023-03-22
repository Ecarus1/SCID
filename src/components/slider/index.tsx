import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper";

import SliderItem from "../elements/slider-item";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{clickable: true}}
      modules={[Pagination]}
      className="slider"
    >
      <SwiperSlide><SliderItem/></SwiperSlide>
      <SwiperSlide><SliderItem/></SwiperSlide>
      <SwiperSlide><SliderItem/></SwiperSlide>
      <SwiperSlide><SliderItem/></SwiperSlide>
      <SwiperSlide><SliderItem/></SwiperSlide>
    </Swiper>
  );
}

export default Slider;