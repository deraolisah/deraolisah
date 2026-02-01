import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Success from "./pages/Success";


function App() {

  return (
    <div className="font-body text-dark">
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App;