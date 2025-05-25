import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    frontend: [
      "JavaScript",
      "ReactJS",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
    ],
    backend: ["Node.js", "REST APIs", "PostgreSQL"],
    tools: ["Git", "Docker", "JIRA", "Figma", "Postman", "Socket.io"],
  };

  // Motion variants for each column
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id='skills' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className='grid md:grid-cols-3 gap-8'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Frontend */}
          <motion.div
            className='bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl'
            variants={itemVariants}
          >
            <h3 className='text-xl font-bold mb-6 text-blue-800'>Frontend</h3>
            <div className='flex flex-wrap gap-3'>
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className='bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className='bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl'
            variants={itemVariants}
          >
            <h3 className='text-xl font-bold mb-6 text-purple-800'>
              Backend & Database
            </h3>
            <div className='flex flex-wrap gap-3'>
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className='bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className='bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl'
            variants={itemVariants}
          >
            <h3 className='text-xl font-bold mb-6 text-green-800'>
              Tools & Others
            </h3>
            <div className='flex flex-wrap gap-3'>
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className='bg-white text-green-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
