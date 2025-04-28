
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPageCom/Home";
import AccessDenied from "./components/auth/AccessDenied";
import UserProfile from "./components/auth/UserProfile";
import ForgotPassword from "./components/auth/ForgotPassword";
import OAuth2RedirectHandler from "./components/auth/OAuth2RedirectHandler";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";
import ContactPage from "./components/contactPage/ContactPage";
import AboutPage from "./components/aboutPage/AboutPage";
import ResetPassword from "./components/auth/ResetPassword";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/access-denied" element={<AccessDenied />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;