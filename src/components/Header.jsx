import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>The Spiny Flower Mantis</h1>
      <p>An independent news platform.</p>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}