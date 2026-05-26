import React from "react";
import { Link } from "react-router-dom";
import MusicBackground from "../style/MusicBackground";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaChevronLeft
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-neutral-300 p-6 flex flex-col justify-center items-center relative">
      {/* Premium Ambient Background */}
      <MusicBackground />

      {/* Navigation Back Link */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:bg-[#282828] hover:scale-102 transition-all"
        >
          <FaChevronLeft size={10} /> Back Home
        </Link>
      </div>

      <div className="max-w-3xl bg-[#181818] border border-neutral-850 p-8 md:p-10 rounded-xl shadow-xl w-full text-neutral-200 z-20 my-12">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white tracking-tight">
          About Us
        </h1>
        
        <p className="mb-6 text-neutral-400 leading-relaxed text-justify text-sm font-light">
          Welcome to <span className="font-bold text-[#1db954]">Music Vibes</span> —
          your ultimate destination for discovering music that resonates with
          you. Our platform uses cutting-edge technology to suggest songs based
          on your mood, images, and experiences. Whether you're seeking a
          calming tune, an energetic anthem, or something new to inspire your
          day, we've got you covered.
          <br />
          <br />
          At Music Vibes, we believe music is more than just sound—it's
          emotion, memory, and connection. Join our community, explore endless
          musical journeys, and let every moment find its perfect soundtrack.
        </p>

        <div className="bg-[#121212] border border-neutral-850 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-zinc-300 mb-3 text-xs tracking-wider uppercase">Platform Capabilities</h3>
          <ul className="space-y-3.5 text-xs text-neutral-400">
            <li className="flex items-start gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[#1db954] mt-2"></span>
              <span>Search for songs based on your mood, images, and experiences.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[#1db954] mt-2"></span>
              <span>Discover new music tailored to your unique visual parameters.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[#1db954] mt-2"></span>
              <span>Our platform uses advanced analysis algorithms to match matching song metrics.</span>
            </li>
          </ul>
        </div>

        {/* Social connections */}
        <div className="flex justify-center space-x-3.5 mt-4">
          <a
            className="text-neutral-500 border h-9 w-9 flex justify-center items-center border-neutral-800 rounded-full bg-[#121212] hover:text-white hover:bg-neutral-800 transition duration-150"
            href="https://www.facebook.com/share/16XDFqT2em/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={13} />
          </a>
          <a
            className="text-neutral-500 border h-9 w-9 flex justify-center items-center border-neutral-800 rounded-full bg-[#121212] hover:text-white hover:bg-neutral-800 transition duration-150"
            href="https://x.com/guljar7865?t=HW5cQZhgpQCXBWFcumjD3A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={13} />
          </a>
          <a
            className="text-neutral-500 border h-9 w-9 flex justify-center items-center border-neutral-800 rounded-full bg-[#121212] hover:text-white hover:bg-neutral-800 transition duration-150"
            href="https://www.linkedin.com/in/guljar-hussain-7953a9243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={13} />
          </a>
          <a
            className="text-neutral-500 border h-9 w-9 flex justify-center items-center border-neutral-800 rounded-full bg-[#121212] hover:text-white hover:bg-neutral-800 transition duration-150"
            href="https://www.instagram.com/guljarhussain7865?igsh=MW9jaHA0dmtsNXZ6bg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={13} />
          </a>
          <a
            className="text-neutral-500 border h-9 w-9 flex justify-center items-center border-neutral-800 rounded-full bg-[#121212] hover:text-white hover:bg-neutral-800 transition duration-150"
            href="https://github.com/guljarhussain0560"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
