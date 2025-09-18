import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import Footer from "../main/Footer";
import { Link } from "react-router-dom";
import URLS from "../config/urls.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";

const navItems = (language) => [
  { id: "web", label: translations[language].webb},
  { id: "mobile", label: translations[language].mobile },
  { id: "word", label: translations[language].word },
  { id: "commerce", label: translations[language].commerce },
  { id: "design", label: translations[language].design },
  { id: "dash", label: translations[language].dash },
  { id: "logo", label: translations[language].logo },
];

const projects = (language) => [
  {
    id: 1,
    website: translations[language].webb,
    title:
      translations[language].t1,
    para: "Kidz Calendar website ",
    category: "web",
    image: "/images/w1.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,
  },
  {
    id: 2,
    website: translations[language].webb,
    title:
      translations[language].t2,
    para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
    category: "web",
    image: "/images/w2.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,

  },
  {
    id: 3,
    website: translations[language].webb,
    title:
      translations[language].t2,
    para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
    category: "web",
    image: "/images/w3.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,

  },
  {
    id: 4,
    website: translations[language].webb,
    title:
      translations[language].t2,
    para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
    category: "web",
    image: "/images/w4.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,

  },
  {
    id: 5,
    website: translations[language].webb,
    title:
      translations[language].t2,
    para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",

    category: "web",
    image: "/images/w5.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,

  },
  {
    id: 6,
    website: translations[language].webb,
    title:
      translations[language].t2,
    para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",

    category: "web",
    image: "/images/w6.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,

  },
  {
    id: 7,
    website: translations[language].webb,
    title:
      translations[language].t2,
    para: "Mobile APP - Design System - UX/UI Design - User Testing - FullStack Dev",
    category: "web",
    image: "/images/w7.png",
    url: URLS.PORTOLIO_DETAIL.WEB_1,
  },

  {
    id: 8,
    website: translations[language].mobile,
    title:
      translations[language].t1,
    para: "Food Ordering Application",
    category: "mobile",
    image: "/images/m1.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,
  },
  {
    id: 9,
    website: translations[language].mobile,
    title:
      translations[language].t2,
    para: "Service Booking Application",
    category: "mobile",
    image: "/images/m2.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 10,
    website: translations[language].mobile,
    title:
      translations[language].t2,
    para: "AgriCo Application",
    category: "mobile",
    image: "/images/m3.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 11,
    website: translations[language].mobile,
    title:
      translations[language].t2,
    para: "Babysitter Booking Application",
    category: "mobile",
    image: "/images/m4.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  // wordpress
  {
    id: 12,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "Oracle Force ",
    category: "word",
    image: "/images/wp1.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 13,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "Mew School of Leadership",
    category: "word",
    image: "/images/wp2.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 14,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "BiD Lock",
    category: "word",
    image: "/images/wp3.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 14,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "BiD Lock",
    category: "word",
    image: "/images/wp4.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 15,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "BiD Lock",
    category: "word",
    image: "/images/wp5.jpg",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 16,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "BiD Lock",
    category: "word",
    image: "/images/wp6.jpg",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 17,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "BiD Lock",
    category: "word",
    image: "/images/wp7.jpg",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 18,
    website: translations[language].word,
    title:
      translations[language].t2,
    para: "JZ Vapes",
    category: "commerce",
    image: "images/woo1.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 19,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Mettle",
    category: "commerce",
    image: "images/woo2.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 20,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Master & Dynamic",
    category: "commerce",
    image: "images/woo3.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 21,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Master & Dynamic",
    category: "commerce",
    image: "images/woo4.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 22,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Doctor Proctors",
    category: "commerce",
    image: "images/woo5.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 23,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Shwood Store",
    category: "commerce",
    image: "images/woo6.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 24,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "commerce",
    image: "images/woo7.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 25,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "The Paper Roll",
    category: "commerce",
    image: "images/woo8.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 26,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "The Paper Roll",
    category: "commerce",
    image: "images/woo9.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 27,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Wood Mart",
    category: "design",
    image: "images/uiux1.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 28,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Mettle",
    category: "design",
    image: "images/uiux2.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 29,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Faculty",
    category: "design",
    image: "images/uiux3.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 29,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Faculty",
    category: "design",
    image: "images/uiux4.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 30,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Faculty",
    category: "design",
    image: "images/ui5.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 30,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Doctors Proctors",
    category: "design",
    image: "images/ui6.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 31,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Shwood Store",
    category: "design",
    image: "images/ui7.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 32,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "design",
    image: "images/ui8.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 33,
    website: translations[language].commerce,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "design",
    image: "images/ui9.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 34,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Website Name",
    category: "dash",
    image: "images/dash1.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },

  {
    id: 35,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Doctors Proctor",
    category: "dash",
    image: "images/dash2.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },

  {
    id: 36,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Shwood Store",
    category: "dash",
    image: "images/dash3.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 37,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "dash",
    image: "images/dash4.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 38,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "dash",
    image: "images/dash5.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 39,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "dash",
    image: "images/dash6.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 40,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "dash",
    image: "images/dash7.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },
  {
    id: 41,
    website: translations[language].dash,
    title:
      translations[language].t2,
    para: "Toyshades",
    category: "dash",
    image: "images/dash8.png",
    url: URLS.PORTOLIO_DETAIL.APP_1,

  },

  {
    id: 42,
    category: "logo",
    image: "images/logoo1.png",
  },
  {
    id: 43,
    category: "logo",
    image: "images/logoo2.png",
  },
  {
    id: 44,
    category: "logo",
    image: "images/logoo3.png",
  },
  {
    id: 45,
    category: "logo",
    image: "images/logoo4.png",
  },
  {
    id: 46,
    category: "logo",
    image: "images/logoo5.png",
  },
  {
    id: 47,
    category: "logo",
    image: "images/logoo6.png",
  },
  {
    id: 48,
    category: "logo",
    image: "images/logoo7.png",
  },
  {
    id: 49,
    category: "logo",
    image: "images/logoo8.png",
  },
  {
    id: 50,
    category: "logo",
    image: "images/logoo9.png",
  },
  {
    id: 51,
    category: "logo",
    image: "images/logoo10.png",
  },
  {
    id: 52,
    category: "logo",
    image: "images/logoo11.png",
  },
  {
    id: 53,
    category: "logo",
    image: "images/logoo12.png",
  },
];

// Animation Variants
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


const Portfolio = () => {
  const {language} = useLanguage();
  const latestnavItems = navItems(language);
  const latestprojects = projects(language);
  const [activeNav, setActiveNav] = useState("web");


  const handleNavClick = (id) => setActiveNav(id);

  const filteredlatestprojects =
    activeNav === "all"
      ? latestprojects
      : latestprojects.filter((project) => project.category === activeNav);

  return (
    <>
    <title>{translations[language].port1}</title>
    <div className="relative w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] overflow-visible">
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

            {/* Yellow Glow */}
            <span
              className="absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                w-64 h-64 sm:w-[400px] sm:h-[400px]
                bg-[#FFC003] opacity-10 blur-3xl rounded-full
                z-10 pointer-events-none"
            />
          </div>

          {/* Animated Content */}
          <motion.div
            className="absolute top-32 sm:top-44 px-4"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-snug"
              variants={fadeUpVariant}
            >
              {translations[language].port2}<br />
              <span className="mt-3">{translations[language].port3}</span>
              <span className="mt-3 ml-3 relative inline-block">
                {translations[language].port4}
                <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
              </span>
            </motion.h1>

            <motion.div
              className="mt-6 sm:mt-10 flex justify-start"
              variants={fadeUpVariant}
              transition={{ delay: 0.5 }}
            >
              <div
                className="flex flex-wrap items-center 
                  gap-2 sm:gap-3 
                  px-3 sm:px-6 py-2 sm:py-3 
                  border border-white/30 
                  rounded-full text-sm sm:text-base 
                  text-white bg-white/5 hover:bg-white/10 
                  transition-all duration-300"
              >
                <Link
                  to="/"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Home
                </Link>
                <span className="text-orange-400">››</span>
                <span className="text-blue-600">Portfolio</span>
              </div>
            </motion.div>
          </motion.div>
        </PageWrapper>
      </div>

      {/* Portfolio Section */}
      <div className="min-h-screen py-10 sm:py-20">
        {/* Nav Tabs (Desktop with Swiper + Custom Arrows) */}
        <nav className="hidden sm:block bg-white">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView="auto"
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="py-4"
            >
              {latestnavItems.map((item) => (
                <SwiperSlide key={item.id} className="!w-auto">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`${activeNav === item.id
                      ? "bg-gradient-to-r from-[#1A61EA] to-[#6931CF] text-white"
                      : "text-gray-600 hover:text-gray-900 bg-slate-50"
                      } px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Nav Buttons */}
            <button className="custom-prev absolute -left-5 top-1/2 -translate-y-1/2 
      border bg-white p-2 rounded-full shadow-md 
      hover:scale-110 transition">
              <FaChevronLeft />
            </button>
            <button className="custom-next absolute -right-5 top-1/2 -translate-y-1/2 
      border bg-white p-2 rounded-full shadow-md 
      hover:scale-110 transition">
              <FaChevronRight />
            </button>
          </div>
        </nav>

        {/* Mobile Scroll Nav */}
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="flex overflow-x-auto py-3 px-4 space-x-3">
            {latestnavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${activeNav === item.id
                  ? "bg-gradient-to-r from-[#1A61EA] to-[#6931CF] text-white"
                  : "text-gray-600 hover:text-gray-900"
                  } whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {activeNav === "logo" ? (
            // Logo wala grid (3 images per row)
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {filteredlatestprojects.map((project) => (
                <div key={project.id} className="overflow-hidden rounded-xl bg-white">
                  <img
                    src={project.image}
                    alt="Logo"
                    className="w-full h-96 object-contain py-6"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Normal card layout for all other categories
            <div className="grid grid-cols-1 gap-8">
              {filteredlatestprojects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white flex flex-col md:flex-row rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
                >
                  {/* Image */}
                  <div className="md:w-2/5 h-52 sm:h-64 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 sm:p-10 flex flex-col justify-center">
                    <p className="text-[#FF9B4B] bg-slate-50 rounded-full w-fit px-3 py-1 font-medium mb-3 text-sm sm:text-base">
                      {project.website}
                    </p>

                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 pb-5">{project.para}</p>

                    {project.url && (
                      <Link
                        to={project.url}
                        className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#1A61EA] to-[#6931CF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 w-fit"
                      >
                        {translations[language].viewcase}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

      </div>

    </div>
    </>
  );
};

export default Portfolio;
