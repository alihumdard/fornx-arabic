import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../main/Navbar";
import PageWrapper from "../main/Pagewraper";
import Footer from "../main/Footer";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";

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

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Submit = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    serviceType: '',
    message: '',
    file: null,
    agreeToPolicy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    // File size validation
    if (type === 'file' && files[0]) {
      const file = files[0];
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      
      if (file.size > maxSize) {
        alert(`File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds 10MB limit. Please choose a smaller file.`);
        e.target.value = ''; // Clear the file input
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if privacy policy is agreed before submission
    if (!formData.agreeToPolicy) {
      setSubmitStatus('policy_error');
      return;
    }

    // Show submitting status
    setIsSubmitting(true);
    setSubmitStatus('submitting');
    
    try {
      // Prepare form data for submission
      const submitData = new FormData();
      submitData.append('_subject', '🚀 New Project Submission from Fronx Solutions Website');
      submitData.append('_template', 'table');
      submitData.append('_captcha', 'false');
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('businessName', formData.businessName);
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('email', formData.email);
      submitData.append('subject', formData.subject);
      submitData.append('serviceType', formData.serviceType);
      submitData.append('message', formData.message);
      
      if (formData.file) {
        submitData.append('attachment', formData.file);
      }

      // Submit to FormSubmit.co
      const response = await fetch('https://formsubmit.co/info@fronxsolutions.be', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Get user's full name for redirect
        const userName = `${formData.firstName} ${formData.lastName}`.trim();
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          businessName: '',
          phoneNumber: '',
          email: '',
          subject: '',
          serviceType: '',
          message: '',
          file: null,
          agreeToPolicy: false
        });

        // Redirect to thank you page after 1.5 seconds
        setTimeout(() => {
          navigate(`/thank-you?type=quote&name=${encodeURIComponent(userName)}`);
        }, 1500);
        
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <title>RFI/RFP Submission - Fronx Solutions</title>
      <meta name="description" content="Submit your project requirements to Fronx Solutions. We provide custom web development, mobile apps, and digital solutions." />
      
      <div className="relative w-full">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div className="relative min-h-[400px] sm:min-h-[500px] w-full overflow-hidden">
          <PageWrapper>
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

            {/* Yellow Glow Circle */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#FFC003] opacity-10 blur-3xl rounded-full
              z-10 pointer-events-none"
            />

            {/* Animated Content */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:px-6 md:px-10 z-20"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 sm:mb-10"
                variants={fadeUpVariant}
              >
                {translations[language].submit1}
              </motion.h1>

              <div className="flex gap-5 justify-center">
                <Link
                  to="/"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {translations[language].home}
                </Link>
                <span className="text-orange-400">››</span>
                <span className="text-blue-400">
                  {translations[language].submit1}
                </span>
              </div>
            </motion.div>
          </PageWrapper>
        </div>

        <div className="bg-white py-20 px-4 sm:px-6 lg:px-44">
          {/* Header Section */}
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extrabold text-gray-700 bg-clip-text mb-4">
              {translations[language].submit2}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {translations[language].submit3}
            </p>
            <button className="bg-purple-600 btn-animate hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow transition duration-300">
              {translations[language].submit4}
            </button>
          </div>

          {/* Content Section */}
          <div className="">
            <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-gray-700 space-y-6 text-lg">
                <p>
                  {translations[language].submit5} <span className="font-semibold text-purple-600">Fronx Solutions</span> {translations[language].submit6}
                </p>
                <p>
                  {translations[language].submit7}
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603"
                  alt="Team discussion"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="mt-24 bg-gray-50 p-10 rounded-2xl max-w-4xl mx-auto shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                {translations[language].submit8}
              </h2>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={translations[language].firstname}
                    required
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={translations[language].LastName}
                    required
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder={translations[language].business}
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={translations[language].footer4}
                    required
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={translations[language].footer3}
                  required
                  className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                
                <div className="w-full space-y-4">
                  {/* Subject Input */}
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={translations[language].subject}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />

                  {/* Service Type Dropdown */}
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full text-gray-700 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    required
                  >
                    <option value="" disabled>
                      {translations[language].subject1}
                    </option>
                    <option value="website">{translations[language].subject2}</option>
                    <option value="ecommerce">{translations[language].subject3}</option>
                    <option value="mobile-app">{translations[language].subject4}</option>
                    <option value="custom-software">{translations[language].subject5}</option>
                    <option value="other">{translations[language].subject6}</option>
                  </select>
                </div>
                
                {/* FILE UPLOAD */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations[language].upload}
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.zip,.ppt,.pptx,.xls,.xlsx"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">Supported: PDF, DOC, DOCX, TXT, JPG, PNG, ZIP, PPT, XLS</p>
                  <p className="text-xs text-red-500 font-semibold">⚠️ Maximum file size: 10MB</p>
                  {formData.file && (
                    <p className="text-xs text-green-600 mt-1">
                      📎 Selected: {formData.file.name} ({(formData.file.size / 1024 / 1024).toFixed(2)}MB)
                    </p>
                  )}
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={translations[language].tell}
                  rows="5"
                  required
                  className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                ></textarea>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleInputChange}
                    className="mr-3 mt-1" 
                    required
                  />
                  <p className="text-sm text-gray-600">
                    {translations[language].sub}{" "}
                    <a href="#" className="underline text-purple-600 hover:text-purple-800">
                      {translations[language].sub2}
                    </a>{" "}
                    {translations[language].sub3}
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'submitting' && (
                  <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded flex items-center">
                    <span className="mr-2">📤</span>
                    <div>
                      <p className="font-semibold">Project verzenden...</p>
                      <p className="text-sm">U wordt doorgestuurd naar de bedankpagina...</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center">
                    <span className="mr-2">✅</span>
                    <div>
                      <p className="font-semibold">Project succesvol verzonden!</p>
                      <p className="text-sm">U wordt doorgestuurd...</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <span className="mr-2">❌</span>
                    Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of neem direct contact met ons op.
                  </div>
                )}
                {submitStatus === 'policy_error' && (
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                    <span className="mr-2">⚠️</span>
                    Ga akkoord met ons privacybeleid om verder te gaan.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-animate bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Project versturen...
                    </div>
                  ) : (
                    translations[language].send
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Submit;