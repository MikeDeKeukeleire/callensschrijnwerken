import { React, useState, useEffect } from "react";
import alg1 from "../media/realisaties/algemeen/alg1.png";
import alg2 from "../media/realisaties/algemeen/alg2.png";
const images = [alg1, alg2];
let count = 0;

const ImageSliderAlg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
  };
  const handleOnPreviousClick = () => {
    const length = images.length;
    count = (currentIndex + length - 1) % length;
    setCurrentIndex(count);
  };
  return (
    <div className="max-w-3xl mx-auto select-none relative mt-6">
      <img src={images[currentIndex]} className="rounded-xl" />

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={handleOnPreviousClick}></button>
        <button onClick={handleOnNextClick}></button>
      </div>
    </div>
  );
};

export default ImageSliderAlg;
