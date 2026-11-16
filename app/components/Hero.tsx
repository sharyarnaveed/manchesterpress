import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-warm-grey"
    >
      {/* soft light + paper grain */}
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="paper-grain pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <Navbar />

      {/* Ghost wordmark */}
      <p
        className="animate-fade-in pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 md:top-[17%] md:translate-y-0 select-none text-center font-script text-[clamp(5rem,22vw,20rem)] leading-none text-black/[0.045]"
        aria-hidden="true"
      >
        Manchester
      </p>

      {/* Mobile tagline */}
      <p className="animate-fade-up absolute inset-x-0 top-28 px-6 text-center text-[0.7rem] font-medium uppercase tracking-[0.32em] text-black/55 md:hidden">
        Coffee &amp; bagels · Rankins Lane
      </p>

      {/* ORDER · cup · COFFEE */}
      <div className="absolute inset-0 flex items-center justify-center px-3 pb-16 pt-24">
        <h1 className="grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-x-3 sm:gap-x-6 md:gap-x-10">
          <span className="animate-hero-left justify-self-end text-right font-display text-[clamp(2.3rem,9vw,9rem)] leading-none tracking-[0.04em] text-black">
            ORDER
          </span>

          <span className="relative block w-[clamp(130px,34vw,300px)]">
            <span className="relative block aspect-[370/511] w-full">
              <Image
                src="/images/mp-cup.png"
                alt="Manchester Press takeaway coffee cup"
                fill
                preload
                className="hero-cup-image object-contain"
                sizes="(max-width: 768px) 34vw, 300px"
              />
            </span>
            <span
              className="pointer-events-none absolute -bottom-6 left-1/2 block -translate-x-1/2 h-5 w-[70%] rounded-[100%] bg-black/25 blur-lg"
              aria-hidden="true"
            />
          </span>

          <span className="animate-hero-right relative justify-self-start font-display text-[clamp(2.3rem,9vw,9rem)] leading-none tracking-[0.04em] text-black">
            COFFEE
            <span className="animate-hero-script absolute left-1 top-[88%] whitespace-nowrap font-script text-[clamp(1.4rem,3.4vw,3rem)] font-normal tracking-normal text-brick">
              Welcome
            </span>
          </span>
          <span className="sr-only"> — Manchester Press, specialty coffee and bagels in Melbourne</span>
        </h1>
      </div>

      {/* CTAs */}
      <div
        className="animate-fade-up absolute inset-x-0 bottom-8 z-10 flex justify-center gap-3 px-5 md:inset-x-auto md:bottom-10 md:right-10 lg:right-14"
        style={{ animationDelay: "0.85s" }}
      >
        <a
          href="#menu"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-brick"
        >
          See the menu
        </a>
        <a
          href="#visit"
          className="rounded-full border border-black/20 bg-white/50 px-6 py-3 text-sm font-medium text-black backdrop-blur transition hover:-translate-y-0.5 hover:border-black hover:bg-white"
        >
          Find us
        </a>
      </div>
    </section>
  );
}
