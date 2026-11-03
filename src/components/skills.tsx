import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading id="skills-heading" index="04" title="Skills" />

      <Reveal
        delay={0.08}
        className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8"
      >
        {skillGroups.map((group) => (
          <div key={group.label} className="border-t border-line pt-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="font-mono text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
