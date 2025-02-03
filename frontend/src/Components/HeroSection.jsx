import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-beige min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4">
        {/* Left Section: Headline and Description */}
        <div>
          <p className="text-sm text-gray-500 uppercase mb-2">Sale for first purchase</p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Future of <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">facial cosmetics</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Our next-generation products are the answer to all your skincare needs.
          </p>
          <button className="mt-6 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-400">
            Order now
          </button>
          <div className="mt-8">
            <p className="text-sm font-semibold text-gray-600 mb-2">PRODUCT'S CATEGORY</p>
            <div className="flex gap-4">
              <button className="bg-blue-200 text-purple-700 py-1 px-4 rounded-full hover:bg-purple-300">
                Serum
              </button>
              <button className="bg-blue-200 text-purple-700 py-1 px-4 rounded-full hover:bg-purple-300">
                Face cream
              </button>
              <button className="bg-blue-200 text-purple-700 py-1 px-4 rounded-full hover:bg-purple-300">
                Mask
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Product Image and Info */}
        <div className="relative">
          {/* Product Image */}
          <div className="relative mx-auto ">
          <img
            src="https://images.pexels.com/photos/28112139/pexels-photo-28112139/free-photo-of-woman-holding-vials-of-cosmetics-around-face.jpeg"
            alt="Product"
            className="rounded-lg shadow-lg"
          />
            <div className="absolute top-4 left-4 bg-purple-500 text-white text-sm py-1 px-3 rounded-full shadow-md">
              Watch promo
            </div>
          </div>
          {/* Additional Info */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">The Next Gen of Skincare</h2>
            <p className="text-gray-700 mt-2">
              See for yourself that our products are the future of facial cosmetics.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-purple-500 font-medium hover:underline"
            >
              Get yours <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

