import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { TitleLink } from "@/components/TitleLink";
import { TagList } from "@/components/Tag";
import { CtaLink } from "@/components/CtaLink";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div>
        <ol className="group/list">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="mb-12">
              <Card>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={job.periodLabel}
                >
                  {job.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <TitleLink
                      href={job.href}
                      ariaLabel={`${job.role} at ${job.company}`}
                    >
                      {job.role} · {job.company}
                    </TitleLink>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{job.description}</p>
                  <TagList tags={job.skills} />
                </div>
              </Card>
            </li>
          ))}
        </ol>

        <CtaLink href={site.resumeHref} external>
          View Full Résumé
        </CtaLink>
      </div>
    </Section>
  );
}
