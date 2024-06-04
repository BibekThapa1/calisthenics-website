// src/Slider.tsx
import React, { useState,useRef } from 'react';
import '../App.css';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const slideStyles = {
    backgroundImage:`url(${images[currentIndex]})`,
    width:"100%",
    height:"100%",
    backgroundPositon:"right",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  
  }

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="image-div" style={slideStyles}>
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
