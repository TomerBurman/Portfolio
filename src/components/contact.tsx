import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: siteConfig.links.github.replace(/^https?:\/\//, ""),
    href: siteConfig.links.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: siteConfig.links.linkedin.replace(/^https?:\/\//, ""),
    href: siteConfig.links.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading
        id="contact-heading"
        index="06"
        label="Contact"
        title="Interested in working together?"
      />

      <Reveal
        delay={0.08}
        className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-start lg:gap-16"
      >
        <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
          Reach out by email, or connect on GitHub and LinkedIn.
        </p>

        <ul className="min-w-0 divide-y divide-line border-y border-line">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                title="Placeholder — replace in src/lib/site.ts"
                className="group flex min-w-0 items-center justify-between gap-6 py-4"
              >
                <span className="flex items-center gap-3 text-base font-medium text-foreground motion-safe:transition-colors group-hover:text-accent group-focus-visible:text-accent">
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-muted motion-safe:transition-colors group-hover:text-accent group-focus-visible:text-accent"
                  />
                  {label}
                </span>

                <span className="flex min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted motion-safe:transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                  <span className="truncate">{value}</span>
                  {external ? (
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5"
                    />
                  ) : null}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
