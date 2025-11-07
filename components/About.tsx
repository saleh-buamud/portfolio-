'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8 },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="about" className="py-24 bg-black" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl sm:text-5xl font-bold text-blue-500 text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-gray-900 rounded-2xl p-10 shadow-lg text-center"
          style={{ minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            <span className="text-blue-400 font-semibold">Saleh buamud</span> — Software Engineer & Web Developer specializing in <span className="text-blue-400 font-semibold">PHP</span> and <span className="text-blue-400 font-semibold">JavaScript</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
