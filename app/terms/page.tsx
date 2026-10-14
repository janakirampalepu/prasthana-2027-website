import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "The terms that govern your use of the Prasthana website.",
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    title: "Acceptance of these terms",
    paragraphs: [
      `These Terms of Use ("Terms") govern your access to and use of the website at www.prasthana.com (the "Site"), operated by ${company.legalName} ("Prasthana", "we", "us"). By using the Site you agree to these Terms. If you do not agree, please do not use the Site.`,
      "Software development, consulting and other services that Prasthana provides to clients are governed by a separate written agreement between Prasthana and the client. If that agreement conflicts with these Terms, the written agreement prevails for those services.",
    ],
  },
  {
    title: "About the Site",
    paragraphs: [
      "The Site provides information about Prasthana, our services, technologies, case studies, team and career opportunities, and lets you contact us. Content is provided for general information and does not constitute an offer, proposal or professional advice.",
    ],
  },
  {
    title: "Permitted use",
    paragraphs: ["You agree to use the Site only for lawful purposes. You must not:"],
    bullets: [
      "copy, scrape, or reproduce the Site or its content in bulk without our written permission;",
      "attempt to gain unauthorised access to the Site, our systems or other users' data;",
      "introduce malware, or interfere with or disrupt the Site or its infrastructure;",
      "use the Site to send spam, or to submit false, misleading or unlawful content;",
      "reverse engineer, decompile or otherwise attempt to extract source code, except where the law allows it.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The Site and everything on it, including text, graphics, logos, designs, code and layout, is owned by or licensed to Prasthana and is protected by intellectual property laws. The Prasthana name and logo are our marks.",
      "You may view the Site and share links to it. You may not otherwise copy, modify, distribute or create derivative works from our content without our prior written consent.",
    ],
  },
  {
    title: "Case studies and client information",
    paragraphs: [
      "Case studies describe our product engineering work. To protect confidentiality, client names and sensitive details are not disclosed. Third-party names, products and trademarks mentioned on the Site belong to their respective owners, and their mention does not imply endorsement or affiliation.",
    ],
  },
  {
    title: "Careers and job applications",
    paragraphs: [
      "Job listings on the Site are informational and may change or be withdrawn at any time. Sending an application does not create an employment relationship or guarantee an interview. Information you send us is handled as described in our Privacy Policy.",
    ],
  },
  {
    title: "Contacting us",
    paragraphs: [
      "When you contact us through the Site, your email application opens with a prefilled message addressed to us. Please do not send confidential, sensitive or personal information that is not necessary to your enquiry. Unless we agree otherwise in writing, anything you send us is not treated as confidential.",
    ],
  },
  {
    title: "Third-party links",
    paragraphs: [
      "The Site may link to third-party websites, such as LinkedIn and Facebook. We do not control and are not responsible for their content, availability or privacy practices. Visiting them is at your own risk.",
    ],
  },
  {
    title: "Disclaimer of warranties",
    paragraphs: [
      'The Site and its content are provided "as is" and "as available". To the fullest extent permitted by law, we disclaim all warranties, express or implied, including accuracy, completeness, fitness for a particular purpose and non-infringement. We do not warrant that the Site will be uninterrupted, secure or error-free.',
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Prasthana and its directors, employees and affiliates are not liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or goodwill, arising from your use of, or inability to use, the Site. Nothing in these Terms limits liability that cannot be limited by law.",
    ],
  },
  {
    title: "Changes to the Site and these Terms",
    paragraphs: [
      "We may update the Site and these Terms from time to time. The updated Terms apply from the date they are posted, shown above as the last updated date. Your continued use of the Site after changes means you accept them.",
    ],
  },
  {
    title: "Governing law and jurisdiction",
    paragraphs: [
      "These Terms are governed by the laws of India. The courts at Hyderabad, Telangana have exclusive jurisdiction over any dispute arising from these Terms or your use of the Site.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      `Questions about these Terms? Email us at ${company.email} or write to ${company.legalName}, ${company.address}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="October 13, 2026"
      intro="Please read these terms carefully before using the Prasthana website."
      sections={sections}
    />
  );
}
