import React, { useState } from 'react';
import Slideshow from "../components/style/Slideshow";
import { signUp, signInWithGoogle } from './authService';
import { FcGoogle } from 'react-icons/fc';

const SignupPage = () => {
  const [nameOfUser, setNameOfUser] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const backendDomain = import.meta.env.VITE_BACKEND_DOMAIN;
  const jwtToken = localStorage.getItem('JWT_TOKEN');
  const csrfToken = localStorage.getItem('CSRF_TOKEN');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await signUp({ nameOfUser, email, username, password });
      console.log('SignUp Success:', res);
      window.location.href = '/signin'; // After signup, go to signin page
    } catch (err) {
      console.error('SignUp Error:', err);
      setError(err.message || 'Signup failed');
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center">
      <Slideshow /> {/* Slideshow component */}
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-gray-300 rounded-lg shadow-lg">
        {/* Branding */}
        <h1 className="text-5xl text-blue-600 font-bold mb-4">Music Vibes</h1>
        <p className="text-xl text-gray-600 mb-8">Sign Up Here</p>

        {/* Form */}
        <form onSubmit={handleSignUp} className="w-full">
          <input
            type="text"
            placeholder="Full Name"
            value={nameOfUser}
            onChange={(e) => setNameOfUser(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>

          <div className="text-center my-4 text-gray-500">OR</div>

          {/* Google Sign Up Button */}
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

        <div className="text-center mt-6">
          <p>
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
