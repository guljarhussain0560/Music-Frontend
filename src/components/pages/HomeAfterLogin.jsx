import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import MusicBackground from "../style/MusicBackground";
import api from '../services/api'; 
import { Link } from 'react-router-dom';
import { FaMusic, FaUpload, FaPlay, FaImage, FaSignOutAlt, FaTimes, FaUser, FaCompass } from 'react-icons/fa';

const HomeAfterLogin = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [songs, setSongs] = useState([]);
  const [imageError, setImageError] = useState(false);

  const [showPopup, setShowPopup] = useState(false); 
  const token = localStorage.getItem("JWT_TOKEN");

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get("/auth/user");
        const data = res.data;
        setUserData(data);
        localStorage.setItem("USER_DETAILS", JSON.stringify(data));
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
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setSongs([]); // Clear old recommended songs
      setError('');
    }
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

      setSongs(response.data.songs || []);
    } catch (err) {
      setError('Error uploading image or processing failed.');
    } finally {
      setLoading(false);
    }
  };

  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white relative">
        <MusicBackground />
        <div className="bg-[#181818] border border-neutral-800 p-8 rounded-xl flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-[#1db954] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-neutral-400 text-xs font-semibold">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col text-neutral-200 relative">
      {/* Premium Ambient Background */}
      <MusicBackground />

      {/* Structured Top Header */}
      <header className="w-full z-40 sticky top-0 px-6 py-4 bg-[#000000]/60 border-b border-neutral-850 backdrop-blur-md flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-[#121212] border border-neutral-800 p-2 rounded-lg group-hover:border-neutral-700 transition-colors">
            <FaMusic className="text-[#1db954] text-sm animate-pulse" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Music Vibes
          </span>
        </Link>

        {/* Profile Control */}
        <div className="relative">
          <div
            className="w-9 h-9 rounded-full overflow-hidden bg-[#181818] border border-neutral-800 hover:border-neutral-600 text-white flex items-center justify-center cursor-pointer transition-transform font-bold text-xs"
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
              <span>
                {userData?.name?.charAt(0).toUpperCase() || "?"}
              </span>
            )}
          </div>

          {/* Profile Dropdown */}
          {showPopup && (
            <div className="absolute right-0 mt-3 bg-[#181818] border border-neutral-800 shadow-2xl rounded-xl p-5 z-50 w-72 text-zinc-200">
              <div className="flex justify-between items-center mb-3.5 pb-2 border-b border-neutral-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Account Profile</span>
                <button
                  className="text-neutral-450 hover:text-white transition-colors"
                  onClick={() => setShowPopup(false)}
                >
                  <FaTimes size={10} />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#121212] flex items-center justify-center border border-neutral-800 text-[#1db954]">
                  <FaUser className="text-sm" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs truncate text-white">{userData.name || "N/A"}</h4>
                  <p className="text-[10px] text-neutral-450 truncate">@{userData.username || "N/A"}</p>
                </div>
              </div>

              <div className="text-xs text-zinc-300 space-y-1 bg-[#121212] border border-neutral-850 p-2.5 rounded-lg mb-4">
                <span className="text-[9px] text-neutral-500 block uppercase tracking-wider">Email</span>
                <span className="truncate block font-medium text-xs">{userData.email || "N/A"}</span>
              </div>

              <button
                className="w-full px-3 py-2 bg-red-650 hover:bg-red-600 border border-red-900/40 text-white rounded-full transition text-xs font-semibold flex items-center justify-center gap-2"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/signin';
                }}
              >
                <FaSignOutAlt size={10} /> Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Dashboard Space */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 z-20">
        
        {/* Workspace Card */}
        <div className="w-full max-w-4xl bg-[#121212] border border-neutral-850 rounded-xl p-8 md:p-10 shadow-lg flex flex-col items-center mb-12">
          
          {/* Welcome Panel */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
              Welcome, {userData.name}
            </h1>
            <p className="text-neutral-400 max-w-md mx-auto text-xs font-normal">
              Analyze colors, highlights, and structures from any image to output matching tracks from our curated music index.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-center gap-6">
            
            {/* Flat Upload Dropzone */}
            <div className="w-full max-w-lg flex flex-col">
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 text-center">
                Step 1: Upload Source Image
              </label>
              
              <div className="relative group w-full aspect-[2.2/1] rounded-xl border border-neutral-800 bg-[#181818]/60 hover:bg-[#181818] hover:border-neutral-700 transition-all duration-200 flex flex-col items-center justify-center p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  disabled={loading}
                />
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-1">
                    <FaImage className="text-sm" />
                  </div>
                  <span className="text-xs font-bold text-white">
                    {image ? image.name : 'Choose image file or drag here'}
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    JPG, JPEG, or PNG formats
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Preview */}
            {image && (
              <div className="flex flex-col items-center gap-2 animate-in fade-in duration-200">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">File Preview</span>
                <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-neutral-800 bg-zinc-950/40 group">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded preview"
                    className="w-full h-full object-cover"
                  />
                  {/* Remove hover button */}
                  {!loading && (
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setSongs([]);
                        setError('');
                      }}
                      className="absolute top-2.5 right-2.5 p-1.5 bg-black/70 hover:bg-black text-neutral-400 hover:text-white rounded-full transition-colors cursor-pointer z-20"
                      title="Remove Image"
                    >
                      <FaTimes size={10} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Action Trigger */}
            <div className="w-full max-w-xs flex flex-col items-center gap-2 mt-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                Step 2: Sync and Search
              </label>
              
              <button
                type="submit"
                className={`w-full py-2.5 bg-[#1db954] hover:bg-[#1ed760] text-black font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Synthesizing...' : 'Search Music'}
              </button>

              {error && (
                <p className="text-red-400 text-xs font-semibold text-center mt-3 p-2 bg-red-950/30 border border-red-900/30 rounded-lg w-full">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Recommended Songs Grid */}
        {songs.length > 0 && (
          <div className="w-full max-w-6xl py-6 animate-in fade-in slide-in-from-bottom-3 duration-250">
            <div className="text-center mb-8 border-b border-neutral-850 pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                <FaMusic className="text-[#1db954] text-sm" /> Recommended Tracklist
              </h2>
              <p className="text-neutral-400 text-xs mt-1">Select a card to play the full audio stream</p>
            </div>

            {/* Spotify-like Grid List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {songs.map((song, index) => (
                <div
                  key={index}
                  className="bg-[#181818] border border-transparent hover:bg-[#282828] transition-all duration-150 rounded-lg p-4 cursor-pointer flex flex-col relative group"
                  onClick={() => window.open(song.url, '_blank', 'noopener,noreferrer')}
                >
                  {/* Clean rounded cover image */}
                  <div className="relative w-full aspect-square rounded-md overflow-hidden mb-3.5 border border-zinc-950">
                    <img
                      src={song.coverImage}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Spotify Green Hover Play Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#1db954] flex items-center justify-center text-black shadow-lg">
                        <FaPlay className="text-xs ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Metadata fields */}
                  <div className="flex-grow flex flex-col min-w-0">
                    <h3 className="text-sm font-bold text-white mb-1 truncate tracking-wide">
                      {song.title}
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">Artist: <span className="text-neutral-200">{song.artist}</span></p>
                    <p className="text-xs text-neutral-400 truncate">Album: <span className="text-neutral-300 font-light">{song.album}</span></p>
                    
                    <span className="mt-3.5 text-[9px] font-bold tracking-wider uppercase bg-[#121212] text-[#1db954] border border-neutral-800 px-2.5 py-0.5 rounded-full w-fit">
                      {song.genre}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <div className="w-full mt-auto z-20">
        <Footer />
      </div>
    </div>
  );
};

export default HomeAfterLogin;
