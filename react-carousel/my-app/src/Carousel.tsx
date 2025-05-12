import { useEffect, useState } from 'react';
import type { Image } from './types';
import { ImageCard } from './ImageCard';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Dots } from './Dots';

interface CarouselProps {
  images: Image[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // auto-advance every 3s
    return () => clearInterval(intervalId); // cleanup on unmount
  }, [images.length]);

  return (
    <div className="carousel">
      <ImageCard image={images[currentIndex]} />
      <div className="controls">
        <PrevButton onClick={handlePrev} />
        <Dots
          count={images.length}
          activeIndex={currentIndex}
          onDotClick={handleDotClick}
        />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
