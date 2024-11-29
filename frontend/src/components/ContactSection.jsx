import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="pt-60 py-20 px-4 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

        <ContactForm />

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left space-y-4">
            <p className="text-xl">
              <FaWhatsapp className="inline mr-2 text-green-500" /> WhatsApp: <span>+94 776371328</span>
            </p>
            <p className="text-xl">
              <FaEnvelope className="inline mr-2 text-red-500" /> Email: <span>chanusandeepa97@gmail.com</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="https://www.instagram.com/chanu__boy?utm_source=qr&igsh=bTg4cXd0ZjlnNmU2" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-400 text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/chanuka-sandeep-51674a244/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-500 text-4xl" />
            </a>
            <a href="https://github.com/Chanuka-Sandeepa" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-gray-300 text-4xl" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100089967883809&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-500 hover:text-blue-400 text-4xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
