const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Lane" },
  { href: "#visit", label: "Visit" },
];

export function StampLogo({ className = "" }: { className?: string }) {
  // Mirrors the square stamp printed on the Manchester Press cup:
  // the script word breaks through the left and right sides of the frame.
  return (
    <span className={`relative inline-flex flex-col items-center px-5 pb-1.5 pt-3 ${className}`}>
      <span className="stamp-frame pointer-events-none absolute inset-x-2 inset-y-0" aria-hidden="true" />
      <span className="relative -mx-6 px-1 font-script text-[1.65rem] leading-[0.8] md:text-[1.9rem]">
        Manchester
      </span>
      <span className="relative mt-1 font-sans text-[0.55rem] font-medium tracking-[0.32em] md:text-[0.6rem]">
        PRESS
      </span>
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10 lg:px-14">
        <a href="#home" className="text-black" aria-label="Manchester Press home">
          <StampLogo />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link relative text-sm font-medium tracking-wide text-black/75 transition hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+61396004054"
          className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-xs font-medium tracking-wide text-black backdrop-blur transition hover:border-black hover:bg-white md:text-sm"
        >
          (03) 9600 4054
        </a>
      </nav>
    </header>
  );
}
