import Image from "next/image";
import { workshopGallery } from "@/data/workshops";

function collageClass(index: number) {
  if (index === 0) return "col-span-2";
  if (index === 1) return "row-span-2";
  if (index === 4) return "col-span-2";
  return "";
}

export function WorkshopGallery() {
  const [featuredImage, ...collageImages] = workshopGallery;

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

        <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-stretch">
          {featuredImage ? (
            <figure className="group relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#e9f9ff] shadow-xl shadow-sky-100 ring-4 ring-white sm:min-h-[540px] lg:min-h-[650px]">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </figure>
          ) : null}

          <div className="grid auto-rows-[145px] grid-cols-2 gap-4 sm:auto-rows-[175px] lg:auto-rows-[150px] xl:auto-rows-[154px]">
            {collageImages.map((item, index) => (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-[26px] bg-[#e9f9ff] shadow-xl shadow-sky-100 ring-4 ring-white ${collageClass(index)}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
