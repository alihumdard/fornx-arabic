import React from "react";
import Navbar from "../../main/Navbar";
import PageWrapper from "../../main/Pagewraper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import URLS from "../../config/urls.config";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const isRTL = language === "ur";

  return (
    <>
      <div className="relative h-screen w-full" dir={isRTL ? "rtl" : "ltr"}>
        {/* Navbar */}
        <Navbar />

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            e.target.style.display = "none";
            const fallbackImg = document.createElement("img");
            fallbackImg.src =
              "https://placehold.co/1920x1080/000000/FFFFFF?text=Background+Image";
            fallbackImg.className =
              "absolute inset-0 w-full h-full object-cover";
            e.target.parentNode?.appendChild(fallbackImg);
          }}
        >
          <source src="/vidio/home-vdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div
          className={`relative z-10 flex items-center justify-center min-h-full py-16 lg:py-0 
    ${isRTL ? "lg:justify-end lg:ml-[44%]" : "lg:justify-start lg:mr-[28%]"}`}
        >
          <PageWrapper>
            <motion.div
              className={`text-center flex flex-col lg:mt-14 items-center w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-0
        ${isRTL ? "lg:items-start lg:text-right lg:mr-16" : "lg:items-start lg:text-left lg:ml-16"}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Tags */}
              <motion.div
                className={`flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8 
          ${isRTL ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}
                variants={fadeUpVariant}
              >
                <Link to={URLS.SERVICE_DETAIL.WEB_DEVELOPMENT}>
                  <motion.span
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm whitespace-nowrap"
                    variants={fadeUpVariant}
                  >
                    {translations[language].webDevelopment}
                  </motion.span>
                </Link>
                <Link to={URLS.SERVICE_DETAIL.APP_DEVELOPMENT}>
                  <motion.span
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm whitespace-nowrap"
                    variants={fadeUpVariant}
                  >
                    {translations[language].appDevelopment}
                  </motion.span>
                </Link>
                <Link to={URLS.SERVICE_DETAIL.SEO}>
                  <motion.span
                    className="bg-white text-black font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm whitespace-nowrap"
                    variants={fadeUpVariant}
                  >
                    {translations[language].seoCInsulting}
                  </motion.span>
                </Link>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl whitespace-normal md:whitespace-nowrap w-full text-white leading-tight font-bold mb-4 md:mb-6
          ${isRTL ? "text-center md:text-right lg:-ml-40" : "text-center md:text-left lg:mr-96"}`}
                variants={fadeUpVariant}
              >
                {translations[language].web1}
                <span
                  className={`block w-4/5 sm:w-3/5 md:w-1/2 lg:w-3/5 xl:w-2/5 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mt-5 
            ${isRTL ? "ml-auto mr-8 sm:mr-0" : "mr-auto"}`}
                ></span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold mb-6 md:mb-8"
                variants={fadeUpVariant}
              >
                {translations[language].web2}
              </motion.p>

              {/* Buttons */}
              <motion.div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8 w-full justify-center 
          ${isRTL ? "lg:justify-start" : "lg:justify-start"}`}
                variants={fadeUpVariant}
              >
                <Link
                  to={URLS.CONTACT}
                  className="bg-gradient-to-r from-[#6931CF] to-[#1A61EA] btn-animate text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap text-center"
                >
                  {translations[language].Herobutton1}
                </Link>
                <Link
                  to={URLS.SERVICES}
                  className="border btn-animate border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:text-[#6931CF] transition-colors whitespace-nowrap text-center"
                >
                  {translations[language].Herobutton2}
                </Link>
              </motion.div>

              {/* Small Note */}
              <motion.p
                className={`text-gray-300 text-sm italic text-center 
          ${isRTL ? "lg:text-right" : "lg:text-left"}`}
                variants={fadeUpVariant}
              >
                {translations[language].lets}
              </motion.p>
            </motion.div>
          </PageWrapper>
        </div>


      </div>

      {/* Achievements Section */}
      <PageWrapper>
        <section
          id="achievements"
          dir={isRTL ? "rtl" : "ltr"}
          className="relative bg-gray-50 px-4 sm:px-6 lg:px-10 my-20 py-12 md:py-16 lg:my-40 lg:py-20 overflow-hidden"
        >
          {/* Decorative Image */}
          <img
            src="/images/OBJECTS.png"
            alt="Decorative Object"
            className={`absolute hidden sm:block w-1/2 max-w-md md:max-w-lg lg:max-w-xl pointer-events-none opacity-80 
              ${isRTL ? "-left-20 -top-10" : "-right-20 -top-10"}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/500x500/CCCCCC/000000?text=Decorative+Object";
            }}
          />

          {/* Content */}
          <div
            className={`relative z-10 max-w-6xl mx-auto ${isRTL ? "text-right" : "text-left"
              }`}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {translations[language].get}
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-base md:text-md text-gray-700 mb-8 md:mb-10 max-w-full lg:max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {translations[language].getDetail}
            </motion.p>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-2 md:grid-cols-3 md:w-[55%] gap-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-full 
                ${isRTL ? "justify-items-end lg:ml-auto" : "justify-items-start lg:mr-auto"}`}
            >
              {[
                { value: "420+", label: translations[language].service1 },
                { value: "350+", label: translations[language].detail2 },
                { value: "7+", label: translations[language].detail3 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg text-center border p-6 w-full max-w-[180px] shadow-sm"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl sm:text-4xl font-semibold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium whitespace-pre-line text-sm sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default Hero;
