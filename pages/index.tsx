import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Homestyles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={Homestyles}>
      <Head>
        <title>Joon</title>
      </Head>
      <section>
        <p>[Joon Introduction]</p>
        <p>(This is a Website)</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul></ul>
      </section>
    </div>
  );
};

export default Home;
