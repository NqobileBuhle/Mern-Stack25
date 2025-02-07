import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative bg-cover bg-center flex flex-col justify-between bg-pink-300"
         style={ 
          { backgroundImage: "url('https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww')" }
         }>
      {/* Navigation */}
      <header className="flex justify-between items-center px-12 py-6 text-white">
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">New Arrivals</a>
          <a href="#" className="hover:underline">Facials</a>
          <a href="#" className="hover:underline">Skincare</a>
          <a href="#" className="hover:underline">Pigmentation</a>
        </nav>
        <div className="text-3xl font-bold">ST</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Account</a>
          <a href="#" className="hover:underline">Cart (0)</a>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="flex flex-col items-center text-center px-6 text-white">
        <h1 className="text-6xl lg:text-8xl font-serif font-bold">Face Your Skin.</h1>
        <p className="mt-4 text-lg max-w-md">
          A Cool-Toned Color Story Featuring 15 NEW Enchanting Muted Rosy And Nude Shades.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-pink-600 text-white py-3 px-8 rounded-md text-lg hover:bg-pink-500">Shop Now</button>
          <button className="border border-white text-white py-3 px-8 rounded-md text-lg hover:bg-white hover:text-pink-600">Explore More</button>
        </div>
      </main>

      {/* Product Slider */}
      <section className="bg-white py-8">
        <h2 className="text-2xl text-pink-500 font-bold text-left px-12">Just In</h2>
        <div className="flex gap-6 overflow-x-auto px-12 py-4">
          {/* Product Cards */}
          {[
            { title: "Glazed N’ Amused", price: "$52.00", image: "https://images.unsplash.com/photo-1559881230-1af605ca3f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww" },
            { title: "I Need A Nude Lip Crayon", price: "$52.00", image: "https://images.unsplash.com/photo-1559881230-1af605ca3f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww" },
            { title: "Bronze Cheek", price: "$52.00", image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww" },
          ].map((product, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4 w-64 flex-shrink-0">
              <img src={product.image} alt={product.title} className="rounded-lg mb-4" />
              <h3 className="text-gray-700 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="text-pink-600 mt-2 text-sm hover:underline">+ Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
