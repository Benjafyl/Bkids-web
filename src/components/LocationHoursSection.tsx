import { ArrowRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { contact, location } from "@/data/site";

export function LocationHoursSection() {
  return (
    <section
      id="horarios-ubicacion"
      className="bubble-pattern bg-[#e9f9ff] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_24px_80px_rgba(0,169,199,0.16)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative bg-[#f7fdff] p-6 text-[#12314d] sm:p-9">
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#ffcc33]/25 blur-xl" />
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#ef3854] shadow-sm">
                Horarios y ubicación
              </p>
              <h2 className="mt-5 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
                Ven a visitarnos
              </h2>
              <p className="mt-4 max-w-xl text-base font-bold leading-7 text-slate-600 sm:text-lg">
                Estamos en Camino El Alba 12620, Las Condes, listos para recibirte con entretención
                infantil para toda la familia.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex gap-4 rounded-[8px] bg-white p-4 shadow-sm shadow-sky-100">
                  <span className="rounded-[8px] bg-[#0a72ce] p-3 text-white">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-extrabold leading-6 text-slate-700 sm:text-base">
                    <p>{contact.schedule.weekdays}</p>
                    <p>{contact.schedule.weekends}</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-[8px] bg-white p-4 shadow-sm shadow-sky-100">
                  <span className="rounded-[8px] bg-[#00a9c7] p-3 text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-extrabold leading-6 text-slate-700 sm:text-base">
                    {location.address}
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-xs font-extrabold text-slate-700 shadow-sm shadow-sky-100 sm:text-sm">
                    <Phone className="h-5 w-5 shrink-0 text-[#ef3854]" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-[8px] bg-white p-4 text-xs font-extrabold leading-5 text-slate-700 shadow-sm shadow-sky-100 sm:text-sm">
                    <Mail className="h-5 w-5 shrink-0 text-[#0a72ce]" />
                    <span className="min-w-0 break-words">{contact.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-6 py-3 text-sm font-black uppercase text-[#063f83] shadow-lg transition hover:-translate-y-0.5"
                >
                  Ver mapa
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Escribir ahora
                </Link>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8">
              <div className="h-[280px] overflow-hidden rounded-[24px] border-4 border-[#d7f5ff] shadow-[0_18px_50px_rgba(10,114,206,0.16)] sm:h-[340px] lg:h-full lg:min-h-[360px]">
                <iframe
                  title="Mapa de BKids en Las Condes"
                  src={location.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
