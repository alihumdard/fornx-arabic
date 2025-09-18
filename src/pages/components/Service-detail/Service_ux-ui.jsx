import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import {
  FaSearch,
  FaProjectDiagram,
  FaRocket,
  FaFigma,
  FaMobileAlt,
  FaPencilRuler,
  FaLayerGroup,
  FaMousePointer,
  FaTabletAlt,
  FaMagic, // For Deployment
} from "react-icons/fa";
import { FaBolt, FaCogs, FaLock, FaChartLine } from "react-icons/fa";
import StatsSection from "../Statsdata";
import translations from "../../../translations";
import { useLanguage } from "../../../LanguageContext";

const processSteps = (language) => [
  {
    icon: FaSearch, // Better for "Research" than clipboard
    title: translations[language].uiuxservice7,
    description:
      translations[language].uiuxservice8,
  },
  {
    icon: FaProjectDiagram, // Represents "Flow Design" better than a laptop
    title: translations[language].uiuxservice9,
    description:
      translations[language].uiuxservice10,
  },
  {
    icon: FaCogs, // Represents refinement and adjustments
    title: translations[language].uiuxservice11,
    description:
      translations[language].uiuxservice12,
  },
  {
    icon: FaRocket, // More dynamic than cloud upload for "Execution & Delivery"
    title: translations[language].uiuxservice13,
    description:
      translations[language].uiuxservice14,
  },
];

const uiux_service = (language) => [
  {
    id: "website ui design",
    icon: FaPencilRuler,
    title: translations[language].uiuxservice17,
    shortDescription:
      translations[language].uiuxservice18,
    longDescription:
      translations[language].uiuxservice19,
  },
  {
    id: "mobile app ui design",
    icon: FaMousePointer,
    title: translations[language].uiuxservice20,
    shortDescription:
      translations[language].uiuxservice21,
    longDescription:
      translations[language].uiuxservice22
  },
  {
    id: "wireframing & prototyping",
    icon: FaTabletAlt,
    title: translations[language].uiuxservice23,
    shortDescription:
      translations[language].uiuxservice24,
    longDescription:
      translations[language].uiuxservice25,
  },
  {
    id: "design system creation",
    icon: FaMagic,
    title: translations[language].uiuxservice26,
    shortDescription:
      translations[language].uiuxservice27,
    longDescription:
      translations[language].uiuxservice28,
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
const circleVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 1 },
  },
};
const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
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
const uxui = () => {
  const { language } = useLanguage();
  const latestprocessSteps = processSteps(language);
  const latestuiux_service = uiux_service(language);
  const [expandedCard, setExpandedCard] = useState(null); // State to manage which card is expanded

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
     <title>UI/UX Design Services in Belgium | Fronx Solutions</title>
      <meta name="description" content="Enhance user experience with expert UI/UX design services by Fronx Solutions. We create intuitive, modern, and user-centered digital interfaces." />

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
                className="
              absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-[400px] h-[400px]
              bg-[#FFC003] opacity-10 blur-3xl rounded-full
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
                {translations[language].uiuxservice1} <br />
                <span className="mt-3">{translations[language].uiuxservice2}</span>
                <span className="mt-3 ml-3 relative inline-block">
                  {translations[language].uiuxservice3}
                  <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
                </span>
              </motion.h1>

              <motion.div
                className="mt-10 sm:mt-16 flex justify-start"
                variants={fadeUpVariant}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="
                  flex flex-wrap lg:flex-nowrap items-center 
                  gap-2 lg:gap-3 
                  px-4 sm:px-6 py-2 sm:py-3 
                  border border-white/30 
                  rounded-full text-sm sm:text-base 
                  text-white bg-white/5 hover:bg-white/10 
                  transition-all duration-300
                "
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

                    {translations[language].uiuxservice4}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <section className="bg-white py-16 md:py-24 px-5">
          <PageWrapper>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-start px-4 sm:px-6 mb-12"
            >
              <span className="bg-orange-400 px-4 py-2 rounded-3xl text-white font-semibold uppercase tracking-wide text-sm">
                {translations[language].uiuxservice5}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 font-bold text-gray-800 max-w-5xl">
                {translations[language].uiuxservice6}
              </h2>
            </motion.div>

            {/* Process Steps */}
            <div className="relative flex flex-col items-center lg:flex-row justify-center gap-10 px-4 sm:px-6 mt-16">
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
                        <IconComponent className="w-8 h-8 text-orange-500" />
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
      <h2 id="uiux-development-process" className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
        {translations[language].uiuxservice15}
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
        {translations[language].uiuxservice16}
      </p>
    </motion.div>
    
    {/* Services Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start" // Added items-start
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {latestuiux_service.map((service) => {
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

        <div className="relative">
          <section className="relative min-h-[600px] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <PageWrapper>
              {/* Background Image */}
              <div className="absolute inset-0 -z-10">
                <img
                  src="/images/bg.png"
                  alt="Background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
              </div>

              {/* Content Container */}
              <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 px-4">
                  <motion.h1
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {translations[language].uiuxservice29}
                  </motion.h1>
                  <motion.p
                    className="text-lg text-white/90 max-w-2xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {translations[language].uiuxservice30}
                  </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                  {[
                    {
                      title: translations[language].uiuxservice31,
                      description:
                        translations[language].uiuxservice32,
                      margin: "md:mr-36 mr-0",
                    },
                    {
                      title: translations[language].uiuxservice33,
                      description:
                        translations[language].uiuxservice34,
                      margin: "md:ml-36 ml-0",
                    },
                    {
                      title: translations[language].uiuxservice35,
                      description:
                        translations[language].uiuxservice36,
                      margin: "md:mr-36 mr-0",
                    },
                    {
                      title: translations[language].uiuxservice37,
                      description:
                        translations[language].uiuxservice38,
                      margin: "md:ml-36 ml-0",
                    },
                  ].map((feature, index) => (
                    <React.Fragment key={index}>
                      {index === 2 && (
                        <div className="hidden md:block md:col-span-2 my-2">
                          <div className="border-t border-white/20"></div>
                        </div>
                      )}
                      <motion.div
                        className={`bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all hover:shadow-lg ${feature.margin}`}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index}
                      > 
                        <h2 className="text-xl font-semibold text-white mb-4">
                          {feature.title}
                        </h2>
                        <p className="text-white/80">{feature.description}</p>
                      </motion.div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </PageWrapper>
          </section>

          {/* Floating Circle Image with Animation */}
          <motion.div
            className="absolute hidden md:block md:top-[350px] md:left-[43%] md:-translate-x-1/2 z-40 border-4 border-orange-400 rounded-full w-40 h-40 lg:w-60 lg:h-60"
            variants={circleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="/images/circle.png"
              className="w-full h-full object-cover rounded-full"
              alt="Decorative circle"
            />
          </motion.div>
        </div>

        <StatsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default uxui;
