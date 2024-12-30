import Image from "next/image";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Home = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <Image
        src="/logo-lightmode.svg"
        alt="Navīkaraṇa Labs"
        width={512}
        height={512}
        className="block dark:hidden w-96 h-auto"
      />
      <Image
        src="/logo-darkmode.svg"
        alt="Navīkaraṇa Labs"
        width={512}
        height={512}
        className="hidden dark:block w-96 h-auto"
      />
      <section className="mt-4 mb-10">
        <h1 className="text-5xl font-bold">Navīkaraṇa Labs</h1>
        <h2 className="text-xl mt-2">Something extraordinary is on the horizon.</h2>
      </section>

      <footer className="flex flex-col justify-center items-center gap-2">
        <p className="text-lg border-b mb-2 leading-none">Get in touch with us</p>
        <div className="flex items-center gap-4 justify-center">
          <a href="https://x.com/navikarana_labs" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaXTwitter />
          </a>
          <a href="https://github.com/Navikarana-Labs" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaGithub />
          </a>
          <a href="mailto:hello@navikarana.io" className="text-2xl">
            <MdAlternateEmail />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
