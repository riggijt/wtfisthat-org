function parseFrontmatter(raw) {
  const match = raw.match(/---([\s\S]*?)---([\s\S]*)/);

  if (!match) return {};

  const frontmatter = match[1];
  const content = match[2];

  const data = {};
  const lines = frontmatter.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!line.trim()) continue;

    const pipeMatch = line.match(/^([A-Za-z0-9_-]+):\s*\|\s*$/);

    if (pipeMatch) {
      const key = pipeMatch[1].trim();
      const blockLines = [];

      i++;

      while (i < lines.length) {
        const nextLine = lines[i];

        if (/^[A-Za-z0-9_-]+:\s*/.test(nextLine)) {
          i--;
          break;
        }

        blockLines.push(nextLine);
        i++;
      }

      data[key] = blockLines.join("\n").trim();
      continue;
    }

    const [key, ...rest] = line.split(":");
    if (!key) continue;

    data[key.trim()] = rest.join(":").trim();
  }

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