import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import Footer from "../main/Footer";
import URLS from "../config/urls.config";
import {
  FaHome,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaShoppingCart,
  FaRocket,
  FaSearch,
} from "react-icons/fa";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const bounceVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

const floatingVariant = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const NotFound = () => {
  const { language } = useLanguage();

  const popularServices = [
    {
      icon: FaLaptopCode,
      title: translations[language].service1,
      link: "/web-development",
    },
    {
      icon: FaMobileAlt,
      title: translations[language].service2,
      link: "/app-development",
    },
    {
      icon: FaPaintBrush,
      title: translations[language].service3,
      link: "/ui-ux development",
    },
    {
      icon: FaShoppingCart,
      title: translations[language].service4,
      link: "/e-commerce development",
    },
  ];

  return (
    <>
      <title>{translations[language].notfound} | Fronx Solutions</title>
      <meta name="description" content={translations[language].notfound3} />

      <div className="relative w-full overflow-x-hidden min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Background Image with Overlay */}
        <div className="relative min-h-screen flex items-center justify-center overflow-visible">
          <PageWrapper>
            <div>
              {/* Background Image */}
              <img
                src="/images/bg-2.png"
                alt="404 Background"
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
                w-[600px] h-[600px]
                bg-[#FFC003] opacity-10 blur-3xl rounded-full
                z-10 pointer-events-none"
              />

              {/* Floating Elements */}
              <motion.div
                variants={floatingVariant}
                animate="animate"
                className="absolute top-20 left-10 z-20"
              >
                <FaRocket className="text-orange-400 text-4xl opacity-20" />
              </motion.div>

              <motion.div
                variants={floatingVariant}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="absolute top-32 right-20 z-20"
              >
                <FaSearch className="text-blue-400 text-3xl opacity-20" />
              </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
              className="relative z-30 text-center px-4 sm:px-6 py-20"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              {/* 404 Number */}
              <motion.div variants={bounceVariant} className="mb-8">
                <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text leading-none">
                  {translations[language].notfound1}
                </h1>
              </motion.div>

              {/* Error Message */}
              <motion.div variants={fadeUpVariant} className="mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  {translations[language].notfound2}
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {translations[language].notfound3}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Link
                  to="/"
                  className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <FaHome className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  {translations[language].notfound4}
                </Link>

                <Link
                  to={URLS.SERVICES}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {translations[language].notfound5}
                </Link>

                <Link
                  to="/contact-us"
                  className="bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {translations[language].notfound6}
                </Link>
              </motion.div>

              {/* Popular Services Section */}
              <motion.div variants={fadeUpVariant} className="mt-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  {translations[language].notfound7}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {popularServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeUpVariant}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <Link
                          to={service.link}
                          className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300"
                        >
                          <div className="text-center">
                            <div className="bg-gradient-to-br from-orange-400 to-yellow-500 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="text-2xl text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                              {service.title}
                            </h4>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
