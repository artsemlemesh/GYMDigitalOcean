import React from 'react';

const MembershipPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$20/month',
      features: ['Access to gym', '1 personal training session', 'Free Wi-Fi'],
    },
    {
      name: 'Standard Plan',
      price: '$35/month',
      features: ['Access to gym and pool', '5 personal training sessions', 'Free Wi-Fi', 'Sauna access'],
    },
    {
      name: 'Premium Plan',
      price: '$50/month',
      features: ['All Standard Plan features', 'Unlimited personal training', 'Access to all classes', 'Free merchandise'],
    },
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
        {plans.map((plan) => (
          <div key={plan.name} className="w-full md:w-1/2 lg:w-1/3 px-2 py-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-gray-700 text-base mb-4">{plan.price}</p>
                <ul className="list-disc list-inside">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
