import { Award, Code, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Heading */}
        <motion.h2
          className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className='text-2xl font-semibold mb-6 text-gray-800'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h3>

            <motion.p
              className='text-gray-600 text-lg leading-relaxed mb-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I'm a passionate Frontend Web Developer who loves crafting
              beautiful, interactive web experiences. I enjoy turning complex
              problems into simple, elegant solutions through clean code and
              innovative design.
            </motion.p>

            <motion.p
              className='text-gray-600 text-lg leading-relaxed mb-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying ahead of industry trends.
            </motion.p>

            {/* Animated Metric Cards */}
            <motion.div
              className='grid grid-cols-3 gap-6 text-center'
              initial='hidden'
              whileInView='visible'
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Code className='w-8 h-8 text-blue-600 mx-auto mb-2' />,
                  label: "3+ Years",
                  sub: "Experience",
                  bg: "bg-blue-50",
                },
                {
                  icon: (
                    <Users className='w-8 h-8 text-purple-600 mx-auto mb-2' />
                  ),
                  label: "6+ Projects",
                  sub: "Led Teams",
                  bg: "bg-purple-50",
                },
                {
                  icon: (
                    <Award className='w-8 h-8 text-green-600 mx-auto mb-2' />
                  ),
                  label: "Awards",
                  sub: "Recognition",
                  bg: "bg-green-50",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg ${card.bg}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {card.icon}
                  <div className='font-semibold text-gray-800'>
                    {card.label}
                  </div>
                  <div className='text-sm text-gray-600'>{card.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Circle Graphic */}
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center'>
              <div className='text-center'>
                <Code className='w-16 h-16 text-blue-600 mx-auto mb-4' />
                <p className='text-gray-700 font-medium'>Clean Code</p>
                <p className='text-gray-700 font-medium'>Beautiful UIs</p>
                <p className='text-gray-700 font-medium'>Great UX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
