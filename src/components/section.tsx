import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-b border-line ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {children}
      </div>
    </section>
  );
}
