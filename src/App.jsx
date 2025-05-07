import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import HomeAfterLogin from "./components/pages/HomeAfterLogin";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";
import OAuth2RedirectHandler from "./auth/OAuth2RedirectHandler";
import ResetPassword from "./auth/ResetPassword";
import Footer from "./components/footer/Footer";
import AboutPage from "./components/aboutPage/AboutPage";
import ContactPage from "./components/contactPage/ContactPage";
import Policy from "./components/policy/Policy";
import Services from "./components/servives/Services";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // On component mount, check for JWT token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    setIsAuthenticated(!!token); // Set to true if token exists, false otherwise
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/services" element={<Services />} />
      {/* Protected Route */}
      <Route
        path="/home"
        element={isAuthenticated ? <HomeAfterLogin /> : <Navigate to="/signin" />}
      />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
