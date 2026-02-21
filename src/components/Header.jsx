import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>WTF Is That</h1>
      <p>A modern independent news platform.</p>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}