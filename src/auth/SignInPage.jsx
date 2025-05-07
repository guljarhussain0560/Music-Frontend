import React, { useEffect, useState } from 'react';
import { signIn } from './authService';
import { useNavigate, Link } from 'react-router-dom';
import Slideshow from "../components/style/Slideshow";
import api from '../components/services/api';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;

  // Check if user is already logged in
  useEffect(() => {
    const jwtToken = localStorage.getItem('JWT_TOKEN');
    if (jwtToken) {
      navigate('/home');
    }
  }, []);


  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await signIn(username, password);

      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setResetMessage('');
    if (!email) {
      setResetMessage('Please enter your email.');
      return;
    }

    try {
      const response = await api.post('/auth/public/forgot-password', { email });
      setResetMessage(response.data.message || 'Password reset email sent successfully');
      setEmailSent(true);
    } catch (err) {
      setResetMessage(err.response?.data?.message || 'Error sending password reset email');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Slideshow />
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Music Vibes</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Connect with the world through music.
        </p>

        {/* ✅ Hide login form when showing forgot password */}
        {!showForgotPassword && (
          <form onSubmit={handleSignIn} className="w-full flex flex-col items-center">
            <input
              type="text"
              autoComplete="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            <div className="flex items-center my-4 w-full">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Sign Up Button */}
            <button
              type="button"
              onClick={() => {
                try {
                  // Redirecting the user to the Google OAuth2 login page
                  window.location.href = `${backendDomain}/oauth2/authorization/google`;
                } catch (err) {
                  console.error('Google SignUp Error:', err);
                  setError(err.message || 'Google signup failed');
                }
              }}
              className="cursor-pointer w-full bg-white border p-3 rounded-md font-semibold flex items-center justify-center gap-3 hover:shadow-md transition"
            >
              <FcGoogle size={24} />
              <span className="text-gray-700">Continue with Google</span>
            </button>

          </form>
        )}
        {!showForgotPassword && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-blue-600 font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        )}

        {/* Forgot Password UI */}
        {showForgotPassword && (
          <div className="w-full mt-6 p-4 bg-white rounded-lg shadow-inner">
            {emailSent ? (
              <>
                <p className="text-green-700 text-sm font-semibold">{resetMessage}</p>
                <button
                  onClick={() => {
                    setShowForgotPassword(false);
                    setEmailSent(false);
                    setEmail('');
                  }}
                  type="button"
                  className="w-full bg-blue-600 text-white p-2 rounded-md font-semibold mt-4"
                >
                  Back to Sign In
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-bold mb-2">Reset Password</h2>
                <form onSubmit={handleForgotPasswordSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-3 border rounded-md"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-md font-semibold cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                </form>
                {resetMessage && <p className="mt-2 text-sm text-gray-700">{resetMessage}</p>}
                <button
                  onClick={() => setShowForgotPassword(false)}
                  type="button"
                  className="w-full bg-blue-600 text-white p-2 rounded-md font-semibold mt-2 cursor-pointer"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        )}

        {/* Sign Up Prompt */}
        {!showForgotPassword && (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
