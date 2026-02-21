import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import UnderTheHood from "../components/UnderTheHood";

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return <div>Article not found</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/">← Back to Home</Link>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <UnderTheHood />
    </div>
  );
}