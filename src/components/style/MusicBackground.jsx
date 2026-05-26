import React from "react";

const MusicBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#000000] -z-50 overflow-hidden pointer-events-none">
      {/* Extremely Subtle Ambient Radial Spotify Green Glow */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-[#1db954]/5 blur-[120px] mix-blend-screen pointer-events-none"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />
      <div 
        className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-[#1db954]/3 blur-[120px] mix-blend-screen pointer-events-none"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />
      
      {/* Fine grid pattern for detail texture */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />
    </div>
  );
};

export default MusicBackground;
