import { Cookie, PlusCircle } from "lucide-react";
import { birthdayExtras, birthdaySnack } from "@/data/birthday";

export function BirthdayExtrasSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black uppercase text-[#0a72ce]">
            <PlusCircle className="h-4 w-4" />
            Extras
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Opciones extras
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {birthdayExtras.map((extra) => (
            <article
              key={extra.name}
              className="rounded-[24px] bg-[#f8fdff] p-5 shadow-sm ring-1 ring-sky-100"
            >
              <h3 className="text-sm font-black leading-6 text-slate-700">{extra.name}</h3>
              <p className="mt-3 font-display text-2xl font-black text-[#ef3854]">{extra.price}</p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm font-bold leading-6 text-slate-600">
          Opciones sujetas a disponibilidad y confirmación al momento de reservar.
        </p>

        <details className="mt-8 rounded-[28px] bg-[#fff7da] p-6 shadow-lg shadow-yellow-100 ring-1 ring-yellow-100">
          <summary className="flex cursor-pointer list-none items-center gap-3 font-display text-3xl font-black text-[#063f83]">
            <Cookie className="h-7 w-7 text-[#ef3854]" />
            Ver opciones de snack
          </summary>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <SnackList title="Incluye" items={birthdaySnack.includes} />
            <SnackList title="Sándwich" items={birthdaySnack.sandwiches} />
            <SnackList title="Galletón" items={birthdaySnack.cookies} />
          </div>
        </details>
      </div>
    </section>
  );
}

function SnackList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[22px] bg-white p-5">
      <h3 className="font-display text-2xl font-black text-[#0a72ce]">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm font-bold leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
