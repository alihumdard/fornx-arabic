import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../../main/Pagewraper"; // Adjust path if needed
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext";

const statsData = (language) => [
  { value: "420+", description: translations[language].state1 },
  { value: "320+", description: translations[language].state2 },
  { value: "7+", description: translations[language].state4 },
];

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StatsSection = () => {
  const {language} = useLanguage();
  const updatedstatsData = statsData(language);
  return (
    <section className="bg-white py-16 md:py-24">
      <PageWrapper>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-6 px-4 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-8">
          {translations[language].state}
        </h1>

        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 lg:gap-8">
          {updatedstatsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-56 h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full flex flex-col items-center justify-center text-center border border-purple-500 p-4"
            >
              {/* Inner Circle */}
              <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] bg-gray-50 p-2 rounded-full flex flex-col items-center justify-center">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm lg:text-base">
                  {stat.description}
                </p>
              </div>

              {/* Small Purple Dot */}
              {/* Animated Rotating Dot Around Circle */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
              >
                <div
                  className="w-3 h-3 bg-[#6C62D6] rounded-full absolute"
                  style={{
                    top: "0",
                    left: "35%",
                    transform: "translateX(-50%)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
};

export default StatsSection;
