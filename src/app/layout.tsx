import type { Metadata } from "next";
import { Geist, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/common";

// Primary brand font
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

// Fallback font with Latin-Extended support (ī, ṇ, etc.)
const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navīkaraṇa Labs",
  description: "Landing page for Navīkaraṇa Labs.",
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
      <body
        className={`${geist.variable} ${notoSans.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="container max-w-screen-2xl flex flex-col items-center justify-center flex-1 py-8 md:py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
