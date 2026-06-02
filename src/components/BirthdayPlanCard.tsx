import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getBirthdayWhatsappUrl } from "@/data/birthday";

type BirthdayPlanCardProps = {
  plan: {
    name: string;
    badge?: string;
    color: "sky" | "blue" | "coral";
    fromPrice: string;
    includes: string[];
  };
};

const styles = {
  sky: {
    card: "bg-[#e9f9ff] ring-sky-100",
    pill: "bg-white text-[#0a72ce]",
    button: "bg-[#0a72ce] text-white hover:bg-[#045ca9]",
  },
  blue: {
    card: "bg-[#0a72ce] text-white ring-[#0a72ce]",
    pill: "bg-white text-[#0a72ce]",
    button: "bg-[#ffcc33] text-[#063f83] hover:bg-[#ffd95f]",
  },
  coral: {
    card: "bg-[#fff7da] ring-yellow-100",
    pill: "bg-[#ef3854] text-white",
    button: "bg-[#ef3854] text-white hover:bg-[#d92843]",
  },
};

export function BirthdayPlanCard({ plan }: BirthdayPlanCardProps) {
  const theme = styles[plan.color];
  const isBlue = plan.color === "blue";

  return (
    <article
      className={`relative flex h-full flex-col rounded-[30px] p-6 shadow-xl shadow-sky-100 ring-1 ${theme.card}`}
    >
      {plan.badge ? (
        <span className="absolute right-5 top-5 rounded-full bg-[#ffcc33] px-3 py-1 text-xs font-black uppercase text-[#063f83]">
          {plan.badge}
        </span>
      ) : null}

      <span className={`w-fit rounded-full px-4 py-2 text-xs font-black uppercase ${theme.pill}`}>
        Desde {plan.fromPrice}
      </span>
      <h3 className={`mt-5 font-display text-4xl font-black ${isBlue ? "text-white" : "text-[#0a72ce]"}`}>
        {plan.name}
      </h3>
      <ul className="mt-5 space-y-3">
        {plan.includes.map((item) => (
          <li
            key={item}
            className={`flex gap-3 text-sm font-bold leading-6 ${isBlue ? "text-white/92" : "text-slate-700"}`}
          >
            <CheckCircle2
              className={`mt-0.5 h-5 w-5 shrink-0 ${isBlue ? "text-[#ffcc33]" : "text-[#00a9c7]"}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <Link
          href={getBirthdayWhatsappUrl(`Hola BKids, quiero consultar por el ${plan.name} de cumpleaños.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-black uppercase transition hover:-translate-y-0.5 ${theme.button}`}
        >
          Consultar este plan
        </Link>
      </div>
    </article>
  );
}
