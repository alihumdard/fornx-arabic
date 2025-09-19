import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../main/Navbar";
import PageWrapper from "../../../main/Pagewraper";
import ContactForm from "../Contact";
import Footer from "../../../main/Footer";
import URLS from "../../../config/urls.config";
import {
    FaCubes,
    FaDatabase,
    FaEdit,
    FaPuzzlePiece,
    FaWordpress, // For Deployment
} from "react-icons/fa";
import { FaBolt, FaCogs, FaLock, FaChartLine } from "react-icons/fa";
import StatsSection from "../Statsdata";
import translations from "../../../translations";
import { useLanguage } from "../../../LanguageContext";
import { Palette, Code2, Plug, Bug, Rocket } from "lucide-react";

const webServicesData = (language) => [
    {
        id: "wordpress-development",
        icon: FaWordpress,
        title: translations[language].wordpress13,
        shortDescription:
            translations[language].wordpress14,
        longDescription:
            translations[language].wordpress15,
    },
    {
        id: "wordpress-plugins",
        icon: FaCubes,
        title: translations[language].wordpress16,
        shortDescription:
            translations[language].wordpress17,
        longDescription:
            translations[language].wordpress18,
    },
    {
        id: "wordpress-databases",
        icon: FaDatabase,
        title: translations[language].wordpress19,
        shortDescription:
            translations[language].wordpress20,
        longDescription:
            translations[language].wordpress21,
    },
    {
        id: "wordpress-cms",
        icon: FaEdit,
        title: translations[language].wordpress22,
        shortDescription:
            translations[language].wordpress23,
        longDescription:
            translations[language].wordpress24,
    },
    {
        id: "wordpress-smart-features",
        icon: FaPuzzlePiece,
        title: translations[language].wordpress25,
        shortDescription:
            translations[language].wordpress26,
        longDescription:
            translations[language].wordpress27,
    },
];
const wordpressProcessSteps = (language) => [
    {
        icon: Palette, // 🎨 Design
        title: translations[language].wordpress3,
        description:
            translations[language].wordpress4,
    },
    {
        icon: Code2, // 💻 Development
        title: translations[language].wordpress5,
        description:
            translations[language].wordpress6,
    },
    {
        icon: Plug, // 🔌 Plugin
        title: translations[language].wordpress7,
        description:
            translations[language].wordpress8,
    },
    {
        icon: Bug, // 🧪 Testing
        title: translations[language].wordpress9,
        description:
            translations[language].wordpress10,
    },
];




const features = (language) => [
    {
        icon: <FaBolt className="text-orange-400 text-3xl" />,
        title: translations[language].wordpress30,
        desc:
            translations[language].wordpress31,
    },
    {
        icon: <FaCogs className="text-orange-400 text-3xl" />,
        title: translations[language].wordpress32,
        desc:
            translations[language].wordpress33,
    },
    {
        icon: <FaLock className="text-orange-400 text-3xl" />,
        title: translations[language].wordpress34,
        desc:
            translations[language].wordpress35,
    },
    {
        icon: <FaChartLine className="text-orange-400 text-3xl" />,
        title: translations[language].wordpress36,
        desc:
            translations[language].wordpress37,
    },
];


