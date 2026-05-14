import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { contact } from "@/data/site";

export function TopBar() {
  return (
    <div className="bg-[#0a72ce] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-black">
            <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.schedule.weekdays}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.phone}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.email}
          </span>
          <Link
            href={contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-[#ffcc33]"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.address}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://www.instagram.com/"
            aria-label="Instagram de BKids"
            className="rounded-full px-2 py-1 text-[11px] font-black transition hover:bg-white/15"
          >
            IG
          </Link>
          <Link
            href="https://www.facebook.com/"
            aria-label="Facebook de BKids"
            className="rounded-full px-2 py-1 text-[11px] font-black transition hover:bg-white/15"
          >
            FB
          </Link>
        </div>
      </div>
    </div>
  );
}
