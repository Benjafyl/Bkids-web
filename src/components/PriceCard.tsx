type PriceCardProps = {
  title: string;
  price: string;
  detail: string;
  highlight?: boolean;
  tone?: "blue" | "coral" | "pink";
};

const toneStyles = {
  blue: {
    card: "bg-[#0a72ce] text-white shadow-sky-200",
    title: "text-white",
    price: "text-[#ffcc33]",
    detail: "text-white/90",
  },
  coral: {
    card: "bg-[#fff7da] text-[#12314d] shadow-yellow-100 ring-1 ring-[#ffcc33]/50",
    title: "text-[#ef3854]",
    price: "text-[#0a72ce]",
    detail: "text-[#12314d]/80",
  },
  pink: {
    card: "bg-[#ffeaf2] text-[#12314d] shadow-pink-100 ring-1 ring-[#ff6078]/30",
    title: "text-[#00a9c7]",
    price: "text-[#ef3854]",
    detail: "text-[#12314d]/80",
  },
};

export function PriceCard({ title, price, detail, highlight, tone }: PriceCardProps) {
  const inferredTone = title.toLowerCase().includes("pack") ? "pink" : "coral";
  const styles = toneStyles[tone ?? (highlight ? "blue" : inferredTone)];

  return (
    <article className={`rounded-[8px] p-7 shadow-xl ${styles.card}`}>
      <h3 className={`font-display text-4xl font-black ${styles.title}`}>{title}</h3>
      <p className={`mt-4 text-5xl font-black ${styles.price}`}>
        {price}
      </p>
      <p className={`mt-4 text-base font-semibold ${styles.detail}`}>
        {detail}
      </p>
    </article>
  );
}
