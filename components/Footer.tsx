'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Saleh buamud</h3>
            <p className="text-gray-300">
              Web Developer & Software Engineer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/salehbuamud"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 rounded-full hover:bg-blue-500 transition-colors border border-blue-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/salehbuamud"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 rounded-full hover:bg-blue-500 transition-colors border border-blue-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/salehbuamud"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 rounded-full hover:bg-blue-500 transition-colors border border-blue-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} Saleh buamud. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2">
            Built with <FaHeart className="text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
