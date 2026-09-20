type SectionProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

/**
 * Page section. The heading is a sticky, blurred bar on phones/tablets and is
 * visually hidden on desktop (the side nav takes over there).
 */
export function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-200 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        {label}
      </h2>
      {children}
    </section>
  );
}
