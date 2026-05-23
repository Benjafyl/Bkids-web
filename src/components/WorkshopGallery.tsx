"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { workshopGallery } from "@/data/workshops";

type WorkshopGalleryItem = (typeof workshopGallery)[number];

export function WorkshopGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = workshopGallery.length;

  useEffect(() => {
    if (total <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [total]);

  const activeImage = workshopGallery[activeIndex] ?? workshopGallery[0];

  const previewImages = useMemo(() => {
    if (total <= 1) {
      return [];
    }

    return Array.from({ length: Math.min(4, total - 1) }, (_, offset) => {
      return workshopGallery[(activeIndex + offset + 1) % total];
    }).filter((item): item is WorkshopGalleryItem => Boolean(item));
  }, [activeIndex, total]);

  if (!activeImage) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
            Recap BKids
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Recopilación de talleres pasados
          </h2>
          <p className="mt-4 text-base font-semibold leading-7 text-slate-600 sm:text-lg">
            Un vistazo a las actividades, celebraciones y experiencias que hemos vivido junto a los
            niños y sus familias.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
          <div className="relative overflow-hidden rounded-[30px] shadow-2xl shadow-sky-100">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11]">
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="object-cover"
                style={{ objectPosition: activeImage.objectPosition }}
              />
            </div>

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
              <div className="flex rounded-full bg-white/90 px-3 py-2 shadow-lg backdrop-blur">
                {workshopGallery.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    aria-label={`Ver foto ${index + 1} de talleres`}
                    onClick={() => setActiveIndex(index)}
                    className={`mx-1 h-2.5 rounded-full transition-all ${
                      index === activeIndex ? "w-8 bg-[#0a72ce]" : "w-2.5 bg-sky-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Foto anterior"
                  onClick={goToPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0a72ce] shadow-lg transition hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Foto siguiente"
                  onClick={goToNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0a72ce] shadow-lg transition hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {previewImages.map((item, index) => {
              const imageIndex = workshopGallery.findIndex((galleryItem) => galleryItem.src === item.src);

              return (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Ver ${item.alt}`}
                  onClick={() => setActiveIndex(imageIndex)}
                  className="group overflow-hidden rounded-[24px] shadow-xl shadow-sky-100 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="relative block aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 25vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      style={{ objectPosition: item.objectPosition }}
                    />
                  </span>
                  <span className="sr-only">Cambiar a la imagen {index + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
