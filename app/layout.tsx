import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, orgAddress, siteKeywords } from "@/lib/seo";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const homeTitle = "Prasthana | Product Engineering and Technology Company in Hyderabad";
const homeDescription =
  "Prasthana is a Hyderabad-based product engineering and technology company. We build web and mobile products and provide technology consulting, quality engineering, DevOps, analytics, data and AI services through dedicated product and engineering teams.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: homeTitle, template: `%s | ${company.name}` },
  description: homeDescription,
  keywords: siteKeywords,
  applicationName: company.name,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    siteName: company.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: company.name,
      legalName: company.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-blue-bright.png`,
      description: company.description,
      email: company.email,
      foundingDate: "2019-01-24",
      address: orgAddress,
      sameAs: [company.linkedin, company.facebook],
      slogan: company.tagline,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: company.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};


// Runs before first paint: use the saved choice, otherwise follow the system theme.
// Also keeps following the system theme until the user picks one manually.
const themeScript = `(function(){try{var m=matchMedia("(prefers-color-scheme: light)");var r=document.documentElement;function a(){var s=localStorage.getItem("theme");r.dataset.theme=s||(m.matches?"light":"dark")}a();m.addEventListener("change",function(){if(!localStorage.getItem("theme"))a()})}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${poppins.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise flex min-h-dvh flex-col">
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
