import Head from "next/head";
import Feature from "../components/Feature";
import Partners from "../components/Partners";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fundatia Sinca </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Partners />
      </Layout>
    </>
  );
}
