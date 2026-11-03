import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section
      id="projects"
      labelledBy="projects-heading"
      className="bg-surface"
    >
      <SectionHeading
        id="projects-heading"
        index="03"
        title="Selected Projects"
      />

      <Reveal delay={0.08} className="mt-4 divide-y divide-line">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group relative grid gap-6 py-10 sm:py-12 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-12 lg:py-14"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-0 bg-accent motion-safe:transition-[width] group-hover:w-16"
            />

            <div className="flex items-start justify-between gap-4 lg:flex-col lg:justify-start">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Project {project.number}
              </span>

              {"meta" in project && project.meta ? (
                <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted motion-safe:transition-colors group-hover:border-line-strong group-hover:text-foreground">
                  {project.meta}
                </span>
              ) : null}

              {"status" in project && project.status ? (
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
                  {project.status}
                </span>
              ) : null}
            </div>

            <div className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1">
              <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-foreground motion-safe:transition-colors group-hover:text-accent sm:text-3xl lg:text-4xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted motion-safe:transition-colors group-hover:border-line-strong group-hover:text-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
