import Image from "next/image";
import { workshopGallery } from "@/data/workshops";

function galleryClass(index: number) {
  if (index === 0) return "min-[560px]:col-span-2 lg:row-span-2";
  if (index === 3) return "lg:row-span-2";
  if (index === 5) return "min-[560px]:col-span-2 lg:col-span-1";
  return "";
}

export function WorkshopGallery() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
            Recap BKids
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Recopilación de talleres pasados
          </h2>
          <p className="mt-4 text-base font-semibold leading-7 text-slate-600 sm:text-lg">
            Un vistazo a las actividades, celebraciones y experiencias que hemos vivido junto a los
            niños y sus familias.
          </p>
        </div>

        <div className="mt-9 grid auto-rows-[190px] gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px]">
          {workshopGallery.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-[28px] bg-[#e9f9ff] shadow-xl shadow-sky-100 ring-4 ring-white ${galleryClass(index)}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 560px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
