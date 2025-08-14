import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index.jsx";
import About from "./pages/about/index.jsx";
import Gallery from "./pages/gallery/index.jsx";
import Announcements from "./pages/announcements/index.jsx";
import Blog from "./pages/blog/index.jsx";
import BlogDetail from "./components/detail.jsx"; 

import './App.css'
import './index.css'

function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;