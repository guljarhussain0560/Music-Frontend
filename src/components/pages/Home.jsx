import React from "react";
import { Link } from "react-router-dom";
import MusicBackground from "../style/MusicBackground";
import { FaMusic, FaImage, FaArrowRight, FaHeadphones } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col text-neutral-200">
      {/* Premium Ambient Background */}
      <MusicBackground />

      {/* Top Navbar */}
      <header className="w-full z-30 px-6 py-4 bg-[#000000]/60 border-b border-neutral-850 backdrop-blur-md flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-[#121212] border border-neutral-800 p-2 rounded-lg group-hover:border-neutral-700 transition-colors">
            <FaMusic className="text-[#1db954] text-sm animate-pulse" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Music Vibes
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          <Link to="/about" className="hover:text-white transition-colors duration-150">About</Link>
          <Link to="/services" className="hover:text-white transition-colors duration-150">Services</Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-150">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
        </nav>

        <div className="flex items-center gap-3.5">
          <Link
            to="/signin"
            className="px-4 py-2 text-xs font-bold text-neutral-405 hover:text-white transition-all duration-150"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4.5 py-2 text-xs font-bold rounded-full bg-[#1db954] text-black hover:bg-[#1ed760] transition-all duration-150 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:py-20 z-20">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-neutral-800 text-[10px] font-bold uppercase tracking-wider text-neutral-450 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1db954]"></span>
            Vision to Audio Engine
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight max-w-3xl">
            Translate Your Moments Into{" "}
            <span className="text-[#1db954]">
              Personalized Music
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-10 max-w-xl font-normal leading-relaxed">
            Turn visual parameters—color, style, and tone—into custom music. Upload any picture and let our system find the perfect matching track.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-[#1db954] hover:bg-[#1ed760] text-black shadow-md transition-all hover:scale-105"
            >
              Start Free <FaArrowRight className="text-xs" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-[#121212] hover:bg-[#282828] text-white border border-neutral-800 transition-all hover:scale-105"
            >
              How it works
            </Link>
          </div>

          {/* Clean Flat Features Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-neutral-850 pt-12">
            <div className="p-6 bg-[#121212] border border-neutral-850 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-4">
                <FaImage size={15} />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Image Parameter Mapping</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Analyzes key indicators from your photos, identifying colors, light settings, and scene features to determine target mood values.
              </p>
            </div>

            <div className="p-6 bg-[#121212] border border-neutral-850 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-4">
                <FaMusic size={15} />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Smart Sync Search</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Cross-references the generated mood metrics with a massive curated catalog to extract high-accuracy musical matches.
              </p>
            </div>

            <div className="p-6 bg-[#121212] border border-neutral-850 rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-[#181818] border border-neutral-800 flex items-center justify-center text-[#1db954] mb-4">
                <FaHeadphones size={15} />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Instant Streaming Links</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Provides direct, instant redirects to external media, allowing you to stream your matched tracks with a single click.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-neutral-500 text-xs border-t border-neutral-900 bg-[#000000]/60 z-20">
        &copy; {new Date().getFullYear()} Music Vibes. Translating parameters to soundscapes.
      </footer>
    </div>
  );
}
