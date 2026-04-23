export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <h1>The Spiny Flower Mantis</h1>
        <p>An independent news platform</p>
      </header>

      <section className="article-grid">
        {[1,2,3,4].map((id) => (
          <a key={id} href="/article" className="article-card">
            <div className="image-placeholder"></div>
            <h2>Article {id}</h2>
            <p>Short preview text</p>
          </a>
        ))}
      </section>
    </main>
  );
}