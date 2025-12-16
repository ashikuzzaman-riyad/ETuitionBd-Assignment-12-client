import { motion } from "framer-motion";
import {
  FaUserShield,
  FaBolt,
  FaMoneyBillWave,
  FaClock,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const features = [
  {
    title: "Verified Tutors",
    desc: "All tutors are carefully verified to ensure quality and trust.",
    icon: <FaUserShield />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Smart Matching",
    desc: "We match students with tutors based on subject, location & budget.",
    icon: <FaBolt />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Affordable Pricing",
    desc: "Choose tutors that fit your budget with transparent pricing.",
    icon: <FaMoneyBillWave />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Flexible Learning",
    desc: "Online or home tutoring — learn the way you prefer.",
    icon: <FaClock />,
    color: "from-blue-500 to-sky-500",
  },
  {
    title: "Secure Platform",
    desc: "Your data and communication are fully protected.",
    icon: <FaLock />,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Fast Support",
    desc: "Our support team is always ready to help you.",
    icon: <FaHeadset />,
    color: "from-teal-500 to-cyan-500",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose eTuition?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We make finding the right tutor simple, safe, and effective.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white text-xl shadow-md`}
            >
              {item.icon}
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
