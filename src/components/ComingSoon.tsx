import Image from "next/image";
import { comingSoon } from "@/data/site";

export function ComingSoon() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#0a72ce] px-4 py-10 text-center text-white">
      <Image
        src={comingSoon.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#005ca8]/90 via-[#0a72ce]/72 to-[#ffcc33]/42" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(233,249,255,0.92))]" />

      <section className="relative z-10 mx-auto max-w-3xl rounded-[32px] border-4 border-white/70 bg-white/92 px-6 py-10 text-[#12314d] shadow-2xl shadow-sky-950/20 sm:px-12 sm:py-12">
        <Image
          src="/images/logo-bkids.png"
          alt="BKids"
          width={220}
          height={126}
          className="mx-auto h-auto w-44 sm:w-52"
        />
        <p className="mx-auto mt-8 inline-flex rounded-full bg-[#ffcc33] px-5 py-2 text-sm font-black uppercase text-[#063f83] shadow-sm">
          {comingSoon.eyebrow}
        </p>
        <h1 className="mt-5 font-display text-6xl font-black leading-none text-[#0a72ce] sm:text-8xl">
          {comingSoon.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg font-extrabold leading-8 text-slate-600 sm:text-xl">
          {comingSoon.text}
        </p>
        <p className="mt-8 font-display text-3xl font-black text-[#ef3854]">
          Be happy on the sea
        </p>
      </section>
    </main>
  );
}
