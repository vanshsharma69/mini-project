import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  // Wait until auth state is restored
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center">
          <img
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt="Loading..."
            className="w-16 h-16 mb-3"
          />
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
}

// ✅ Redirect logged-in users away from /login
function LoginRedirect({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null;
  return user ? <Navigate to="/" /> : children;
}

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className={`flex-grow ${hideLayout ? "" : "pt-20"}`}>
        <Routes>
          {/* Public Route */}
          <Route
            path="/login"
            element={
              <LoginRedirect>
                <Login />
              </LoginRedirect>
            }
          />

          {/* Protected Route */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
