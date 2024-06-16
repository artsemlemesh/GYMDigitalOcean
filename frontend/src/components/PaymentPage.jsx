import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handlePayment = (event) => {
    event.preventDefault();
    // optionally integrate with the payment API
    console.log('Processing payment for:', amount);
    navigate('/success');
    
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Payment</h1>
      <form onSubmit={handlePayment} className="w-full max-w-sm">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;