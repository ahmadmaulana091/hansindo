import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { COMPANY_INFO } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Global Maritime Logistics & Offshore Engineering`,
  description: COMPANY_INFO.description,
  keywords: [
    "Offshore Vessel Chartering",
    "AHTS Vessel Charter",
    "Platform Supply Vessel",
    "Maritime Logistics Indonesia",
    "Subsea ROV Engineering",
    "Heavy Lift Module Transport",
    "Hansindo Maritime",
  ],
  authors: [{ name: "Hansindo Maritime Logistics" }],
  openGraph: {
    title: `${COMPANY_INFO.name} - Global Maritime & Offshore Engineering`,
    description: COMPANY_INFO.description,
    url: "https://hansindo.co.id",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Hansindo Maritime Logistics Fleet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} - Maritime Logistics`,
    description: COMPANY_INFO.description,
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: COMPANY_INFO.name,
    legalName: "PT Hansindo Maritime Logistics",
    url: "https://hansindo.co.id",
    logo: "https://hansindo.co.id/logo.png",
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCBD Tower 18th Floor",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased bg-white text-slate-900 selection:bg-secondary selection:text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
