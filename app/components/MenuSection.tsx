import Image from "next/image";
import type { CSSProperties } from "react";

const basicCoffee = [
  { name: "Americano", note: "Hot / Iced", price: "5.70" },
  { name: "Latte", note: "Hot / Iced", price: "5.70" },
  { name: "Espresso", note: "Hot", price: "4.50" },
  { name: "Flat White", note: "Hot", price: "5.70" },
  { name: "Macchiato", note: "Hot / Iced", price: "5.70" },
  { name: "Lungo", note: "Hot", price: "5.20" },
];

const specialty = [
  { name: "Irish Coffee", note: "Cream & soft kick", price: "6.80" },
  { name: "Vienna Coffee", note: "Whipped cream crown", price: "6.40" },
];

const bagels = [
  { name: "Smoked Salmon", note: "Cream cheese, capers, dill, red onion", price: "14.50" },
  { name: "Pastrami Melt", note: "Swiss, pickles, mustard, toasted", price: "15.00" },
  { name: "Smashed Avo", note: "Feta, chilli, lemon, sesame bagel", price: "13.50" },
  { name: "Blueberry & Berries", note: "Blueberry bagel, fresh berries, cream", price: "12.00" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative overflow-hidden bg-white px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,23,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,23,23,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="reveal mb-14 text-center md:mb-20">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-black/50">The menu</p>
          <p className="font-script text-[clamp(2.6rem,6vw,4.5rem)] leading-none text-black">Pour, press &amp; toast</p>
        </header>
        <div className="grid gap-14 md:gap-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {/* Basic coffee + featured macchiato */}
          <div className="reveal space-y-6 lg:col-span-1">
            <h2 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-[0.04em] text-brick">
              BASIC COFFEE
            </h2>
            <ul className="space-y-3.5">
              {basicCoffee.map((item) => (
                <li key={item.name} className="flex items-baseline gap-3 text-black">
                  <div className="min-w-0">
                    <p className="font-display text-xl tracking-[0.04em] md:text-2xl">{item.name}</p>
                    <p className="mt-0.5 text-sm italic text-black/50">{item.note}</p>
                  </div>
                  <span className="mb-1 flex-1 border-b border-dotted border-black/20" aria-hidden="true" />
                  <p className="shrink-0 font-display text-xl tracking-[0.04em] md:text-2xl">
                    <span className="mr-0.5 text-sm tracking-normal text-black/55">$</span>
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <FeaturedDrink
            src="/images/macchiato.jpg"
            alt="Caramel macchiato"
            label="MACCHIATO"
            className="reveal justify-self-center lg:justify-self-end"
           
          />

          {/* Specialty with dotted leaders */}
          <div className="reveal space-y-6 lg:col-span-2 lg:max-w-xl">
            <h2 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-[0.04em] text-brick">
              SPECIALTY
            </h2>
            <ul className="space-y-4">
              {specialty.map((item) => (
                <li key={item.name} className="flex items-baseline gap-3 text-black">
                  <div className="min-w-0">
                    <p className="font-display text-xl tracking-[0.04em] md:text-2xl">{item.name}</p>
                    <p className="mt-0.5 text-sm italic text-black/50">{item.note}</p>
                  </div>
                  <span className="mb-1 flex-1 border-b border-dotted border-black/20" aria-hidden="true" />
                  <p className="shrink-0 font-display text-xl tracking-[0.04em] md:text-2xl">
                    <span className="mr-0.5 text-sm tracking-normal text-black/55">$</span>
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured cold drink + coldbrew list */}
          <FeaturedDrink
            src="/images/vienna.jpg"
            alt="Vienna coffee"
            label="VIENNA"
            className="reveal order-last justify-self-center lg:order-none lg:justify-self-start"
          />

          <div
            className="reveal space-y-6 lg:justify-self-end lg:self-end"
          >
            <h2 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-[0.04em] text-brick">
              BAGELS
            </h2>
            <ul className="space-y-3.5">
              {bagels.map((item) => (
                <li key={item.name} className="flex items-baseline gap-3 text-black">
                  <div className="min-w-0 max-w-[16rem] sm:max-w-none">
                    <p className="font-display text-xl tracking-[0.04em] md:text-2xl">{item.name}</p>
                    <p className="mt-0.5 text-sm italic text-black/50">{item.note}</p>
                  </div>
                  <span className="mb-1 flex-1 border-b border-dotted border-black/20" aria-hidden="true" />
                  <p className="shrink-0 font-display text-xl tracking-[0.04em] md:text-2xl">
                    <span className="mr-0.5 text-sm tracking-normal text-black/55">$</span>
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedDrink({
  src,
  alt,
  label,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure className={`flex w-full max-w-[260px] flex-col items-center ${className}`} style={style}>
      <div className="menu-featured-drink relative aspect-[3/4] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="260px"
        />
      </div>
      <figcaption className="mt-4 flex items-center gap-2 font-display text-lg tracking-[0.08em] text-brick">
        <span aria-hidden="true">*</span>
        {label}
      </figcaption>
    </figure>
  );
}
