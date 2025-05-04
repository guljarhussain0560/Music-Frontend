import React, { useState, useEffect } from 'react';
import { signIn } from './authService';
import { useNavigate, Link } from 'react-router-dom';
import Slideshow from "../components/style/Slideshow";
import api from '../components/services/api'; // Your custom axios instance

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loged ,setLoged] = useState(false);
  const navigate = useNavigate();
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN || 'http://localhost:5000'; // Fallback to localhost

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

      if (res?.data?.jwtToken) {
        localStorage.setItem('JWT_TOKEN', res.data.jwtToken);
      }

      if (res?.headers?.['X-XSRF-TOKEN']) {
        localStorage.setItem('X-XSRF-TOKEN', res.headers['X-XSRF-TOKEN']);
      }

      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center"  >
      <Slideshow /> {/* Slideshow component */}
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        {/* App Name */}
        <h1 className="text-4xl font-bold text-blue-600 mb-2">YourAppName</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Connect with the world through music.
        </p>

        {/* Login Form */}
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
            className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Login Redirect Button */}
          <div className="w-full flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.location.href = `${backendDomain}/oauth2/authorization/google`;
              }}
              className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700"
            >
              Continue with Google
            </button>
          </div>
        </form>

        {/* Sign Up Redirect */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
