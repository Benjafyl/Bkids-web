import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { birthdayConditions, birthdayPdfUrl } from "@/data/birthday";

export function BirthdayConditionsSection() {
  return (
    <section className="bg-[#f8fdff] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              <FileText className="h-4 w-4" />
              Información clave
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
              Condiciones importantes
            </h2>
          </div>
          <Link
            href={birthdayPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
          >
            Ver condiciones completas
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {birthdayConditions.map((condition) => (
            <p
              key={condition}
              className="flex gap-3 rounded-[22px] bg-white px-5 py-4 text-sm font-bold leading-6 text-slate-700 shadow-sm ring-1 ring-sky-100"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
              <span>{condition}</span>
            </p>
          ))}
        </div>

        <p className="mt-6 rounded-[22px] bg-[#fff7da] px-5 py-4 text-sm font-black leading-6 text-[#063f83]">
          Para revisar el detalle completo de condiciones, descarga el PDF informativo.
        </p>
      </div>
    </section>
  );
}
