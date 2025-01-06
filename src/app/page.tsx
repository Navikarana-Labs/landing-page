"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus(
          "You're on board! 🚀 Expect something amazing in your inbox soon.",
        );

        setEmail("");
      } else {
        //setStatus("Something went wrong. Please try again.");
        setStatus(
          "You're on board! 🚀 Expect something amazing in your inbox soon.",
        );
      }
    } catch (error) {
      console.error(error);
      setStatus("Error: Unable to submit. Please try again later.");
    }
  };

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
          {/*
          <Link
            href="/about"
            className="text-lg font-medium hover:underline hover:text-blue-600"
          >
            About
          </Link>
*/}
          <a
            href="mailto:hello@navikarana.io"
            className="text-lg font-medium hover:underline hover:text-blue-600"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <section className="mt-4 mb-10 text-center">
        <h1 className="text-5xl font-bold">Navīkaraṇa Labs</h1>
        {/*
        <h2 className="text-xl mt-2 mb-4">
          Building cutting-edge solutions to real-world problems.
        </h2>
        */}

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-1 text-gray-600">
            This ship is about to take off—be part of the adventure!
          </h3>
          <h3 className="text-lg font-medium mb-1 text-gray-600">
            Join the waitlist to get early access.
          </h3>

          {/* Email Subscription Form */}
          <div className="flex justify-center mt-6">
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email. We don't spam!"
                required
                className="p-2 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>

          {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
        </div>
      </section>

      {/* Footer */}
      <section className="relative top-[-10px] flex flex-col justify-center items-center gap-2">
        <p className="text-lg border-b mb-2 leading-none">Follow us on</p>
        <div className="flex items-center gap-4 justify-center">
          {/*
          <a href="mailto:hello@navikarana.io" className="text-2xl">
            <MdAlternateEmail />
          </a>
          */}
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
      </section>
    </main>
  );
};

export default Home;
