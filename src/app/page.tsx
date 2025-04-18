import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col items-center justify-center">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/logomark-lightmode.svg"
            alt="navikarana labs logo"
            width={52}
            height={52}
            className="hidden md:block"
          />
          <h1 className="text-3xl md:text-5xl font-bold">Navīkaraṇa Labs</h1>
        </Link>
        <h3 className="text-base text-center md:text-lg font-medium mt-4 text-foreground/80">
          Something extraordinary is on the horizon. Join us on this journey.
        </h3>
      </section>
      {/*
      <section className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-lg md:text-xl leading-tight text-center mb-4 font-medium text-foreground">
          Join the waitlist to get early access.
        </h2>
        <WaitListForm />
      </section>
            */}
      <section className="mt-6 flex flex-col justify-center items-center gap-2">
        <h2 className="text-base md:text-lg mb-2 font-medium text-foreground border-b border-current">
          Follow us on
        </h2>
        <div className="flex items-center gap-5 justify-center">
          <a
            href="https://x.com/navikarana_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/Navikarana-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
