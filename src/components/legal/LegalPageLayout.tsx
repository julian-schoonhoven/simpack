import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

interface LegalPageLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  contactLabel: string;
  contactEmail: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  title,
  description,
  lastUpdated,
  contactLabel,
  contactEmail,
  sections,
}: LegalPageLayoutProps) {
  return (
    <article className="bg-background">
      <header className="border-b border-border bg-surface-elevated/50">
        <div className="container-narrow section-padding !pb-12 pt-28 sm:pt-32">
          <Link
            href={SITE_URL}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Back to home
          </Link>
          <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
          <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <div className="container-narrow section-padding">
        <div className="mx-auto max-w-3xl">
          <nav
            aria-label="Table of contents"
            className="mb-12 rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              On this page
            </p>
            <ol className="mt-4 space-y-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.list && section.list.length > 0 ? (
                    <>
                      {section.paragraphs[0] && (
                        <p className="text-base leading-relaxed text-muted">
                          {section.paragraphs[0]}
                        </p>
                      )}
                      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                        {section.list.map((item) => (
                          <li key={item.slice(0, 48)}>{item}</li>
                        ))}
                      </ul>
                      {section.paragraphs.slice(1).map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-base leading-relaxed text-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </>
                  ) : (
                    section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-base leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-surface-elevated/80 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              {contactLabel}{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
