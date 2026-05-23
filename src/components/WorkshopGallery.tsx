import Image from "next/image";
import { workshopGallery } from "@/data/workshops";

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

        <div className="mt-9 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {workshopGallery.map((item) => (
            <figure
              key={item.src}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[26px] shadow-xl shadow-sky-100"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
