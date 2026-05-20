import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/site";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={contact.whatsappUrl}
      aria-label="Hablar por WhatsApp con BKids"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl shadow-emerald-300/60 ring-4 ring-white transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <Image
        src={contact.whatsappIcon}
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-cover"
        priority
      />
    </Link>
  );
}
