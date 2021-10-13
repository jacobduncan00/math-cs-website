import Head from "next/head";
import Navbar from "../components/navbar";
import Landing from "../components/landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SU Math & CS Club</title>
        <meta
          name="Math & CS Club Website for Salisbury University"
          content="Math & CS Club Website for Salisbury University"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="block lg:flex">
        <div className="w-screen block lg:flex mb-0">
          <div className="ml-2 lg:ml-32">
            <Landing />
          </div>
          <div className="float-right ml-8 lg:ml-0 mt-0">
            <img
              src="/hacker.svg"
              alt="Hacker"
              height={500}
              width={500}
              className="mt-32 lg:ml-12 lg:mr-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
