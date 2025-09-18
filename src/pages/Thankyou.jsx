import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../main/Navbar";
import Footer from "../main/Footer";
import PageWrapper from "../main/Pagewraper";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { 
  FaCheckCircle, 
  FaHome, 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp,
  FaCalendarAlt,
  FaArrowRight,
  FaHeart,
  FaStar
} from "react-icons/fa";

const ThankYou = () => {
  const { language } = useLanguage();

  // Get query parameters to customize message
  const urlParams = new URLSearchParams(window.location.search);
  const formType = urlParams.get('type') || 'general';
  const userName = urlParams.get('name') || '';

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bounceVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const floatingVariant = {
    animate: {
      y: [-5, 5, -5],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Customize content based on form type and language
  const getCustomContent = () => {
    const baseKey = formType === 'contact' ? 'contact' :
                    formType === 'quote' ? 'quote' :
                    formType === 'consultation' ? 'consultation' : 'general';
    
    const greeting = userName ? 
      (language === 'fr' ? `Bonjour ${userName}, ` : `Hallo ${userName}, `) : '';
    
    return {
      title: translations[language][`thankyou_${baseKey}_title`] || translations[language].thankyou_title,
      subtitle: `${greeting}${translations[language][`thankyou_${baseKey}_subtitle`] || translations[language].thankyou_subtitle}`,
      description: translations[language][`thankyou_${baseKey}_description`] || translations[language].thankyou_description,
      nextSteps: translations[language][`thankyou_${baseKey}_nextsteps`] || translations[language].thankyou_nextsteps
    };
  };

  const content = getCustomContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>{translations[language].thankyou_page_title} | Fronx Solutions</title>
      <meta name="description" content={translations[language].thankyou_page_description} />
      
      <div className="relative w-full overflow-x-hidden min-h-screen">
        <Navbar />
        
        {/* Background Image with Overlay */}
        <div className="relative min-h-screen flex items-center justify-center overflow-visible">
          <PageWrapper>
            <div>
              {/* Background Image */}
              <img
                src="/images/bg-2.png"
                alt="Thank You Background"
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
                <FaStar className="text-green-400 text-4xl opacity-20" />
              </motion.div>

              <motion.div
                variants={floatingVariant}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="absolute top-32 right-20 z-20"
              >
                <FaHeart className="text-red-400 text-3xl opacity-20" />
              </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
              className="relative z-30 text-center px-4 sm:px-6 py-20"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              {/* Success Icon with floating animation */}
              <motion.div
                variants={bounceVariant}
                className="mb-8 relative"
              >
                <motion.div
                  variants={floatingVariant}
                  animate="animate"
                  className="inline-block"
                >
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-full shadow-2xl">
                    <FaCheckCircle className="text-white text-6xl" />
                  </div>
                </motion.div>
                
                {/* Floating hearts */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-2 -right-2"
                >
                  <FaHeart className="text-red-400 text-2xl animate-pulse" />
                </motion.div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariant}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {content.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                variants={itemVariant}
                className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
              >
                {content.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariant}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                {content.description}
              </motion.p>

              {/* Next Steps Box */}
              <motion.div
                variants={itemVariant}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center mb-3">
                  <FaCalendarAlt className="text-orange-500 text-xl mr-2" />
                  <h3 className="text-lg font-semibold text-white">
                    {translations[language].thankyou_nextsteps_title}
                  </h3>
                </div>
                <p className="text-gray-300">{content.nextSteps}</p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariant}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Link
                  to="/"
                  className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <FaHome className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  {translations[language].thankyou_back_home}
                </Link>
                
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  {translations[language].thankyou_our_services}
                  <FaArrowRight className="text-sm" />
                </Link>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={itemVariant}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">
                    {translations[language].thankyou_email_label}
                  </h4>
                  <a 
                    href="mailto:info@fronxsolutions.be"
                    className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    info@fronxsolutions.be
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <FaPhone className="text-orange-500 text-3xl mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">
                    {translations[language].thankyou_phone_label}
                  </h4>
                  <a 
                    href="tel:+32477277312"
                    className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    +32 477 277 312
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <FaWhatsapp className="text-green-500 text-3xl mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">WhatsApp</h4>
                  <a 
                    href="https://wa.me/32477277312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    {translations[language].thankyou_whatsapp_text}
                  </a>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={itemVariant}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <p className="text-white text-lg mb-4">
                  <strong>{translations[language].thankyou_why_choose}</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-orange-500">500+</p>
                    <p className="text-gray-300">{translations[language].thankyou_satisfied_clients}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500">5+</p>
                    <p className="text-gray-300">{translations[language].thankyou_years_experience}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500">24{translations[language].thankyou_hours_short}</p>
                    <p className="text-gray-300">{translations[language].thankyou_response_time}</p>
                  </div>
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

export default ThankYou;