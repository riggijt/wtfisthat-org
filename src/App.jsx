import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;