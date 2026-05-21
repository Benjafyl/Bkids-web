import { CalendarDays, Clock3 } from "lucide-react";
import { birthdaySchedules } from "@/data/birthday";

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
              <ul className="mt-5 space-y-2 text-sm font-bold leading-6 text-slate-600">
                {schedule.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
