import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prasthana.com"),
  title: { default: `${company.name} | ${company.tagline}`, template: `%s | ${company.name}` },
  description: company.description,
  openGraph: { title: `${company.name} | ${company.tagline}`, description: company.description, type: "website" },
};

// Runs before first paint: use the saved choice, otherwise follow the system theme.
// Also keeps following the system theme until the user picks one manually.
const themeScript = `(function(){try{var m=matchMedia("(prefers-color-scheme: light)");var r=document.documentElement;function a(){var s=localStorage.getItem("theme");r.dataset.theme=s||(m.matches?"light":"dark")}a();m.addEventListener("change",function(){if(!localStorage.getItem("theme"))a()})}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
