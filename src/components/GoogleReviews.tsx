import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { googleLinks, googleReviews } from "@/data/reviews";

export function GoogleReviews() {
  const visibleReviews = googleReviews.slice(0, 2);

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
              Reseñas reales de quienes ya vivieron la experiencia BKids.
            </p>
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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visibleReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="rounded-[8px] bg-white p-6 shadow-xl shadow-sky-100 ring-1 ring-sky-100"
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
    </section>
  );
}
