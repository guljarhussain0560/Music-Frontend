import React, { useState, useEffect } from 'react';

const images = Array.from({ length: 31 }, (_, i) => `/posters/poster${i + 1}.jpg`);

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Switching to image:', (currentImage + 1) % images.length);
      setCurrentImage((prev) => (prev + 1) % images.length);
      setNextImage((prev) => (prev + 1) % images.length);
    }, 5000);

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onerror = () => console.error(`Failed to load: ${image}`);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1] after:absolute after:inset-0 after:bg-black/70">
      {/* Background (next) image */}
      <img
        src={images[nextImage]}
        alt={`Next Poster ${nextImage + 1}`}
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-1000 ease-in-out"
      />
      {/* Foreground (current) image */}
      <img
        src={images[currentImage]}
        alt={`Current Poster ${currentImage + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 animate-zoom-out"
        onError={(e) => console.error(`Image load error for ${images[currentImage]}:`, e)}
      />
    </div>
  );
};

export default Slideshow;