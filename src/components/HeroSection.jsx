import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10'></div>

      <div className='relative z-10 text-center max-w-4xl mx-auto px-4'>

        {/* Animated Circle Avatar */}
        <motion.div
          className='mb-8'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className='w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl'>
            AD
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Abhishek Dhakad
        </motion.h1>

        {/* Description */}
        <motion.p
          className='text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Frontend Web Developer with 3+ years of experience building responsive
          and scalable web applications
        </motion.p>

        {/* Info Row */}
        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className='flex items-center text-gray-600'>
            <MapPin className='w-5 h-5 mr-2' />
            Indore, India
          </div>
          <div className='flex items-center text-gray-600'>
            <Mail className='w-5 h-5 mr-2' />
            dhakadabhishek9@gmail.com
          </div>
          <div className='flex items-center text-gray-600'>
            <Phone className='w-5 h-5 mr-2' />
            +91 8966879130
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className='flex gap-4 justify-center mb-12'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.05 }}
            className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300'
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300'
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Chevron */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ChevronDown
            className='w-8 h-8 mx-auto text-gray-400 animate-pulse cursor-pointer'
            onClick={() => scrollToSection("about")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
