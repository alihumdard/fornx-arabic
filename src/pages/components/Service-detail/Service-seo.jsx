import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import {
  FaComments,
  FaTools,
  FaMicrochip,
  FaBrain,
  FaHeartbeat,
  FaSearch,
  FaLightbulb,
  FaDraftingCompass,
  FaCogs,
  FaChartLine,
  FaFileAlt,
  FaShareAlt,
  FaPenNib,
  FaLink,
} from "react-icons/fa";
import StatsSection from "../Statsdata";
import "swiper/css";
import "swiper/css/pagination";
import translations from "../../../translations";
import { useLanguage } from "../../../LanguageContext";

const processSteps = (language) => [
  {
    icon: FaLightbulb, // Research
    title: translations[language].seoservice6,
    description:
      translations[language].seoservice7,
  },
  {
    icon: FaDraftingCompass, // Planning
    title: translations[language].seoservice8,
    description:
      translations[language].seoservice9,
  },
  {
    icon: FaCogs, // Execution
    title: translations[language].seoservice10,
    description:
      translations[language].seoservice11,
  },
  {
    icon: FaChartLine, // Analysis
    title: translations[language].seoservice12,
    description:
      translations[language].seoservice13,
  },
];

const appservicedata = (language) => [
  {
    id: "keyword research",
    icon: FaSearch, // Magnifying glass for research
    title: translations[language].seoservice16,
    shortDescription:
      translations[language].seoservice17,
    longDescription:
      translations[language].seoservice18,
  },
  {
    id: "on-page seo",
    icon: FaFileAlt, // Represents content/page optimization
    title: translations[language].seoservice19,
    shortDescription:
      translations[language].seoservice20,
    longDescription:
      translations[language].seoservice21,
  },
  {
    id: "off-page seo",
    icon: FaShareAlt, // Represents external sharing/backlinking
    title: translations[language].seoservice22,
    shortDescription:
      translations[language].seoservice23,
    longDescription:
      translations[language].seoservice24,
  },
  {
    id: "technical seo",
    icon: FaTools, // Technical settings/tools
    title: translations[language].seoservice25,
    shortDescription:
      translations[language].seoservice26,
    longDescription:
      translations[language].seoservice27,
  },
  {
    id: "content creation",
    icon: FaPenNib, // Writing/content icon
    title: translations[language].seoservice28,
    shortDescription:
      translations[language].seoservice29,
    longDescription:
      translations[language].seoservice30,
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
const SEO = () => {
  const { language } = useLanguage();
  const latestprocessSteps = processSteps(language);
  const latestappservicedata = appservicedata(language);
  const [expandedCard, setExpandedCard] = useState(null); // State to manage which card is expanded

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <title>Best SEO Company in Belgium | Fronx Solutions</title>
      <meta name="description" content="Meta des Fronx Solutions is the leading SEO company in Belgium, offering expert SEO services to boost your Google rankings, drive organic traffic, and grow your business online." />
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
                {translations[language].seoservice1}
                <span className="mt-3 ml-3 relative inline-block">
                  {translations[language].seoservice2}
                  <span className="absolute left-0 right-0 -bottom-5 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
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
                    {translations[language].seoservice3}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <section className="bg-white py-16 md:py-24 md:px-5">
          <PageWrapper>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-start px-4 sm:px-6 mb-12"
            >
              <div className="flex justify-center md:justify-start">
                <span className="bg-orange-400 px-4 py-2 rounded-3xl text-white font-semibold uppercase tracking-wide text-sm">
                  {translations[language].seoservice4}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl text-center md:text-start  mt-6 font-bold text-gray-800 max-w-5xl">
                {translations[language].seoservice5}
              </h2>
            </motion.div>

            {/* Process Steps */}
            <div className="relative flex flex-col items-center lg:flex-row justify-center px-4 sm:px-6 mt-16">
              {/* Dotted Line for Desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-20 lg:top-24 hidden lg:block w-full h-0.5 border-t-2 border-dashed border-gray-300 z-0"
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
                    className="relative bg-white p-6 rounded-xl text-center flex flex-col items-center z-10 w-full max-w-sm"
                  >
                    {/* Icon Box */}
                    <div className="bg-gray-100 p-4 rounded-xl mb-4 shadow-sm">
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
      <h2 id="seo-development-process" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 max-w-5xl mx-auto">
        {translations[language].seoservice14}
      </h2>
      <p className="text-center text-gray-600">
        {translations[language].seoservice15}
      </p>
    </motion.div>
    
    {/* Services Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start" // Added items-start
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {latestappservicedata.map((service) => {
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
            className="bg-white hover:shadow-xl hover:scale-[1.02] p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col self-start" // Added self-start
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

        <div className="">
          <PageWrapper>
            <div className="flex flex-col lg:flex-row pt-20">
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="px-4 py-16 w-full lg:w-1/2 sm:px-6 lg:px-8 flex items-center"
              >
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10">
                    {translations[language].seoservice31} <br /> {translations[language].seoservice32}
                  </h2>

                  <div className="space-y-2">
                    <p className="text-gray-600">
                      {translations[language].seoservice33}
                    </p>
                    <p className="text-gray-600">
                      {translations[language].seoservice34}
                    </p>
                    <p className="text-gray-600">
                      {translations[language].seoservice35}
                      <span className="text-orange-600 px-2">
                        {translations[language].seoservice36}
                      </span>
                      {translations[language].seoservice37}
                    </p>
                    <p className="text-gray-600">
                      {translations[language].seoservice38}
                    </p>
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
                <img
                  src="/images/seo-1.png"
                  alt="Expertise Visual"
                  className="w-full max-w-xl rounded-lg"
                />
              </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row pt-10">
              {/* Left Section */}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16"
              >
                <img
                  src="/images/seo-2.png"
                  alt="Expertise Visual"
                  className="w-full max-w-xl rounded-lg"
                />
              </motion.div>
              {/* Right Section */}

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="px-4 py-16 w-full lg:w-1/2 sm:px-6 lg:px-8 flex items-center"
              >
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10">
                    {translations[language].seoservice39}
                    <br />{translations[language].seoservice40}
                  </h2>

                  <div className="space-y-2">
                    <p className="text-gray-600">
                      {translations[language].seoservice41}
                    </p>
                    <p className="text-gray-600">
                      {translations[language].seoservice42}
                    </p>
                    <p className="text-gray-600">
                      {translations[language].seoservice43}
                      <span className="text-orange-600 px-2">{translations[language].seoservice44}</span>
                      {translations[language].seoservice45}
                    </p>
                    <p className="text-gray-600">
                      {translations[language].seoservice46}
                    </p>
                  </div>
                </div>

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

export default SEO;
