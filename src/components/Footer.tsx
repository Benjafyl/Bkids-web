import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, legal } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0a72ce] text-white">
      <div className="wave-top absolute inset-x-0 top-0 h-16 bg-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:pb-10 lg:px-8">
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
            aria-label={`Desarrollado por ${legal.developerName}. Visitar su sitio web (abre en una nueva pestaña)`}
            className="mx-auto mt-3 inline-flex items-center justify-center gap-3 rounded-xl bg-white/95 px-4 py-2 text-sm text-[#12314d] ring-1 ring-white/60 transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>Desarrollado por</span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <Image
                src={legal.developerLogo}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <Image
                src={legal.developerWordmark}
                alt={legal.developerName}
                width={62}
                height={48}
                className="h-12 w-auto"
              />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
