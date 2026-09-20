import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { TitleLink } from "@/components/TitleLink";
import { TagList } from "@/components/Tag";
import { Thumb } from "@/components/Thumb";
import { CtaLink } from "@/components/CtaLink";
import { CheckCircleIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <li key={project.title} className="mb-12">
              <Card>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <TitleLink href={project.href} ariaLabel={project.title}>
                      {project.title}
                    </TitleLink>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>

                  {project.stat && (
                    <a
                      className="relative z-10 mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href={project.stat.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.stat.label} (opens in a new tab)`}
                    >
                      <CheckCircleIcon className="mr-1.5 h-3.5 w-3.5" />
                      {project.stat.label}
                    </a>
                  )}

                  {project.tags && <TagList tags={project.tags} />}
                </div>

                <Thumb
                  image={project.image}
                  gradient={project.gradient}
                  label={project.previewLabel}
                />
              </Card>
            </li>
          ))}
        </ul>

        <CtaLink href="#">View Full Project Archive</CtaLink>
      </div>
    </Section>
  );
}
