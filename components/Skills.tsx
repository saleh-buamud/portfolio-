'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhp, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: 'HTML', level: 95, icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', level: 92, icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', level: 88, icon: FaJs, color: 'text-yellow-500' },
    { name: 'PHP', level: 90, icon: FaPhp, color: 'text-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all border-2 border-blue-500/50 hover:border-blue-500"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-gray-800 border-2 border-blue-500/30">
                      <Icon className={`${skill.color} text-6xl`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{skill.name}</h3>
                </div>

                <div className="relative">
                  <div className="flex mb-3 items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400">Proficiency</span>
                    <span className="text-lg font-bold text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-800 border border-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                      className="shadow-lg flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
