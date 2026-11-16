import type { Metadata } from "next";
import { Bebas_Neue, Great_Vibes, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["600", "700"] });
const greatVibes = Great_Vibes({ variable: "--font-great-vibes", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Manchester Press — Specialty Coffee & Bagels",
  description: "Specialty coffee and delicious bagels tucked away at 8 Rankins Lane, Melbourne.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${bebas.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">{children}</body>
    </html>
  );
}
