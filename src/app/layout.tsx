import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navīkaraṇa Labs",
  description: "Landing page for official website of Navīkaraṇa Labs.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon-lightmode.ico",
      href: "/favicon-lightmode.ico",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon-lightmode.ico",
      href: "/favicon-lightmode.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
