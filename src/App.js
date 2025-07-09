import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Remove both classes and add the current one
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
    
    // Save preference
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Loading Screen */}
      {loading && <LoadingScreen finishLoading={() => setLoading(false)} />}
      
      {/* Animated background */}
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <Navbar />
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full backdrop-blur-md bg-opacity-30 bg-white dark:bg-opacity-30 dark:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-white/10"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? 
            <motion.div initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
              <BsSun className="text-yellow-400" />
            </motion.div> : 
            <motion.div initial={{ rotate: 30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
              <BsMoon className="text-gray-700" />
            </motion.div>
          }
        </motion.button>
      </div>
      
      <main className="container mx-auto px-4 pt-20">
        <Hero />
        <About />
        <Projects />
        <Studies />
        <Contact />
      </main>
      
      <ScrollToTop />
    </div>
  );
}

export default App;