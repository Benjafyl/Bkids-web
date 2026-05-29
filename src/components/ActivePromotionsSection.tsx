import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { homeActivePromotions } from "@/data/promotions";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

function PromotionLink({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const external = isExternalLink(href);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        variant === "primary"
          ? "inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#0a72ce] px-6 py-3 text-xs font-black uppercase text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-[#045ca9] sm:text-sm"
          : "inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-3 text-xs font-black uppercase text-[#0a72ce] ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50 sm:text-sm"
      }
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

export function ActivePromotionsSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#0a72ce]">
            <Sparkles className="h-4 w-4" />
            Novedades BKids
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Promociones y talleres de temporada
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2">
          {homeActivePromotions.map((promotion) => {
            return (
              <article
                key={promotion.title}
                className="rounded-[28px] bg-[#f8fdff] p-5 text-center shadow-lg shadow-sky-100 ring-1 ring-sky-100"
              >
                <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#ef3854] shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  {promotion.eyebrow}
                </p>
                <div className="mx-auto mt-5 flex h-[520px] max-w-[295px] items-center justify-center sm:h-[590px] sm:max-w-[332px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-white shadow-md shadow-sky-100 ring-4 ring-white">
                    <Image
                      src={promotion.image}
                      alt={promotion.alt}
                      fill
                      sizes="(min-width: 768px) 245px, 80vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mx-auto mt-5 grid max-w-[280px] gap-3">
                  <PromotionLink href={promotion.primaryHref} label={promotion.primaryLabel} />
                  {promotion.secondaryHref && promotion.secondaryLabel ? (
                    <PromotionLink
                      href={promotion.secondaryHref}
                      label={promotion.secondaryLabel}
                      variant="secondary"
                    />
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
