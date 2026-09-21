// Edit this file to make the site yours.

export type SocialKey = "github" | "linkedin" | "codepen" | "instagram";

export const site = {
  name: "Muhammad Sayyam Sharif",
  role: "Frontend Engineer",
  tagline: "I build accessible, pixel-perfect experiences for the web.",
  description:
    "Alex Morgan is a frontend engineer who builds accessible, pixel-perfect experiences for the web.",

  // Order here = order in the side navigation. `id` must match each section's id.
  sections: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "writing", label: "Writing" },
  ],

  social: [
    { name: "GitHub", href: "https://github.com/iamsayyam", icon: "github" },
    { name: "LinkedIn", href: "https://pk.linkedin.com/in/muhammad-sayyam-sharif-b8898b364", icon: "linkedin" },
    { name: "CodePen", href: "https://codepen.io/iamsayyam", icon: "codepen" },
    { name: "Instagram", href: "https://www.instagram.com/sayyam.official", icon: "instagram" },
  ] satisfies { name: string; href: string; icon: SocialKey }[],

  // Put your résumé at public/resume.pdf
  resumeHref: "/resume.pdf",
} as const;
