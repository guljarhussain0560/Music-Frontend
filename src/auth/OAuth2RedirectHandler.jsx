import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/services/api";


const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;
  const csrfToken = localStorage.getItem("CSRF_TOKEN");



  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Store the token in localStorage
      localStorage.setItem("JWT_TOKEN", token);


      console.log("Token being sent:", token);

      api.get(`${backendDomain}/api/auth/me`, {
        headers: {
          "X-XSRF-TOKEN": csrfToken,
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => {
          const user = res.data;
          console.log("Logged-in user:", user);
          localStorage.setItem("USER_DETAILS", JSON.stringify(user));
          navigate("/home");
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
