'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '@/data/projects.json';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const selectedProjectData = projectsData.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-black" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group border border-blue-500"
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaExternalLinkAlt className="text-white text-4xl opacity-75 group-hover:scale-125 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-500 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 font-semibold"
                  whileHover={{ x: 5 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedProject && selectedProjectData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-blue-500/20 hover:bg-blue-500/30 text-white rounded-full p-2 backdrop-blur-sm"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-500 mb-4">{selectedProjectData.title}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedProjectData.details}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href={selectedProjectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} /> View on GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
