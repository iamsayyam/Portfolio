export type Job = {
  period: string;
  periodLabel: string; // read by screen readers
  role: string;
  company: string;
  href: string;
  description: string;
  skills: string[];
};

export const experience: Job[] = [
  {
    period: "2024 — Present",
    periodLabel: "2024 to Present",
    role: "Senior Frontend Engineer",
    company: "Lumen Labs",
    href: "#",
    description:
      "Build and maintain the core components that power the product's frontend. Work closely with designers, engineers, and product managers to ship features and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    period: "2019 — 2024",
    periodLabel: "2019 to 2024",
    role: "Lead Engineer",
    company: "Fieldnote Studio",
    href: "#",
    description:
      "Built, styled, and shipped websites, design systems, and mobile apps for clients across education, media, and non-profits. Led engineering on multi-month projects and helped grow the team through code reviews, knowledge shares, and internal tooling.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "Node.js",
      "WordPress",
    ],
  },
  {
    period: "Jul — Dec 2018",
    periodLabel: "July to December 2018",
    role: "UI Engineer Co-op",
    company: "Kestrel Audio",
    href: "#",
    description:
      "Developed and styled interactive web apps for a music streaming platform, including the embeddable web player widget used for in-browser sign-in and full-length playback.",
    skills: ["Ember", "SCSS", "JavaScript", "Web Audio API"],
  },
  {
    period: "2017 — 2018",
    periodLabel: "2017 to 2018",
    role: "Developer",
    company: "Campus Design Lab",
    href: "#",
    description:
      "Collaborated with student designers and engineers on pro-bono projects, creating brands, design systems, and websites for community organizations.",
    skills: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
  },
];
