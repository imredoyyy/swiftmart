// Hero.jsx
import React from "react";
import Slider from "./Slider.jsx";
import { sliderImage } from "../data/data.jsx";


const Hero = () => {
  return (
    <section className="min-h-hero-height py-10 mx-auto max-w-7xl px-4 md:px-8">
      <div className="relative min-h-hero-height ">
        <Slider sliderImage={sliderImage}>
        </Slider>
      </div>
    </section>
  );7
};

export default Hero;
