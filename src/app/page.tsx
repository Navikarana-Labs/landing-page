import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Home = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center relative">
      {/* Header */}
      <header className="absolute top-3 left-0 flex items-center justify-between w-full px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <Image
            src="/logomark-lightmode.svg"
            alt="navikarana labs logo"
            width={55}
            height={55}
            className="block light:hidden"
          />
          <span className="text-2xl font-bold leading-none">
            Navīkaraṇa Labs
          </span>
        </Link>

        {/* Tabs */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/about"
            className="text-lg font-medium hover:underline hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:underline hover:text-blue-600"
          >
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="mt-4 mb-10">
        <h1 className="text-5xl font-bold">Navīkaraṇa Labs</h1>
        <h2 className="text-xl mt-2">
          Building cutting-edge solutions to real-world problems.
        </h2>
      </section>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center gap-2">
        <p className="text-lg border-b mb-2 leading-none">
          Get in touch with us
        </p>
        <div className="flex items-center gap-4 justify-center">
          <a href="mailto:hello@navikarana.io" className="text-2xl">
            <MdAlternateEmail />
          </a>
          <a
            href="https://x.com/navikarana_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/Navikarana-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
