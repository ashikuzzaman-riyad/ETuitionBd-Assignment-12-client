import { motion } from "framer-motion";
import { FaClipboardList, FaUserCheck, FaChalkboardTeacher } from "react-icons/fa";

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const steps = [
  {
    step: "01",
    title: "Post Your Tuition",
    description:
      "Share your subject, class, location, and budget in just a few clicks.",
    icon: <FaClipboardList />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "02",
    title: "Get Matched",
    description:
      "We connect you with verified tutors who perfectly match your needs.",
    icon: <FaUserCheck />,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    step: "03",
    title: "Start Learning",
    description:
      "Contact your tutor and begin your personalized learning journey.",
    icon: <FaChalkboardTeacher />,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function HowItWorks() {
  return (
    <motion.section
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How eTuition Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the right tutor in just three simple steps
        </p>
      </motion.div>

      {/* Steps Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-2xl shadow-lg p-8 text-center group"
          >
            {/* Step Number */}
            <span className="absolute top-4 right-4 text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition">
              {item.step}
            </span>

            {/* Icon */}
            <div
              className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} text-white text-2xl shadow-md`}
            >
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
