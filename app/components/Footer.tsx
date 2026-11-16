import { StampLogo } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-warm-grey px-5 py-12 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <StampLogo className="text-black" />
        <p className="text-sm text-black/60">8 Rankins Lane, Melbourne · Specialty coffee &amp; bagels</p>
        <p className="text-xs text-black/45">© 2026 Manchester Press</p>
      </div>
    </footer>
  );
}
