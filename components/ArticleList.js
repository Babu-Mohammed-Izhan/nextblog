import articleStyles from "../styles/article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((a) => {
        return <h3 key={a.id}>{a.title}</h3>;
      })}
    </div>
  );
};

export default ArticleList;
