import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full"
      >
        {/* About Me Heading, centered at the top */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-typing overflow-hidden whitespace-nowrap text-center mb-8">
          About Me
        </h2>

        {/* Description Text */}
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          I'm pursuing a BSc(Hons) in Information Technology, with a strong interest in software development and data analysis. I am proficient in multiple languages and frameworks, including C, C++, Java, Python, Kotlin, SQL, JavaScript, PHP, R, Node.js, Express.js, MongoDB, and React. I enjoy building scalable applications and exploring both backend and frontend developments.
        </p>

        {/* Additional Text */}
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          Currently, I'm developing an E-Learning platform that leverages my skills in the MERN stack, combining technical knowledge with practical experience. I'm eager to connect with professionals, exchange ideas, and pursue opportunities that enhance my growth in software development and analysis.
        </p>

        {/* Container for Text and Button */}
        <div className="flex justify-between items-center">
          {/* Text */}
          <div className="w-2/3 text-xl text-gray-300 leading-relaxed">
            <p>
              Want to know more about my work and experience? Feel free to explore my portfolio or get in touch!
            </p>
          </div>

          {/* Download CV Button */}
          <div className="w-1/3 text-right">
            <a 
              href="/Chanuka_Sandeepa_CV.pdf"  // Correct path to your CV (directly in the public folder)
              download="Chanuka_Sandeepa_CV.pdf"  // Optional filename for download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
