import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { FiSearch, FiBriefcase } from "react-icons/fi"; // Changed icons for professional tutor look
import { Link } from "react-router";

const EmptyTutorApplication = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[550px] flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-[3rem] shadow-sm overflow-hidden"
    >
      {/* Background Glows (Green for Tutor Success) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Modern Lottie Animation */}
      <div className="relative z-10 w-full max-w-[350px]">
        <Player
          autoplay
          loop
          src="https://lottie.host/82544c9b-734d-4535-9730-a9261c40a5a3/mO7x6V9TzS.json"
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      {/* Content for Tutors */}
      <div className="relative z-10 text-center space-y-4 -mt-6">
        <h3 className="text-3xl font-black text-gray-800 tracking-tight">
          No Applications Yet
        </h3>
        <p className="text-gray-500 max-w-sm mx-auto font-medium leading-relaxed">
          You haven't applied to any tuition jobs yet. 
          There are hundreds of students waiting for a tutor like you!
        </p>
      </div>

      {/* Action Buttons for Tutors */}
      <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4">
        <motion.button
          whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(16 185 129 / 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary h-14 rounded-2xl px-8 border-none bg-emerald-600 hover:bg-emerald-700 text-white normal-case gap-2 shadow-lg shadow-emerald-100"
        >
            <Link className="flex gap-4" to='/dashboard/apply-tuitions'>
          <FiSearch  className="text-xl" />
          Find Tuition Jobs
            </Link>
        </motion.button>
        
        <motion.button
          whileHover={{ backgroundColor: "rgb(243 244 246)" }}
          className="btn btn-ghost h-14 rounded-2xl px-8 text-gray-600 normal-case gap-2"
        >
            <Link className="flex gap-4 items-center" to="/dashboard/ongoing">
          <FiBriefcase /> Ongoing
            </Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EmptyTutorApplication;