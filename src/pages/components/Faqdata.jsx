import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import {
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaFileAlt,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext";

// faqData is a function that returns the array of FAQ items, depending on language
const faqData = (language) => [
  { question: translations[language].question1, answer: translations[language].answer1 },
  { question: translations[language].question2, answer: translations[language].answer2 },
  { question: translations[language].question3, answer: translations[language].answer3 },
  { question: translations[language].question4, answer: translations[language].answer4 },
  { question: translations[language].question5, answer: translations[language].answer5 },
  { question: translations[language].question6, answer: translations[language].answer6 },
  { question: translations[language].question7, answer: translations[language].answer7 },
];

// stepsData depends on language
const stepsData = (language) => [
  { icon: FaEnvelope, title: translations[language].start3, description: translations[language].start4 },
  { icon: FaFileAlt, title: translations[language].start5, description: translations[language].start6 },
  { icon: FaLaptopCode, title: translations[language].start7, description: translations[language].start8 },
  { icon: FaRocket, title: translations[language].start9, description: translations[language].start10 },
];

// Variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

const FAQ = () => {
  const { language } = useLanguage();

  const localizedFaqData = faqData(language);
  const localizedStepsData = stepsData(language);

  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <>
      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-[#F9FAFB] py-16 md:py-24"
      >
        <PageWrapper>
          <div className={`text-center mb-12 ${language === "ur" ? "rtl" : "ltr"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {translations[language].question}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8">
            {localizedFaqData.map((item, index) => (
              <div
                key={index}
                className={`py-4 border rounded-lg px-4 mb-4 ${language === "ur" ? "text-right" : "text-left"
                  }`}
              >
                <button
                  className={`flex items-center w-full focus:outline-none ${language === "ur" ? "flex-row-reverse justify-between" : "justify-between"
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3
                    className={`font-semibold text-gray-800 text-lg w-full ${language === "ur" ? "text-right" : "text-left"
                      }`}
                    dir={language === "ur" ? "rtl" : "ltr"}
                  >
                    {item.question}
                  </h3>

                  {openIndex === index ? (
                    <FaMinus className="text-white bg-[#6931CF] p-2 rounded-3xl w-7 h-7 ml-2" />
                  ) : (
                    <FaPlus className="text-white bg-[#6931CF] p-2 rounded-3xl w-7 h-7 ml-2" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p
                        className={`mt-3 text-gray-600 bg-slate-100 p-4 leading-relaxed ${language === "ur" ? "text-right" : "text-left"
                          }`}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </PageWrapper>
      </motion.section>

      {/* Steps Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-white py-16 md:py-24"
      >
        <PageWrapper>
          <div
            className={`text-center mb-12 ${language === "ur" ? "rtl" : "ltr"
              }`}
          >
            <p className="text-gray-600 font-semibold uppercase tracking-widest text-md mb-2">
              {translations[language].start}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {translations[language].start1}
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
              {translations[language].start2}
            </p>
          </div>

          <div
            className={`relative flex flex-col lg:flex-row justify-center items-stretch gap-6 mt-16 ${language === "ur" ? "rtl" : "ltr"
              }`}
          >
            {localizedStepsData.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={stepVariants}
                  className={`relative bg-gray-100 p-6 rounded-xl flex-1 min-w-[280px] max-w-sm ${language === "ur" ? "text-right" : "text-left"
                    }`}
                >
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 text-orange-500 mb-4" />
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </PageWrapper>
      </motion.section>
    </>
  );
};

export default FAQ;
