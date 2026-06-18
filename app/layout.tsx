import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = "G-ZSBMHX0643";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://leadflowautomation.vercel.app"),
  title: {
    default: "LeadFlow Automation | AI Lead Tracking & Follow-Up Automation for Small Businesses",
    template: "%s | LeadFlow Automation",
  },
  description:
    "LeadFlow Automation builds simple AI-powered lead tracking systems, follow-up automations, Google Sheets CRMs, and business dashboards for small businesses.",
  keywords: [
    "AI automation for small business",
    "small business automation consultant",
    "lead follow-up automation",
    "lead tracking automation",
    "Google Sheets CRM setup",
    "Zapier automation setup",
    "Make.com automation setup",
    "n8n automation consultant",
    "client intake automation",
    "custom business dashboard",
    "mini CRM for small business",
    "Houston AI automation consultant",
    "Houston workflow automation consultant",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LeadFlow Automation",
    title: "LeadFlow Automation | AI Lead Tracking & Follow-Up Automation",
    description:
      "Stop losing leads. Automate your follow-ups. LeadFlow Automation builds simple systems for small businesses.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LeadFlow Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadFlow Automation | AI Lead Tracking & Follow-Up Automation",
    description: "Stop losing leads. Automate your follow-ups.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  other: {
    "google-site-verification": "yemks45D9goK95MFrgYANYgrPb1RKPIYEzbJTavOqzQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="yemks45D9goK95MFrgYANYgrPb1RKPIYEzbJTavOqzQ" />
      </head>
      <body className="antialiased">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
