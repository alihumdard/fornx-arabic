import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import URLS from "../config/urls.config";
import { Link } from "react-router-dom";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";
import {
  FaFigma, FaPalette, FaPencilRuler,
  FaRocket, FaRegLightbulb, FaLaptopCode, FaMobileAlt,
  FaSearch, FaRobot,
  FaProjectDiagram,
  FaCloud,
  FaPlug,
  FaFacebook,
  FaMapMarkedAlt,
  FaEnvelopeOpenText,
  FaPenNib,
  FaShoppingCart,
  FaCreditCard,
  FaUserFriends,
  FaTools,
  FaCode,
} from "react-icons/fa";

const DropdownMenu = ({ mobile, textColorClass, linkHoverClass, onCloseMobileMenu }) => {
  const { language } = useLanguage();
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  useEffect(() => {
    if (!mobile) {
      setIsMainDropdownOpen(false);
      setOpenCategoryIndex(null);
    }
  }, [mobile]);

  const toggleMainDropdown = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMainDropdownOpen(!isMainDropdownOpen);
    if (isMainDropdownOpen) {
      setOpenCategoryIndex(null);
    }
  };

  const handleServiceNavigation = (e) => {
    // Just navigate, don't close dropdown or do anything else
    if (mobile && onCloseMobileMenu) {
      onCloseMobileMenu();
    }
  };

  const toggleCategoryDropdown = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  // Menu data with proper linking from the original dropdown
  const menuCategories = [
    {
      title: translations[language].design,
      url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
      items: [
        { 
          label: translations[language].drop14, 
          icon: FaFigma, 
          color: "from-blue-300 to-blue-400",
          url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
          hash: "#uiux-development-process"
        },
        { 
          label: translations[language].drop15, 
          icon: FaPalette, 
          color: "from-blue-300 to-blue-400",
          url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
          hash: "#uiux-development-process"
        },
        { 
          label: translations[language].drop16, 
          icon: FaPencilRuler, 
          color: "from-blue-300 to-blue-400",
          url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
          hash: "#uiux-development-process"
        },
        { 
          label: translations[language].drop17, 
          icon: FaRegLightbulb, 
          color: "from-blue-300 to-blue-400",
          url: URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT,
          hash: "#uiux-development-process"
        },
      ]
    },
    {
      title: translations[language].development,
      url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
      items: [
        { 
          label: translations[language].drop2, 
          icon: FaLaptopCode, 
          color: "from-orange-200 to-orange-300",
          url: URLS.SERVICE_DETAIL.WORDPRESS,
          hash: "#"
        },
        { 
          label: translations[language].drop8, 
          icon: FaMobileAlt, 
          color: "from-orange-200 to-orange-300",
          url: URLS.SERVICE_DETAIL.APP_DEVELOPMENT,
          hash: "#app-development-process"
        },
        { 
          label: translations[language].drop3, 
          icon: FaCode, 
          color: "from-orange-200 to-orange-300",
          url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
          hash: "#web-development-process"
        },
        { 
          label: translations[language].drop36, 
          icon: FaProjectDiagram, 
          color: "from-orange-200 to-orange-300",
          url: URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT,
          hash: "#software-development-process"
        },
        { 
          label: translations[language].drop11, 
          icon: FaCloud, 
          color: "from-orange-200 to-orange-300",
          url: URLS.SERVICE_DETAIL.APP_DEVELOPMENT,
          hash: "#app-development-process"
        },
        { 
          label: translations[language].drop39, 
          icon: FaPlug, 
          color: "from-orange-200 to-orange-300",
          url: URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT,
          hash: "#software-development-process"
        },
      ]
    },
    {
      title: translations[language].marketing,
      url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
      items: [
        { 
          label: translations[language].drop30, 
          icon: FaSearch, 
          color: "from-green-400 to-green-400",
          url: URLS.SERVICE_DETAIL.SEO,
          hash: "#seo-development-process"
        },
        { 
          label: translations[language].drop25, 
          icon: FaRocket, 
          color: "from-green-400 to-green-400",
          url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
          hash: "#markiting-development-process"
        },
        { 
          label: translations[language].drop26, 
          icon: FaFacebook, 
          color: "from-green-400 to-green-400",
          url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
          hash: "#markiting-development-process"
        },
        { 
          label: translations[language].drop27, 
          icon: FaMapMarkedAlt, 
          color: "from-green-400 to-green-400",
          url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
          hash: "#markiting-development-process"
        },
        { 
          label: translations[language].drop28, 
          icon: FaEnvelopeOpenText, 
          color: "from-green-400 to-green-400",
          url: URLS.SERVICE_DETAIL.DIGITAL_MARKITING,
          hash: "#markiting-development-process"
        },
        { 
          label: translations[language].drop33, 
          icon: FaPenNib, 
          color: "from-green-400 to-green-400",
          url: URLS.SERVICE_DETAIL.SEO,
          hash: "#seo-development-process"
        },
      ]
    },
  ];

  const solutionsCategory = {
    title: translations[language].solutions,
    items: [
      { 
        label: translations[language].drop6, 
        icon: FaRocket, 
        color: "from-pink-300 to-pink-400",
        url: URLS.SERVICE_DETAIL.WEB_DEVELOPMENT,
        hash: "#web-development-process"
      },
      { 
        label: translations[language].drop46, 
        icon: FaRobot, 
        color: "from-pink-300 to-pink-400",
        url: URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT,
        hash: "#ai-development-process"
      },
      { 
        label: translations[language].drop19, 
        icon: FaShoppingCart, 
        color: "from-pink-300 to-pink-400",
        url: URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT,
        hash: "#commerce-development-process"
      },
      { 
        label: translations[language].drop22, 
        icon: FaCreditCard, 
        color: "from-pink-300 to-pink-400",
        url: URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT,
        hash: "#commerce-development-process"
      },
      { 
        label: translations[language].drop23, 
        icon: FaUserFriends, 
        color: "from-pink-300 to-pink-400",
        url: URLS.ODOO,
        hash: "#"
      },
      { 
        label: translations[language].drop41, 
        icon: FaTools, 
        color: "from-pink-300 to-pink-400",
        url: URLS.SERVICE_DETAIL.MAINTENENCE,
        hash: "#maintinence-development-process"
      },
    ]
  };

  // Helper function to get mobile text classes for services link
  const getMobileServicesLinkClasses = () => {
    const currentPath = window.location.pathname;
    const isActive = currentPath === URLS.SERVICES;
    return `font-semibold whitespace-nowrap tracking-wide ${
      isActive
        ? "bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-transparent bg-clip-text font-medium"
        : "text-gray-800 hover:text-blue-600"
    }`;
  };

  return (
    <li
      className="relative w-full lg:w-auto"
      onMouseEnter={mobile ? undefined : () => setIsMainDropdownOpen(true)}
      onMouseLeave={mobile ? undefined : () => setIsMainDropdownOpen(false)}
    >
      {/* Main Menu Link - Desktop and Mobile handled differently */}
      {mobile ? (
        // Mobile version - text area small, rest of area for dropdown
        <div 
          className="w-full border-b-2 flex items-center justify-between cursor-pointer"
          onClick={toggleMainDropdown}
        >
          {/* Small text area - only navigation */}
          <Link
            to={URLS.SERVICES}
            onClick={(e) => {
              e.stopPropagation(); // Prevent container click
              handleServiceNavigation();
            }}
            className={`${getMobileServicesLinkClasses()} text-left inline-block w-auto px-2 py-2`}
          >
            {translations[language].services}
          </Link>
          
          {/* Rest of the space + icon for dropdown */}
          <div className="flex-1 flex justify-end items-center p-2">
            <svg
              className={`h-4 w-4 transform transition-transform duration-200 text-gray-800 ${isMainDropdownOpen ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2}
                d={isMainDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
              />
            </svg>
          </div>
        </div>
      ) : (
        // Desktop version (original behavior)
        <Link
          to={URLS.SERVICES}
          className={`inline-flex items-center font-semibold whitespace-nowrap tracking-wide ${textColorClass} ${linkHoverClass}`}
          aria-expanded={isMainDropdownOpen ? "true" : "false"}
        >
          {translations[language].services}
          <svg
            className={`ml-1 h-4 w-4 transform transition-transform duration-200 rotate-0`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      )}

      {/* Dropdown */}
      <AnimatePresence>
        {isMainDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`${mobile ?
              "relative w-full mt-2 p-4 bg-white/80 backdrop-blur-lg rounded-lg shadow-inner" :
              "absolute -left-[300px] top-full mt-4 w-screen max-w-5xl -translate-x-1/2 p-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100"}`}
          >
            {/* Categories Grid */}
            <div className={`${mobile ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col items-start">
                  <div className="flex justify-between items-center w-full mb-4">
                    {mobile ? (
                      <>
                        <span className="text-lg font-bold text-gray-800 tracking-wide uppercase hover:text-gray-600 transition-colors duration-200 flex-1">
                          {category.title}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCategoryDropdown(catIndex);
                          }}
                          className="p-1 ml-2"
                        >
                          <svg className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${openCategoryIndex === catIndex ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openCategoryIndex === catIndex ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <Link
                        to={category.url}
                        className="text-lg font-bold text-gray-800 tracking-wide uppercase hover:text-gray-600 transition-colors duration-200"
                      >
                        {category.title}
                      </Link>
                    )}
                  </div>

                  <AnimatePresence>
                    {(!mobile || openCategoryIndex === catIndex) && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 w-full"
                      >
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`${item.url}${item.hash}`}
                              onClick={mobile ? handleServiceNavigation : undefined}
                              className="group flex items-start space-x-4 px-3 rounded-xl hover:bg-gray-50 transition-all duration-200 w-full text-left"
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${item.color} text-white shadow-sm group-hover:shadow-md transition-shadow duration-200`}>
                                <item.icon className="text-md" />
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                                  {item.label}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Solutions Section */}
            <div className="mt-6 px-2 ">
              <div className="flex justify-between items-center w-full mb-4">
                {mobile ? (
                  <>
                    <span className="text-lg font-bold text-gray-800 tracking-wide uppercase flex-1">
                      {solutionsCategory.title}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCategoryDropdown("solutions");
                      }}
                      className="p-1 ml-2"
                    >
                      <svg
                        className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${openCategoryIndex === "solutions" ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openCategoryIndex === "solutions"
                              ? "M5 15l7-7 7 7"
                              : "M19 9l-7 7-7-7"
                          }
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-800 tracking-wide uppercase">
                    {solutionsCategory.title}
                  </span>
                )}
              </div>

              <AnimatePresence>
                {(!mobile || openCategoryIndex === "solutions") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {solutionsCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex-1 min-w-[200px]">
                        <Link 
                          to={`${item.url}${item.hash}`}
                          onClick={mobile ? handleServiceNavigation : undefined}
                          className="group flex px-2 items-start space-x-4 rounded-xl hover:bg-gray-50 transition-all duration-200 w-full text-left"
                        >
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${item.color} text-white shadow-sm group-hover:shadow-md transition-shadow duration-200`}
                          >
                            <item.icon className="text-lg" />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                              {item.label}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DropdownMenu;