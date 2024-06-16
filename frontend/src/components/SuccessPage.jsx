import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6">Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Homepage
      </Link>
    </div>
  );
};

export default SuccessPage;