import React from 'react';
import Slideshow from "../style/Slideshow"; // Adjust the import path as necessary

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slideshow />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Music Vibes</h1>
        <p className="text-xl mb-8">Discover music from your images 🎧</p>
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}