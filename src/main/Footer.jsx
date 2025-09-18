import React from "react";
import PageWrapper from "./Pagewraper";
import { Link } from "react-router-dom";
import URLS from "../config/urls.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const companyLogos = [
    { src: "/images/foot1.webp", alt: "Zscaler" },
    { src: "/images/foot2.webp", alt: "Blender" },
    { src: "/images/foot3.webp", alt: "Syngenta" },
    { src: "/images/foot4.webp", alt: "Vattenfall" },
    { src: "/images/foot5.webp", alt: "Disco" },
    { src: "/images/foot6.webp", alt: "Soriana" },
    { src: "/images/foot7.webp", alt: "Skullcandy" },
    { src: "/images/foot8.webp", alt: "Skullcandy" },
    { src: "/images/foot9.webp", alt: "Skullcandy" },
    { src: "/images/foot10.webp", alt: "Skullcandy" },
    { src: "/images/foot11.webp", alt: "Skullcandy" },
    { src: "/images/foot12.webp", alt: "Skullcandy" },
    { src: "/images/foot13.webp", alt: "Skullcandy" },
  ];

  const { language } = useLanguage();

  // RTL support (for Urdu only)
  const isRTL = language === "ur";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-[Noto Nastaliq Urdu] text-right" : "text-left"}>
      {/* Company Logos + CTA Section */}
      <header className="relative z-10">
        <PageWrapper>
          <div className="bg-white shadow-sm py-28 px-6 md:px-12">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 40 },
              }}
              className="w-full py-10"
            >
              {companyLogos.map((logo, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA Banner */}
          <div
            className={`bg-white justify-between absolute -bottom-16 left-1/2 transform -translate-x-1/2 shadow-2xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-5xl w-full mx-auto ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              {translations[language].ready}
            </p>
            <Link
              to={URLS.CONTACT}
              className="text-white btn-animate font-semibold py-3 px-8 rounded-3xl shadow-md transition duration-300 ease-in-out"
              style={{
                background: "linear-gradient(to right, #6931CF, #1A61EA)",
              }}
            >
              {translations[language].contact}
            </Link>
          </div>
        </PageWrapper>
      </header>

      {/* Footer Content */}
      <div
        className="min-h-screen relative bg-fronx-light-gray bg-cover bg-center pt-40 bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <PageWrapper>
          <section className="bg-gradient-to-b from-fronx-dark-bg to-fronx-darkest-bg py-16 px-4 md:px-12 mx-14 text-white overflow-hidden">
            <div
              className={`whitespace-nowrap animate-marquee flex gap-5 ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {[
                translations[language].webDevelopment,
                translations[language].appDevelopment,
                translations[language].service3,
                translations[language].maintinence,
                translations[language].service5,
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="inline-block text-base sm:text-lg md:text-xl font-semibold">
                    {service}
                  </span>
                  <span className="text-2xl pl-20">•</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Sections */}
          <footer className="text-white pt-12 pb-4 px-4 md:px-12">
            <div className="container mx-auto flex flex-wrap justify-between gap-y-10 pb-10 border-b border-gray-700">
              {/* About */}
              <div className="w-full md:w-1/2 lg:w-1/5">
                <img
                  src="/images/logo.png"
                  alt="Fronx Solutions Logo"
                  className="h-10 lg:h-12 mb-3"
                />
                <p className="text-sm opacity-80 mb-6">
                  {translations[language].drive}
                </p>
                <div className={`flex ${isRTL ? "space-x-reverse space-x-3" : "space-x-3"}`}>
                  <a href="https://www.instagram.com" className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"><FaInstagram /></a>
                  <a href="https://www.facebook.com" className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"><FaFacebookF /></a>
                  <a href="https://twitter.com" className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"><FaTwitter /></a>
                  <a href="https://www.linkedin.com" className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"><FaLinkedinIn /></a>
                  <a href="https://wa.me/+32477277312" className="w-8 h-8 flex items-center justify-center bg-[#FF9B4B] rounded text-white text-lg"><FaWhatsapp /></a>
                </div>
              </div>

              {/* Menu */}
              <div className="w-1/2 md:w-1/4 lg:w-1/6">
                <h3 className="text-lg font-semibold mb-4">{translations[language].menu}</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to={URLS.HOME}>{translations[language].home}</Link></li>
                  <li><Link to={URLS.OVERONS}>{translations[language].overOns}</Link></li>
                  <li><Link to={URLS.SERVICES}>{translations[language].services}</Link></li>
                  <li><Link to={URLS.BOLG}>{translations[language].blog}</Link></li>
                  <li><Link to={URLS.PORTFOLIO}>{translations[language].portfolio}</Link></li>
                  <li><Link to={URLS.CONTACT}>{translations[language].contact}</Link></li>
                </ul>
              </div>

              {/* Services Column 1 */}
              <div className="w-1/2 md:w-1/4 lg:w-1/6">
                <h3 className="text-lg font-semibold mb-4">
                  {translations[language].services}
                </h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to={URLS.SERVICE_DETAIL.WEB_DEVELOPMENT}>{translations[language].webDevelopment}</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.APP_DEVELOPMENT}>{translations[language].appDevelopment}</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.SOFTWARE_DEVELOPMENT}>{translations[language].service6}</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.UIUX_DEVELOPEMENT}>{translations[language].approach3}</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.SEO}>{translations[language].SEOServices}</Link></li>
                </ul>
              </div>

              {/* Services Column 2 */}
              <div className="w-full md:w-1/4 lg:w-1/6">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to={URLS.SERVICE_DETAIL.DIGITAL_MARKITING}>{translations[language].service5}</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.CHATBOT_DEVELOPMENT}>{translations[language].ai}</Link></li>
                  <li><Link to={URLS.SERVICE_DETAIL.ECOMMERCE_DEVELOPMENT}>{translations[language].service4}</Link></li>
                </ul>
              </div>
            </div>

            <div className="text-center text-xs opacity-60 mt-6">
              <p>&copy; {translations[language].reserved}</p>
            </div>
          </footer>
        </PageWrapper>
      </div>
    </div>
  );
}

export default Footer;
