'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from './LanguageProvider';

export default function Hero() {
  const { t, lang, setLang } = useTranslation();
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = [t('hero.skill_web')];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-500 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.name')}
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 w-full">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
            {t('hero.subtitle')}
          </p>
          <div className="flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-blue-400 h-10">
            <span className="text-gray-400">{t('hero.specializing')}</span>
            <motion.span
              key={currentSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`font-bold text-blue-500 min-w-[220px] text-center ${skills[currentSkill] === 'Web Development' ? 'ml-3' : 'ml-8'
                }`}
            >
              {skills[currentSkill]}
            </motion.span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          <motion.a
            href="https://github.com/salehbuamud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/salehbuamud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            href="https://twitter.com/salehbuamud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Twitter"
          >
            <FaTwitter size={32} />
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.get_in_touch')}
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <a href="#about" className="text-blue-500" aria-label={t('hero.scroll_to_about')}>
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Language Toggle Button */}
        <motion.div variants={itemVariants} className="mt-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="px-4 py-2 text-sm sm:text-md rounded-full transition-all duration-300 ease-in-out"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
