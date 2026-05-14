import Image from "next/image";

type AttractionCardProps = {
  title: string;
  image: string;
  description: string;
};

export function AttractionCard({ title, image, description }: AttractionCardProps) {
  return (
    <article className="group overflow-hidden rounded-[8px] bg-white/96 p-3 text-[#12314d] shadow-xl shadow-sky-950/12 ring-1 ring-white/60 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border-[6px] border-white bg-sky-100 shadow-md">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 520px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-2 pb-2 pt-3">
        <h3 className="font-display text-2xl font-black leading-none text-[#0a72ce]">{title}</h3>
        <p className="mt-2 line-clamp-2 text-[13px] font-semibold leading-5 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}
