import React, { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../../main/Pagewraper";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import URLS from "../../config/urls.config";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext";

// ALL_PROJECTS is a function that returns the array of projects
const ALL_PROJECTS = (language) => [
  {
    id: 1,
    image: "/images/blog_1.webp",
    date: "10 July 2024",
    url: URLS.BlogDetail,
    title: translations[language].blog1,
    description:
      "Developed a cutting-edge AI platform to process large datasets, providing actionable insights for businesses.",
  },
  {
    id: 2,
    image: "/images/blog_2.webp",
    date: "25 June 2024",
    // url: URLS.BlogDetail1,
    title: translations[language].blog2,
    description:
      "Built a robust e-commerce site featuring secure payment gateways and seamless CRM integration.",
  },
  {
    id: 3,
    image: "/images/blog_3.webp",
    date: "15 May 2024",
    // ⚠️ Added missing 'url' property for consistency
    // url: URLS.BlogDetail2,
    title: translations[language].blog3,
    description:
      "Designed and developed an intuitive mobile application for iOS and Android, focusing on user engagement.",
  },
];

const PROJECTS_PER_PAGE = 9;

// Create a Framer Motion-enabled Link component
const MotionLink = motion(Link);

const ProjectGridSection = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  // First, get the complete array of projects for the current language
  const allProjectsForCurrentLanguage = ALL_PROJECTS(language);

  // Now you can use this array to calculate pagination details
  const totalPages = Math.ceil(
    allProjectsForCurrentLanguage.length / PROJECTS_PER_PAGE
  );
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  // And finally, slice the array for the current page
  const currentProjects = allProjectsForCurrentLanguage.slice(
    startIndex,
    endIndex
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    const ellipsis = "...";

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      pageNumbers.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (startPage > 2) pageNumbers.push(ellipsis);
      for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);
      if (endPage < totalPages - 1) pageNumbers.push(ellipsis);
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-16 md:py-24"
    >
      <PageWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {currentProjects.map((project, index) => (
    // ⚠️ Corrected to use the MotionLink component and project.url
    <MotionLink
      to={project.url}
      key={project.id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group" // Added group class here
    >
      {/* Main Card Container with Rounded Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-2xl overflow-hidden shadow-md mb-20 hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="flex items-center justify-center overflow-hidden h-64">
          <img
            src={project.image}
            alt={project.title}
            className="transform h-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </motion.div>
      {/* Floating Info Box */}
      <div className="absolute left-4 right-4 bottom-20 translate-y-1/2 bg-white rounded-xl shadow-lg px-4 py-6 flex flex-col gap-2">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <FaCalendarAlt className="w-4 h-4" />
          <span>{project.date}</span>
        </div>
        {/* Title */}
        <p className="text-gray-800 font-semibold text-xl leading-tight">
          {project.title}
        </p>
        {/* Arrow Icon Button */}
        <div className="absolute -top-3 -right-3 bg-blue-600 group-hover:bg-blue-700 text-white p-4 rounded-full shadow-md transition">
          <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[-40deg]" />
        </div>
      </div>
    </MotionLink>
  ))}
</div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center space-x-2 mt-7"
        >
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-blue-700 transition-colors focus:outline-none"
          >
            {/* ⚠️ Changed to use React Icons for consistency */}
            <FaChevronLeft />
          </button>

          {renderPageNumbers().map((number, index) => (
            <React.Fragment key={index}>
              {number === "..." ? (
                <span className="text-gray-500 text-lg px-2">...</span>
              ) : (
                <button
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold ${currentPage === number
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    } transition-colors focus:outline-none`}
                >
                  {number}
                </button>
              )}
            </React.Fragment>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-blue-700 transition-colors focus:outline-none"
          >
            {/* ⚠️ Changed to use React Icons for consistency */}
            <FaChevronRight />
          </button>
        </motion.div>
      </PageWrapper>
    </motion.section>
  );
};

export default ProjectGridSection;