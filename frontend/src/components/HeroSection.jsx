import React from 'react';
import img from '../mypic.png';
import '../components/HeroSec.css'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 sm:space-y-16 md:space-y-20 pt-10">
        
        {/* Enhanced Heading with typing and gradient animation */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-typing overflow-hidden whitespace-nowrap">
          I&apos;m Chanuka Sandeepa.
        </h1>

        {/* Subheading with fade-in effect */}
        <p className="text-xl sm:text-2xl text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
          "BSC(Hons) Information Technology Student | Building Skills In Development & Analysis."
        </p>

        {/* Profile image with hover effects */}
        <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mt-8">
          <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full transition-all transform duration-300 ease-out hover:scale-105 hover:rotate-3d" />
          <img
            src={img} // Path to your image
            alt="Chanuka Sandeepa"
            className="object-cover rounded-full shadow-xl transform transition-all duration-300 ease-out hover:scale-105 hover:rotate-3d w-full h-full"
            style={{
              objectPosition: 'center',
              transform: 'scale(1.1)', // Increase the size of the image inside the circle
            }}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};



export default Hero;
