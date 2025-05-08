import axios from "axios";

// Axios instance without interceptors
const plainAxios = axios.create();

console.log("ENV BACKEND:", import.meta.env.VITE_BACKEND_DOMAIN);

// Axios instance with interceptors
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_DOMAIN}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    // JWT Token
    const token = localStorage.getItem("JWT_TOKEN");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // CSRF Token
    let csrfToken = localStorage.getItem("CSRF_TOKEN");
    if (!csrfToken) {
      try {
        const response = await plainAxios.get(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/api/csrf-token`,
          { withCredentials: true }
        );
        csrfToken = response.data.token;
        localStorage.setItem("CSRF_TOKEN", csrfToken);
        console.log("Fetched new CSRF token:", csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }

    if (csrfToken) {
      config.headers["X-XSRF-TOKEN"] = csrfToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
