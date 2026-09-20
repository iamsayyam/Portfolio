export type Project = {
  title: string;
  href: string;
  description: string;
  tags?: string[];
  stat?: { label: string; href: string };
  /**
   * Add a real screenshot by placing it in public/images and setting:
   *   image: { src: "/images/weather-atlas.png", alt: "Weather Atlas dashboard" }
   * Until then a gradient placeholder is shown.
   */
  image?: { src: string; alt: string };
  gradient: string;
  previewLabel: string;
};

export const projects: Project[] = [
  {
    title: "Weather Atlas",
    href: "#",
    description:
      "Interactive dashboard for exploring forecasts and historical climate data. Compare cities side by side, drill into hourly charts, and save your favorite locations for quick access.",
    tags: ["React", "D3", "Vite", "Netlify"],
    gradient: "bg-linear-to-br from-blue-900 via-cyan-700 to-teal-400",
    previewLabel: "Weather Atlas dashboard preview",
  },
  {
    title: "Palette Pilot",
    href: "#",
    description:
      "Color palette generator that checks every pairing against WCAG contrast ratios as you build. Export tokens as CSS variables, Tailwind config, or JSON.",
    tags: ["TypeScript", "Web Components", "Vercel"],
    gradient: "bg-linear-to-br from-violet-600 via-pink-600 to-amber-500",
    previewLabel: "Palette Pilot app preview",
  },
  {
    title: "Nocturne Theme",
    href: "#",
    description:
      "Minimal dark theme for VS Code, Sublime Text, iTerm, and more, tuned for long coding sessions.",
    stat: { label: "50k+ Installs", href: "#" },
    gradient: "bg-linear-to-br from-slate-950 via-slate-800 to-slate-600",
    previewLabel: "Nocturne Theme code editor preview",
  },
  {
    title: "alexmorgan.dev (v3)",
    href: "#",
    description:
      "An earlier version of this portfolio, built with Gatsby and open-sourced for others to learn from.",
    tags: ["Gatsby", "Styled Components", "Netlify"],
    gradient: "bg-linear-to-br from-emerald-900 via-teal-700 to-teal-300",
    previewLabel: "Portfolio v3 homepage preview",
  },
];
