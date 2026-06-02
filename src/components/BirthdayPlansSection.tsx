import { BirthdayPlanCard } from "@/components/BirthdayPlanCard";
import { birthdayIntro, birthdayPlans } from "@/data/birthday";

export function BirthdayPlansSection() {
  return (
    <section id="packs" className="bubble-pattern bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
            Packs de cumpleaños
          </p>
          <h2 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce] sm:text-6xl">
            {birthdayIntro.title}
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
            {birthdayIntro.text}
          </p>
          <p className="mt-4 inline-flex rounded-full bg-[#e9f9ff] px-4 py-2 text-sm font-black text-[#0a72ce]">
            {birthdayIntro.note}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {birthdayPlans.map((plan) => (
            <BirthdayPlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