// Animation Variants (kept as is, assuming they are correct)
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
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};
const WordPress = () => {
    const { language } = useLanguage();
    const updatefeatures = features(language);
    const latestwebServicesData = webServicesData(language);
    const latestwordpressProcessSteps = wordpressProcessSteps(language);
    const [expandedCard, setExpandedCard] = useState(null); // State to manage which card is expanded

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <>
            <title>Professional wordPress Development Services in Belgium | Fronx Solutions</title>
            <meta name="description" content="Fronx Solutions offers professional web development in Belgium. We build fast, responsive, and custom websites tailored to your business needs." />
            <div className="relative w-full overflow-x-hidden">
                {/* Navbar */}
                <Navbar />

                {/* Background Image */}
                <div className="relative h-[500px] overflow-visible">
                    <PageWrapper>
                        <div>
                            {/* Background Image */}
                            <img
                                src="/images/bg-2.png"
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
                              {translations[language].wordpress1}
                                <span className="mt-3 ml-3 relative inline-block">
                                    {translations[language].development}
                                    <span className="absolute left-0 right-0 -bottom-5 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
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
                                        to={URLS.SERVICES}
                                        className="text-orange-400 hover:text-orange-300 transition-colors"
                                    >
                                        {translations[language].services}
                                    </Link>
                                    <span className="text-orange-400">››</span>
                                    <Link className="text-blue-400 hover:text-blue-300 transition-colors">
                                       {translations[language].wordpress2}
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </PageWrapper>
                </div>

                <section className="bg-white py-16 md:py-24 px-5">
                    <PageWrapper>
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-start px-4 sm:px-6 mb-12"
                        >
                            <span className="bg-orange-400 px-4 py-2 rounded-3xl text-white font-semibold uppercase tracking-wide text-sm">
                                {translations[language].webservice1}
                            </span>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 font-bold text-gray-800 max-w-4xl">
                                {translations[language].webservice2}
                            </h2>
                        </motion.div>

                        {/* Process Steps */}
                        <div className="relative flex flex-col items-center lg:flex-row justify-center gap-10 px-4 sm:px-6 mt-16">
                            {/* Dotted Line for Desktop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute top-20 lg:top-24 hidden lg:block w-full h-0.5 border-t-2 border-dashed border-gray-300 z-0"
                            ></motion.div>

                            {latestwordpressProcessSteps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <motion.div

                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, duration: 0.6 }}
                                        className="relative bg-white p-6 rounded-xl text-center flex flex-col items-center z-10 w-full max-w-sm"
                                    >
                                        {/* Icon Box */}
                                        <div className="bg-gray-100 p-4 rounded-xl mb-4 shadow-sm">
                                            {IconComponent && (
                                                <IconComponent className="w-10 h-10 text-orange-500" />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </PageWrapper>
                </section>

                <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 md:py-24">
                    <PageWrapper>
                        {/* Section Header */}
                        <motion.div
                            className="text-center mb-12 md:mb-16"
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h2
                                id="wordpress-development-process"
                                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
                            >
                                {translations[language].wordpress11}
                            </h2>

                            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
                                {translations[language].wordpress12}
                            </p>
                        </motion.div>


                        {/* Services Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start" // Added items-start
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {latestwebServicesData.map((service) => {
                                const IconComponent = service.icon;
                                const isExpanded = expandedCard === service.id;
                                const descriptionToShow =
                                    isExpanded && service.longDescription
                                        ? service.longDescription
                                        : service.shortDescription;
                                return (
                                    <motion.div
                                        key={service.id}
                                        variants={fadeUpVariant}
                                        className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col cursor-pointer
                   transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] self-start" // Added self-start
                                        onClick={() => toggleExpand(service.id)}
                                    >
                                        {/* Icon */}
                                        <div className="bg-orange-100 p-3 rounded-md inline-block mb-4 self-start">
                                            {IconComponent && (
                                                <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                                            {descriptionToShow}
                                        </p>

                                        {/* Learn More / Show Less */}
                                        {service.longDescription && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleExpand(service.id);
                                                }}
                                                className="text-orange-500 font-semibold text-sm sm:text-base self-start hover:underline focus:outline-none"
                                            >
                                                {isExpanded ? translations[language].webservice26 : translations[language].webservice27}
                                            </button>
                                        )}
                                        {!service.longDescription && (
                                            <a
                                                href="#"
                                                className="text-orange-500 font-semibold text-sm sm:text-base self-start hover:underline"
                                                onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                                            >
                                                Show more →
                                            </a>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </PageWrapper>
                </section>

                <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20 text-white">
                    <div className="max-w-7xl mx-auto">
                        {/* Heading */}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                {translations[language].wordpress28}
                            </h2>

                            <p className="text-gray-300 mb-12 max-w-3xl">
                                {translations[language].wordpress29}
                            </p>
                        </motion.div>


                        {/* Feature Cards */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {updatefeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUpVariant}
                                    className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all duration-300 h-full"
                                >
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <StatsSection />
                <ContactForm />
                <Footer />
            </div>
        </>
    );
};

export default WordPress;