import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { termsMeta, termsSections } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: termsMeta.description,
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title={termsMeta.title}
      description={termsMeta.description}
      lastUpdated={termsMeta.lastUpdated}
      contactLabel={termsMeta.contactLabel}
      contactEmail={termsMeta.contactEmail}
      sections={termsSections}
    />
  );
}
