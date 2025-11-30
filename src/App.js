import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import EventCalendar from './components/EventCalendar';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import RegistrationPage from './pages/RegistrationPage';
import EventsPage from './components/EventsPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Check URL hash to determine which page to show
    const hash = window.location.hash;
    if (hash === '#register') {
      setCurrentPage('register');
    } else {
      setCurrentPage('home');
    }

    // Listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#register') {
        setCurrentPage('register');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ParticleBackground />
            
            {currentPage === 'register' ? (
              <RegistrationPage />
            ) : (
              <>
                <Header />
                <main className="main-content">
                  <Home />
                  <EventCalendar />
                  <EventsPage />
                  <Contact />
                </main>
                <Footer />
              </>
            )}
            
            <AnimatePresence>
              {showScrollTop && currentPage === 'home' && (
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="scroll-to-top"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  ↑
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;