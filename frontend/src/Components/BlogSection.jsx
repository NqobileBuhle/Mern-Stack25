import React, { useState } from 'react';
import blogvideo1 from "../assets/blogvideo1.mp4"; 
import blogvideo2 from "../assets/blogvideo2.mp4";
import blog1 from "../assets/blog1.jpg";

function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      text: "SKINCARE ReImagined!",
      video: blogvideo1,
      caption: " A Cool-Toned Color Story Featuring 15 NEW Enchanting Muted Rosy And Nude Shades.",
    },
    {
      id: 2,
      text: "Future Skincare",
      video: blogvideo2,
      caption: " A Cool-Toned Color Story Featuring 15 NEW Enchanting Muted Rosy And Nude Shades.",
    },
    {
      id: 3,
      text: "SKINCARE ReImagined!",
      video: blog1,
      caption: " A Cool-Toned Color Story Featuring 15 NEW Enchanting Muted Rosy And Nude Shades.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel-container relative">
      <div className="carousel-slide">
        <video
          src={slides[currentIndex].video}
          alt={`Slide ${slides[currentIndex].id}`}
          className="w-full h-screen object-cover mb-4 rounded-lg"
          autoPlay
          muted
          loop
        />
        <div className="carousel-caption absolute inset-0 flex flex-col justify-center items-center text-white  p-4 rounded">
          <h3 className='text-6xl'>{slides[currentIndex].text }</h3>
          <p>{slides[currentIndex].caption}</p>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="carousel-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="carousel-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}

export default BlogCarousel;
