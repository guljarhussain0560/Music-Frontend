import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex justify-center items-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
          About Us
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed text-justify">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Music Vibes</span> —
          your ultimate destination for discovering music that resonates with
          you. Our platform uses cutting-edge technology to suggest songs based
          on your mood, images, and experiences. Whether you're seeking a
          calming tune, an energetic anthem, or something new to inspire your
          day, we've got you covered.
          <br />
          <br />
          At Music Vibes, we believe music is more than just sound it's
          emotion, memory, and connection. Join our community, explore endless
          musical journeys, and let every moment find its perfect soundtrack.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-600 px-6 py-2">
          <li className="mb-2">
            Search for songs based on your mood, images, and experiences.
          </li>
          <li className="mb-2">
            Discover new music tailored to your preferences.
          </li>
          <li className="mb-2">
            Our platform uses advanced algorithms to suggest songs that fit your
            vibe.
          </li>
        </ul>
        <div className="flex justify-center space-x-4 mt-8">
          <Link
            className="text-white rounded-full p-3 bg-blue-600 hover:bg-blue-700 transition duration-300"
            to="https://www.facebook.com/share/16XDFqT2em/"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            className="text-white rounded-full p-3 bg-blue-400 hover:bg-blue-500 transition duration-300"
            to="https://x.com/guljar7865?t=HW5cQZhgpQCXBWFcumjD3A&s=09"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            className="text-white rounded-full p-3 bg-blue-700 hover:bg-blue-800 transition duration-300"
            to="https://www.linkedin.com/in/guljar-hussain-7953a9243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedin size={24} />
          </Link>
          <a
            className="text-white rounded-full p-3 bg-pink-500 hover:bg-pink-600 transition duration-300"
            href="https://www.instagram.com/guljarhussain7865?igsh=MW9jaHA0dmtsNXZ6bg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            className="text-white rounded-full p-3 bg-gray-800 hover:bg-gray-900 transition duration-300"
            href="https://github.com/guljarhussain0560"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
