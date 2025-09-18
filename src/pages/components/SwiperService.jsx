import React, { useRef } from "react";
import PageWrapper from "../../main/Pagewraper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import translations from "../../translations";
import { useLanguage } from "../../LanguageContext";

const testimonials = (language) => [
  {
    id: 1,
    content: translations[language].quote1,
    author: "saadychohan",
    image: "/images/testimonial_1.png",
  },
  {
    id: 2,
    content: translations[language].quote2  || "An outstanding experience from start to finish. The development team delivered a high-quality product well ahead of schedule. Their communication was excellent, keeping us informed every step of the way. Highly recommend their services for anyone looking for reliable and efficient software development.",
    author: "muhammadusaid51",
    image: "/images/testimonial_2.webp",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SwiperService = () => {
      const { language } = useLanguage();
       const localizedTestimonials = testimonials(language);
  const swiperRef = useRef(null);

  return (
    <PageWrapper>
      <div className="bg-gray-100 pb-10 pt-6 md:px-10 relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="relative group"
        >
          {localizedTestimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row rounded-lg overflow-hidden"
              >
                {/* Text Content */}
                <motion.div
                  variants={fadeInUp}
                  custom={1}
                  className="p-6 sm:p-8 md:p-10 w-full md:w-[60%]"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                   {translations[language].success1}
                  </h2>
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      {testimonial.content}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-base sm:text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={fadeInUp}
                  custom={2}
                  className="flex w-full md:w-[40%] justify-center md:justify-end p-4 md:p-6"
                >
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="w-40 sm:w-56 md:w-full max-w-[280px] object-contain"
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-2 right-4 sm:right-16 z-10 flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="bg-white border p-3 rounded-full hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400 backdrop-blur-md bg-opacity-80 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="bg-gradient-to-br from-blue-600 to-purple-500 p-3 rounded-full hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 backdrop-blur-md bg-opacity-80 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SwiperService;
