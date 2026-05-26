import React from 'react';
import { Link } from 'react-router-dom';
import MusicBackground from '../style/MusicBackground';
import { FaChevronLeft, FaImage, FaHeadphones, FaCloudUploadAlt, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen text-neutral-300 p-6 flex flex-col justify-center items-center relative">
      {/* Premium Ambient Background */}
      <MusicBackground />

      {/* Navigation Return Button */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:bg-[#282828] hover:scale-102 transition-all"
        >
          <FaChevronLeft size={10} /> Back Home
        </Link>
      </div>

      <div className="max-w-3xl bg-[#181818] border border-neutral-850 p-8 md:p-10 rounded-xl shadow-xl w-full text-neutral-200 z-20 my-12">
        <h1 className="text-3xl font-extrabold mb-3 text-center text-white tracking-tight">
          Our Services
        </h1>
        <p className="text-neutral-400 text-center mb-8 text-xs font-normal">
          At Music Vibes, we offer a range of services to enhance your music discovery experience. Explore our core features below.
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-[#121212] border border-neutral-850 p-5 rounded-xl hover:bg-[#121212]/80 transition-all duration-200 group">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-3.5">
              <FaImage size={14} />
            </div>
            <h2 className="text-xs font-bold text-white mb-2 tracking-wide uppercase">1. Image-Based Discovery</h2>
            <p className="text-xs text-neutral-450 leading-relaxed font-light">
              Upload an image, and our platform will analyze it to recommend music that matches its vibe. Whether it's a serene landscape or a vibrant cityscape, we’ll find the perfect soundtrack for you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121212] border border-neutral-850 p-5 rounded-xl hover:bg-[#121212]/80 transition-all duration-200 group">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-3.5">
              <FaHeadphones size={14} />
            </div>
            <h2 className="text-xs font-bold text-white mb-2 tracking-wide uppercase">2. Personalized Space</h2>
            <p className="text-xs text-neutral-450 leading-relaxed font-light">
              Create your own music space with tailored recommendations based on your uploads and preferences. Your personalized dashboard makes it easy to explore new tracks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121212] border border-neutral-850 p-5 rounded-xl hover:bg-[#121212]/80 transition-all duration-200 group">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-3.5">
              <FaCloudUploadAlt size={14} />
            </div>
            <h2 className="text-xs font-bold text-white mb-2 tracking-wide uppercase">3. Easy Upload & Access</h2>
            <p className="text-xs text-neutral-450 leading-relaxed font-light">
              Our user-friendly interface lets you upload images with a single click and instantly access music recommendations. No complicated steps—just upload and enjoy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#121212] border border-neutral-850 p-5 rounded-xl hover:bg-[#121212]/80 transition-all duration-200 group">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-3.5">
              <FaShieldAlt size={14} />
            </div>
            <h2 className="text-xs font-bold text-white mb-2 tracking-wide uppercase">4. Private Experience</h2>
            <p className="text-xs text-neutral-450 leading-relaxed font-light">
              We prioritize your privacy. Your uploaded images and personal information are securely stored and never shared. Learn more in our{' '}
              <Link to="/privacy-policy" className="text-[#1db954] hover:underline font-semibold">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="text-center bg-[#121212] border border-neutral-850 rounded-xl p-4 text-xs text-neutral-450 font-normal">
          Ready to discover new music?{' '}
          <Link to="/signin" className="text-[#1db954] font-bold hover:underline">
            Sign in
          </Link>{' '}
          and upload an image on your dashboard!
        </div>
      </div>
    </div>
  );
};

export default Services;