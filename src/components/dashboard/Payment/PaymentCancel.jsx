import React from 'react';
import { useNavigate } from 'react-router';

const PaymentCancel = () => {
      const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-24 w-24 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>

        <h1 className="text-3xl font-bold text-red-600 mt-6">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mt-4">
          Your payment was not completed. You can try again or contact support if you think this is an error.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
    );
};

export default PaymentCancel;