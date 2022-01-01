import Head from "next/head";
import HomePage from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suprada Tripathy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
