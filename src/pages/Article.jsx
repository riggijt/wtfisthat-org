import { useParams } from "react-router-dom";
import { marked } from "marked";
import articles from "../content/articles";
import { useState } from "react";

export default function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.slug === id);
  const [open, setOpen] = useState(false);

  if (!article) return <main className="article-page">Article not found.</main>;

  return (
    <main className="article-page">
      <a href="/" className="back-link">← Back to Home</a>

      <p className="article-category">{article.category}</p>
      <h1>{article.title}</h1>
      <p className="article-excerpt">{article.excerpt}</p>

      <img className="article-hero" src={article.image} alt={article.title} />

      <article
        className="article-body"
        dangerouslySetInnerHTML={{ __html: marked(article.content) }}
      />

      <section className="specimen-notes">
        <button onClick={() => setOpen(!open)}>
          Specimen Notes
        </button>

          {open && (
            <div className="specimen-body">
              <div className="specimen-inner-header">
                <div>
                  <h3>{article.specimenHeading || ""}</h3>
                </div>

                {article.specimenImage && (
                  <img
                    src={article.specimenImage}
                    alt={article.specimenAlt || "Specimen Notes image"}
                    className="specimen-image"
                  />
                )}
              </div>

              <div
                className="specimen-content"
                dangerouslySetInnerHTML={{
                  __html: article.specimenNotes || "Add specimen notes here.",
                }}
              />
            </div>
          )}
            
          </section>
    </main>
  );
}