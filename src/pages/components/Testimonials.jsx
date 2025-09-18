import React, { useState } from "react";
import PageWrapper from "../../main/Pagewraper";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext"; // Import useLanguage directly

// Testimonial Data Array - This is a function that returns the array
const ALL_TESTIMONIALS = (language) => [
  {
    id: 1,
    quote: translations[language].quote1,
    rating: 5,
    clientName: "saadychohan",
    clientAvatar: "/images/testimonial_1.png",
  },
  {
    id: 2,
    quote:
      translations[language].quote2 || "An outstanding experience from start to finish. The development team delivered a high-quality product well ahead of schedule. Their communication was excellent, keeping us informed every step of the way. Highly recommend their services for anyone looking for reliable and efficient software development.",
    rating: 4,
    clientName: "muhammadusaid51",
    clientAvatar: "/images/testimonial_2.webp",
  },
  {
    id: 3,
    quote:
      translations[language].quote3 || "We are thrilled with the results! The design team captured our vision perfectly and created an intuitive user interface that our customers love. They were responsive to feedback and iterated quickly. A truly talented group of professionals.",
    rating: 5,
    clientName: "endlezmusic",
    clientAvatar: "/images/testimonial_3.webp",
  },
  {
    id: 4,
    quote:
      translations[language].quote4 || "Their expertise in digital marketing helped us significantly increase our online presence and lead generation. The strategies implemented were effective and measurable. We saw a considerable ROI, and their team was always proactive and insightful.",
    rating: 4,
    clientName: "muahmmad tablas",
    clientAvatar: "/images/testimonial_4.webp",
  },
];

// Static assets that do not change when a new testimonial is selected
const STATIC_MAIN_TEAM_IMAGE = "/images/testimonial.png";
const STATIC_COMPANY_LOGO = "/images/image.png";

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  const { language } = useLanguage(); // Get the current language from context

  // IMPORTANT: Call ALL_TESTIMONIALS with the current language to get the actual array
  const allTestimonialsLocalized = ALL_TESTIMONIALS(language);

  // Initialize state with a valid index for the localized array
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Get the current testimonial from the localized array
  // Add a check in case allTestimonialsLocalized is empty (though unlikely in this setup)
  const currentTestimonial = allTestimonialsLocalized[currentTestimonialIndex] || {};

  console.log("Current Testimonial Index:", currentTestimonialIndex);
  console.log("Current Testimonial Data:", currentTestimonial);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-10"
    >
      <PageWrapper>
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-gray-600 font-semibold uppercase tracking-widest text-sm mb-2">
            {translations[language].Testimonials}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 max-w-2xl mx-auto">
            {translations[language].Testimonials1}
          </h2>
        </motion.div>

        {/* Main Testimonial Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-12">
          {/* Left: Team Image (Stays the same) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={STATIC_MAIN_TEAM_IMAGE}
              alt="Client Team"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Middle: Testimonial Card (Dynamically updates) */}
          <AnimatePresence mode="wait">
            {/* Ensure currentTestimonial has an ID before rendering */}
            {currentTestimonial.id && (
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="w-full lg:w-1/2 flex-shrink-0 relative"
              >
                <FaQuoteRight className="absolute top-5 right-5 text-orange-400 text-3xl opacity-70" />
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md">
                  {/* Star Rating - use optional chaining for safety */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: currentTestimonial.rating || 0 }).map((_, i) => (
                      <FaStar key={i} className="text-orange-400 w-4 h-4" />
                    ))}
                  </div>

                  {/* Quote - use optional chaining for safety */}
                  <p className="text-gray-700 mb-6 italic text-base sm:text-lg leading-relaxed">
                    "{currentTestimonial.quote}"
                  </p>

                  {/* Client Info - use optional chaining for safety */}
                  <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={currentTestimonial.clientAvatar}
                        alt={currentTestimonial.clientName}
                        className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                      />
                      <div>
                        <p className="font-bold text-gray-800 text-lg">
                          {currentTestimonial.clientName}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {currentTestimonial.clientTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right: Client Avatars (Clickable to change main testimonial) */}
          <div className="block lg:hidden w-full">
            <Swiper
              spaceBetween={12}
              slidesPerView={4}
              loop={true}
              // Consider removing autoplay if it interferes with manual selection or causes issues with state updates
              // autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full"
            >
              {/* Use the localized testimonials array for mapping */}
              {allTestimonialsLocalized.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={testimonial.clientAvatar}
                    alt={`Client Avatar ${testimonial.clientName}`}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`
                      w-12 h-12 rounded-full object-cover shadow-md cursor-pointer
                      ${currentTestimonialIndex === index
                        ? "border-2 border-orange-500 ring-2 ring-orange-300"
                        : "border-2 border-gray-200"
                      }
                    transition-all duration-300 ease-in-out
                    mx-auto
                    `}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Original flex layout */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex w-full lg:w-1/12 flex-col justify-center gap-10 flex-wrap lg:items-center pt-4"
          >
            {/* Use the localized testimonials array for mapping */}
            {allTestimonialsLocalized.map((testimonial, index) => (
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                key={testimonial.id}
                src={testimonial.clientAvatar}
                alt={`Client Avatar ${testimonial.clientName}`}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`
                  w-12 h-12 rounded-full object-cover shadow-md cursor-pointer
                  ${currentTestimonialIndex === index
                    ? "border-2 border-orange-500 ring-2 ring-orange-300"
                    : "border-2 border-gray-200"
                  }
                transition-all duration-300 ease-in-out
                `}
              />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
    </motion.section>
  );
};

export default Testimonials;