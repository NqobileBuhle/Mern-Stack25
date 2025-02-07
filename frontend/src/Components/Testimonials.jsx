import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Lulu",
    image: "https://images.unsplash.com/photo-1550759671-d20d06717608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmslMjB3b21lbiUyMGZhY2VzfGVufDB8fDB8fHww", // Replace with an actual image path
    testimonial: "This product has changed my life! Highly recommend it to everyone.",
  },
  {
    id: 2,
    name: "Lwando",
    image: "https://images.unsplash.com/photo-1550759671-d20d06717608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmslMjB3b21lbiUyMGZhY2VzfGVufDB8fDB8fHww", // Replace with an actual image path
    testimonial: "Amazing experience, the customer service was fantastic and the product is top-notch.",
  },
  {
    id: 3,
    name: "Njabu",
    image: "https://images.unsplash.com/photo-1550759671-d20d06717608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmslMjB3b21lbiUyMGZhY2VzfGVufDB8fDB8fHww", // Replace with an actual image path
    testimonial: "A game-changer for my business. I'm so glad I found this solution!",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <section className="testimonials py-12 bg-pink-100">
      <h2 className="text-4xl font-semibold bg-gradient-to-r from-red-600 via-pink-400 to-pink-200 bg-clip-text text-transparent  mb-8">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
