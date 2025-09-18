import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "+32477277312";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div
        className="w-16 h-16 rounded-full 
                   bg-gradient-to-br from-green-400 to-green-600
                   flex items-center justify-center shadow-lg
                   hover:scale-110 transition-transform duration-300
                   animate-pulse-soft relative"
        style={{
          boxShadow: "0 0 15px rgba(72, 187, 120, 0.6)",
        }}
      >
        <FaWhatsapp className="text-white text-3xl" />

        {/* Tooltip */}
        <span
          className="absolute right-20 top-1/2 -translate-y-1/2
                     bg-gray-900 text-white text-sm px-3 py-1 rounded-lg
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
        >
          Chat on WhatsApp
        </span>
      </div>

      {/* Extra glow ring animation */}
      <span
        className="absolute inset-0 rounded-full animate-ping 
                   bg-green-400 opacity-40"
      ></span>
    </a>
  );
};

export default WhatsAppButton;
