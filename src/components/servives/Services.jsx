
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex justify-center items-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Our Services</h1>
        <p className="text-gray-600 mb-6">
          At Music Vibes, we offer a range of services to enhance your music discovery experience. Explore the features below to see how we can help you find new vibes!
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Image-Based Music Discovery</h2>
        <p className="text-gray-700 mb-4">
          Upload an image, and our platform will analyze it to recommend music that matches its vibe. Whether it's a serene landscape or a vibrant cityscape, we’ll find the perfect soundtrack for you.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Personalized Music Space</h2>
        <p className="text-gray-700 mb-4">
          Create your own music space with tailored recommendations based on your uploads and preferences. Your personalized dashboard makes it easy to explore new tracks.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Easy Upload and Access</h2>
        <p className="text-gray-700 mb-4">
          Our user-friendly interface lets you upload images with a single click and instantly access music recommendations. No complicated steps—just upload and enjoy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Secure and Private Experience</h2>
        <p className="text-gray-700 mb-4">
          We prioritize your privacy. Your uploaded images and personal information are securely stored and never shared without your consent. Learn more in our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>

        <p className="text-gray-600 mt-6">
          Ready to discover new music? Start by uploading an image on your dashboard!
        </p>
      </div>
    </div>
  );
};

export default Services;