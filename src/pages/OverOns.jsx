import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import { Link } from "react-router-dom";
import OveronsAccess from "./components/Overons-Access";
import WhatWeDo from "./components/WhatWeDo";
import TechnologyStats from "./components/Technology";
import StatsSection from "./components/Statsdata";
import ContactForm from "./components/Contact";
import Footer from "../main/Footer";
import { motion } from "framer-motion";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";

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

const OverOns = () => {
  const { language } = useLanguage(); 
  return (
    <>
    <title>À propos de nous - Fronx Solutions</title>
    <meta name="description" content="" />
      <div className="relative w-full overflow-x-hidden">
        <Navbar />

        <div className="relative h-[500px] overflow-visible">
          <PageWrapper>
            <div>
              <img
                src="/images/bg-overlay.png"
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
               {translations[language].empover} <br />
                <span className="mt-3">{translations[language].with}</span>
                <span className="mt-3 ml-3 relative inline-block">
                  {translations[language].Expert}
                  <span className="absolute  left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
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
                    className="text-blue-600 hover:text-blue-600 transition-colors"
                  >
                    {translations[language].overOns}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>
        <OveronsAccess />
        <WhatWeDo />
        <TechnologyStats />
        <StatsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default OverOns;
