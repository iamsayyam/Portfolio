import { ArrowRightIcon } from "@/components/icons";

type CtaLinkProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
};

/** "View Full Résumé →" style link. */
export function CtaLink({ href, external = false, children }: CtaLinkProps) {
  return (
    <div className="mt-12">
      <a
        className="group/cta inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href={href}
        {...(external
          ? {
              target: "_blank",
              rel: "noreferrer noopener",
              "aria-label": `${children} (opens in a new tab)`,
            }
          : {})}
      >
        <span className="relative">
          {children}
          <span className="absolute bottom-0 left-0 block h-px w-0 bg-teal-300 transition-all duration-300 group-hover/cta:w-full group-focus-visible/cta:w-full motion-reduce:transition-none" />
        </span>
        <ArrowRightIcon className="ml-1 h-4 w-4 shrink-0 self-center transition-transform group-hover/cta:translate-x-2 group-focus-visible/cta:translate-x-2 motion-reduce:transition-none" />
      </a>
    </div>
  );
}
