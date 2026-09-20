import { site, type SocialKey } from "@/data/site";
import {
  CodePenIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";

const icons: Record<SocialKey, typeof GitHubIcon> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  codepen: CodePenIcon,
  instagram: InstagramIcon,
};

export function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center lg:short:mt-4" aria-label="Social media">
      {site.social.map(({ name, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={name} className="mr-5 shrink-0 text-xs">
            <a
              className="-m-2.5 block p-2.5 text-slate-400 transition hover:text-slate-200 focus-visible:text-slate-200"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} (opens in a new tab)`}
              title={name}
            >
              <span className="sr-only">{name}</span>
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
