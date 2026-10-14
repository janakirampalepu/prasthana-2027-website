import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Prasthana collects, uses and protects personal data when you visit our website, contact us or apply for a job.",
  path: "/privacy",
});

const sections: LegalSection[] = [
  {
    title: "Who we are",
    paragraphs: [
      `${company.legalName} ("Prasthana", "we", "us") is a product engineering and technology company based in Hyderabad, India. This Privacy Policy explains how we handle personal data when you visit www.prasthana.com (the "Site"), contact us, or apply for a job with us.`,
    ],
  },
  {
    title: "Personal data we collect",
    paragraphs: ["We keep data collection to a minimum. Depending on how you use the Site, we may receive:"],
    bullets: [
      "Enquiry details: your name, email address, area of interest and message, when you write to us through the contact form or by email.",
      "Job application details: your name, contact details, resume or CV, and any other information you choose to send when applying for a role.",
      "Technical data: basic information your browser sends to our hosting provider when you load the Site, such as IP address, browser type, device, pages requested and timestamps, recorded in standard server logs.",
      "Preferences: your light or dark theme choice, stored in your own browser (see Cookies and local storage).",
    ],
  },
  {
    title: "How the contact form works",
    paragraphs: [
      "The Site does not currently store form submissions on our servers. When you submit the contact form, your email application opens with a message prefilled for you to review and send to us. We receive only what you send.",
    ],
  },
  {
    title: "How we use personal data",
    bullets: [
      "To respond to your enquiries and discuss potential projects.",
      "To evaluate job applications and communicate with candidates.",
      "To operate, secure and improve the Site, and to prevent abuse.",
      "To comply with legal obligations and to establish, exercise or defend legal claims.",
    ],
  },
  {
    title: "Why we process it",
    paragraphs: [
      "We process personal data where you have given consent (for example, by sending us an enquiry or application), where it is necessary to take steps at your request before entering into a contract, and where we have a legitimate interest in running and securing our business, as permitted by applicable law, including India's Digital Personal Data Protection Act, 2023.",
    ],
  },
  {
    title: "Who we share it with",
    paragraphs: [
      "We do not sell your personal data. We may share it only with:",
    ],
    bullets: [
      "Service providers that help us operate the Site and our business, such as website hosting and email providers, who act on our instructions.",
      "Professional advisers, and authorities or courts where required by law or to protect rights and safety.",
      "A successor organisation, in the event of a merger, acquisition or sale of our business.",
    ],
  },
  {
    title: "Cookies and local storage",
    paragraphs: [
      "The Site does not use advertising or tracking cookies. It uses your browser's local storage to remember your theme preference (light or dark), which stays on your device and is not sent to us. If we add analytics in the future, we will update this policy and, where required, ask for your consent. See our Cookie Notice for details.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect personal data, including encrypted connections (HTTPS) to the Site and access controls for the systems that handle enquiries and applications. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Where data is processed",
    paragraphs: [
      "Our Site is delivered through a global hosting network, so technical data may be processed in countries outside India. Where we transfer personal data internationally, we do so in accordance with applicable law and with appropriate safeguards.",
    ],
  },
  {
    title: "How long we keep data",
    paragraphs: [
      "We keep enquiry details for as long as needed to respond and manage the relationship. Unsuccessful job applications are kept for a limited period so we can consider you for future roles, unless you ask us to delete them sooner. Server logs are kept for a short period for security and troubleshooting. We may keep data longer where the law requires it.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: ["Subject to applicable law, you may ask us to:"],
    bullets: [
      "tell you what personal data we hold about you and give you a copy;",
      "correct or update inaccurate or incomplete data;",
      "erase your data, or restrict or object to how we use it;",
      "withdraw consent you previously gave, at any time;",
      "nominate someone to exercise your rights on your behalf.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "The Site is not directed at children, and we do not knowingly collect personal data from anyone under 18. If you believe a child has sent us personal data, please contact us and we will delete it.",
    ],
  },
  {
    title: "Links to other websites",
    paragraphs: [
      "The Site links to third-party websites such as LinkedIn and Facebook. This policy does not cover those sites, and we encourage you to read their privacy policies.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. We will post the new version on this page and change the last updated date. For material changes, we will take reasonable steps to bring them to your attention.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      `For privacy questions or to exercise your rights, email ${company.email} or write to ${company.legalName}, ${company.address}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="October 13, 2026"
      intro="Your privacy matters to us. This policy explains what personal data we collect through the Prasthana website, how we use it, and the choices you have."
      sections={sections}
    />
  );
}
