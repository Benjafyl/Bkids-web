import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, legal } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0a72ce] text-white">
      <div className="wave-top absolute inset-x-0 top-0 h-16 bg-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-bkids.png"
              alt="BKids Stay and Play Las Condes"
              width={230}
              height={132}
              className="h-auto w-48 rounded-[8px] bg-white/95 p-3 shadow-xl"
            />
            <p className="mt-5 font-display text-4xl font-black text-[#ffcc33]">
              Be happy on the sea
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-black">Información legal</h2>
            <div className="mt-4 space-y-2 text-sm font-semibold text-white/90">
              <p>Razón Social: {legal.businessName}</p>
              <p>RUT: {legal.rut}</p>
              <p>Dirección: {contact.legalAddress}</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-black">Contacto</h2>
            <div className="mt-4 space-y-3 text-sm font-semibold text-white/90">
              <p className="flex gap-2">
                <Mail className="h-5 w-5 shrink-0 text-[#ffcc33]" />
                {contact.email}
              </p>
              <p className="flex gap-2">
                <Phone className="h-5 w-5 shrink-0 text-[#ffcc33]" />
                {contact.phone}
              </p>
              <Link
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 transition hover:text-[#ffcc33]"
              >
                <MapPin className="h-5 w-5 shrink-0 text-[#ffcc33]" />
                {contact.address}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs font-semibold leading-6 text-white/80">
          <p>
            © {currentYear} {legal.copyrightName}. Todos los derechos reservados.
          </p>
          <Link
            href={legal.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${legal.developerName}`}
            className="mx-auto mt-3 inline-flex items-center justify-center gap-3 rounded-xl bg-white/95 px-4 py-3 text-sm text-[#12314d] shadow-lg shadow-sky-950/10 ring-1 ring-white/60 transition hover:-translate-y-0.5 hover:bg-[#fff7da] hover:shadow-xl"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/85 shadow-sm ring-1 ring-white/10">
              <Image
                src={legal.developerLogo}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </span>
            <span>
              Desarrollado por{" "}
              <span className="font-black text-[#0a72ce]">{legal.developerName}</span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
