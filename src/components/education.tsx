import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { educationEntries } from "@/lib/content";

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading id="education-heading" index="05" title="Education" />

      <Reveal delay={0.08} className="mt-10">
        <ul className="divide-y divide-line border-y border-line">
          {educationEntries.map((entry) => (
            <li
              key={entry.degree}
              className="grid gap-1 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
            >
              <h3 className="text-base font-medium text-foreground sm:text-lg">
                {entry.degree}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {entry.institution}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
