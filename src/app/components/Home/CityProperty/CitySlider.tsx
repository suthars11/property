// "use client"
import { cities } from "@/app/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CityCard from "./CityCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      className="absolute -left-1 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full z-50 text-[rgba(79, 109, 122, 1)]  "
      onClick={onClick}
      aria-label="Previous Slide"
    >
      ←
    </button>
  );
};

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <button
      className="absolute -right-1 w-8 top-1/2  2-50 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow-lg "
      onClick={onClick}
      aria-label="Next Slide"
    >
      →
    </button>
  );
};

const CitySlider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      showDots={false}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      dotListClass="custom-dot-list-style"
    >
      {cities.map((city) => {
        return (
          <div key={city.id}>
            {/* citycard */}
            <CityCard city={city} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CitySlider;