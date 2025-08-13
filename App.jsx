import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index.jsx";
import About from "./pages/about/index.jsx";
import Gallery from "./pages/gallery/index.jsx";
import Announcements from "./pages/announcements/index.jsx";


import './App.css'
import './index.css'



function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                {/* <ScrollToTop /> */}
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/announcements" element={<Announcements />} />

          </Routes>
      </BrowserRouter>
  );
}

export default App;
