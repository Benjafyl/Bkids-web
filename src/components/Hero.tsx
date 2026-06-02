import Image from "next/image";
import Link from "next/link";

type HeroVariant = "immersive" | "split" | "compact" | "collage";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  variant?: HeroVariant;
  secondaryImage?: string;
  badge?: string;
  imagePosition?: string;
};

function HeroCta({
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Pick<HeroProps, "ctaLabel" | "ctaHref" | "secondaryCtaLabel" | "secondaryCtaHref">) {
  if (!ctaLabel || !ctaHref) return null;

  const isExternal = ctaHref.startsWith("http");
  const secondaryIsExternal = secondaryCtaHref?.startsWith("http") ?? false;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={ctaHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex justify-center rounded-full bg-[#ffcc33] px-7 py-4 text-base font-black uppercase text-[#063f83] shadow-xl shadow-sky-900/20 transition hover:-translate-y-0.5 hover:bg-[#ffd95a]"
      >
        {ctaLabel}
      </Link>
      {secondaryCtaLabel && secondaryCtaHref ? (
        <Link
          href={secondaryCtaHref}
          target={secondaryIsExternal ? "_blank" : undefined}
          rel={secondaryIsExternal ? "noopener noreferrer" : undefined}
          className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-base font-black uppercase text-[#0a72ce] shadow-xl shadow-sky-900/20 transition hover:-translate-y-0.5"
        >
          {secondaryCtaLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = "immersive",
  secondaryImage,
  badge,
  imagePosition,
}: HeroProps) {
  if (variant === "split") {
    return (
      <section className="overflow-hidden bg-[#e9f9ff] py-14 text-[#12314d] sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            {eyebrow ? (
              <p className="mb-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-extrabold leading-8 text-slate-600 sm:text-2xl">
              {subtitle}
            </p>
            <HeroCta
              ctaLabel={ctaLabel}
              ctaHref={ctaHref}
              secondaryCtaLabel={secondaryCtaLabel}
              secondaryCtaHref={secondaryCtaHref}
            />
          </div>

          <div className="relative min-h-[330px] overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-2xl shadow-sky-100 sm:min-h-[440px]">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
            {badge ? (
              <div className="absolute bottom-5 left-5 rounded-full bg-[#ffcc33] px-5 py-3 text-sm font-black uppercase text-[#063f83] shadow-xl">
                {badge}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className="bg-[#e9f9ff] py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid overflow-hidden rounded-[30px] bg-[#0a72ce] text-white shadow-2xl shadow-sky-100 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              {eyebrow ? (
                <p className="mb-4 inline-flex rounded-full bg-white/95 px-5 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="font-display text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-extrabold leading-8 text-white/92">
                {subtitle}
              </p>
              <HeroCta
                ctaLabel={ctaLabel}
                ctaHref={ctaHref}
                secondaryCtaLabel={secondaryCtaLabel}
                secondaryCtaHref={secondaryCtaHref}
              />
            </div>
            <div className="relative min-h-[300px] sm:min-h-[340px] lg:min-h-full">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a72ce]/35 to-transparent lg:from-[#0a72ce]/45" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "collage") {
    return (
      <section className="bubble-pattern overflow-hidden bg-white py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            {eyebrow ? (
              <p className="mb-4 inline-flex rounded-full bg-[#fff7da] px-5 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-display text-5xl font-black leading-[0.98] text-[#0a72ce] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-extrabold leading-8 text-slate-600 sm:text-xl">
              {subtitle}
            </p>
            <HeroCta
              ctaLabel={ctaLabel}
              ctaHref={ctaHref}
              secondaryCtaLabel={secondaryCtaLabel}
              secondaryCtaHref={secondaryCtaHref}
            />
          </div>

          <div className="relative min-h-[360px] sm:min-h-[420px]">
            <div className="absolute left-0 top-0 h-[78%] w-[76%] overflow-hidden rounded-[34px] border-4 border-white bg-white shadow-2xl shadow-sky-100">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[46%] w-[48%] overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-xl shadow-sky-100">
              <Image
                src={secondaryImage ?? image}
                alt=""
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            {badge ? (
              <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase text-[#063f83] shadow-xl ring-1 ring-sky-100">
                {badge}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate min-h-[430px] overflow-hidden bg-[#078ad7] text-white sm:min-h-[520px]">
      <Image
        src={image}
        alt={imageAlt ?? title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
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
          <h1 className="font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-extrabold leading-8 text-white sm:text-2xl">
            {subtitle}
          </p>
          <HeroCta
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
            secondaryCtaLabel={secondaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
          />
        </div>
      </div>
    </section>
  );
}
