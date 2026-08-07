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
  metadataBase: new URL("https://hansindologistik.com"),
  title: `${COMPANY_INFO.fullName} | Trusted Logistics Partner`,
  description: COMPANY_INFO.description,
  keywords: [
    "Project Cargo Indonesia",
    "Project Container",
    "Heavy Lift Transportation",
    "Logistics Service Provider",
    "Export Import Cargo",
    "Hansindo Logistik",
    "Hansindo Berkat Jaya Logistik",
  ],
  authors: [{ name: COMPANY_INFO.fullName }],
  openGraph: {
    title: `${COMPANY_INFO.fullName} - Trusted Logistics Provider`,
    description: COMPANY_INFO.description,
    url: "https://hansindologistik.com",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/images/content/truk_putih_lift_load.png",
        width: 1200,
        height: 630,
        alt: "PT. Hansindo Berkat Jaya Logistik",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} - Project Cargo & Container Logistics`,
    description: COMPANY_INFO.description,
    images: ["/images/content/truk_putih_lift_load.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
    legalName: COMPANY_INFO.fullName,
    url: "https://hansindologistik.com",
    logo: "https://hansindologistik.com/logo.png",
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address,
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
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
