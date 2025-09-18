import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import { FaAsterisk, FaComments, FaDollarSign } from "react-icons/fa";
import {
  FaNetworkWired,
  FaShoppingBasket,
  FaRobot,
  FaBullseye,
  FaPalette,
  FaLightbulb,
  FaRocket,
  FaGoogle,
  FaFacebookF,
  FaPenNib,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import StatsSection from "../Statsdata";
import translations from "../../../translations";
import { useLanguage } from "../../../LanguageContext";

const processSteps = (language) => [
  {
    icon: FaBullseye,
    title: translations[language].markiting7,
    description:
    translations[language].markiting8,
  },
  {
    icon: FaPalette,
    title: translations[language].markiting9,
    description:
      translations[language].markiting10,
  },
  {
    icon: FaLightbulb,
    title: translations[language].markiting11,
    description:
      translations[language].markiting12,
  },
  {
    icon: FaRocket,
    title: translations[language].markiting13,
    description:
      translations[language].markiting14,
  },
];

const marketing = (language) => [
  {
    id: "google ads setup",
    icon: FaDollarSign, // from react-icons/fa
    title: translations[language].markiting17,
    shortDescription:
      translations[language].markiting18,
    longDescription:
      translations[language].markiting19,

  },
  {
    id: "social media marketing",
    icon: FaBullseye, // from react-icons/fa
    title: translations[language].markiting20,
    shortDescription:
      translations[language].markiting21,
    longDescription:
      translations[language].markiting22

  },
  {
    id: "content marketing",
    icon: FaComments, // from react-icons/fa
    title: translations[language].markiting23,
    shortDescription:
      translations[language].markiting24,
    longDescription:
      translations[language].markiting25,
  },
  {
    id: "email marketing",
    icon: FaLightbulb, // from react-icons/fa
    title: translations[language].markiting26,
    shortDescription:
      translations[language].markiting27,
    longDescription:
      translations[language].markiting28,
  },
];

const items = (language) => [
  {
    title: translations[language].markiting39,
    description:
      translations[language].markiting40,
  },
  {
    title: translations[language].markiting41,
    description:
      translations[language].markiting42,
  },
  {
    title: translations[language].markiting43,
    description:
      translations[language].markiting44,
  },
];

// Animation Variants (kept as is, assuming they are correct)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
const digitalmarkiting = () => {
  const {language} =  useLanguage();
  const latestprocessSteps = processSteps (language);
  const latestmarketing = marketing(language);
  const latestitems = items(language);
  const [expandedCard, setExpandedCard] = useState(null); // State to manage which card is expanded

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <div className="relative w-full overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="relative h-[500px] overflow-visible">
          <PageWrapper>
            <div>
              {/* Background Image */}
              <img
                src="/images/bg-2.png"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1920x1080/000000/FFFFFF?text=Background+Image";
                }}
              />

              {/* Centered Yellow Glow */}
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[400px] bg-[#FFC003] opacity-10 blur-3xl rounded-full
        z-10 pointer-events-none"
              />
            </div>

            {/* Animated Content */}
            <motion.div
              className="absolute top-44"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl font-semibold mb-4 md:mb-6"
                variants={fadeUpVariant}
              >
                {translations[language].markiting1} <br />
                <span className="mt-3">{translations[language].markiting2}</span>
                <span className="mt-3 relative inline-block">
                  {translations[language].markiting3}
                  <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
                </span>
              </motion.h1>

              <motion.div
                className="mt-10 sm:mt-16 flex justify-start"
                variants={fadeUpVariant}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="flex flex-wrap lg:flex-nowrap items-center 
          gap-2 lg:gap-3 px-4 sm:px-6 py-2 sm:py-3 
          border border-white/30 rounded-full text-sm sm:text-base 
          text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <Link
                    to="/"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {translations[language].home}
                  </Link>
                  <span className="text-orange-400">››</span>
                  <Link
                    to={URLS.SERVICES}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {translations[language].services}
                  </Link>
                  <span className="text-orange-400">››</span>
                  <Link className="text-blue-400 hover:text-blue-300 transition-colors">
                    {translations[language].markiting4}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <PageWrapper>
            <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-[40%] text-start"
              >
                <h2 className="text-2xl sm:text-4xl mt-8 font-bold text-gray-800 w-full sm:w-[90%] leading-snug">
                  {translations[language].markiting5}
                </h2>
                <div className="mt-12">
                  <Link to={URLS.CONTACT} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-8 font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all text-sm sm:text-base">
                    {translations[language].markiting6}
                  </Link>
                </div>
              </motion.div>

              {/* Process Steps */}
              <div className="w-full lg:w-[60%] relative flex flex-col items-center justify-center gap-6">
                {/* Dotted Line for Desktop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute top-20 lg:top-24 hidden lg:block w-full h-0.5 border-gray-300 z-0"
                ></motion.div>

                {latestprocessSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="relative bg-white p-6 rounded-xl flex flex-col z-10 w-full max-w-xl shadow-sm"
                    >
                      {/* Icon */}
                      <div className="p-2 rounded-xl mb-4">
                        {IconComponent && (
                          <IconComponent className="w-10 h-10 text-orange-500" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </PageWrapper>
        </section>

   <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 md:py-24">
  <PageWrapper>
    {/* Section Header */}
    <motion.div
      className="text-center mb-12 md:mb-16"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 id="markiting-development-process" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
        {translations[language].markiting15}
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
        {translations[language].markiting16}
      </p>
    </motion.div>
    
    {/* Services Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-start" // Added items-start
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {latestmarketing.map((service) => {
        const IconComponent = service.icon;
        const isExpanded = expandedCard === service.id;
        const descriptionToShow =
          isExpanded && service.longDescription
            ? service.longDescription
            : service.shortDescription;
        return (
          <motion.div
            key={service.id}
            variants={fadeUpVariant}
            className="bg-white p-5 hover:shadow-xl hover:scale-[1.02] sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col self-start" // Added self-start
          >
            {/* Icon */}
            <div className="bg-gray-50 p-3 rounded-md inline-block mb-4 self-start">
              {IconComponent && (
                <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
              )}
            </div>
            
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4"> {/* Removed flex-grow */}
              {descriptionToShow}
            </p>
            
            {/* Learn More / Show Less */}
            {service.longDescription && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  toggleExpand(service.id);
                }}
                className="text-orange-500 font-semibold text-sm sm:text-base self-start hover:underline focus:outline-none"
              >
                {isExpanded ? "Show less →" : "Learn more →"}
              </button>
            )}
            {!service.longDescription && (
              <a
                href="#"
                className="text-orange-500 font-semibold text-sm sm:text-base self-start hover:underline"
                onClick={(e) => e.stopPropagation()} // Prevent event bubbling
              >
                Learn more →
              </a>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  </PageWrapper>
</section>

        <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20 text-white">
          <section className="py-16 md:py-24 text-white relative overflow-hidden">
            {/* Subtle orange border/glow effect */}
            <div
              className="absolute inset-0 border-t-8 border-l-8 border-r-8 border-transparent rounded-xl"
              style={{
                borderImage: "linear-gradient(45deg, #FF8C00, #FFD700) 1",
                borderImageSlice: 1,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "exclude",
              }}
            ></div>

            <PageWrapper>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column */}
                <motion.div
                  className="flex flex-col text-center lg:text-left px-2 sm:px-4 md:px-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:mb-20 mb-8">
                  {translations[language].markiting29}
                    <span className="text-orange-400 pl-3 block sm:inline">
                      {translations[language].markiting30}
                    </span>
                  </h2>

                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-12 pt-6">
                    {/* Stat 1 */}
                    <motion.div
                      className="text-center sm:text-left"
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                        +60%
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
                       {translations[language].markiting31}
                      </p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                      className="text-center sm:text-left"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                        +30%
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
                        {translations[language].markiting32}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  className="space-y-20 sm:space-y-24 lg:space-y-28 px-2 sm:px-4 md:px-10 lg:px-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2 }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.3 } },
                    hidden: {},
                  }}
                >
                  {/* Service 1 */}
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaAsterisk className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      <span className="font-semibold text-white">
                        {translations[language].markiting33}
                      </span>{" "}
                    {translations[language].markiting34}
                    </p>
                  </motion.div>

                  {/* Service 2 */}
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <FaAsterisk className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      <span className="font-semibold text-white">
                      {translations[language].markiting35}
                      </span>{" "}
                     {translations[language].markiting36}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </PageWrapper>
          </section>
        </div>

        <div>
          <PageWrapper>
            <div className="flex flex-col lg:flex-row pt-20">
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="px-4 py-16 w-full lg:w-1/2 sm:px-6 lg:px-8 bg-white flex items-center"
              >
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
                  {translations[language].markiting361} <br />{translations[language].markiting37}  
                  </h2>

                  <div className="space-y-4">
                    {latestitems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                      >
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16"
              >
                <p className="text-gray-500 max-w-xl text-base mb-20">
                {translations[language].markiting38}
                </p>
                <img
                  src="/images/Rectangle 10541.png"
                  alt="Expertise Visual"
                  className="w-full max-w-xl rounded-lg"
                />
              </motion.div>
            </div>
          </PageWrapper>
        </div>
        <StatsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default digitalmarkiting;
