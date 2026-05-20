import type { LegalSection } from "@/components/legal/LegalPageLayout";

export const termsMeta = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your access to and use of the Simpack platform and related services.",
  lastUpdated: "May 20, 2026",
  contactLabel: "For legal inquiries, contact",
  contactEmail: "legal@julianschoonhoven.com",
};

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paragraphs: [
      'These Terms of Service ("Terms") constitute a binding agreement between you and Simpack regarding your access to and use of our website, platform, and related services (collectively, the "Service").',
      "By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.",
    ],
  },
  {
    id: "service-description",
    title: "Service description",
    paragraphs: [
      "Simpack provides AI-powered investment simulation and decision-support tools, including ROI modeling, risk analysis, scenario planning, and related reporting features. Outputs are intended to support business decision-making and do not constitute financial, legal, or investment advice.",
      "We may modify, suspend, or discontinue features of the Service at any time with reasonable notice where practicable.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User responsibilities",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate information and keep your account details up to date.",
      "You are solely responsible for the accuracy and legality of data you input into the Service and for how you use simulation results in your business decisions.",
    ],
  },
  {
    id: "account-usage",
    title: "Account usage",
    paragraphs: [
      "Access to certain features may require a paid subscription. Fees, billing cycles, and plan limits are described on our pricing page and may change with notice.",
      "Free trials and promotional offers are subject to the terms stated at the time of enrollment. We reserve the right to modify or cancel promotions at our discretion.",
      "You may cancel your subscription according to the cancellation process provided in your account settings or by contacting support. Cancellation does not entitle you to a refund except where required by law.",
    ],
  },
  {
    id: "prohibited-activities",
    title: "Prohibited activities",
    paragraphs: ["You agree not to:"],
    list: [
      "Use the Service for any unlawful purpose or in violation of applicable regulations",
      "Attempt to gain unauthorized access to systems, accounts, or data",
      "Reverse engineer, decompile, or extract source code except as permitted by law",
      "Interfere with or disrupt the integrity or performance of the Service",
      "Upload malicious code, spam, or content that infringes intellectual property rights",
      "Resell, sublicense, or provide unauthorized access to the Service without our written consent",
      "Use automated means to scrape or harvest data from the Service without permission",
      "Misrepresent simulation outputs as guaranteed financial outcomes",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The Service, including software, designs, trademarks, documentation, and proprietary models, is owned by Simpack or its licensors and protected by intellectual property laws. These Terms do not grant you any ownership rights in the Service.",
      "You retain ownership of data you submit. You grant us a limited license to use, process, and store your data solely to provide and improve the Service, in accordance with our Privacy Policy.",
      "Feedback you provide may be used by us without obligation or compensation to improve our products and services.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      "Simpack does not warrant that simulations, forecasts, or reports will be accurate, complete, or suitable for any particular purpose. You acknowledge that AI-generated outputs involve inherent uncertainty and should be validated with professional judgment.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by law, Simpack and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.",
      "Our total liability for any claims arising under these Terms shall not exceed the greater of (a) the amounts you paid to us in the twelve months preceding the claim, or (b) one hundred euros (€100).",
      "Some jurisdictions do not allow certain limitations of liability; in those cases, our liability is limited to the fullest extent permitted by law.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless Simpack from claims, damages, losses, and expenses (including reasonable legal fees) arising from your use of the Service, your violation of these Terms, or your infringement of any third-party rights.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "We may suspend or terminate your access to the Service at any time if you breach these Terms, pose a security risk, or if required by law. We will provide notice where reasonable unless immediate action is necessary.",
      "Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination (including intellectual property, disclaimers, limitation of liability, and governing law) will remain in effect.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the Netherlands, without regard to conflict-of-law principles.",
      "Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the competent courts in the Netherlands, unless mandatory consumer protection laws in your country require otherwise.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may revise these Terms from time to time. The updated version will be posted on this page with a revised \"Last updated\" date. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.",
    ],
  },
];
