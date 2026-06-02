"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  type?: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

type HeroCarouselProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  slides: HeroSlide[];
};

export function HeroCarousel({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  slides,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(slides.length - 1);
  const ctaIsExternal = ctaHref.startsWith("http");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        setPreviousIndex(current);
        return (current + 1) % slides.length;
      });
    }, 5200);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  function goTo(index: number) {
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  }

  function goToNext() {
    goTo((activeIndex + 1) % slides.length);
  }

  function goToPrevious() {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  }

  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-[#0a72ce] text-white sm:min-h-[620px]">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const wasPrevious = index === previousIndex;

        return (
          slide.type === "video" ? (
            <video
              key={slide.src}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                isActive
                  ? "scale-100 opacity-100"
                  : wasPrevious
                    ? "scale-105 opacity-0"
                    : "scale-[1.02] opacity-0"
              }`}
              aria-label={slide.alt}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={slide.poster}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-all duration-700 ease-out ${
                isActive
                  ? "scale-100 opacity-100"
                  : wasPrevious
                    ? "scale-105 opacity-0"
                    : "scale-[1.02] opacity-0"
              }`}
            />
          )
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-r from-[#005ca8]/86 via-[#078ad7]/58 to-[#ffcc33]/20" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,45,90,0.24),transparent_40%,rgba(4,91,169,0.38))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.94))]" />

      <button
        type="button"
        aria-label="Hero anterior"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/50 bg-white/85 text-[#0a72ce] shadow-xl transition hover:bg-white md:flex"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        type="button"
        aria-label="Hero siguiente"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/50 bg-white/85 text-[#0a72ce] shadow-xl transition hover:bg-white md:flex"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 pb-20 pt-14 text-center sm:min-h-[620px] sm:pb-24 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto mb-4 inline-flex rounded-full bg-white/92 px-5 py-2 text-sm font-black uppercase text-[#ef3854] shadow-lg">
            {eyebrow}
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-black leading-[1.05] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-extrabold leading-8 text-white drop-shadow sm:text-xl">
            {subtitle}
          </p>
          <Link
            href={ctaHref}
            target={ctaIsExternal ? "_blank" : undefined}
            rel={ctaIsExternal ? "noopener noreferrer" : undefined}
            className="mt-8 inline-flex rounded-full bg-[#ffcc33] px-8 py-4 text-base font-black uppercase text-[#063f83] shadow-xl shadow-sky-950/20 transition hover:-translate-y-0.5 hover:bg-[#ffd95a]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ver slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-3 rounded-full border border-white/70 transition-all ${
              index === activeIndex ? "w-10 bg-[#ffcc33]" : "w-3 bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
