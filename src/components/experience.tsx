import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading id="experience-heading" index="02" title="Experience" />

      <Reveal delay={0.08} className="mt-10">
        <ol className="border-l border-line">
          {experienceEntries.map((entry) => (
            <li
              key={entry.role}
              className="relative pb-10 pl-6 last:pb-0 sm:pl-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[3px] top-2 h-1.5 w-1.5 bg-accent"
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-lg font-medium text-foreground">
                  {entry.role}
                </h3>
                {"period" in entry && entry.period ? (
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {entry.period}
                  </p>
                ) : null}
              </div>

              <ul className="mt-3 space-y-1.5">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-3 shrink-0 bg-line-strong"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
