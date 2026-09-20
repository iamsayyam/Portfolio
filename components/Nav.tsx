"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/**
 * Jump links. A row of links on phones/tablets, and the vertical list with the
 * growing line on desktop. Highlights the section currently in view.
 */
export function Nav() {
  const [active, setActive] = useState<string>(site.sections[0].id);

  useEffect(() => {
    const els = site.sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    let ticking = false;

    const update = () => {
      const trigger = window.innerHeight * 0.35;
      let current = els[0];
      for (const el of els) {
        if (el.getBoundingClientRect().top <= trigger) current = el;
      }
      // Bottom of the page always selects the last section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = els[els.length - 1];

      setActive(current.id);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="In-page jump links"
      className="mt-8 lg:mt-16 lg:short:mt-8"
    >
      <ul className="flex flex-wrap gap-x-[18px] lg:block lg:w-max">
        {site.sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex min-h-11 items-center lg:min-h-0 lg:py-3 lg:short:py-2"
              >
                <span
                  className={`mr-4 hidden h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none lg:block ${
                    isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    isActive ? "text-slate-200" : "text-slate-500"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
