import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineMail, AiOutlineBook } from 'react-icons/ai';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [hidden, setHidden] = useState(false);
  const [sectionOffsets, setSectionOffsets] = useState([]);
  const { scrollY } = useScroll();
  
  // Cache section positions on mount and resize for performance
  useEffect(() => {
    const calculateOffsets = () => {
      const sections = document.querySelectorAll('section[id]');
      const offsets = Array.from(sections).map(section => ({
        id: section.getAttribute('id'),
        offsetTop: section.offsetTop,
        offsetHeight: section.offsetHeight,
      }));
      setSectionOffsets(offsets);
    };

    calculateOffsets();
    window.addEventListener('resize', calculateOffsets);
    return () => window.removeEventListener('resize', calculateOffsets);
  }, []);

  // Single scroll handler for all scroll-based effects
  useMotionValueEvent(scrollY, 'change', latest => {
    // Hide/show navbar based on scroll direction
    // Navbar always visible, no hidden state change based on scroll direction
    // setHidden(false); // Ensure it's always visible

    // Update scrolled state for navbar style change
    setScrolled(latest > 50);

    // Update active link based on scroll position and cached section offsets
    let currentSection = 'home';
    for (const section of sectionOffsets) {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (latest >= sectionTop && latest < sectionBottom) {
        currentSection = section.id;
        break; // Exit loop once the active section is found
      }
    }
    setActiveLink(currentSection);
  });

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      // Update the active link immediately for better UX
      setActiveLink(targetId.substring(1));
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '#home', icon: AiOutlineHome },
    { name: 'About', path: '#about', icon: AiOutlineUser },
    { name: 'Projects', path: '#projects', icon: AiOutlineProject },
    { name: 'Studies', path: '#studies', icon: AiOutlineBook },
    { name: 'Contact', path: '#contact', icon: AiOutlineMail },
  ];

  const indicatorTransition = {
    type: 'spring',
    stiffness: 380, // Higher stiffness makes the spring more energetic
    damping: 15,    // Lower damping allows for more bounce
    mass: 0.7,      // A lower mass makes it feel lighter and quicker
  };

  const navLinkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 12 }
    }
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 90,
        damping: 25,
        delay: 0.1,
        staggerChildren: 0.07
      } 
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-5">
      <motion.header 
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`ios-glass rounded-full transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'} shadow-lg px-6 md:max-w-sm lg:max-w-md w-full border border-white/10 backdrop-blur-xl bg-black/20`}
      >
        <nav className="flex items-center justify-between w-full" aria-label="Main navigation">
          {/* Icon-based Navigation Links */}
          <ul className="flex items-center justify-between w-full px-2 md:px-4">
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={navLinkVariants}>
                <a
                  href={link.path}
                  className="flex flex-col items-center relative group"
                  onClick={(e) => handleSmoothScroll(e, link.path)}
                  aria-current={activeLink === link.path.substring(1) ? 'page' : undefined}
                >
                  <div 
                    className={`p-2 md:p-2.5 rounded-xl transition-all duration-300 ${activeLink === link.path.substring(1) ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-cyan-400' : 'text-gray-400 hover:text-gray-300'}`}
                  >
                    <link.icon className={`text-lg md:text-xl ${activeLink === link.path.substring(1) ? 'text-cyan-400' : ''}`} aria-hidden="true" />
                  </div>
                  <span 
                    className={`text-[9px] md:text-[10px] mt-0.5 md:mt-1 font-medium transition-all duration-300 ${activeLink === link.path.substring(1) ? 'text-cyan-400' : 'text-gray-400'}`}
                  >
                    {link.name}
                  </span>
                  {activeLink === link.path.substring(1) && (
                    <motion.div 
                      className="absolute -bottom-1 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                      layoutId="navIndicator"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={indicatorTransition}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          
        </nav>
      </motion.header>
    </div>
  );
};

export default Navbar;