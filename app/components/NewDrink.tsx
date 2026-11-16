import Image from "next/image";

export default function NewDrink() {
  return (
    <section
      id="delivery"
      className="relative overflow-hidden bg-warm-grey px-5 py-16 md:px-10 md:py-24 lg:px-14"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-fade-up max-w-xl">
          <div className="relative mb-8">
            <p className="absolute left-[3.75rem] top-2 z-10 font-script text-2xl text-brick md:left-[5rem] md:top-3 md:text-3xl">
              collection
            </p>
            <h2 className="font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.88] tracking-[0.02em] text-black">
              <span className="text-brick">New</span>
              <br />
              drink
            </h2>
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-black md:text-3xl">Iced Latte</h3>
          <p className="max-w-md text-sm leading-7 text-black/65 md:text-base">
            A chilled espresso blend layered with cold milk and ice. Choose from three syrups for a
            sweeter finish — bright, creamy, and made for warm afternoons.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-8 md:gap-8">
            <div>
              <p className="mb-2 text-sm font-semibold text-black">3 Syrups</p>
              <ul className="space-y-1 text-xs leading-relaxed text-black/60 md:text-sm">
                <li>vanilla</li>
                <li>caramel</li>
                <li>hazelnut</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-black">With</p>
              <ul className="space-y-1 text-xs leading-relaxed text-black/60 md:text-sm">
                <li>espresso</li>
                <li>cold milk</li>
                <li>ice</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-black">20% Sale</p>
              <p className="text-xs leading-relaxed text-black/60 md:text-sm">
                Limited time offer on the new collection.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-soft-float relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/50">
            <Image
              src="/images/new-drink.jpg"
              alt="Iced Latte with milk swirls"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
          <div className="absolute bottom-6 right-4 text-right md:bottom-10 md:right-8">
            <p className="font-display text-5xl leading-none tracking-wide text-black md:text-6xl">
              6.50$
            </p>
            <p className="mt-1 text-lg text-black/45 line-through md:text-xl">7.80$</p>
          </div>
        </div>
      </div>
    </section>
  );
}
