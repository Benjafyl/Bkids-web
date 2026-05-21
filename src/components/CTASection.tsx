import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
  secondaryButtonLabel?: string;
  secondaryHref?: string;
  variant?: "blue" | "coral";
};

export function CTASection({
  title,
  text,
  buttonLabel,
  href,
  secondaryButtonLabel,
  secondaryHref,
  variant = "blue",
}: CTASectionProps) {
  const isCoral = variant === "coral";
  const isExternal = href.startsWith("http");
  const secondaryIsExternal = secondaryHref?.startsWith("http") ?? false;

  return (
    <section
      className={`overflow-hidden py-14 ${
        isCoral ? "bg-[#ff6078] text-white" : "bg-[#00a9c7] text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-black sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-lg font-semibold text-white/90">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="rounded-full bg-emerald-500 px-7 py-4 text-center text-sm font-black uppercase text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            {buttonLabel}
          </Link>
          {secondaryButtonLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              target={secondaryIsExternal ? "_blank" : undefined}
              rel={secondaryIsExternal ? "noopener noreferrer" : undefined}
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase text-[#0a72ce] shadow-xl transition hover:-translate-y-0.5"
            >
              {secondaryButtonLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
