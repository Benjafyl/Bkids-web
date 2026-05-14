"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type AboutSlide = {
  src: string;
  alt: string;
};

type AboutGalleryCarouselProps = {
  slides: AboutSlide[];
};

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

export function AboutGalleryCarousel({ slides }: AboutGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(slides.length - 1);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection("next");
      setActiveIndex((current) => {
        setPreviousIndex(current);
        return wrapIndex(current + 1, slides.length);
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  function goToNext() {
    setDirection("next");
    setActiveIndex((current) => {
      setPreviousIndex(current);
      return wrapIndex(current + 1, slides.length);
    });
  }

  function goToPrevious() {
    setDirection("prev");
    setActiveIndex((current) => {
      setPreviousIndex(current);
      return wrapIndex(current - 1, slides.length);
    });
  }

  function renderSlot(offset: number, aspectClass: string) {
    const currentSlotIndex = wrapIndex(activeIndex + offset, slides.length);
    const previousSlotIndex = wrapIndex(previousIndex + offset, slides.length);

    return (
      <div
        className={`relative overflow-hidden rounded-[32px] bg-white shadow-xl shadow-sky-100 ring-1 ring-sky-100 ${aspectClass}`}
      >
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlotIndex;
          const wasPrevious = index === previousSlotIndex;
          const transitionClass = isCurrent
            ? "translate-x-0 scale-100 opacity-100 z-20"
            : wasPrevious
              ? direction === "next"
                ? "-translate-x-8 scale-[1.03] opacity-0 z-10"
                : "translate-x-8 scale-[1.03] opacity-0 z-10"
              : "translate-x-6 scale-[0.98] opacity-0 z-0";

          return (
            <Image
              key={`${offset}-${slide.src}`}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes={offset === 0 ? "(min-width: 1024px) 32vw, 100vw" : "(min-width: 1024px) 14vw, 50vw"}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${transitionClass}`}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr] lg:items-stretch">
        {renderSlot(0, "aspect-[4/5] min-h-[420px]")}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {renderSlot(1, "aspect-[4/3] min-h-[200px]")}
          {renderSlot(2, "aspect-[4/3] min-h-[200px]")}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={goToPrevious}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0a72ce] shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={goToNext}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0a72ce] text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
