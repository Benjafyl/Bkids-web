import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { contact, heroImages } from "@/data/site";

export default function ContactPage() {
  const mapEmbedUrl =
    "https://www.google.com/maps?q=Camino%20El%20Alba%2012620%20Local%2016B%20Las%20Condes&output=embed";

  return (
    <>
      <Hero
        title="Contacto"
        subtitle="Diversión sin fin!"
        image={heroImages.contact}
      />

      <section className="bubble-pattern bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="rounded-[8px] bg-[#e9f9ff] p-7 shadow-xl shadow-sky-100">
            <p className="inline-flex rounded-full bg-[#ffcc33] px-4 py-2 text-sm font-black uppercase text-[#063f83]">
              Hablemos
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none text-[#0a72ce]">
              Datos de contacto
            </h1>
            <div className="mt-7 space-y-5 text-base font-bold text-slate-700">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ef3854]" />
                <span>Dirección: {contact.address}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0a72ce]" />
                <span>Teléfono: {contact.phone}</span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#00a9c7]" />
                <span>Mail: {contact.email}</span>
              </p>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#ef3854]" />
                <div>
                  <p>Horario:</p>
                  <p className="mt-1">{contact.schedule.weekdays}</p>
                  <p>{contact.schedule.weekends}</p>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[#e9f9ff] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.4fr] lg:items-center">
            <div className="overflow-hidden rounded-[8px] bg-white p-2 shadow-xl shadow-sky-100">
              <iframe
                title="Mapa de BKids en Las Condes"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[340px] w-full rounded-[8px] border-0"
              />
            </div>
            <div>
              <h2 className="font-display text-5xl font-black leading-none text-[#0a72ce]">
                Encuentranos en Las Condes
              </h2>
              <p className="mt-4 text-lg font-semibold leading-8 text-slate-600">
                Revisa la ubicacion exacta de BKids, planifica tu visita y abre la ruta en Google
                Maps con un solo click.
              </p>
              <Link
                href={contact.mapUrl}
                target="_blank"
                className="mt-7 inline-flex rounded-full bg-[#0a72ce] px-7 py-4 text-sm font-black uppercase text-white shadow-lg shadow-sky-200 transition hover:bg-[#045ca9]"
              >
                Ampliar mapa aquí
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
