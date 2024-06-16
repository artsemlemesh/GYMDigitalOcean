import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    text: "Joining the gym was one of the best decisions of my life. The personal trainers are fantastic and truly tailor the sessions to individual needs.",
    role: "Fitness Enthusiast"
  },
  {
    id: 2,
    name: "John Smith",
    text: "The facilities at this gym are top-notch, and the community is incredibly welcoming. I've made great progress and friends here!",
    role: "Member"
  },
  {
    id: 3,
    name: "Emily Johnson",
    text: "I love the variety of equipment and classes available. There's something for everyone, and I never get bored!",
    role: "Athlete"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(()=> {
    const intervalId = setInterval(handleNext, 3000)
    return () => clearInterval(intervalId)
  })

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Members Say</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full flex justify-center">
                <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
                  <p className="text-gray-800 text-xl">{testimonial.text}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
            onClick={handlePrev}
          >
            &larr;
          </button>
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
            onClick={handleNext}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;