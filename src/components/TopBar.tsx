import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { contact, socialLinks } from "@/data/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M14.1 8.3V6.9c0-.7.5-.9.9-.9h2V3h-2.8c-3 0-3.8 2.2-3.8 3.7v1.6H8v3.2h2.4V21h3.7v-9.5h2.6l.4-3.2h-3Z" />
    </svg>
  );
}

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
            href={socialLinks.instagram}
            aria-label="Instagram de BKids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={socialLinks.facebook}
            aria-label="Facebook de BKids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <FacebookIcon />
          </Link>
          <Link
            href={socialLinks.whatsapp}
            aria-label="WhatsApp de BKids"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-[#063f83] transition hover:bg-emerald-300"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
