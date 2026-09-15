import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, generateOrganizationSchema } from "@/components/seo/JsonLd";
import { ContactModalProvider } from "@/components/modals/ContactModalContext";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sygmiainnovative.co.in"),
  title: {
    default: "Sygmia Innovative — High-Impact Digital Solutions for Small Businesses",
    template: "%s | Sygmia Innovative"
  },
  description: "Sygmia Innovative helps small businesses, restaurants, coaching centers, and organizations build high-performance websites, modernize existing sites, and automate business processes.",
  keywords: [
    "small business web development",
    "website redesign company",
    "business process automation",
    "custom software development",
    "Sygmia Innovative",
    "Dibrugarh website design",
    "Bangalore web development",
    "restaurant SaaS portal",
    "coaching center website",
    "salon booking portal"
  ],
  authors: [{ name: "Sygmia Innovative", url: "https://sygmiainnovative.co.in" }],
  creator: "Sygmia Innovative",
  publisher: "Sygmia Innovative",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://sygmiainnovative.co.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    title: "Sygmia Innovative — High-Impact Digital Solutions for Small Businesses",
    description: "Build, modernize, and automate your digital operations with Sygmia Innovative. Modern web apps, process automation, and practical business software.",
    url: "https://sygmiainnovative.co.in",
    siteName: "Sygmia Innovative",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-devices.png",
        width: 1200,
        height: 630,
        alt: "Sygmia Innovative Multi-Device Digital Showcase"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sygmia Innovative — High-Impact Digital Solutions",
    description: "Sygmia helps small businesses build high-performance websites, modernize existing sites, and automate business processes.",
    images: ["/images/hero-devices.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd schema={generateOrganizationSchema()} />
      </head>
      <body className="min-h-full flex flex-col bg-[#070a11] text-slate-100 selection:bg-indigo-500 selection:text-white">
        <ContactModalProvider>
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
        </ContactModalProvider>
      </body>
    </html>
  );
}
