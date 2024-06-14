import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          Have any questions or need further information? Get in touch with us!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded overflow-hidden shadow-lg bg-white p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Address</h3>
            <p className="text-gray-700 text-base">123 Gym Street, Fitness City, FG 12345</p>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <p className="text-gray-700 text-base">(123) 456-7890</p>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-700 text-base">info@gym.com</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Find Us Here</h2>
        <div className="rounded overflow-hidden shadow-lg bg-white p-6">
          <iframe
            title="gym-location"
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097077!2d144.9556513153491!3d-37.81732797975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57737a0c018a70!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1572560785682!5m2!1sen!2sau"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
