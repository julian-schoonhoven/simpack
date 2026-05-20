import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { privacyMeta, privacySections } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyMeta.description,
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title={privacyMeta.title}
      description={privacyMeta.description}
      lastUpdated={privacyMeta.lastUpdated}
      contactLabel={privacyMeta.contactLabel}
      contactEmail={privacyMeta.contactEmail}
      sections={privacySections}
    />
  );
}
