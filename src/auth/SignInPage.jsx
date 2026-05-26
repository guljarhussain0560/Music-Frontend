import React, { useEffect, useState } from 'react';
import { signIn } from './authService';
import { useNavigate, Link } from 'react-router-dom';
import MusicBackground from '../components/style/MusicBackground';
import api from '../components/services/api';
import { FcGoogle } from 'react-icons/fc';
import { FaUser, FaLock, FaEnvelope, FaMusic } from 'react-icons/fa';

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
      await signIn(username, password);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const [resetLoading, setResetLoading] = useState(false);

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setResetMessage('');
    if (!email) {
      setResetMessage('Please enter your email.');
      return;
    }
    setResetLoading(true);
    try {
      const response = await api.post('/auth/public/forgot-password', { email });
      setResetMessage(response.data.message || 'Password reset email sent successfully');
      setEmailSent(true);
    } catch (err) {
      setResetMessage(err.response?.data?.message || 'Error sending password reset email');
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative text-neutral-200">
      {/* Dark Ambient Background */}
      <MusicBackground />

      <div className="bg-[#181818] border border-neutral-800/80 p-8 md:p-10 rounded-xl shadow-xl w-full max-w-md flex flex-col items-center">
        
        {/* Branding */}
        <Link to="/" className="flex flex-col items-center mb-8 group">
          <div className="bg-[#121212] border border-neutral-800 p-2.5 rounded-lg mb-3">
            <FaMusic className="text-[#1db954] text-base" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Music Vibes
          </h1>
          <p className="text-xs text-neutral-450 mt-1">Sign in to your account</p>
        </Link>

        {!showForgotPassword && (
          <form onSubmit={handleSignIn} className="w-full flex flex-col">
            {/* Username Input */}
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                <FaUser className="text-xs" />
              </span>
              <input
                type="text"
                autoComplete="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <FaLock className="text-xs" />
              </span>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-950/30 border border-red-900/55 text-red-400 rounded-lg text-xs mb-4 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-2.5 rounded-full text-sm transition-all disabled:opacity-50 hover:scale-102"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            <div className="flex items-center my-5 w-full">
              <div className="flex-grow border-t border-neutral-800"></div>
              <span className="mx-3 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">OR</span>
              <div className="flex-grow border-t border-neutral-800"></div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={() => {
                try {
                  window.location.href = `${backendDomain}/oauth2/authorization/google`;
                } catch (err) {
                  console.error('Google SignUp Error:', err);
                  setError(err.message || 'Google signup failed');
                }
              }}
              className="cursor-pointer w-full bg-[#121212] border border-neutral-800 hover:bg-[#181818] p-2.5 rounded-full font-semibold text-xs flex items-center justify-center gap-2.5 transition-all text-neutral-200 hover:scale-102"
            >
              <FcGoogle size={18} />
              <span>Continue with Google</span>
            </button>
          </form>
        )}

        {!showForgotPassword && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-[#1db954] font-medium hover:text-[#1ed760] transition-colors text-xs hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        )}

        {/* Forgot Password Section */}
        {showForgotPassword && (
          <div className="w-full mt-2 p-5 bg-[#121212] border border-neutral-800 rounded-xl">
            {emailSent ? (
              <div className="text-center">
                <p className="text-green-400 text-xs font-semibold mb-4">{resetMessage}</p>
                <button
                  onClick={() => {
                    setShowForgotPassword(false);
                    setEmailSent(false);
                    setEmail('');
                  }}
                  type="button"
                  className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black p-2.5 rounded-full font-semibold text-xs transition"
                >
                  Back to Sign In
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Reset Password
                </h2>
                <form onSubmit={handleForgotPasswordSubmit} className="space-y-3.5">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-550">
                      <FaEnvelope className="text-xs" />
                    </span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-[#181818] border border-neutral-800 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-xs transition-all"
                      required
                    />
                  </div>
                  
                  {resetMessage && (
                    <p className="text-[10px] text-yellow-400 font-medium text-center">{resetMessage}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black py-2.5 rounded-full font-semibold text-xs transition-all"
                    disabled={resetLoading}
                  >
                    {resetLoading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </form>
                
                <button
                  onClick={() => {
                    setShowForgotPassword(false);
                    setResetMessage('');
                  }}
                  type="button"
                  className="w-full mt-2 bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white py-2 rounded-full font-semibold text-xs transition"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        )}

        {!showForgotPassword && (
          <div className="text-center mt-6 text-xs">
            <p className="text-neutral-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#1db954] font-bold hover:text-[#1ed760] hover:underline">
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
