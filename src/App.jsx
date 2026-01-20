import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {

  return (
    <div className="font-body text-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App;