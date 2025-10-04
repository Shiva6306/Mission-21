import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/bg video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        {/* Title */}
        <div className="mb-8">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
            
            .gradient-text {
            font-family: 'Orbitron', monospace;
            font-weight: normal;
            font-style: normal;
}
            
            .gradient-text{
              font-family: 'Orbitron', monospace;
            }
            
            .gradient-text {
              background: linear-gradient(180deg, white 0%, rgb(79, 22, 9) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            @keyframes pulse {
              0%, 100% { transform: scale(1.1); }
              50% { transform: scale(1.15); }
            }
            
            .start-button:hover {
              animation: pulse 0.6s ease-in-out;
            }
          `}</style>
          
          <img 
            src="/21 clicks.png" 
            alt="21 Clicks" 
            className="w-auto h-32 mb-4"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8))' }}
          />
        </div>

        {/* Tagline */}
        <img 
          src="/slogan.png" 
          alt="Your Click. Your Path. Your Universe." 
          className="w-auto h-12 mb-12"
          style={{ filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.9))' }}
        />

        {/* Start Button */}
        <Link
          to="/categories"
          style={{ padding: '20px 64px', borderRadius: '16px', cursor: 'pointer', position: 'relative', transition: 'transform 0.3s', textDecoration: 'none', display: 'inline-block' }}
        >
          <img 
            src="/start game.png" 
            alt="START GAME" 
            style={{ position: 'relative', zIndex: 10, width: 'auto', height: '32px' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(4px)', borderRadius: '16px', zIndex: 0 }}></div>
        </Link>
      </div>
    </div>
  );
}