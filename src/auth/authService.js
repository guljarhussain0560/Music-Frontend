import axios from "axios";
import api from "../components/services/api"; // Import the axios instance with interceptors

// Accessing the backend domain from environment variables
const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;


// Sign-in function
export const signIn = async (username, password) => {
  console.log("Sign-in initiated with username:", username);
  try {
    const response = await api.post("/api/auth/public/signin", { username, password });
    console.log("Sign-in successful:", response.data);

    const { jwtToken, username: user } = response.data;

    // ✅ Save JWT token to localStorage
    localStorage.setItem("JWT_TOKEN", jwtToken);
    localStorage.setItem("USERNAME", user);
    console.log("JWT token saved to localStorage:", jwtToken);
    window.location.href = '/home';
    return response.data;


  } catch (error) {
    console.error(
      "Sign-in failed:",
      error.response?.data?.message || "Login failed"
    );
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Sign-up function
export const signUp = async (userData) => {
  console.log("Sign-up initiated with data:", userData);
  try {
    const response = await api.post("/auth/public/signup", userData);
    console.log("Sign-up successful:", response.data);
    return response.data; // Returns { message }
  } catch (error) {
    console.error(
      "Sign-up failed:",
      error.response?.data?.message || "Signup failed"
    );
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};
//logout function
export const handleLogout = async () => {
  const token = localStorage.getItem('JWT_TOKEN');  // or the token name you are using

  try {
    const response = await api.post('/api/auth/logout', {}, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Include the JWT token here
      }
    });

    if (response.status === 200) {
      localStorage.removeItem('JWT_TOKEN');  // Remove the token after logout
      window.location.href = '/login';  // Redirect user to login page
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

// Google Sign-in function
export const signInWithGoogle = async () => {
  console.log("Google Sign-in initiated");
  try {
    const response = await api.get("/oauth2/authorization/google");
    console.log("Google Sign-in successful:", response.data);
    return response.data; // Returns { jwtToken, username }
  } catch (error) {
    console.error(
      "Google Sign-in failed:",
      error.response?.data?.message || "Google login failed"
    );
    throw new Error(
      error.response?.data?.message || "Google login failed"
    );
  }
};
