import React from 'react';

const Contact = () => {
    return (
      <section className="py-20 px-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* Left Side – Contact Info */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-3">
        Contact Us
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed">
        Have any questions or need assistance?  
        Our support team is here to help you anytime.  
        Reach out — we respond fast! 🚀
      </p>

      {/* Info Cards */}
      <div className="space-y-5">

        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 
                        border border-green-100 hover:border-green-500 
                        transition-all duration-300 hover:shadow-2xl">
          <div className="text-green-600 text-4xl">📞</div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Phone</h3>
            <p className="text-gray-600 mt-1">+880 1305 634 672</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 
                        border border-green-100 hover:border-green-500 
                        transition-all duration-300 hover:shadow-2xl">
          <div className="text-green-600 text-4xl">📧</div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Email</h3>
            <p className="text-gray-600 mt-1">support@etuition.com</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 
                        border border-green-100 hover:border-green-500 
                        transition-all duration-300 hover:shadow-2xl">
          <div className="text-green-600 text-4xl">📍</div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Location</h3>
            <p className="text-gray-600 mt-1">Jashore, Bangladesh</p>
          </div>
        </div>

      </div>
    </div>

    {/* Right Side – Contact Form */}
    <form className="bg-white shadow-2xl rounded-2xl p-10 border border-green-100 
                     hover:shadow-[0_10px_40px_rgba(0,128,0,0.2)] transition-all duration-500">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">
        Send us a message
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 
                     focus:ring-green-400 outline-none bg-green-50/30"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:ring-2 
                     focus:ring-green-400 outline-none bg-green-50/30"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full mt-4 p-3 border rounded-lg focus:ring-2 
                   focus:ring-green-400 outline-none bg-green-50/30"
      />

      <textarea
        placeholder="Your Message"
        rows="5"
        className="w-full mt-4 p-3 border rounded-lg focus:ring-2 
                   focus:ring-green-400 outline-none bg-green-50/30"
      ></textarea>

      <button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 
                   text-white py-3 rounded-lg font-semibold 
                   hover:from-green-700 hover:to-green-800 
                   transition-all duration-300 shadow-md hover:shadow-xl"
      >
        Send Message
      </button>
    </form>

  </div>
</section>

    );
};

export default Contact;