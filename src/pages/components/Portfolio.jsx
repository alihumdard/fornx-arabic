import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext"; // Import useLanguage directly

// Portfolio categories
const portfolioCategories = (language) => [
  { id: "website-development", name: translations[language].service1 },
  { id: "mobile-app-development", name: translations[language].service2 },
  { id: "wordpress-development", name: translations[language].WordPressDevelopment },
  // { id: "seo-services", name: translations[language].SEOServices },
  { id: "ui-ux-design", name: translations[language].service3 },
  // { id: "digital-marketing", name: translations[language].service5 },
];

// 🔹 Separate portfolio data variables for each category
const websiteDevelopmentData = [
  { id: "w1", image: "/images/w1.png", title: "Empowering young minds with innovative learning experiences for a brighter future ahead", description: "Kidz Calendar website", category: "website-development" },
  { id: "w2", image: "/images/w2.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev", category: "website-development" },
  { id: "w3", image: "/images/w3.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev", category: "website-development" },
  { id: "w4", image: "/images/w4.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev", category: "website-development" },
];

const mobileAppData = [
  { id: "m1", image: "/images/m1.png", title: "Suya Kabab – A Modern Mobile App for Effortless Food Ordering", description: "Food Ordering Application", category: "mobile-app-development" },
  { id: "m2", image: "/images/m2.png", title: "A Modern Service Booking Application – Seamless Access to Services at Your Fingertips", description: "Service Booking Application", category: "mobile-app-development" },
  { id: "m3", image: "/images/m3.png", title: "Modern Crop Management Application – Empowering Farmers for Better Yields", description: "AgriCo Application", category: "mobile-app-development" },
  { id: "m4", image: "/images/m4.png", title: "Caregiver & Babysitter Booking App – Reliable Care at Your Fingertips", description: "Babysitter Booking Application", category: "mobile-app-development" },
];

const wordpressData = [
  { id: "wp1", image: "/images/wp1.png", title: "Empowering young minds with innovative learning experiences for a brighter future ahead", description: "Oracle Force", category: "wordpress-development" },
  { id: "wp2", image: "/images/wp2.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Mew School of Leadership", category: "wordpress-development" },
  { id: "wp3", image: "/images/wp3.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "BiD Lock", category: "wordpress-development" },
  { id: "wp4", image: "/images/wp4.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Website Name", category: "wordpress-development" },
];

const seoData = [
  { id: "seo1", image: "/images/ecommerce.jpeg", title: "SEO Audit", description: "Complete SEO audit with improvements.", category: "seo-services" },
  { id: "seo2", image: "/images/ecommerce.jpeg", title: "Keyword Optimization", description: "Targeted keywords for ranking.", category: "seo-services" },
];

const uiuxData = [
  { id: "ui1", image: "/images/ui1.png", title: "Empowering young minds with innovative learning experiences for a brighter future ahead", description: "Wood Mart", category: "ui-ux-design" },
  { id: "ui2", image: "/images/ui2.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Mettlle", category: "ui-ux-design" },
  { id: "ui3", image: "/images/ui3.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Faculty", category: "ui-ux-design" },
  { id: "ui4", image: "/images/ui4.png", title: "Revamping & deploying a +10 year old mobile app to more than 700k users in Belgium in 3 months", description: "Website Name", category: "ui-ux-design" },
];

const digitalMarketingData = [
  { id: "dm1", image: "/images/ecommerce.jpeg", title: "Social Media Campaign", description: "High-engagement ad campaigns.", category: "digital-marketing" },
  { id: "dm2", image: "/images/ecommerce.jpeg", title: "Email Marketing", description: "Automated email funnel strategy.", category: "digital-marketing" },
];

// 🔹 Combine all category data
const portfolioData = [
  ...websiteDevelopmentData,
  ...mobileAppData,
  ...wordpressData,
  ...seoData,
  ...uiuxData,
  ...digitalMarketingData,
];

const Portfolio = () => {
  const { language } = useLanguage();
  const currentPortfolioCategories = portfolioCategories(language);
  const [activeCategoryId, setActiveCategoryId] = useState(currentPortfolioCategories[0]?.id);

  const filteredPortfolioItems = portfolioData.filter((item) => item.category === activeCategoryId);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <motion.section initial="hidden" animate="visible" variants={container} className="bg-white py-16 md:py-24">
      {/* Header */}
      <motion.div variants={item} className="pt-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
          {translations[language].some}
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {translations[language].some}
        </h2>
        <p className="text-md sm:text-lg max-w-3xl mx-auto px-4">
          {translations[language].discover}
        </p>
      </motion.div>

      <PageWrapper>
        <div className="flex flex-col lg:flex-row gap-12 pt-16 md:pt-24">
          {/* Categories */}
          <motion.div variants={item} className="w-full lg:w-1/4 flex-shrink-0">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-baseline">
              {translations[language].ours}
              <span className="bg-gradient-to-r from-[#6931CF] to-[#1A61EA] bg-clip-text text-transparent ml-2">
                {translations[language].portfolio}
              </span>
            </h3>
           <ul
  className={`space-y-3 ${
    language === "ur" ? "text-right" : "text-left"
  }`}
>
  {currentPortfolioCategories.map((category) => (
    <li key={category.id}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setActiveCategoryId(category.id)}
        className={`w-full px-6 py-3 rounded-3xl font-medium transition-all duration-200
          ${
            activeCategoryId === category.id
              ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          } ${language === "ur" ? "text-right" : "text-left"}`}
      >
        {category.name}
      </motion.button>
    </li>
  ))}
</ul>

          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            variants={container}
            className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredPortfolioItems.length > 0 ? (
                filteredPortfolioItems.map((itemData) => (
                  <motion.div
                    key={itemData.id}
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden relative group"
                  >
                    {/* Image */}
                    <motion.img
                      src={itemData.image}
                      alt={itemData.title}
                      className="w-full h-64 object-cover bg-gray-50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end px-3">
                      <h4 className="text-xl font-bold text-white">
                        {itemData.title}
                      </h4>
                      <p className="text-gray-200 text-sm mb-4 pr-10">
                        {itemData.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute bottom-6 right-6 bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white p-3 rounded-full shadow-md"
                      >
                        <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-30deg]" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  key="no-items"
                  variants={item}
                  className="col-span-1 md:col-span-2 text-center text-gray-500 text-lg py-10"
                >
                  No portfolio items found for this category.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </PageWrapper>
    </motion.section>
  );
};

export default Portfolio;