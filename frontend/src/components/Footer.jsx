import React from 'react';

const quickLinks = [
  { name: 'Home', path: '#' },
  { name: 'About', path: '#' },
  { name: 'Blog', path: '#' },
  { name: 'Membership Plans', path: '#' },
  { name: 'Class Schedule', path: '#' },
  { name: 'Contact', path: '#' },
];

const socialLinks = [
  { name: 'Facebook', path: '#', icon: 'fab fa-facebook-f' },
  { name: 'Twitter', path: '#', icon: 'fab fa-twitter' },
  { name: 'Instagram', path: '#', icon: 'fab fa-instagram' },
  { name: 'LinkedIn', path: '#', icon: 'fab fa-linkedin' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white hover:text-gray-400">Gym Logo</a>
            <p className="mt-2 text-gray-400">Your fitness journey starts here.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="font-bold text-white">Quick Links</h2>
            <ul className="mt-2">
              {quickLinks.map((link) => (
                <li key={link.name} className="mt-1">
                  <a href={link.path} className="text-gray-400 hover:text-gray-200">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="font-bold text-white">Follow Us</h2>
            <ul className="mt-2 flex">
              {socialLinks.map((link) => (
                <li key={link.name} className="mr-6">
                  <a href={link.path} className="text-gray-400 hover:text-gray-200">
                    <i className={link.icon}></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">All rights reserved &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
