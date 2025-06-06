import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Slideshow from "../style/Slideshow";
import axios from 'axios';
import api from '../services/api'; 
import { Link } from 'react-router-dom';


const HomeAfterLogin = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [songs, setSongs] = useState([]);
  const [imageError, setImageError] = useState(false);

  const [showPopup, setShowPopup] = useState(false); 
  const token = localStorage.getItem("JWT_TOKEN");
  const csrfToken = localStorage.getItem('CSRF_TOKEN'); 







  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get("/auth/user");

        const data = res.data;
        setUserData(data);
        localStorage.setItem("USER_DETAILS", JSON.stringify(data)); // ✅ Save to localStorage
      } catch (error) {

        const cached = localStorage.getItem("USER_DETAILS");
        if (cached) {
          setUserData(JSON.parse(cached));
        }
      }
    };

    fetchUserData();
  }, []);


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
      const response = await api.post(
        "/image/process",
        formData,
        {
          headers: {
        ...api.defaults.headers, 
        'Content-Type': 'multipart/form-data',
          },
        }
      );

      setSongs(response.data);
    } catch (err) {
      setError('Error uploading image or processing failed.');
    } finally {
      setLoading(false);
    }
  };


  if (!userData) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">


      <div className="flex-grow flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 animate-pulse">Welcome, {userData.name}</h1>
        <p className="text-xl text-white">Here's your personalized music space!</p>
        <p className="text-lg text-white  mt-2">Upload an image to discover new music vibes.</p>
        <div className="absolute top-4 right-4">
          <div
            className="w-10 h-10 rounded-full overflow-hidden bg-blue-600 hover:bg-blue-900 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
            onClick={() => setShowPopup(!showPopup)}
          >
            {userData.profileImageUrl && userData.profileImageUrl.trim() !== "" && !imageError ? (
              <img
                src={userData.profileImageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-lg font-bold">
                {userData?.name?.charAt(0).toUpperCase() || "?"}
              </span>
            )}
          </div>


          {/* Popup Info */}
          {showPopup && (
            <div
              className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50"
              style={{ width: 'fit-content' }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-gray-800">PROFILE</p>
                <button
                  className="text-blue-600 hover:text-blue-800 transition-colors ml-4"
                  onClick={() => setShowPopup(false)}
                >
                  ✖
                </button>
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Name:</strong> {userData.name || "N/A"}</p>
                <p><strong>Username:</strong> {userData.username || "N/A"}</p>
                <p><strong>Email:</strong> {userData.email || "N/A"}</p>
              </div>

              <button
                className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/signin';
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>


        <div className="flex flex-col items-center justify-center py-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Click upload image button to upload a photo</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
            <div className="relative mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-900 transition-colors">
                {image ? image.name : 'Upload Image'}
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-white">Click search music button to get music</h2>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 cursor-pointer transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Search Music'}
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
        {songs.length > 0 && (
          <div className="bg-slate-950 py-10 px-4 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Recommended Songs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {songs.map((song, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
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

      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>

  );
};

export default HomeAfterLogin;
