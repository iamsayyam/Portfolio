export type Article = {
  year: string;
  title: string;
  href: string;
  image?: { src: string; alt: string };
  gradient: string;
};

export const writing: Article[] = [
  {
    year: "2026",
    title: "Designing Interfaces That Age Well",
    href: "#",
    gradient: "bg-linear-to-br from-indigo-900 to-indigo-600",
  },
  {
    year: "2024",
    title: "5 Accessibility Pitfalls and How to Avoid Them",
    href: "#",
    gradient: "bg-linear-to-br from-teal-700 to-teal-500",
  },
  {
    year: "2021",
    title: "Adding Fast Search to a Static Site",
    href: "#",
    gradient: "bg-linear-to-br from-orange-800 to-orange-500",
  },
];
