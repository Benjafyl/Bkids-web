"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type TeamGalleryImage = {
  src: string;
  alt: string;
};

type TeamGalleryLightboxProps = {
  images: TeamGalleryImage[];
};

export function TeamGalleryLightbox({ images }: TeamGalleryLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<TeamGalleryImage | null>(null);
  const [featuredImage, ...secondaryImages] = images;

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!featuredImage) {
    return null;
  }

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <button
          type="button"
          onClick={() => setSelectedImage(featuredImage)}
          className="group relative min-h-[360px] overflow-hidden rounded-[34px] bg-white text-left shadow-xl shadow-sky-100 ring-4 ring-white transition hover:-translate-y-1 hover:shadow-2xl sm:min-h-[460px] lg:min-h-[560px]"
          aria-label={`Ampliar foto: ${featuredImage.alt}`}
        >
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center transition duration-500 group-hover:scale-105"
          />
        </button>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {secondaryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative min-h-[240px] overflow-hidden rounded-[30px] bg-white text-left shadow-xl shadow-sky-100 ring-4 ring-white transition hover:-translate-y-1 hover:shadow-2xl sm:min-h-[260px] ${
                index === 0 ? "sm:col-span-2 lg:min-h-[270px]" : ""
              }`}
              aria-label={`Ampliar foto: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 45vw, (min-width: 640px) 100vw, 100vw"
                    : "(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#063f83]/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada del equipo BKids"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[30px] bg-white p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a72ce] shadow-lg transition hover:scale-105"
              aria-label="Cerrar foto ampliada"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-[78vh] max-h-[820px] w-full overflow-hidden rounded-[24px] bg-[#e9f9ff]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
