type InlineLinkProps = {
  href: string;
  children: React.ReactNode;
};

/** Inline text link with an underline that grows in on hover/focus. */
export function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      className="group/inline relative inline-block font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 block h-px w-0 bg-teal-300 transition-all duration-300 group-hover/inline:w-full group-focus-visible/inline:w-full motion-reduce:transition-none" />
      </span>
    </a>
  );
}
