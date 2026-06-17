import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 600",
});

const sourceSerif = localFont({
  src: "./fonts/SourceSerif4.woff2",
  variable: "--font-source-serif",
  display: "swap",
  weight: "500 600",
});

export const metadata: Metadata = {
  title: "Harrow & Cole Accountants | Chartered Accountants for Small Business, London",
  description:
    "Reliable, responsive accounting for sole traders and limited companies turning over under £500k. Same-day call-backs, a named accountant, no jargon. Book a free consultation in London.",
  keywords: [
    "accountant London",
    "small business accountant",
    "sole trader accountant",
    "limited company accountant",
    "chartered accountant London",
  ],
  metadataBase: new URL("https://accounting-homepage.vercel.app"),
  openGraph: {
    title: "Harrow & Cole Accountants | Small Business Accountants in London",
    description:
      "Reliable, responsive accounting for sole traders and limited companies under £500k turnover. Book a free consultation.",
    url: "https://accounting-homepage.vercel.app",
    siteName: "Harrow & Cole Accountants",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrow & Cole Accountants | Small Business Accountants in London",
    description:
      "Reliable, responsive accounting for sole traders and limited companies under £500k turnover.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
