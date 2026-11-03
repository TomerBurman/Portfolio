"use client";

import { useEffect, useState } from "react";

type NavItem = {
  readonly label: string;
  readonly href: string;
};

export function NavLinks({ items }: { items: readonly NavItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }

        let nextActive: string | null = null;
        let bestRatio = -1;

        for (const [id, ratio] of visibleSections) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            nextActive = `#${id}`;
          }
        }

        setActive(nextActive);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
      {items.map((item) => {
        const isActive = active === item.href;

        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`relative inline-flex py-0.5 font-mono text-[11px] uppercase tracking-[0.18em] motion-safe:transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-1 h-px bg-accent motion-safe:transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
