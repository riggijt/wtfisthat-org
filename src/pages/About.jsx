export default function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <h1>What is This?</h1>
        <p>
          The Spiny Flower Mantis was created as a platform for those of us who
          often look at life reflected through current events and ask
          “w-t-f is that?”. The mantis is an odd creature, and its array of physical attributes can be hard to ignore much less forget.
          Let’s talk about it.
        </p>
      </section>

      <section className="about-section">
        <h2>What are Specimen Notes?</h2>
        <p>
          A good bit of thought and research goes into each one of our articles.
          We want our readers to enjoy their time with us, and we also want to
          provide useful information for consideration. Specimen Notes provide a
          brief perspective on each piece and a few of the resources that we
          found interesting, informative, or thought provoking.
        </p>
      </section>

      <section className="about-section submission-section">
        <h2>The Mantis is Growing—Become a Contributor!</h2>
        <p>
          We welcome collaborators. If you have an expression that you feel
          would fit our genre, submit a query in the field below.
        </p>

        <form className="submission-form" method="POST" action="https://formspree.io/f/xaqzezyv">
          <label>
            Publishing Name <span>(Name you want on the article)</span>
            <input type="text" name="publishingName" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Brief Abstract or Excerpt <span>(200 words or less)</span>
            <textarea name="abstract" rows="8" maxLength="1500" required />
          </label>

          <button type="submit">Submit to editor@wtfisthat.org</button>
        </form>
      </section>
    </main>
  );
}