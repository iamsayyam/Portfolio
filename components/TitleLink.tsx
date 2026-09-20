import { ArrowUpRightIcon } from "@/components/icons";

type TitleLinkProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
};

/** Card title. The empty absolute span makes the whole card clickable. */
export function TitleLink({ href, ariaLabel, children }: TitleLinkProps) {
  return (
    <a
      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${ariaLabel} (opens in a new tab)`}
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4" />
      <span>
        {children}
        <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
      </span>
    </a>
  );
}
