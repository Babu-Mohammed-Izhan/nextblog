import styles from "../styles/Layout.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Dev Blog</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1> Welcome to Next</h1>
    </div>
  );
}
