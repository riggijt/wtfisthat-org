export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#aeccc6" }}>
        <a href="/" style={{ marginRight: "1rem" }}>Home</a>
        <a href="/about">About</a>
      </nav>

      {children}

      <footer style={{ background: "#757a79", padding: "1rem", color: "white" }}>
        © WTFIsThat.org
      </footer>
    </div>
  );
}