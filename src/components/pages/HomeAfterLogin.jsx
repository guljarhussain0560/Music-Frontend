import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Slideshow from "../style/Slideshow";
import axios from 'axios';

const HomeAfterLogin = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [songs, setSongs] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State for toggling popup
  const token = localStorage.getItem("JWT_TOKEN");
  const csrfToken = localStorage.getItem('X-XSRF-TOKEN'); // Retrieve CSRF token from localStorage
  console.log('CSRF Token:', csrfToken);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/auth/user`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/api/image/process`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'X-XSRF-TOKEN': csrfToken, // Include CSRF token in headers
          },
        }
      );

      // ✅ Set the returned list of songs
      setSongs(response.data);
    } catch (err) {
      setError('Error uploading image or processing failed.');
    } finally {
      setLoading(false);
    }
  };

  if (!userData) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <div className="flex-grow flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 animate-pulse">Welcome, {userData.name}</h1>
        <p className="text-xl text-gray-700">Here's your personalized music space!</p>
        <p className="text-lg text-gray-600 mt-2">Upload an image to discover new music vibes.</p>
        {/* Profile Icon */}
        <div className="absolute top-4 right-4">
          <div
            className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-900 text-white flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110"
            onClick={() => setShowPopup(!showPopup)}
          >

            {userData.profilePictureUrl
              ? (
                <img
                  src={userData.profilePictureUrl}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/path/to/default-profile.png'; }}
                />
              ) : (
                userData.username[0].toUpperCase()
              )}
          </div>
          {showPopup && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 border border-gray-200" style={{ width: 'fit-content' }}>
              <p className='font-bold text-gray-800'>Name : {userData.name}</p>
              <p className="font-bold text-gray-800">Username: {userData.username}</p>
              <p className="font-bold text-gray-800">Email: {userData.email}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("JWT_TOKEN");
                  localStorage.removeItem("CSRF_TOKEN");
                  localStorage.removeItem("X-XSRF-TOKEN");
                  localStorage.removeItem("XSRF_TOKEN");
                  localStorage.removeItem("USERNAME");
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Upload an Image</h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
          <div className="relative mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-900 transition-colors">
              {image ? image.name : 'Choose File'}
            </div>
          </div>
          <button
            type="submit"
            className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Upload Image'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded preview"
            className="mt-4 w-64 rounded-lg shadow-lg border border-gray-300"
          />
        )}
      </div>

      {/* Songs Display Section */}
      {songs.length > 0 && (
        <div className="py-10 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800 underline decoration-wavy">Recommended Songs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {songs.map((song, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{
                  perspective: '1000px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                onClick={() => window.open(song.url, '_blank', 'noopener,noreferrer')}
              >
                <img
                  src={song.coverImage}
                  alt={song.title}
                  className="w-full h-48 object-cover rounded mb-4"
                  style={{
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <h3 className="text-xl font-semibold text-gray-800">{song.title}</h3>
                <p className="text-gray-700">Artist: {song.artist}</p>
                <p className="text-gray-600">Album: {song.album}</p>
                <p className="text-gray-600 mb-2">Genre: {song.genre}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="w-full bg-blue-300 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default HomeAfterLogin;
