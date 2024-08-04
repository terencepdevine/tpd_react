import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Project from "./components/Project";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header";

import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
