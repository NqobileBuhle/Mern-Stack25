import React from "react";

const HeroSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background: "linear-gradient(to bottom, #fad4d6, #fdd6d3, #fef2e3)",
      }}
    >
      {/* Navigation */}
      <header className="flex justify-between items-center px-12 py-6">
        <nav className="flex gap-8 text-sm text-gray-700">
          <a href="#" className="hover:underline">
            New Arrivals
          </a>
          <a href="#" className="hover:underline">
            Make Up
          </a>
          <a href="#" className="hover:underline">
            Skincare
          </a>
          <a href="#" className="hover:underline">
            Fragrance
          </a>
        </nav>
        <div className="text-2xl font-bold text-pink-950">ST</div>
        <nav className="flex gap-8 text-sm text-gray-700">
          <a href="#" className="hover:underline">
            Journal
          </a>
          <a href="#" className="hover:underline">
            Academy
          </a>
          <a href="#" className="hover:underline">
            Cart (0)
          </a>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative flex flex-col items-center text-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/28112139/pexels-photo-28112139/free-photo-of-woman-holding-vials-of-cosmetics-around-face.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white">
          Face Your Skin.
        </h1>
        <p className="text-white text-lg max-w-lg mt-4">
          A Cool-Toned Color Story Featuring 15 NEW Enchanting Muted Rosy And
          Nude Shades.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-pink-600 text-white py-3 px-6 text-lg rounded-md shadow-lg hover:bg-pink-500">
            Shop Now
          </button>
          <button className="bg-white text-pink-600 py-3 px-6 text-lg rounded-md shadow-lg hover:bg-gray-200">
            Explore More
          </button>
        </div>
      </main>

      {/* Product Slider */}
      <section className="bg-white py-6">
        <h2 className="text-gray-800 text-lg font-bold text-left px-12">
          Just In
        </h2>
        <div className="flex gap-6 overflow-x-auto px-12 py-4">
          {/* Product Cards */}
          {[
            { title: "Glazed N’ Amused", price: "$52.00" },
            { title: "I Need A Nude Lip Crayon", price: "$52.00" },
            { title: "Bronze Cheek", price: "$52.00" },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 w-64 rounded-lg shadow-md p-4 flex-shrink-0"
            >
              <img
                src="https://images.pexels.com/photos/28112139/pexels-photo-28112139/free-photo-of-woman-holding-vials-of-cosmetics-around-face.jpeg"
                alt={product.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-gray-700 text-lg font-semibold">
                {product.title}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="text-pink-600 mt-2 text-sm hover:underline">
                + Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
