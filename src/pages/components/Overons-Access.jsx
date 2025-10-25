import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../../main/Pagewraper";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext"; // Only use useLanguage directly

// Define the steps data as a function that depends on the language
const steps = (language) => [
  {
    step: "01 STEP",
    title: translations[language].Discussion, // Added fallback
    description:
      translations[language].step1, // Added fallback
  },
  {
    step: "02 STEP",
    title: translations[language].idea, // Added fallback
    description:
      translations[language].step2, // Added fallback
  },
  {
    step: "03 STEP",
    title: translations[language].test, // Added fallback
    description:
      translations[language].step3, // Added fallback
  },
  {
    step: "04 STEP",
    title: translations[language].execcute, // Added fallback
    description:
      translations[language].step4, // Added fallback
  },
];

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

const OveronsAccess = () => {
  const { language } = useLanguage(); // Get the current language from context
  const localizedSteps = steps(language); // Call the steps function to get the localized array

  return (
    <div className="bg-white py-16 text-center">
      <PageWrapper>
        {/* section -1 (Process Steps) */}
        <div className="md:py-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold pb-10 text-black mb-16 leading-snug"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            {translations[language].Access || "Our Access"} <br /> {translations[language].proces || "Process"}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">           

            {/* Step Cards */}
            {localizedSteps.map((item, index) => ( // Corrected: using localizedSteps
              <motion.div
                key={index}
                className="bg-[#F8FAFC] hover:shadow-xl ease-in-out p-6 rounded-xl shadow-sm text-left relative z-20 transition-all duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
              >
                <div className="flex items-center mb-4 group hover:cursor-pointer relative">
                  {/* Colored bar container */}
                  <div className="flex transform transition-all duration-500 group-hover:translate-x-2">
                    <div className="w-4 h-8 rounded-l-full bg-[#3F00F8]" />
                    <div className="w-4 h-8 rounded-r-full bg-[#A530F9]" />
                  </div>

                  {/* Step badge with background animation */}
                  <span className="relative ml-3 text-sm font-semibold text-black px-3 py-1 rounded-full shadow z-10 overflow-hidden">
                    {/* Hover background animation */}
                    <span className="absolute inset-0 bg-[#3F00F8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                    {/* Text (should be above the background layer) */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* section-2 (About Fronx Solutions) */}
        <motion.div
          className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto my-12 flex flex-col lg:flex-row items-center lg:items-start overflow-hidden" // Added overflow-hidden to contain image
          style={{ backgroundImage: "url('/images/Home.png')" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-[60%] px-0 lg:p-8 mb-8 lg:mb-0 text-start">
            <h2 className="text-4xl font-bold mb-4">{translations[language].fornx}</h2>
            <p className="text-lg mb-6">
              {translations[language].strength}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {translations[language].para1}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {translations[language].para2}
            </p>
          </div>

          <motion.div
            className="lg:w-[40%] flex justify-center items-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/circle.png"
              className="w-[80%]"
              alt="Fronx Circle"
            />
          </motion.div>
        </motion.div>

        {/* section-3 (Our Mission) */}
<motion.div
  className="flex justify-center items-center py-16 px-4 bg-gray-100 min-h-screen font-sans"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  dir={language === "ur" ? "rtl" : "ltr"} //  dynamic direction
>
  <div className="relative flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden max-w-6xl w-full">
    {/* Left Image */}
    <div className="w-full lg:w-[45%]">
      <img
        src="/images/mission.png"
        alt="Collaboration"
        className={`w-full h-full object-cover ${
          language === "ur" ? "lg:rounded-r-xl" : "lg:rounded-l-xl"
        }`} //  Urdu میں rounded opposite طرف ہوگا
        style={{ minHeight: "400px" }}
      />
    </div>

    {/* Right Floating Card */}
    <div
      className={`w-full lg:w-[55%] flex justify-center items-center mt-[-40px] lg:mt-0 lg:absolute ${
        language === "ur" ? "lg:right-[37%]" : "lg:left-[37%]"
      } lg:top-10 px-4 lg:px-0`}
    >
      <motion.div
        className={`relative bg-opacity-80 backdrop-blur-3xl border border-white/30 rounded-2xl bg-white shadow-sm px-6 py-8 sm:px-8 sm:py-10 w-full max-w-xl ${
          language === "ur" ? "text-right" : "text-start"
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          {translations[language].our}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-4">
          {translations[language].our1}
        </p>
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.998 12.19l-3.535 3.536-1.414-1.414L8.584 10.776 5.05 7.242 6.464 5.828l4.949 4.95zm4.47-4.47l-3.536 3.535 1.414 1.414 3.536-3.535 1.414 1.414L15.91 10.776l3.535 3.535 1.414-1.414-4.949-4.949z" />
        </svg>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          {translations[language].ourp}
        </p>

        <div className={`flex ${language === "ur" ? "justify-start" : "justify-end"}`}>
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.002 12.19l3.535 3.536 1.414-1.414L15.416 10.776l3.535-3.534-1.414-1.414-4.949 4.95zm-4.47-4.47l3.536 3.535-1.414 1.414-3.536-3.535-1.414 1.414L8.09 10.776l-3.535 3.535-1.414-1.414 4.949-4.949z" />
          </svg>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>

      </PageWrapper>
    </div>
  );
};

export default OveronsAccess;