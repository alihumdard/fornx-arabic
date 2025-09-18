import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaCloud,
    FaCode,
    FaCubes,
    FaDatabase,
    FaEdit,
    FaPaintBrush,
    FaPlug,
    FaProjectDiagram,
    FaPuzzlePiece,
    FaShieldAlt,
    FaShoppingCart,
    FaUsersCog,
    FaUserShield,
} from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";


const webtopServicesData = [
    {
        id: "wordpress-development",
        icon: FaPuzzlePiece,
        title: "Module Customization",
        shortDescription:
            "Tailor existing modules to perfectly match your business processes",
    },
    {
        id: "wordpress-plugins",
        icon: FaCode,
        title: "Custom Development",
        shortDescription:
            "Build entirely new modules for your unique business requirements",
    },
    {
        id: "wordpress-databases",
        icon: FaProjectDiagram,
        title: "API Integration",
        shortDescription:
            "Seamlessly connect Odoo with your existing tools and services",
    },
];


const webServicesData = [
    {
        id: "wordpress-development",
        icon: FaPuzzlePiece,
        title: "Module Customization",
        shortDescription:
            "Tailor existing modules to perfectly match your business processes",
    },
    {
        id: "wordpress-plugins",
        icon: FaCode,
        title: "Custom Development",
        shortDescription:
            "Build entirely new modules for your unique business requirements",
    },
    {
        id: "wordpress-databases",
        icon: FaProjectDiagram,
        title: "API Integration",
        shortDescription:
            "Seamlessly connect Odoo with your existing tools and services",
    },
    {
        id: "wordpress-cms",
        icon: FaShieldAlt,
        title: "Security & Compliance",
        shortDescription:
            "Enterprise-grade security with custom roles and permissions",
    },
    {
        id: "wordpress-smart-features",
        icon: FaUsersCog,
        title: "CRM Optimization",
        shortDescription:
            "Advanced lead management and sales pipeline customization",
    },
    {
        id: "wordpress-smart",
        icon: FaCogs,
        title: "ERP Enhancement",
        shortDescription:
            "Manufacturing, inventory, and financial workflow automation",
    },
];


