import Link from "next/link";
import { CalendarDays, Clock3, MessageCircle } from "lucide-react";
import { birthdayScheduleNote, birthdaySchedules, getBirthdayWhatsappUrl } from "@/data/birthday";

export function BirthdayScheduleSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#fff7da] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
            <CalendarDays className="h-4 w-4" />
            Horarios
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
            Horarios disponibles
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {birthdaySchedules.map((schedule) => (
            <article
              key={schedule.title}
              className="rounded-[28px] bg-[#e9f9ff] p-6 shadow-lg shadow-sky-100 ring-1 ring-sky-100"
            >
              <h3 className="font-display text-3xl font-black text-[#0a72ce]">
                {schedule.title}
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {schedule.slots.map((slot) => (
                  <p
                    key={slot}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700"
                  >
                    <Clock3 className="h-4 w-4 text-[#ef3854]" />
                    {slot}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-base font-bold leading-7 text-slate-600">{birthdayScheduleNote}</p>
          <Link
            href={getBirthdayWhatsappUrl(
              "Hola BKids, quiero consultar horarios disponibles para cumpleaños.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-[#045ca9]"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Consultar horarios
          </Link>
        </div>
      </div>
    </section>
  );
}
