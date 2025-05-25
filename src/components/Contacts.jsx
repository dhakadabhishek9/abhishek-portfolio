import { Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className='text-center mb-8'
              variants={itemVariants}
            >
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                Ready to work together?
              </h3>
              <p className='text-gray-600 text-lg'>
                I'm always interested in new opportunities and exciting projects.
              </p>
            </motion.div>

            <motion.div
              className='grid md:grid-cols-3 gap-6 text-center'
              variants={containerVariants}
            >
              <motion.a
                href='mailto:dhakadabhishek9@gmail.com'
                className='flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                variants={itemVariants}
              >
                <Mail className='w-8 h-8 text-blue-600 mb-3' />
                <h4 className='font-semibold text-gray-800 mb-2'>Email</h4>
                <p className='text-sm text-gray-600'>dhakadabhishek9@gmail.com</p>
              </motion.a>

              <motion.a
                href='tel:+918966879130'
                className='flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                variants={itemVariants}
              >
                <Phone className='w-8 h-8 text-green-600 mb-3' />
                <h4 className='font-semibold text-gray-800 mb-2'>Phone</h4>
                <p className='text-sm text-gray-600'>+91 8966879130</p>
              </motion.a>

              <motion.a
                href='https://linkedin.com/in/abhishek-dhakad-996515198'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                variants={itemVariants}
              >
                <Linkedin className='w-8 h-8 text-blue-700 mb-3' />
                <h4 className='font-semibold text-gray-800 mb-2'>LinkedIn</h4>
                <p className='text-sm text-gray-600'>Connect with me</p>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
