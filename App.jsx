import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index.jsx";
import About from "./pages/about/index.jsx";

import './App.css'
import './index.css'



function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                {/* <ScrollToTop /> */}
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<About/>} />
            {/* <Route path="/features" element={<Features />} />
            <Route path="/community" element={<Community />} /> */}

          </Routes>
      </BrowserRouter>
  );
}

export default App;
