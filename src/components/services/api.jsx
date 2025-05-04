import axios from "axios";


// Set default config to include cookies (needed for CSRF protection)
axios.defaults.withCredentials = true;

// Create an axios instance
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_DOMAIN}/api`, // Make sure VITE_BACKEND_DOMAIN is set correctly in your .env file
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Ensures cookies are sent with every request
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    // Include JWT token if available
    const token = localStorage.getItem("JWT_TOKEN");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Include CSRF token if available, else fetch it
    let csrfToken = localStorage.getItem("CSRF_TOKEN");

    if (!csrfToken) {
      try {
        const response = await axios.get(
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
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
