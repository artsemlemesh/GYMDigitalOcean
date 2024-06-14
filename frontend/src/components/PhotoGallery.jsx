import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="one.jpg"
            alt="Photo 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="two.jpg"
            alt="Photo 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="three.jpg"
            alt="Photo 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="four.jpg"
            alt="Photo 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="five.jpg"
            alt="Photo 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="six.jpg"
            alt="Photo 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src="seven.jpg"
            alt="Photo 7"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
