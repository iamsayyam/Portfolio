import { Header } from "@/components/Header";
import { Spotlight } from "@/components/Spotlight";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spotlight />

      <a
        href="#content"
        className="absolute left-0 top-0 z-50 block -translate-y-full bg-teal-300 px-4 py-3 text-sm font-bold text-slate-900 focus-visible:translate-y-0"
      >
        Skip to Content
      </a>

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main
            id="content"
            className="pt-16 sm:max-w-2xl md:pt-24 lg:w-[52%] lg:max-w-none lg:py-24"
          >
            <About />
            <Experience />
            <Projects />
            <Writing />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
