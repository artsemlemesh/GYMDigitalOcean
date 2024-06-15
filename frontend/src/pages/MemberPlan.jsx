import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { FaCheck } from 'react-icons/fa';
// import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51PLGUYIhhfcmQPRULxV6eXxZHMWqEEW29vQ1FdVwcjE7CevUdT4TnnWVHu15xXC7ZQ7x8CXtXtUbqj3I2zZFlqEn00fS1PbLT0');

const MembershipPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 2000, // Stripe works with the smallest currency unit
      displayPrice: '$20/month',
      features: ['Access to gym', '1 personal training session', 'Free Wi-Fi'],
    },
    {
      name: 'Basic Plan',
      price: 2000, // Stripe works with the smallest currency unit
      displayPrice: '$20/month',
      features: ['Access to gym', '1 personal training session', 'Free Wi-Fi'],
    },
    {
      name: 'Basic Plan',
      price: 2000, // Stripe works with the smallest currency unit
      displayPrice: '$20/month',
      features: ['Access to gym', '1 personal training session', 'Free Wi-Fi'],
    },
    {
      name: 'Basic Plan',
      price: 2000, // Stripe works with the smallest currency unit
      displayPrice: '$20/month',
      features: ['Access to gym', '1 personal training session', 'Free Wi-Fi'],
    },
    // other plans...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Membership Plans</h1>
          <p className="mt-4 text-gray-600">Choose a plan that fits your needs.</p>
        </div>
      </header>
      <div className="flex flex-wrap -mx-2 mt-8">
        {plans.map((plan, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 py-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <div className="px-6 py-8">
                <h3 className="font-bold text-2xl mb-2 text-gray-800">{plan.name}</h3>
                <p className="text-3xl font-semibold text-purple-600 mb-4">{plan.displayPrice}</p>
                <ul className="list-none">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-center mb-2">
                      <FaCheck className="text-green-500 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                <Elements stripe={stripePromise}>
                  <CheckoutForm plan={plan} />
                </Elements>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
