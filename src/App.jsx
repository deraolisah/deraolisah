import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";

import { projects } from "./assets/data.js"

function App() {

  return (
    <div className="font-body text-dark">
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/:id" element={<CaseStudy projects={projects} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;