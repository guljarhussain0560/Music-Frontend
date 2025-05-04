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
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Music Vibes</span> —
          your ultimate destination for discovering music that resonates with
          you. Our platform uses cutting-edge technology to suggest songs based
          on your mood, images, and experiences. Whether you're seeking a
          calming tune, an energetic anthem, or something new to inspire your
          day, we've got you covered.
          <br />
          <br />
          At Harmony Hub, we believe music is more than just sound — it's
          emotion, memory, and connection. Join our community, explore endless
          musical journeys, and let every moment find its perfect soundtrack.
        </p>
        <ul className="list-disc list-inside mb-4 text-sm px-6 py-2">
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
        <div className="flex space-x-4 mt-10">
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaFacebook size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaTwitter size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaLinkedin size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaInstagram size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
