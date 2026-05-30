function parseFrontmatter(raw) {
  const match = raw.match(/---([\s\S]*?)---([\s\S]*)/);

  if (!match) return {};

  const frontmatter = match[1];
  const content = match[2];

  const data = {};

  frontmatter.split("\n").forEach(line => {
    const [key, ...rest] = line.split(":");
    if (!key) return;
    data[key.trim()] = rest.join(":").trim();
  });

  return {
    ...data,
    content
  };
}

const articleFiles = import.meta.glob("./*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const articles = Object.entries(articleFiles).map(([path, raw]) => {
  const parsed = parseFrontmatter(raw);

  return {
    ...parsed,
    slug:
      parsed.slug ||
      path.split("/").pop().replace(".md", "")
  };
});

export default articles.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);