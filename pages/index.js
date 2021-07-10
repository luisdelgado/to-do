import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>to-do</title>
        <meta name="description" content="Seleção Front-End 2021-3Q" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>to-do</h1>
      </main>

      <footer>
        <p>
          Um teste projetado pela{" "}
          <a
            href="https://guava.software/"
            target="_blank"
            rel="noreferrer license"
          >
            Guava
          </a>
        </p>
      </footer>
    </div>
  );
}
