import React from "react";
import { motion } from "framer-motion";
import { MdOndemandVideo } from "react-icons/md";

// Container animation (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Single item animation
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Provide = () => {
  const data = [
    "Academic Tutor",
    "Admission Test Tutor",
    "Drawing Tutor",
    "Dance Tutor",
    "Music Tutor",
    "Arabic Tutor",
    "Job Preparation",
    "Cadet Admission",
    "IELTS Tutor",
  ];

  return (
    <motion.section
      className="py-12 md:py-20 bg-background-light dark:bg-background-dark font-display"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We Provide
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-card-light dark:bg-card-dark rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl text-icon-light dark:text-icon-dark mb-4">
                <MdOndemandVideo />
              </span>
              <h3 className="font-medium text-text-light dark:text-text-dark">
                {item}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Provide;
