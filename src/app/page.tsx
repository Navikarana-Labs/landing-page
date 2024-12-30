import Image from "next/image";

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
      <h1 className="text-5xl mt-4 font-bold">Navīkaraṇa Labs</h1>
      <p className="text-lg mt-2">Landing page for official website of Navīkaraṇa Labs.</p>
    </main>
  );
};

export default Home;
