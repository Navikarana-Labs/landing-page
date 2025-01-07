import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/common";

const geist = Geist({
  variable: "--font-geist",
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
      <body className={`${geist.variable} font-sans antialiased`}>
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
