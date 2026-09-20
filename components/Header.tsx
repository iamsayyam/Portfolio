import { site } from "@/data/site";
import { Nav } from "@/components/Nav";
import { SocialLinks } from "@/components/SocialLinks";

export function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 lg:short:py-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{site.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {site.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{site.tagline}</p>
        <Nav />
      </div>
      <SocialLinks />
    </header>
  );
}
