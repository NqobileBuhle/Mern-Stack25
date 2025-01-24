import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover object-cover"
      style={{
        backgroundImage: "url('https://www.wikitohow.com/wp-content/uploads/2023/05/gARNI-1-1024x576.png')",
      }}
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-60">
        <h1 className="text-7xl text-white font-bold "> Find Your Perfect  <br/>Ride Today</h1>
      </div>
    </section>
  );
};

export default HeroSection;
