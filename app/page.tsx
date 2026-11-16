import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Story from "./components/Story";
import Visit from "./components/Visit";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <MenuSection />
      <Story />
      <Visit />
      <Footer />
    </main>
  );
}
