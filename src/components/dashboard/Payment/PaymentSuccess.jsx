import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center   p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ rotate: -45, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mx-auto mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-green-100"
        >
          <CheckCircle className="text-green-600 w-12 h-12" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-600 mb-6"
        >
          Thank you for your payment. Your tuition session is now confirmed.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-colors"
        >
         <Link to='/dashboard'> Go to Dashboard</Link>
        </motion.button>
      </motion.div>
    </div>
    );
};

export default PaymentSuccess;