import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { PromotionBanner as PromotionBannerData } from "@/data/promotions";

type PromotionBannerProps = {
  promotion: PromotionBannerData;
  imageAspect?: "square" | "poster";
  reverse?: boolean;
  className?: string;
};

function isExternalLink(href: string) {
  return href.startsWith("http");
}

function PromoLink({
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
          ? "inline-flex items-center justify-center rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
          : "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black uppercase text-[#0a72ce] ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50"
      }
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

export function PromotionBanner({
  promotion,
  imageAspect = "square",
  reverse = false,
  className = "bg-white",
}: PromotionBannerProps) {
  const aspectClass =
    imageAspect === "poster"
      ? "aspect-[9/16] max-w-[390px] sm:max-w-[430px]"
      : "aspect-square max-w-[520px]";

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-[34px] bg-[#e9f9ff] p-5 shadow-xl shadow-sky-100 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className={reverse ? "lg:order-2" : ""}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[#ef3854] shadow-md shadow-sky-100">
                <Sparkles className="h-4 w-4" />
                {promotion.eyebrow}
              </span>
              <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.95] text-[#0a72ce] sm:text-5xl">
                {promotion.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-700">
                {promotion.text}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PromoLink href={promotion.primaryHref} label={promotion.primaryLabel} />
                {promotion.secondaryHref && promotion.secondaryLabel ? (
                  <PromoLink
                    href={promotion.secondaryHref}
                    label={promotion.secondaryLabel}
                    variant="secondary"
                  />
                ) : null}
              </div>
            </div>

            <div className={reverse ? "lg:order-1" : ""}>
              <div
                className={`relative mx-auto w-full ${aspectClass} overflow-hidden rounded-[30px] bg-white shadow-xl shadow-sky-200 ring-4 ring-white`}
              >
                <Image
                  src={promotion.image}
                  alt={promotion.alt}
                  fill
                  sizes={
                    imageAspect === "poster"
                      ? "(min-width: 1024px) 430px, 90vw"
                      : "(min-width: 1024px) 520px, 90vw"
                  }
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
