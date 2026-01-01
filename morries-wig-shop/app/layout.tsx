import type { Metadata } from "next";
import { Shrikhand, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const displayFont = Shrikhand({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morries Wig Shop | 70s Glam Reimagined",
  description:
    "Slip into the groove at Morries Wig Shop with era-inspired cuts, curated weekly wigs, and accessories that keep your look funky fresh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-background text-ink`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