const services = [
    {
        id: "module-customization",
        title: "Module Customization",
        icon: <FaPuzzlePiece />,
        description: "Transform existing Odoo modules to perfectly align with your business processes",
        features: [
            "Custom field additions and modifications",
            "Advanced form and view customizations",
            "Multi-step approval workflows",
            "Custom validation rules and logic",
            "Enhanced user interface design",
            "Mobile-responsive layouts",
        ],
        useCases: [
            "Sales approval chains with dynamic routing",
            "Custom inventory allocation algorithms",
            "Enhanced purchase order workflows",
        ],
    },
    {
        id: "custom-development",
        title: "Custom Module Development",
        icon: <FaCode />,
        description: "Build entirely new modules from scratch to address unique and niche business requirements.",
        features: [
            "Full-cycle module architecture design",
            "Bespoke business logic implementation",
            "Integration with Odoo’s core framework",
            "Scalable and maintainable code",
            "Custom models, views, and controllers",
        ],
        useCases: [
            "A custom quality control module for manufacturing",
            "A subscription billing module with unique logic",
            "Specialized real estate management system",
        ],
    },
    {
        id: "workflows",
        title: "Custom Workflows / Business Logic",
        icon: <FaProjectDiagram />,
        description: "Implement complex, automated workflows that are not supported out-of-the-box.",
        features: [
            "Server-side action automation",
            "Dynamic rule-based process flows",
            "Scheduled and triggered automations",
            "Complex state management for records",
            "Custom inventory & manufacturing logic",
        ],
        useCases: [
            "Multi-step, conditional sales approval chains",
            "Automated lead assignment based on territory or product",
            "Custom inventory allocation logic for e-commerce",
        ],
    },
    {
        id: "uiux",
        title: "UI/UX Customization",
        icon: <FaPaintBrush />,
        description: "Modify and enhance the Odoo frontend to improve usability and create a branded experience.",
        features: [
            "Custom backend themes and branding",
            "Responsive dashboard views with custom KPIs",
            "Redesigned POS interface for better usability",
            "New frontend views and widgets",
            "Mobile-friendly layout improvements",
        ],
        useCases: [
            "A branded client portal with a simplified interface",
            "Executive dashboards showing key business metrics",
            "A streamlined POS for a specific retail environment",
        ],
    },
    {
        id: "api",
        title: "API Development & Integration",
        icon: <FaProjectDiagram />,
        description: "Connect Odoo with any third-party service, from payment gateways to e-commerce platforms.",
        features: [
            "Integration with payment gateways (Stripe, PayPal)",
            "Connecting with shipping APIs (FedEx, UPS)",
            "Syncing with e-commerce platforms (Shopify, WooCommerce)",
            "Building custom RESTful APIs for external apps",
            "Handling real-time updates via webhooks",

        ],
        useCases: [
            "Integrating a custom mobile app with Odoo data",
            "Syncing product stock with a Shopify store",
            "Automating accounting with QuickBooks or Xero",
        ],
    },
    {
        id: "plugins",
        title: "Plugin and Extension Development",
        icon: <FaPlug />,
        description: "Package reusable features as installable Odoo apps or create custom reporting extensions.",
        features: [
            "Develop modules for the Odoo App Store",
            "Create custom form widgets (maps, scanners)",
            "Build custom PDF, Excel, and HTML reports",
            "Extend existing modules with new functionality",
            "Develop charting and graphing dashboard widgets",
        ],
        useCases: [
            "A custom map widget for visualizing customer locations",
            "An advanced financial report for executive review",
            "An installable module for a specific industry niche",
        ],
    },
    {
        id: "security",
        title: "User Roles, Security & Multi-company Customization",
        icon: <FaUserShield />,
        description: "Fine-tune access controls, create custom roles, and manage complex multi-company environments.",
        features: [
            "Custom access control lists (ACLs) and record rules",
            "Creation of specific user roles and permissions",
            "Solutions for shared data across companies",
            "Complex inter-company transaction workflows",
            "Enhanced security protocols and logging",
        ],
        useCases: [
            "A role for a user who can only see leads in their state",
            "A workflow for creating inter-company purchase orders",
            "Sharing contacts but not sales orders between companies",
        ],
    },
    {
        id: "crm",
        title: "CRM-Specific Customizations",
        icon: <FaUsersCog />,
        description: "Enhance your sales process with a CRM tailored to your sales strategy and team structure.",
        features: [
            "Custom lead scoring algorithms",
            "Integration with lead generation tools (LinkedIn)",
            "Custom sales pipelines and stages",
            "Automated lead assignment rules",
            "Custom notifications and reminders for sales reps",
        ],
        useCases: [
            "Automated lead assignment",
            "A pipeline stage that automatically sends a follow-up email",
            "Integration with a tool that captures leads from your website",
        ],
    },
    {
        id: "erp",
        title: "ERP-Specific Customizations",
        icon: <FaCogs />,
        description: "Customize core ERP functions like manufacturing, inventory, and procurement for your unique operations.",
        features: [
            "MRP customizations for unique production workflows",
            "Warehouse automation (IoT integration, barcoding)",
            "Advanced procurement rule customizations",
            "Automated invoicing or billing workflows",
            "Custom tax calculation engine integrations",
        ],
        useCases: [
            "A custom manufacturing workflow for made-to-order products",
            "Automated reordering based on sales forecasts",
            "Integration with a third-party tax calculation service",
        ],
    },
    {
        id: "ecommerce",
        title: "E-commerce / Website Builder Customizations",
        icon: <FaShoppingCart />,
        description: "Build powerful e-commerce solutions and custom B2B portals with dynamic features.",
        features: [
            "Custom product configurators on your website",
            "B2B customer portals with dynamic pricing",
            "Integration with external CMS (WordPress)",
            "Custom checkout process modifications",
            "Advanced product filtering and search",
        ],
        useCases: [
            "A build your own computer product configurator",
            "A B2B portal where prices change based on customer group",
            "A custom theme for your Odoo e-commerce store",
        ],
    },
    {
        id: "saas",
        title: "SaaS / Hosting Services",
        icon: <FaCloud />,
        description: "Deploy and manage optimized Odoo instances on the cloud with robust CI/CD pipelines.",
        features: [
            "Odoo deployment on Docker or cloud (AWS, GCP)",
            "Managed Odoo instances with automated backups",
            "CI/CD pipelines for smooth updates",
            "Performance monitoring and optimization",
            "Multi-tenant SaaS Odoo instances for verticals",
        ],
        useCases: [
            "Hosting a high-availability Odoo instance for a large enterprise",
            "Creating a SaaS platform for a specific industry",
            "Managing a fleet of Odoo instances for an agency",
        ],
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
const OdooIntegration = () => {
    const [selected, setSelected] = useState(services[0]);
    const { language } = useLanguage();
    // const updatefeatures = features(language);
    // const latestwebServicesData = webServicesData(language);
    // const latestwordpressProcessSteps = wordpressProcessSteps(language);
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
                            className="absolute top-48"
                            variants={containerVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1
                                className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl font-semibold mb-4 md:mb-6"
                                variants={fadeUpVariant}
                            >
                                Transform Your Business With
                                <br /><span>Custom</span>
                                <span className="mt-3 ml-3 relative inline-block">
                                    Odoo Solutions
                                    <span className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
                                </span>
                            </motion.h1>
                        </motion.div>
                    </PageWrapper>
                </div>

                <div>
                    <PageWrapper>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start px-5 pt-28 pb-40" // Added items-start
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {webtopServicesData.map((service) => {
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
                                        <div className=" p-3 rounded-md inline-block mb-4 self-start">
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
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </PageWrapper>
                </div>

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
                                Comprehensive Odoo Solutions
                            </h2>

                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                From simple customizations to complex enterprise solutions, we deliver Odoo services that
                                drive real business value.
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
                            {webServicesData.map((service) => {
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
                                        <div className=" p-3 rounded-md inline-block mb-4 self-start">
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
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </PageWrapper>
                </section>

                <div>
                    <div className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center py-12 px-6">
                        <motion.div
                            className="text-center mb-12 md:mb-16"
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h2
                                id="wordpress-development-process"
                                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4"
                            >
                                Service Categories
                            </h2>

                            <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
                                Explore our comprehensive range of Odoo development services, each designed
                                to address specific business challenges.
                            </p>
                        </motion.div>

                        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
                            {/* Sidebar */}
                            <div className=" rounded-2xl p-4 flex flex-col gap-2 w-full lg:w-[45%]">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setSelected(service)}
                                        className={`flex items-center gap-3 px-4 py-3 my-2 text-left transition-all ${selected.id === service.id
                                            ? "border-l-4 bg-white/5 border-blue-500 text-white shadow-lg"
                                            : "bg-white/5"
                                            }`}
                                    >
                                        <span className="text-xl text-orange-500">{service.icon}</span>
                                        <span className="font-medium">{service.title}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Details Panel */}
                            <div className="flex-1 bg-white/5 rounded-2xl h-auto p-6 shadow-lg">
                                <h2 className="text-2xl font-semibold mb-2">{selected.title}</h2>
                                <p className="text-gray-300 mb-4">{selected.description}</p>

                                <h3 className="text-lg font-semibold mb-5 mt-10">Key Features</h3>
                                <ul className="list-none mb-6 space-y-2">
                                    {selected.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-green-400">✔</span>
                                            <span className="text-gray-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-lg font-semibold mt-10 mb-5">Example Use Case</h3>
                                <div className="flex flex-col gap-2 mb-6">
                                    {selected.useCases.map((uc, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/5 px-4 py-2 rounded-lg text-gray-200"
                                        >
                                            {uc}
                                        </div>
                                    ))}
                                </div>

                                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 w-full text-white px-6 py-3 rounded-3xl mt-5 font-medium hover:opacity-90 transition">
                                    Get Started With {selected.title}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat text-white my-32 w-[83%] rounded-3xl mx-auto py-16 px-6 flex flex-col items-center text-center">
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get Started with Custom Solutions
                        </h2>

                        {/* Subheading */}
                        <p className="text-gray-300 max-w-2xl mb-8">
                            Explore our comprehensive range of Odoo development services, each
                            designed to address specific business challenges.
                        </p>

                        {/* Button */}
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-3xl font-medium shadow-lg hover:opacity-90 transition">
                            Book Now
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default OdooIntegration;