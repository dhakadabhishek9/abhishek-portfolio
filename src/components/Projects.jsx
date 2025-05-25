import { Code, ExternalLink } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    { name: "Shinywilds", type: "Gaming Platform", link: "https://shinywilds.com" },
    { name: "Shinywilds Backoffice", type: "Admin Panel", link: "https://amgplatform.com" },
    { name: "Shweeps Casino", type: "Gaming Platform", link: "https://smilescasino.com" },
    { name: "Infinity Casino", type: "Gaming Platform", link: "https://infinitycasino.co" },
    { name: "Ezugi Reports", type: "Analytics Dashboard", link: "https://staging-reports.8dexsuperadmin.com/super-admin/login" },
    { name: "A1 Casino", type: "Gaming Platform", link: "https://a1casinous.com" },
    { name: "Custom Games", type: "Game Development", link: "https://frontend.scrubygostage.com/plinko?token=43f888246fda646b3056e20ab82b34&currency=USD&operator=1" },
    { name: "Gold Machine", type: "Custom Game", link: "https://staging.goldmachine.com" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id='projects'
      className='py-24 bg-gradient-to-br from-slate-100 to-blue-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className='text-4xl font-extrabold text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.a
              variants={card}
              key={index}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
              className='group block bg-white rounded-3xl border border-gray-100 shadow-md transition-transform duration-300 overflow-hidden'
            >
              <div className='p-6 sm:p-8'>
                <div className='flex items-center justify-between mb-6'>
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-sm'
                  >
                    <Code className='w-6 h-6 text-white' />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <ExternalLink className='w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300' />
                  </motion.div>
                </div>

                <h3 className='text-2xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300'>
                  {project.name}
                </h3>

                <p className='text-sm font-medium text-blue-600 mb-3'>
                  {project.type}
                </p>

                <p className='text-gray-600 text-sm group-hover:text-blue-500 transition-colors duration-300'>
                  Explore Project →
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
