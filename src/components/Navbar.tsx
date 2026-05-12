"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio BKids">
          <Image
            src="/images/logo-bkids.png"
            alt="Logo BKids"
            width={150}
            height={86}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-extrabold uppercase transition ${
                  active ? "text-[#0a72ce]" : "text-slate-700 hover:text-[#0a72ce]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/formulario"
            className="rounded-full bg-[#0a72ce] px-6 py-3 text-sm font-extrabold uppercase text-white shadow-lg shadow-sky-200 transition hover:bg-[#045ca9]"
          >
            Formulario
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-[#0a72ce] lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-sky-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-extrabold uppercase text-slate-700 transition hover:bg-sky-50 hover:text-[#0a72ce]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/formulario"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#0a72ce] px-6 py-3 text-center text-sm font-extrabold uppercase text-white"
            >
              Formulario
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
