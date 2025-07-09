import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span>Hi, I'm</span><br />
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Naveen
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              A passionate AI & Data Science Student
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I love building intelligent applications, analyzing data, and creating practical solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download="Naveen-Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-medium hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg hover:shadow-primary-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="h-5 w-5" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={handleScrollToContact}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="h-5 w-5" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right side - Profile image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              {/* Circular frame with neon glow */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 p-1 neon-border animate-glow">
                {/* Profile image */}
                <img 
                  src="/profile.jpg" 
                  alt="Navi Naveen" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Navi+Naveen';
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-full opacity-70 animate-float"></div>
              <div className="absolute -bottom-2 -left-6 w-16 h-16 bg-secondary-500 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;