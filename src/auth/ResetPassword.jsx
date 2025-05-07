import React, { useState, useEffect } from "react";
import api from '../components/services/api';
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [tokenLoading, setTokenLoading] = useState(true); // Loading state for token validation
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from URL
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  useEffect(() => {
    // Simulate token validation or generation
    if (!token) {
      setMessage("Token is missing or invalid.");
      setTokenLoading(false);
      return;
    }

    // Example: Simulate token validation delay
    setTimeout(() => {
      setTokenLoading(false); // Stop token loading after validation
    }, 1000);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !newPassword) {
      setMessage("Token or password missing.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const res = await api.post(`${backendDomain}/api/auth/public/reset-password`, null, {
        params: {
          token: token,
          newPassword: newPassword,
        },
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/signin"), 2000); // redirect after success
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Error occurred while resetting password"
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (tokenLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-600">Validating token...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Reset Password</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className="px-4 py-2 w-full border rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={loading} // Disable input while loading
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-3 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading} // Disable toggle while loading
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Processing..." : "Reset Password"}
        </button>
      </form>
      {loading && (
        <div className="mt-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default ResetPassword;
