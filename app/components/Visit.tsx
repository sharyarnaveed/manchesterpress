const hours = [
  { d: "Monday – Friday", t: "7:30am – 3:30pm" },
  { d: "Saturday – Sunday", t: "8:30am – 4:00pm" },
];

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-black px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
      <p
        className="pointer-events-none absolute -right-6 -top-6 select-none font-script text-[clamp(6rem,20vw,16rem)] leading-none text-white/[0.04]"
        aria-hidden="true"
      >
        Press
      </p>

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#e2a48f]">Visit us</p>
          <h2 className="font-display text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[0.9] tracking-[0.02em]">
            Find the lane,
            <br />
            <span className="font-script text-[0.85em] font-normal tracking-normal text-[#e2a48f]">find the coffee</span>
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Address</p>
              <p className="mt-2 text-xl">8 Rankins Lane, Melbourne VIC 3000</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Manchester+Press+8+Rankins+Lane+Melbourne"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-white/60 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                Get directions →
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Hours</p>
              <ul className="mt-3 max-w-sm space-y-2">
                {hours.map((h) => (
                  <li key={h.d} className="flex items-baseline gap-3">
                    <span>{h.d}</span>
                    <span className="mb-1 flex-1 border-b border-dotted border-white/20" aria-hidden="true" />
                    <span className="text-white/80">{h.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:+61396004054"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-[#e2a48f]"
              >
                Call (03) 9600 4054
              </a>
              <a
                href="mailto:manchesterpresscafe@gmail.com"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-white"
              >
                Email us
              </a>
              <a
                href="https://www.facebook.com/manchesterpress"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="reveal relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10">
          <iframe
            title="Map showing Manchester Press at 8 Rankins Lane, Melbourne"
            src="https://www.google.com/maps?q=Manchester+Press,+8+Rankins+Lane,+Melbourne+VIC+3000&output=embed"
            className="map-frame absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
