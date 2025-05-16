import React from "react";
// import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <div className="min-h-screen container mx-auto px-4 text-gray font-display">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;