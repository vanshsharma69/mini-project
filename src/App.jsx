import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Layout() {
  const location = useLocation();

  // Hide Navbar and Footer on /login
  const hideLayout = location.pathname === "/login";

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className={`flex-grow ${hideLayout ? "" : "pt-20"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
