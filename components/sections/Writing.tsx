import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { TitleLink } from "@/components/TitleLink";
import { Thumb } from "@/components/Thumb";
import { writing } from "@/data/writing";

export function Writing() {
  return (
    <Section id="writing" label="Writing">
      <div>
        <ul className="group/list">
          {writing.map((article) => (
            <li key={article.title} className="mb-12">
              <Card>
                <Thumb
                  image={article.image}
                  gradient={article.gradient}
                  label={`Illustration for ${article.title}`}
                />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <p className="mb-1 mt-1 text-xs font-semibold tracking-wide text-slate-500">
                    {article.year}
                  </p>
                  <h3>
                    <TitleLink href={article.href} ariaLabel={article.title}>
                      {article.title}
                    </TitleLink>
                  </h3>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
