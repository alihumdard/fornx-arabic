import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../main/Pagewraper';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import translations from '../../translations';
import { useLanguage } from '../../LanguageContext';

const ContactForm = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    currentWebsite: '',
    iWouldLike: '',
    yourMessage: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (e) => {
    setFormData(prev => ({
      ...prev,
      iWouldLike: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '92de9d3b-4e9e-475d-b728-dbf336d29359', 
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.mobileNumber,
          website: formData.currentWebsite || 'Not provided',
          service: formData.iWouldLike,
          message: formData.yourMessage,
          subject: `New Lead from Website Contact Form - ${formData.firstName} ${formData.lastName}`,
          from_name: 'Fronx Solutions Website Contact Form',
          to_email: 'info@fronxsolutions.be',
          botcheck: false, 
          redirect: false,
          form_source: 'Homepage Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        const userName = `${formData.firstName} ${formData.lastName}`.trim();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          currentWebsite: '',
          iWouldLike: '',
          yourMessage: ''
        });

        setTimeout(() => {
          navigate(`/thank-you?type=contact&name=${encodeURIComponent(userName)}`);
        }, 1500);

      } else {
        setSubmitStatus('error');
        console.error('Web3Forms Error:', result.message);
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section
      dir={language === "ur" ? "rtl" : "ltr"} 
      className={`relative py-16 md:py-24 text-white ${language === "ur" ? "text-right" : "text-left"}`}
      style={{
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1a1a1a',
      }}
    >
      <div className="absolute inset-0 opacity-80 bg-black"></div>

      <PageWrapper>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Column */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {translations[language].footer1}
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-md">
              {translations[language].footer2}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white bg-opacity-5 p-6 rounded-xl flex items-center gap-4 border border-gray-700">
                <div className="p-3 rounded-full text-orange-400">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className={`${language === "ur" ? "border-r-2 pr-5" : "border-l-2 pl-5"} border-gray-400`}>
                  <p className="text-sm text-orange-300">{translations[language].footer3}</p>
                  <a href='mailto:info@fronxsolutions.be' className="text-lg">info@fronxsolutions.be</a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white bg-opacity-5 p-6 rounded-xl flex items-center gap-4 border border-gray-700">
                <div className="p-3 rounded-full text-orange-400">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>
                <div className={`${language === "ur" ? "border-r-2 pr-5" : "border-l-2 pl-5"} border-gray-400`}>
                  <p className="text-sm text-orange-300">{translations[language].footer4}</p>
                  <a href='tel:+32477277312' className="font-semibold text-lg">+32477277312</a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white bg-opacity-5 p-6 rounded-xl flex items-center gap-4 border border-gray-700">
                <div className="p-3 rounded-full text-orange-400">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div className={`${language === "ur" ? "border-r-2 pr-5" : "border-l-2 pl-5"} border-gray-400`}>
                  <p className="text-sm text-orange-300">{translations[language].footer5}</p>
                  <p className="font-semibold text-lg">Rue d'Alost 7/11 1000, Brussels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white bg-opacity-5 p-8 md:p-10 rounded-xl shadow-lg border border-gray-700">
            <form 
              onSubmit={handleSubmit} 
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${language === "ur" ? "text-right" : "text-left"}`}
            >
              {[
                { id: "firstName", placeholder: translations[language].firstname, required: true },
                { id: "lastName", placeholder: translations[language].LastName, required: true },
                { id: "email", placeholder: translations[language].Email, type: "email", required: true },
                { id: "mobileNumber", placeholder: translations[language].MobileNumber, type: "tel", required: true },
                { id: "currentWebsite", placeholder: translations[language].CurrentWebsite, colSpan: true },
              ].map(({ id, placeholder, type = "text", colSpan, required }) => (
                <div key={id} className={`${colSpan ? "sm:col-span-2" : ""}`}>
                  <label htmlFor={id} className="sr-only">{placeholder}</label>
                  <input
                    type={type}
                    id={id}
                    value={formData[id]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    required={required}
                    className={`w-full px-5 py-3 bg-white bg-opacity-5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-[#6931CF] focus:border-[#6931CF] outline-none transition-all ${
                      language === "ur" ? "text-right" : "text-left"
                    }`}
                  />
                </div>
              ))}
              
              {/* Dropdown */}
              <div className="w-full space-y-4 sm:col-span-2">
                <select
                  value={formData.iWouldLike}
                  onChange={handleSelectChange}
                  required
                  className={`w-full px-5 py-3 bg-white bg-opacity-5 border border-gray-600 rounded-md text-white focus:ring-[#6931CF] focus:border-[#6931CF] outline-none transition-all ${
                    language === "ur" ? "text-right" : "text-left"
                  }`}
                >
                  <option value="" disabled className="bg-gray-800 text-gray-400">
                    {translations[language].subject1}
                  </option>
                  <option value="website" className="bg-gray-800 text-white">{translations[language].subject2}</option>
                  <option value="ecommerce" className="bg-gray-800 text-white">{translations[language].subject3}</option>
                  <option value="mobile-app" className="bg-gray-800 text-white">{translations[language].subject4}</option>
                  <option value="custom-software" className="bg-gray-800 text-white">{translations[language].subject5}</option>
                  <option value="other" className="bg-gray-800 text-white">{translations[language].subject6}</option>
                </select>
              </div>

              {/* Textarea */}
              <div className="sm:col-span-2">
                <label htmlFor="yourMessage" className="sr-only">Your Message</label>
                <textarea
                  id="yourMessage"
                  rows="5"
                  value={formData.yourMessage}
                  onChange={handleInputChange}
                  placeholder={translations[language].your}
                  required
                  className={`w-full px-5 py-3 bg-white bg-opacity-5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-[#6931CF] focus:border-[#6931CF] outline-none transition-all ${
                    language === "ur" ? "text-right" : "text-left"
                  }`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-block mt-6 self-start text-lg hover:opacity-90 transition-opacity btn-animate bg-gradient-to-r from-[#6931CF] to-[#1A61EA] text-white px-5 py-3 rounded-lg font-semibold shadow w-full disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? "⏳..." : translations[language].submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default ContactForm;
