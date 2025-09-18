import React from "react";
import PageWrapper from "../../main/Pagewraper";
import {
  FaLightbulb,
  FaMapMarkedAlt,
  FaLaptopCode,
  FaCode,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext"; // Import useLanguage directly

// This is now a function that returns the array of steps,
// allowing it to use the 'language' variable for translations.
const approachSteps = (language) => [
  {
    number: "01",
    icon: FaLightbulb,
    title: translations[language].approach1,
    description:
       translations[language].approach11
  },
  {
    number: "02",
    icon: FaMapMarkedAlt,
    title: translations[language].approach2, // Added fallback
    description:
      translations[language].approach22,
  },
  {
    number: "03",
    icon: FaLaptopCode,
    title: translations[language].approach3, // Added fallback
    description:
      translations[language].approach33,
  },
  {
    number: "04",
    icon: FaCode,
    title: translations[language].approach4, // Added fallback
    description:
      translations[language].approach44,
  },
  {
    number: "05",
    icon: FaCloudUploadAlt,
    title: translations[language].approach5, // Added fallback
    description:
      translations[language].approach55,
  },
];

// Animation variants (can remain outside, as they don't depend on 'language')
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Approach = () => {
  const { language } = useLanguage(); // Get the current language here

  // IMPORTANT: Call approachSteps with the current language to get the actual array
  const currentApproachSteps = approachSteps(language);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-gray-900 bg-cover bg-center bg-no-repeat py-16 md:py-24 text-white"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <PageWrapper>
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {translations[language].approach}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {translations[language].achieve}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Use the result of the function call here: currentApproachSteps */}
          {currentApproachSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700 flex flex-col justify-between min-h-[250px]"
              >
                <div className="flex justify-between items-start mb-4">
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 text-orange-500" />
                  )}
                  <span className="text-5xl font-extrabold text-orange-400 opacity-30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </PageWrapper>
    </motion.section>
  );
};

export default Approach;