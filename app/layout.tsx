import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SympliCare AI — Care Home Operations Platform",
  description: "A platform designed to support care home teams in managing documentation, workflows, and day-to-day operations in a structured and practical way.",
  icons: {
    icon: "/logo2.jpeg",
  },
  openGraph: {
    title: "SympliCare AI — Care Home Operations Platform",
    description: "A platform designed to support care home teams in managing documentation, workflows, and day-to-day operations in a structured and practical way.",
    url: "https://symplicare.ai",
    siteName: "SympliCare AI",
    images: [
      {
        url: "/logo2.jpeg",
        width: 1200,
        height: 630,
        alt: "SympliCare AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SympliCare AI — Care Home Operations Platform",
    description: "A platform designed to support care home teams in managing documentation, workflows, and day-to-day operations in a structured and practical way.",
    images: ["/logo2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <MobileNav />
        <main className="flex-1 pt-20 md:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
