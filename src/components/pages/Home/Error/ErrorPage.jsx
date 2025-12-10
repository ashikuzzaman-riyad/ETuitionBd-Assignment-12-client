import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="text-center">

        {/* Illustration */}
        <div className="mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
            alt="Not found"
            className="w-56 mx-auto drop-shadow-xl animate-bounce"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700">
          404
        </h1>

        <p className="text-xl text-gray-700 mt-3">
          Oops! The page you're looking for doesn't exist.
        </p>

        <p className="text-gray-500 mt-1">
          It might have been moved or deleted.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-semibold 
                     rounded-xl shadow-md hover:bg-green-700 hover:shadow-xl 
                     transition-all duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </section>
    );
};

export default ErrorPage;