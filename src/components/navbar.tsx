import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-6 lg:px-10">
        <Link
          href="/"
          className="flex w-fit items-center gap-2.5 text-sm font-medium tracking-tight text-foreground"
        >
          <span aria-hidden="true" className="h-2 w-2 bg-accent" />
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary">
          <NavLinks items={siteConfig.nav} />
        </nav>
      </div>
    </header>
  );
}
