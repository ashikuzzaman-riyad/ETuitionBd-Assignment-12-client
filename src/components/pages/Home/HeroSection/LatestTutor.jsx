import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const LatestTutor = () => {
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure();

  const latestTutors = tutors.slice(0, 4);

  useEffect(() => {
    axiosSecure.get("/users/tutors").then((res) => {
      setTutors(res.data);
    });
  }, [axiosSecure]);

  return (
    <motion.section
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Expert Tutors
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {latestTutors.map((tutor, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            {/* Top Gradient */}
            <div className="h-24 bg-gradient-to-r from-green-400 to-emerald-500" />

            {/* Avatar */}
            <div className="flex justify-center -mt-12">
              <img
                src={tutor.photoURL}
                alt={tutor.displayName}
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold">
                {tutor.displayName}
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 capitalize">
                {tutor.role}
              </span>

              <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                Professional tutor with experience in personalized teaching.
              </p>

              
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LatestTutor;
