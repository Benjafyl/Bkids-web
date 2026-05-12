type PriceCardProps = {
  title: string;
  price: string;
  detail: string;
  highlight?: boolean;
};

export function PriceCard({ title, price, detail, highlight }: PriceCardProps) {
  return (
    <article
      className={`rounded-[8px] p-7 shadow-xl ${
        highlight
          ? "bg-[#0a72ce] text-white shadow-sky-200"
          : "bg-white text-slate-900 shadow-sky-100 ring-1 ring-sky-100"
      }`}
    >
      <h3 className="font-display text-4xl font-black">{title}</h3>
      <p className={`mt-4 text-5xl font-black ${highlight ? "text-[#ffcc33]" : "text-[#ef3854]"}`}>
        {price}
      </p>
      <p className={`mt-4 text-base font-semibold ${highlight ? "text-white/90" : "text-slate-600"}`}>
        {detail}
      </p>
    </article>
  );
}
