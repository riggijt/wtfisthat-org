import { useState } from "react";

export default function Article() {
  const [open, setOpen] = useState(false);

  return (
    <main className="page">
      <a href="/">← Back</a>

      <h1>Article Title</h1>
      <p>Article content...</p>

      <button onClick={() => setOpen(!open)}>
        Under the hood
      </button>

      {open && (
        <div>
          add Text Here
        </div>
      )}
    </main>
  );
}