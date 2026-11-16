import Image from "next/image";

const facts = [
  { k: "8", v: "Rankins Lane, tucked off the CBD grid" },
  { k: "1", v: "Big communal table, made for sharing" },
  { k: "∞", v: "Bagels, sweet and savoury, all day" },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#f6f3ee] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="reveal relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15">
            <Image
              src="/images/mp-window.jpg"
              alt="Manchester Press logo etched on the café window, with the warm laneway interior behind"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 90vw, 448px"
            />
          </div>
        </figure>

        <div className="reveal">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brick">Our lane</p>
          <h2 className="font-display text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[0.9] tracking-[0.02em] text-black">
            A little hideaway
            <br />
            <span className="text-brick">behind the city</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-black/65">
            Step off the busy streets and into Rankins Lane. Manchester Press lives in a light-filled old
            gallery space, where the coffee is careful, the bagels are generous and the long communal table
            fills up with regulars, office crews and first-timers alike.
          </p>
          <p className="mt-4 max-w-lg text-base leading-8 text-black/65">
            Come for a quick flat white on the way to work, or settle in for brunch: we&rsquo;ll keep the
            cups coming.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-8">
            {facts.map((f) => (
              <div key={f.v}>
                <dt className="font-display text-4xl leading-none text-black md:text-5xl">{f.k}</dt>
                <dd className="mt-2 text-xs leading-5 text-black/55 md:text-sm">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
