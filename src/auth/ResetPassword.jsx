import React, { useState, useEffect } from "react";
import api from '../components/services/api';
import { useLocation, useNavigate } from "react-router-dom";
import MusicBackground from "../components/style/MusicBackground";
import { FaLock, FaEye, FaEyeSlash, FaMusic } from "react-icons/fa";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  useEffect(() => {
    if (!token) {
      setMessage("Token is missing or invalid.");
      setTokenLoading(false);
      return;
    }

    setTimeout(() => {
      setTokenLoading(false);
    }, 1000);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !newPassword) {
      setMessage("Token or password missing.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post(`${backendDomain}/api/auth/public/reset-password`, null, {
        params: {
          token: token,
          newPassword: newPassword,
        },
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/signin"), 2000);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Error occurred while resetting password"
      );
    } finally {
      setLoading(false);
    }
  };

  if (tokenLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white relative">
        <MusicBackground />
        <div className="bg-[#181818] border border-neutral-800 p-8 rounded-xl flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-[#1db954] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-neutral-400 text-xs font-semibold">Validating token...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 relative text-neutral-200">
      <MusicBackground />

      <div className="bg-[#181818] border border-neutral-850 p-8 md:p-10 rounded-xl shadow-xl w-full max-w-md flex flex-col items-center text-center">
        
        {/* Branding header */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-[#121212] border border-neutral-800 p-2.5 rounded-lg mb-3">
            <FaMusic className="text-[#1db954] text-base" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Reset Password
          </h2>
          <p className="text-xs text-neutral-450 mt-1">Enter your new secure password below</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-550">
              <FaLock className="text-xs" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full pl-9 pr-10 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={loading}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-450 hover:text-white transition"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#1db954] hover:bg-[#1ed760] text-black font-bold text-sm rounded-full transition-all"
            disabled={loading}
          >
            Reset Password
          </button>
        </form>

        {message && (
          <p className="mt-4 text-xs font-semibold text-zinc-300 bg-[#121212] border border-neutral-800 px-4 py-2 rounded-lg">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
