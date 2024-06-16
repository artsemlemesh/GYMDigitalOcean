import React from 'react';
import Trainers from '../components/Trainers';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Gym</h1>
        <p className="text-gray-700 text-lg">
          At our gym, we are dedicated to helping you achieve your fitness goals with our state-of-the-art facilities and experienced trainers. Whether you're a beginner or a seasoned athlete, we have something for everyone.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <img src="eq.jpg" alt="Gym Equipment" className="h-48 w-full object-cover"/>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Modern Equipment</h3>
              <p className="text-gray-700 text-base">Our gym is equipped with the latest machines and free weights to help you get the best workout possible.</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <img src="sc.jpg" alt="Spinning Class" className="h-48 w-full object-cover"/>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Group Classes</h3>
              <p className="text-gray-700 text-base">Join our group classes including spinning, yoga, pilates, and more to stay motivated and have fun.</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white">
            <img src="sp.jpg" alt="Swimming Pool" className="h-48 w-full object-cover"/>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Swimming Pool</h3>
              <p className="text-gray-700 text-base">Take a dip in our indoor swimming pool, perfect for laps or a relaxing cool down after your workout.</p>
            </div>
          </div>
        </div>
      </section>
      <Trainers/>
     
      
      {/* <section>
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="space-y-4">
          <div className="rounded overflow-hidden shadow-lg bg-white p-6">
            <p className="text-gray-700 text-base mb-4">"This gym has everything I need. The equipment is top-notch and the trainers are incredibly helpful."</p>
            <p className="text-gray-700 font-bold">- Sarah Johnson</p>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white p-6">
            <p className="text-gray-700 text-base mb-4">"I love the group classes here. They keep me motivated and I always have a great time."</p>
            <p className="text-gray-700 font-bold">- Mark Lee</p>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white p-6">
            <p className="text-gray-700 text-base mb-4">"The facilities are clean and well-maintained. It's the best gym I've ever been a member of."</p>
            <p className="text-gray-700 font-bold">- Emma Davis</p>
          </div>
        </div>
      </section> */}
      <Testimonials/>
    </div>
  );
};

export default About;
