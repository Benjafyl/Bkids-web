import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function Hero({ eyebrow, title, subtitle, image, ctaLabel, ctaHref }: HeroProps) {
  return (
    <section className="relative isolate min-h-[430px] overflow-hidden bg-[#078ad7] text-white sm:min-h-[520px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#005ca8]/85 via-[#049bd8]/55 to-[#ffcc33]/20" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.92))]" />
      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-4 py-20 sm:min-h-[520px] lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 inline-flex rounded-full bg-white/90 px-5 py-2 text-sm font-black uppercase text-[#ef3854] shadow-lg">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-extrabold text-white sm:text-2xl">
            {subtitle}
          </p>
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex rounded-full bg-[#ffcc33] px-7 py-4 text-base font-black uppercase text-[#063f83] shadow-xl shadow-sky-900/20 transition hover:-translate-y-0.5 hover:bg-[#ffd95a]"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
