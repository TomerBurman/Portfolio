"use client";

import { motion, useReducedMotion } from "motion/react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { HeroScenePlaceholder } from "@/components/hero-scene-placeholder";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay: number, y = 12) => ({
    "data-motion-reveal": "",
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <motion.p
            {...entrance(0)}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
            Software Engineering / AI &amp; ML
          </motion.p>

          <motion.h1
            {...entrance(0.08)}
            id="hero-heading"
            className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">Software Engineer</span>
            <span className="block">
              <span className="text-accent">&amp;</span> AI/ML Researcher
            </span>
          </motion.h1>

          <motion.p
            {...entrance(0.16)}
            className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            M.Sc. Computer Science (AI) student focused on machine learning,
            intelligent systems, networking, and software engineering.
          </motion.p>

          <motion.div
            {...entrance(0.24)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center bg-foreground px-5 text-sm font-medium text-background motion-safe:transition-colors hover:bg-accent focus-visible:bg-accent"
            >
              View Projects
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              title="Placeholder link — replace in src/lib/site.ts"
              className="inline-flex h-11 items-center justify-center gap-2 border border-line px-5 text-sm font-medium text-muted motion-safe:transition-colors hover:border-line-strong hover:text-foreground focus-visible:border-line-strong focus-visible:text-foreground"
            >
              <GitHubIcon aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              title="Placeholder link — replace in src/lib/site.ts"
              className="inline-flex h-11 items-center justify-center gap-2 border border-line px-5 text-sm font-medium text-muted motion-safe:transition-colors hover:border-line-strong hover:text-foreground focus-visible:border-line-strong focus-visible:text-foreground"
            >
              <LinkedInIcon aria-hidden="true" className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div {...entrance(0.32, 8)} className="hidden lg:block">
          <HeroScenePlaceholder />
        </motion.div>
      </div>
    </section>
  );
}
