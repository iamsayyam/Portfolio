import { Section } from "@/components/Section";
import { InlineLink } from "@/components/InlineLink";

export function About() {
  return (
    <Section id="about" label="About">
      <div>
        <p className="mb-4">
          Hi there! I'm Alex, and I like building things for the web. I'm a
          frontend engineer who cares about accessible, well-crafted interfaces
          and the small details that make a product feel considered. I'm
          happiest working where design and engineering overlap, turning ideas
          into fast, clear, maintainable code.
        </p>
        <p className="mb-4">
          Currently, I'm a Senior Frontend Engineer at{" "}
          <InlineLink href="#">Lumen Labs</InlineLink>, where I work on our
          design system and help ship new products like{" "}
          <InlineLink href="#">Studio</InlineLink>. I partner with designers and
          engineers to make accessibility part of the foundation of everything
          we build.
        </p>
        <p>
          In my spare time, you can usually find me hiking, cooking something
          overly ambitious, reading, or tinkering with side projects that may or
          may not get finished.
        </p>
      </div>
    </Section>
  );
}
