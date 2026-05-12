import Image from "next/image";

type AttractionCardProps = {
  title: string;
  image: string;
  description: string;
};

export function AttractionCard({ title, image, description }: AttractionCardProps) {
  return (
    <article className="group overflow-hidden rounded-[8px] bg-white shadow-xl shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-3xl font-black text-[#0a72ce]">{title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}
