import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="bg-white text-black min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
