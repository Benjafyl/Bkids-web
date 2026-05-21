import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/data/site";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={contact.whatsappUrl}
      aria-label="Hablar por WhatsApp con BKids"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-emerald-300/60 ring-4 ring-white transition hover:-translate-y-1 hover:scale-110 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
    >
      <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
    </Link>
  );
}
