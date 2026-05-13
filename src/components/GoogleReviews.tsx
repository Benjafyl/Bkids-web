"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { googleLinks, googleReviews } from "@/data/reviews";

function getVisibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function GoogleReviews() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    function updateVisibleCount() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection("next");
      setStartIndex((current) => (current + 1) % googleReviews.length);
    }, 4600);

    return () => window.clearInterval(interval);
  }, []);

  function goNext() {
    setDirection("next");
    setStartIndex((current) => (current + 1) % googleReviews.length);
  }

  function goPrevious() {
    setDirection("prev");
    setStartIndex((current) => (current - 1 + googleReviews.length) % googleReviews.length);
  }

  const visibleReviews = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, offset) => {
      return googleReviews[(startIndex + offset) % googleReviews.length];
    });
  }, [startIndex, visibleCount]);

  return (
    <section id="google-reviews" className="bg-[#e9f9ff] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              Google
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
              Lo que dicen nuestras familias
            </h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              Seleccionamos reseñas destacadas de Google para que veas cómo ha sido la experiencia
              de otras familias en BKids.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-sky-100">
              <div className="flex gap-1 text-[#ffcc33]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-black uppercase tracking-[0.16em] text-[#0a72ce]">
                Reseñas reales destacadas
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={googleLinks.reviewsUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-sky-200 transition hover:bg-[#045ca9]"
            >
              Ver más reseñas
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link
              href={googleLinks.writeReviewUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffcc33] px-6 py-3 text-sm font-black uppercase text-[#063f83] shadow-lg shadow-yellow-100 transition hover:bg-[#ffd95a]"
            >
              Déjanos tu reseña
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0a72ce]">
              Desliza las opiniones destacadas
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Reseña anterior"
                onClick={goPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a72ce] shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Siguiente reseña"
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a72ce] text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              key={`${startIndex}-${visibleCount}-${direction}`}
              className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${
                direction === "next" ? "reviews-slide-next" : "reviews-slide-prev"
              }`}
            >
              {visibleReviews.map((review, index) => (
                <article
                  key={`${review.name}-${review.source}-${index}`}
                  className="rounded-[20px] bg-white p-6 shadow-xl shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black text-[#12314d]">{review.name}</h3>
                      <p className="mt-1 text-sm font-extrabold text-[#0a72ce]">{review.source}</p>
                    </div>
                    <div className="flex shrink-0 gap-1" aria-label={`${review.rating} estrellas`}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-5 w-5 ${
                            starIndex < review.rating
                              ? "fill-[#ffcc33] text-[#ffcc33]"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
