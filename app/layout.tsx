import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeshan Khalid | Full Stack Developer & UI/UX Designer",
  description:
    "I build modern websites, Android applications, and AI-powered solutions with a focus on clean design, performance, and user experience. Based in Pakistan. Available for Premium Contracts.",
  keywords: [
    "Zeshan Khalid",
    "Full Stack Developer",
    "Android Developer",
    "UI/UX Designer",
    "AI Automation Specialist",
    "Next.js Developer",
    "Pakistan Developer",
  ],
  authors: [{ name: "Zeshan Khalid" }],
  creator: "Zeshan Khalid",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zeshan Khalid | Full Stack Developer & UI/UX Designer",
    description:
      "I build modern websites, Android applications, and AI-powered solutions with a focus on clean design, performance, and user experience.",
    siteName: "Zeshan Khalid Portfolio",
    images: [
      {
        url: "https://zeshan-portfolio-steel.vercel.app/zeshan.jpeg",
        width: 1200,
        height: 630,
        alt: "Zeshan Khalid Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeshan Khalid | Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer, Android Developer, and UI/UX Designer building premium digital experiences.",
    images: ["https://zeshan-portfolio-steel.vercel.app/zeshan.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
