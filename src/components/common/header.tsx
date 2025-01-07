import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="border-grid border-b border-border/55 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container h-14 md:h-16 w-full flex max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logomark-lightmode.svg"
            alt="navikarana labs logo"
            width={46}
            height={46}
            className="hidden md:block"
          />
          <h1 className="text-3xl md:text-3xl font-medium">Navīkaraṇa Labs</h1>
        </Link>
        <nav className="flex items-center gap-5 text-base font-medium">
          {/* <Link href="/about" className="transition-colors hover:text-primary text-muted-foreground">
            About
          </Link> */}
          <a
            href="mailto:hello@navikarana.io"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};
