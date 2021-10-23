import articleStyles from "../styles/article.module.css";
import Link from "next/Link";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => {
        return (
          <Link
            key={article.id}
            href="/article/[id]"
            as={`/article/${article.id}`}
          >
            <a className={articleStyles.card}>
              <h3>{article.title} &rarr;</h3>
              <p>{article.body}</p>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ArticleList;
