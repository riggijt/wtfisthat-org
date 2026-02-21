import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <div
      className="article-card"
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <div className="article-image-placeholder"></div>
      <div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </div>
    </div>
  );
}