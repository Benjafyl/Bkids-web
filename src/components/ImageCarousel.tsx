"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
};

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [images.length]);

  function goToNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  return (
    <div className="relative overflow-hidden rounded-[8px] border-8 border-white bg-sky-100 shadow-2xl shadow-sky-200">
      <div className="relative aspect-[16/9] min-h-[260px]">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className={`object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Imagen anterior"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a72ce] shadow-lg transition hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Imagen siguiente"
        onClick={goToNext}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a72ce] shadow-lg transition hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === activeIndex ? "w-9 bg-[#ffcc33]" : "w-3 bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
