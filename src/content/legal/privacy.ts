import type { LegalSection } from "@/components/legal/LegalPageLayout";

export const privacyMeta = {
  title: "Privacy Policy",
  description:
    "How Simpack collects, uses, and protects your information when you use our AI investment simulation platform.",
  lastUpdated: "May 20, 2026",
  contactLabel: "For privacy-related inquiries, contact",
  contactEmail: "privacy@julianschoonhoven.com",
};

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'Simpack ("we," "our," or "us") operates the Simpack platform and related services (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or use our Service.',
      "By accessing or using Simpack, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of the Service.",
    ],
  },
  {
    id: "data-we-collect",
    title: "Data we collect",
    paragraphs: [
      "We may collect information you provide directly, information collected automatically, and information from third parties as described below.",
    ],
    list: [
      "Account and contact information (name, email address, company name, job title)",
      "Billing and subscription details when you purchase a paid plan",
      "Investment simulation inputs, scenarios, and configuration data you submit to the platform",
      "Communications you send to us (support requests, feedback, sales inquiries)",
      "Usage data such as pages visited, features used, and interaction timestamps",
      "Device and technical data (IP address, browser type, operating system, referral URLs)",
      "Cookies and similar technologies as described in the Cookies section",
    ],
  },
  {
    id: "how-we-use-data",
    title: "How we use data",
    paragraphs: [
      "We use collected information for legitimate business purposes, including:",
    ],
    list: [
      "Providing, operating, and improving the Simpack platform",
      "Processing simulations, generating reports, and delivering decision-support outputs",
      "Managing accounts, subscriptions, and customer support",
      "Sending service-related notices, security alerts, and administrative messages",
      "Analyzing usage trends to enhance product performance and user experience",
      "Complying with legal obligations and enforcing our Terms of Service",
      "Protecting against fraud, abuse, and security threats",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "We use cookies and similar tracking technologies to remember your preferences (such as language and theme settings), maintain session state, and understand how visitors interact with our website.",
      "You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of the Service, including saved preferences and authenticated sessions.",
    ],
  },
  {
    id: "data-storage-security",
    title: "Data storage & security",
    paragraphs: [
      "We implement appropriate technical and organizational measures designed to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures may include encryption in transit, access controls, and regular security reviews.",
      "Data may be processed and stored in facilities operated by us or our trusted service providers. While we strive to protect your information, no method of transmission over the Internet or electronic storage is completely secure.",
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
    ],
  },
  {
    id: "user-rights",
    title: "User rights",
    paragraphs: [
      "Depending on your location, you may have certain rights regarding your personal information, including:",
      "To exercise these rights, contact us at the email address below. We will respond within a reasonable timeframe as required by applicable law.",
    ],
    list: [
      "The right to access and receive a copy of your personal data",
      "The right to correct inaccurate or incomplete information",
      "The right to request deletion of your personal data, subject to legal exceptions",
      "The right to restrict or object to certain processing activities",
      "The right to data portability where applicable",
      "The right to withdraw consent where processing is based on consent",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    paragraphs: [
      "We may use third-party providers for hosting, analytics, payment processing, email delivery, and customer support. These providers access information only to perform services on our behalf and are contractually obligated to protect it.",
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    paragraphs: [
      "Simpack is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it promptly.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the revised version on this page and update the \"Last updated\" date. Material changes may be communicated via email or an in-product notice where appropriate.",
    ],
  },
];
