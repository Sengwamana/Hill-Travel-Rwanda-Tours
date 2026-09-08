import React, { useState, useEffect, useCallback } from 'react';

export interface HeroSlide {
  image: string;
  alt: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  interval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, interval = 6000 }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => setCurrent((slides.length + i) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => goTo(current + 1), interval);
    return () => window.clearInterval(id);
  }, [paused, current, interval, slides.length, goTo]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      role="region"
      aria-label="Image slideshow"
    >
      {/* Slides — crossfade between them */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={slide.alt}
          aria-hidden={i !== current}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Prev / Next Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous image"
            className="absolute left-5 top-1/2 -translate-y-1/2 hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next image"
            className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-8 flex gap-2.5 z-20">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? 'w-9 bg-white shadow' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;