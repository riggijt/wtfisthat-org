import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}