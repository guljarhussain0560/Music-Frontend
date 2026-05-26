import React, { useState } from 'react';
import MusicBackground from "../components/style/MusicBackground";
import { signUp } from './authService';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaMusic, FaIdCard } from 'react-icons/fa';

const SignupPage = () => {
  const [nameOfUser, setNameOfUser] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await signUp({ nameOfUser, email, username, password });
      console.log('SignUp Success:', res);
      window.location.href = '/signin';
    } catch (err) {
      console.error('SignUp Error:', err);
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative text-neutral-200">
      {/* Dark Ambient Background */}
      <MusicBackground />

      <div className="bg-[#181818] border border-neutral-800/80 p-8 md:p-10 rounded-xl shadow-xl w-full max-w-md flex flex-col items-center">
        
        {/* Branding header */}
        <Link to="/" className="flex flex-col items-center mb-8 group">
          <div className="bg-[#121212] border border-neutral-800 p-2.5 rounded-lg mb-3">
            <FaMusic className="text-[#1db954] text-base" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Music Vibes
          </h1>
          <p className="text-xs text-neutral-450 mt-1">Create your profile</p>
        </Link>

        {/* Signup Form */}
        <form onSubmit={handleSignUp} className="w-full flex flex-col">
          {/* Full Name */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
              <FaIdCard className="text-xs" />
            </span>
            <input
              type="text"
              placeholder="Full Name"
              value={nameOfUser}
              onChange={(e) => setNameOfUser(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
              required
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
              <FaEnvelope className="text-xs" />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#121212] border border-neutral-855 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
              required
            />
          </div>

          {/* Username */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
              <FaUser className="text-xs" />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
              required
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
              <FaLock className="text-xs" />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] focus:border-[#1db954] text-sm transition-all"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-950/30 border border-red-900/50 text-red-400 rounded-lg text-xs mb-4 text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-2.5 rounded-full text-sm transition-all disabled:opacity-50 hover:scale-102"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>

          <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-neutral-850"></div>
            <span className="mx-3 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">OR</span>
            <div className="flex-grow border-t border-neutral-850"></div>
          </div>

          {/* Google Sign Up Button */}
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

        <div className="text-center mt-6 text-xs">
          <p className="text-neutral-500">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#1db954] font-bold hover:text-[#1ed760] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
