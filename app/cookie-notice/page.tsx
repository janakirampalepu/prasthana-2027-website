import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Cookie Notice" };

const sections: LegalSection[] = [
  {
    title: "What are cookies?",
    paragraphs: [
      "Cookies are small text files that a website places on your device when you visit it. Similar technologies, such as local storage, web beacons and pixels, work in comparable ways. They are commonly used to make websites work, remember your preferences and understand how a site is used.",
    ],
  },
  {
    title: "Our approach",
    paragraphs: [
      `${company.legalName} ("Prasthana", "we", "us") keeps tracking to a minimum. At the time of writing, www.prasthana.com (the "Site") does not set any advertising, analytics or tracking cookies, and does not share data with advertising networks.`,
    ],
  },
  {
    title: "What the Site stores on your device",
    paragraphs: ["The only item the Site stores in your browser is your display preference:"],
    bullets: [
      "Theme preference (local storage, key: “theme”): remembers whether you chose light or dark mode. It stays on your device, is never sent to us, and is kept until you clear your browser data. If you never choose a theme, nothing is stored and the Site follows your device setting.",
    ],
  },
  {
    title: "Categories of cookies",
    bullets: [
      "Strictly necessary: needed for the Site to work. We do not currently set any cookies in this category.",
      "Preferences: remember choices such as your theme. Used by the Site (local storage, as described above).",
      "Analytics and performance: measure how visitors use a site. Not currently used.",
      "Advertising and marketing: build profiles for targeted advertising. Not used.",
    ],
  },
  {
    title: "Third parties",
    paragraphs: [
      "Fonts and images used on the Site are served from our own hosting, not from third-party font or tracking services. Our hosting provider processes standard server logs (such as IP address and browser type) to deliver and secure the Site, as described in our Privacy Policy.",
      "The Site links to third-party websites such as LinkedIn and Facebook. If you follow those links, those sites may set their own cookies under their own policies, which we do not control.",
    ],
  },
  {
    title: "Managing cookies and stored data",
    paragraphs: ["You are in control of what is stored on your device:"],
    bullets: [
      "Change your theme at any time using the light/dark toggle in the top bar.",
      "Use your browser settings to block or delete cookies and site data. Instructions are available in your browser's help pages.",
      "If you block local storage, the Site still works, but your theme choice will not be remembered between visits.",
      "Many browsers offer a “Do Not Track” or Global Privacy Control signal. Because we do not track visitors, the Site behaves the same with or without it.",
    ],
  },
  {
    title: "Changes to this notice",
    paragraphs: [
      "If we introduce analytics or other cookies in the future, we will update this notice and, where the law requires, ask for your consent before they are used. The latest version is always available on this page.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      `Questions about this notice? Email ${company.email} or write to ${company.legalName}, ${company.address}.`,
    ],
  },
];

export default function CookieNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Notice"
      updated="October 13, 2026"
      intro="This notice explains how the Prasthana website uses cookies and similar technologies, and how you can control them."
      sections={sections}
    />
  );
}
