import styles from "../styles/Layout.module.css";
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Dev Blog</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1> WebDev News</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
