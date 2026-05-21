"use client";

import { useState } from "react";
import { birthdayPlans } from "@/data/birthday";

type PricePeriod = "weekdays" | "weekends";

const periods: { key: PricePeriod; label: string }[] = [
  { key: "weekdays", label: "Lunes a jueves" },
  { key: "weekends", label: "Viernes, sábado, domingo y festivos" },
];

export function BirthdayPricesTable() {
  const [activePeriod, setActivePeriod] = useState<PricePeriod>("weekdays");

  return (
    <section className="bg-[#e9f9ff] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black uppercase text-[#ef3854] shadow-sm">
              Valores
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-[#0a72ce] sm:text-5xl">
              Valores por cantidad de niños
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full bg-white p-2 shadow-sm ring-1 ring-sky-100">
            {periods.map((period) => (
              <button
                key={period.key}
                type="button"
                onClick={() => setActivePeriod(period.key)}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase transition ${
                  activePeriod === period.key
                    ? "bg-[#0a72ce] text-white"
                    : "text-[#0a72ce] hover:bg-[#e9f9ff]"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-[28px] bg-white shadow-xl shadow-sky-100 ring-1 ring-sky-100">
          <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full border-collapse text-left">
              <thead className="bg-[#0a72ce] text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-black uppercase">Plan</th>
                  <th className="px-5 py-4 text-sm font-black uppercase">10 niños</th>
                  <th className="px-5 py-4 text-sm font-black uppercase">20 niños</th>
                  <th className="px-5 py-4 text-sm font-black uppercase">30 niños</th>
                  <th className="px-5 py-4 text-sm font-black uppercase">Niño extra</th>
                </tr>
              </thead>
              <tbody>
                {birthdayPlans.map((plan) => {
                  const prices = plan.prices[activePeriod];

                  return (
                    <tr key={plan.name} className="border-b border-sky-100 last:border-0">
                      <td className="px-5 py-4 font-black text-[#0a72ce]">{plan.name}</td>
                      <td className="px-5 py-4 font-bold text-slate-700">{prices.tenKids}</td>
                      <td className="px-5 py-4 font-bold text-slate-700">{prices.twentyKids}</td>
                      <td className="px-5 py-4 font-bold text-slate-700">{prices.thirtyKids}</td>
                      <td className="px-5 py-4 font-bold text-slate-700">{prices.extraKid}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
