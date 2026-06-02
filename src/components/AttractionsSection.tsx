import { Sparkles } from "lucide-react";
import { AttractionCard } from "@/components/AttractionCard";
import { attractions } from "@/data/site";

export function AttractionsSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#5966d9,#0a72ce_58%,#00a9c7)] py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Atracciones
          </p>
          <h2 className="mt-5 font-display text-5xl font-black leading-none sm:text-6xl">
            Nuestras atracciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-bold leading-7 text-white/88">
            Juegos infantiles en Las Condes para explorar, saltar y celebrar en un espacio pensado
            para niños y familias.
          </p>
        </div>

        <div className="mt-9 grid gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.title} {...attraction} />
          ))}
        </div>
      </div>
    </section>
  );
}
