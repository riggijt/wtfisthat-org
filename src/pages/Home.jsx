import articles from "../content/articles";

export default function Home() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="home-page">
      <section className="masthead">
        
        <img
           src="/images/mantis2.png"
            alt="The Spiny Flower Mantis logo"
            className="masthead-logo"
        />
     <h1>The Spiny Flower Mantis</h1>

  <p>
    curious and occasionally useful expressions about you and me.
  </p>
</section>

      {featured && (
        <a href={`/article/${featured.slug}`} className="featured-article">
          <img src={featured.image} alt={featured.title} />
          <div>
            <span>{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
          </div>
        </a>
      )}

      <section className="article-grid">
        {rest.map((article) => (
          <a key={article.slug} href={`/article/${article.slug}`} className="article-card">
            <img src={article.image} alt={article.title} />
            <span>{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
          </a>
        ))}
      </section>
    </main>
  );
}