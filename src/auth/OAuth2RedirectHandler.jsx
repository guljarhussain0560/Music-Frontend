import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/services/api";

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN; // Use your backend domain here

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Store the token in localStorage
      localStorage.setItem("JWT_TOKEN", token);

      console.log("Token being sent:", token);

      api.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch user");
          return res.json();
        })
        .then((user) => {
          console.log("Logged-in user:", user);
          // You can store user info in state, context, or Redux
          localStorage.setItem("USER_DETAILS", JSON.stringify(user)); // Store user details
          navigate("/home"); // go to home or dashboard
        })
        .catch((err) => {
          console.error("User fetch failed", err);
          navigate("/login?error=auth_failed");
        });
    } else {
      navigate("/login?error=missing_token");
    }

    setLoading(false);
  }, [navigate]);

  return <div>{loading ? "Signing in..." : "Redirecting..."}</div>;
};

export default OAuth2RedirectHandler;
