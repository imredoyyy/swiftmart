import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import { ChevronRight, ChevronLeft, Circle, CircleDot } from "lucide-react";

const Slider = ({ sliderImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slidePrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? sliderImage.length - 1 : currentIndex - 1,
    );
  };

  const slideNext = () => {
    setCurrentIndex(
      currentIndex === sliderImage.length - 1 ? 0 : currentIndex + 1,
    );
  };

  // Auto slide every 6s
  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        slideNext();
      }, 6000);
    }

    return () => clearInterval(intervalId);
  }, [autoplay, currentIndex, sliderImage.length]);

  // Stop autoplay when user hover over the slider
  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  // Start autoplay when user hover over the slider
  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Slider content
  const sliderContent = [
    // First slider content
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center text-2xl font-bold text-color-50 md:text-4xl lg:text-6xl">
        Make Your Interior More <br /> Minimalistic & Modern
      </h1>
      <p className="max-w-md text-center text-white md:text-lg lg:max-w-lg">
        Turn your room into a lot more minimalistic and modern with ease and
        speed with Swift<span className="text-color-50">Mart</span>
      </p>
      <SearchBar
        className="relative max-w-[300px]"
        inputWrapperClass="w-[300px] border-color-white/60 bg-white/15 w-[200px]"
        inputClassName="bg-transparent text-white placeholder:text-white"
        subClassName="mt-2"
        noMatchingProductClass="mt-3"
      />
    </div>,

    // Second slider content
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center text-2xl font-bold text-color-50 md:text-4xl lg:text-6xl">
        Discover Our <br />
        New Collections
      </h1>
      <p className="max-w-md text-center md:text-lg lg:max-w-lg">
        Be the First to See What's New <br />
        Check Out Our Latest Collections!
      </p>
      <Link
        to="/categories/chair"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="grid w-fit place-items-center rounded-[2.5rem] border border-color-50 bg-color-50 px-6 py-2.5 font-medium text-white transition-colors duration-300 hover:bg-transparent hover:text-color-100"
      >
        Shop Now
      </Link>
    </div>,
  ];

  return (
    <div className="relative flex min-h-[95vh] items-end justify-center overflow-hidden md:min-h-hero-height">
      {sliderImage.map((image, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat py-16 transition-all duration-800 ease-in-out xl:py-24 ${
            index === currentIndex
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
          }}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        >
          <div className="absolute left-[50%] top-[10%] z-[1] w-[92%] -translate-x-1/2">
            {sliderContent[index]}
          </div>
        </div>
      ))}

      <button
        className="absolute left-4 top-[50%] -translate-y-1/2 transform [&_svg]:stroke-color-50"
        onClick={slidePrevious}
        aria-label="Slide Previous Image"
      >
        <ChevronLeft className="size-8 lg:size-10" />
      </button>
      <button
        className="absolute right-4 top-[50%] -translate-y-1/2 transform [&_svg]:stroke-color-50"
        onClick={slideNext}
        aria-label="Slide Next Image"
      >
        <ChevronRight className="size-8 lg:size-10" />
      </button>

      <div className="absolute bottom-4 left-[50%] flex -translate-x-1/2 transform items-center gap-3">
        {sliderImage.map((_, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            className="stroke-current text-gray-600 [&_svg]:stroke-color-50"
            key={index}
            aria-label={`Image ${index + 1}`}
          >
            {index === currentIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
