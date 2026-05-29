import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { localCatalogProducts } from "@/data/site";

export function LocalCatalogSection() {
  return (
    <section id="catalogo-local" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#0a72ce]">
              <ShoppingBag className="h-4 w-4" />
              Catálogo BKids
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
              Productos disponibles en el local
            </h2>
          </div>
          <p className="max-w-md text-base font-semibold leading-7 text-slate-600">
            Snacks, bebidas y colaciones para acompañar la visita. La disponibilidad puede variar
            durante el día.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {localCatalogProducts.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[8px] bg-[#f7fdff] shadow-lg shadow-sky-100 ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 224px, (min-width: 640px) 33vw, 50vw"
                  className="object-contain p-2 transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-14 items-center justify-center px-3 py-3 text-center">
                <h3 className="font-display text-xl font-black leading-tight text-[#0a72ce]">
                  {product.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
