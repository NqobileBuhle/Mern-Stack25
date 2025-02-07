import React from "react";

const SocialMediaSection = () => {
  const socialImages = [
    "https://plus.unsplash.com/premium_photo-1681420616047-3691e0b1eed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535031171703-48b1362baa98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1711611162438-19459863ae91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNraW5jYXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNraW5jYXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1679046948909-ab47e96082e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <section className="py-16">
      <h2 className=" text-2xl text-pink-600 font-bold uppercase tracking-wide mb-4 ">Social</h2>
      <p className=" text-2xl font-light mb-8 text-pink-400">
        Follow our brand in social media
      </p>
      <hr className="border-t border-pink-300 my-8 w-full"/>
      <div className="flex justify-center gap-6">
        {socialImages.map((image, index) => (
          <div
            key={index}
            className="w-40 h-40 overflow-hidden rounded-md shadow-md"
          >
            <img
              src={image}
              alt={`Social Media Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;
