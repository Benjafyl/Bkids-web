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
  const [previousIndex, setPreviousIndex] = useState(images.length - 1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        setPreviousIndex(current);
        return (current + 1) % images.length;
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, [images.length]);

  function goToNext() {
    setActiveIndex((current) => {
      setPreviousIndex(current);
      return (current + 1) % images.length;
    });
  }

  function goToPrevious() {
    setActiveIndex((current) => {
      setPreviousIndex(current);
      return (current - 1 + images.length) % images.length;
    });
  }

  function getImageState(index: number) {
    if (index === activeIndex) return "current";
    if (index === previousIndex) return "previous";
    return "idle";
  }

  return (
    <div className="relative overflow-hidden rounded-[8px] border-8 border-white bg-sky-100 shadow-2xl shadow-sky-200">
      <div className="relative aspect-[16/9] min-h-[260px]">
        {images.map((image, index) => {
          const state = getImageState(index);
          const className =
            state === "current"
              ? "translate-x-0 scale-100 opacity-100"
              : state === "previous"
                ? "-translate-x-10 scale-[1.08] opacity-0"
                : "translate-x-10 scale-[0.94] opacity-0";

          return (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className={`object-cover transition-all duration-700 ease-out ${className}`}
              priority={index === 0}
            />
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Imagen anterior"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-white/95 text-[#0a72ce] shadow-xl transition hover:-translate-y-[52%] hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Imagen siguiente"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-white/95 text-[#0a72ce] shadow-xl transition hover:-translate-y-[52%] hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            onClick={() => {
              setPreviousIndex(activeIndex);
              setActiveIndex(index);
            }}
            className={`h-3 rounded-full transition-all ${
              index === activeIndex ? "w-9 bg-[#ffcc33]" : "w-3 bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
