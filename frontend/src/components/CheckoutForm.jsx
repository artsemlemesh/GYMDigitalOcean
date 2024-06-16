import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({ plan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe){
      return
    }

    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/create-payment-intent/')
      const clientSecret = response.data.clientSecret
      // console.log(response, 'RESPONSE')
      // console.log(clientSecret, 'CLIENT SECRET')

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Customer Name',
          },
        },
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
      } else {
        setError(null);
        setSucceeded(true);
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || loading || succeeded}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition mt-4"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {succeeded && <div className="text-green-500 mt-4">Payment succeeded!</div>}
    </form>
  );
};

export default CheckoutForm;
