"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  label?: string;
  description?: string;
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function SectionHeading({
  id,
  index,
  title,
  label,
  description,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="border-b border-line pb-6"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.6 }}
      variants={container}
    >
      <motion.div
        data-motion-reveal=""
        variants={item}
        className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
      >
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
        {label ? <span>{label}</span> : null}
      </motion.div>

      <motion.h2
        data-motion-reveal=""
        variants={item}
        id={id}
        className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          data-motion-reveal=""
          variants={item}
          className="mt-3 max-w-2xl text-sm leading-6 text-muted"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
