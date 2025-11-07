import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import EventCalendar from './components/EventCalendar';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!loading && (
        <>
          <Header />
          <main className="main-content">
            <Home />
            <About />
            <EventCalendar />
            <Contact />
          </main>
          <Footer />
          
          {showScrollTop && (
            <button 
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
