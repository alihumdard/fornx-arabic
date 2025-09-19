import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext";

// Portfolio categories
const portfolioCategories = (language) => [
  { id: "website-development", name: translations[language].service1 },
  { id: "mobile-app-development", name: translations[language].service2 },
  { id: "wordpress-development", name: translations[language].WordPressDevelopment },
  { id: "ui-ux-design", name: translations[language].service3 },
];

// 🔹 Data definitions
// ✅ This is now a function that depends on language
const websiteDevelopmentData = (language) => [
  { id: "w1", image: "/images/w1.png", title: translations[language].portfolio1, description: translations[language].portfolio2, category: "website-development" },
  { id: "w2", image: "/images/w2.png", title: translations[language].portfolio3, description: translations[language].portfolio4, category: "website-development" },
  { id: "w3", image: "/images/w3.png", title:  translations[language].portfolio5, description:  translations[language].portfolio6, category: "website-development" },
  { id: "w4", image: "/images/w4.png", title: translations[language].portfolio7, description:  translations[language].portfolio8, category: "website-development" },
];

// ✅ These are static and can stay outside
const mobileAppData = (language) => [
  { id: "m1", image: "/images/m1.png", title:  translations[language].portfolio9, description:  translations[language].portfolio10, category: "mobile-app-development" },
  { id: "m2", image: "/images/m2.png", title: translations[language].portfolio11, description:translations[language].portfolio12, category: "mobile-app-development" },
  { id: "m3", image: "/images/m3.png", title: translations[language].portfolio13, description: translations[language].portfolio14, category: "mobile-app-development" },
  { id: "m4", image: "/images/m4.png", title: translations[language].portfolio15, description: translations[language].portfolio16, category: "mobile-app-development" },
];

const wordpressData = (language) => [
  { id: "wp1", image: "/images/wp1.png", title: translations[language].portfolio17, description:translations[language].portfolio18, category: "wordpress-development" },
  { id: "wp2", image: "/images/wp2.png", title: translations[language].portfolio19, description: translations[language].portfolio20, category: "wordpress-development" },
  { id: "wp3", image: "/images/wp3.png", title: translations[language].portfolio21, description: translations[language].portfolio22, category: "wordpress-development" },
  { id: "wp4", image: "/images/wp4.png", title: translations[language].portfolio23, description: translations[language].portfolio24, category: "wordpress-development" },
];

const seoData = (language) => [
  { id: "seo1", image: "/images/ecommerce.jpeg", title: translations[language].portfolio25, description: translations[language].portfolio26, category: "seo-services" },
  { id: "seo2", image: "/images/ecommerce.jpeg", title: translations[language].portfolio27, description: translations[language].portfolio28, category: "seo-services" },
];

const uiuxData = (language) => [
  { id: "ui1", image: "/images/ui1.png", title: translations[language].portfolio29, description: translations[language].portfolio30, category: "ui-ux-design" },
  { id: "ui2", image: "/images/ui2.png", title: translations[language].portfolio31, description: translations[language].portfolio32, category: "ui-ux-design" },
  { id: "ui3", image: "/images/ui3.png", title: translations[language].portfolio33, description: translations[language].portfolio34, category: "ui-ux-design" },
  { id: "ui4", image: "/images/ui4.png", title: translations[language].portfolio35, description: translations[language].portfolio36, category: "ui-ux-design" },
];

const digitalMarketingData = (language) => [
  { id: "dm1", image: "/images/ecommerce.jpeg", title: translations[language].portfolio37, description: translations[language].portfolio38, category: "digital-marketing" },
  { id: "dm2", image: "/images/ecommerce.jpeg", title: translations[language].portfolio39, description: translations[language].portfolio40, category: "digital-marketing" },
];


const Portfolio = () => {
  const { language } = useLanguage();

  // ✅ Call functions that depend on language INSIDE the component
  const currentPortfolioCategories = portfolioCategories(language);

  // ✅ Assemble the complete portfolio data INSIDE the component
  const portfolioData = [
    ...websiteDevelopmentData(language), // Call the function here
    ...mobileAppData(language),
    ...wordpressData(language),
    ...seoData(language),
    ...uiuxData(language),
    ...digitalMarketingData(language),
  ];

  const [activeCategoryId, setActiveCategoryId] = useState(currentPortfolioCategories[0]?.id);

  const filteredPortfolioItems = portfolioData.filter(
    (item) => item.category === activeCategoryId
  );

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
        <div
          className={`flex flex-col lg:flex-row gap-12 pt-16 md:pt-24`}
          dir={language === "ur" ? "rtl" : "ltr"}
        >
          {/* Categories */}
          <motion.div
            variants={item}
            className="w-full lg:w-1/4 flex-shrink-0"
          >
            <h3
              className={`text-3xl font-bold text-gray-800 mb-6 flex items-baseline ${language === "ur" ? "" : "justify-start"
                }`}
            >
              {translations[language].ours}
              <span
                className={`bg-gradient-to-r from-[#6931CF] to-[#1A61EA] bg-clip-text text-transparent ${language === "ur" ? "mr-2" : "ml-2"
                  }`}
              >
                {translations[language].portfolio}
              </span>
            </h3>

            <ul className="space-y-3">
              {currentPortfolioCategories.map((category) => (
                <li key={category.id}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`w-full px-6 py-3 rounded-3xl font-medium transition-all duration-200
                      ${activeCategoryId === category.id
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
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 ${language === "ur" ? "items-end text-right" : "items-start text-left" // Updated padding and alignment
                        }`}
                    >
                      <h4 className="text-xl font-bold text-white">{itemData.title}</h4>
                      <p
                        className={`text-gray-200 text-sm mb-4 ${language === "ur" ? "pl-10" : "pr-10"
                          }`}
                      >
                        {itemData.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`absolute bottom-6 ${language === "ur" ? "left-6" : "right-6"
                          } bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white p-3 rounded-full shadow-md`}
                      >
                        <FaArrowRight
                          className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-[-30deg] ${language === "ur" ? "rotate-180" : ""
                            }`}
                        />
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