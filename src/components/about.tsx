import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { aboutParagraphs } from "@/lib/content";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading id="about-heading" index="01" title="About" />

      <Reveal
        delay={0.08}
        className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8"
      >
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>
    </Section>
  );
}
