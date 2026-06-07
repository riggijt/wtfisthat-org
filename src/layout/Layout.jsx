export default function Layout({ children }) {
  return (
    <div className="site-wrapper">

      <header className="site-header">
        <div className="nav-inner">

          <a href="/" className="header-brand">
            <img
              src="/images/mantis3.png"
              alt="WTF Is That Home"
              className="header-art"
            />
          </a>

          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
          </nav>

        </div>
      </header>

      <main className="site-content">
        {children}
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} WTFIsThat.org</p>
      </footer>

    </div>
  );
}