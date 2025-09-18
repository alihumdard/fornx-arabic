import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaShoppingCart, FaUsers } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StatBox = ({ number, label, icon, highlight, index }) => (
  <motion.div
    className="text-center text-white"
    custom={index}
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="flex justify-center items-center gap-2 text-3xl font-bold">
      {number} <span className="text-[#FF9B4B]">{icon}</span>
    </div>
    <p
      className={`mt-1 ${
        highlight ? "text-orange-400 font-semibold" : "text-gray-300"
      }`}
    >
      {label}
    </p>
  </motion.div>
);

const ProgressBar = ({ label, percent, index }) => (
  <motion.div
    className="mb-4"
    custom={index}
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="flex justify-between text-white text-sm mb-1">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className="bg-orange-400 h-full rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  </motion.div>
);

const TechnologyStats = () => {
    const { language } = useLanguage();
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className="text-white text-4xl font-bold leading-tight mb-4">
          {translations[language].help}
          </h2>
          <p className="text-gray-300 mb-8">
          {translations[language].solu}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-b border-gray-400 pb-5">
          <StatBox number="200" label={translations[language].webprojects} index={1} />
          <StatBox number="100+" label={translations[language].mobapp} highlight index={2} />
          <StatBox number="120+" label={translations[language].ecomm} index={3} />
          <StatBox number="95%" label={translations[language].client} index={4} />
        </div>

        {/* Right Image */}
        <div className="flex gap-28 pt-20 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <ProgressBar label={translations[language].business} percent={86} index={1} />
            <ProgressBar label={translations[language].career} percent={76} index={2} />
            <ProgressBar label={translations[language].innovation} percent={96} index={3} />
            <ProgressBar label={translations[language].businessdevelop} percent={99} index={4} />
          </div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/mendesk.png"
              alt="Developer Working"
              className="rounded-xl shadow-2xl w-[80%] h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStats;
