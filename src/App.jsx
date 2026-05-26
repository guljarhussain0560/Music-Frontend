import { Routes, Route, Navigate } from "react-router-dom";
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

// Protected Route Guard (Dynamic Evaluation)
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("JWT_TOKEN");
  return token ? children : <Navigate to="/signin" replace />;
};

// Public Route Guard (Redirects already logged-in users to dashboard)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("JWT_TOKEN");
  return token ? <Navigate to="/home" replace /> : children;
};

const App = () => {
  return (
    <Routes>
      {/* Public Routes protected from logged-in users */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        }
      />

      {/* Static Info Pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/footer" element={<Footer />} />

      {/* Protected Dashboard Route */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeAfterLogin />
          </ProtectedRoute>
        }
      />
      
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
