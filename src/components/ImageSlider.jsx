import { React, useState, useEffect } from "react";
import vb1 from "../media/slider/vb1.jpg";
import vb2 from "../media/slider/foto2.jpg";
import vb3 from "../media/slider/foto3.png";

const images = [vb1, vb2, vb3];
let count = 0;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 7000);
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

export default ImageSlider;
