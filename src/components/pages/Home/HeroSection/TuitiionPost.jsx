import React from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TuitionPost = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tuition = [] } = useQuery({
    queryKey: ["homeTuitions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/new-tuitions");
      return res.data.slice(0, 4);
    },
  });

  return (
    <motion.section
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Latest Tuition Posts
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {tuition.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            className="border border-gray-200 shadow-md rounded-xl p-5 bg-white transition-all"
          >
            <h2 className="text-lg font-semibold mb-2">
              {item.studentName}
            </h2>

            <p>
              <span className="font-semibold">Subject:</span>{" "}
              {item.studentSubjects}
            </p>
            <p>
              <span className="font-semibold">Class:</span>{" "}
              {item.studentClass}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {item.studentLocation}
            </p>
            <p>
              <span className="font-semibold">Budget:</span>{" "}
              {item.studentBudget} ৳
            </p>

            {/* Status */}
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-lg text-sm capitalize ${
                item.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : item.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TuitionPost;
