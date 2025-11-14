import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -90, 
      scale: 0 
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  };

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className="loading-bg">
        <div className="scanning-line"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* 3D Logo */}
      <div className="logo-container">
        <div className="logo-3d">
          {['A', 'W', 'S'].map((letter, i) => (
            <motion.span
              key={letter}
              className={`letter letter-${letter.toLowerCase()}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              <motion.span
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 3, 
                  delay: i * 0.2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </div>
        
        {/* Glowing rings */}
        <motion.div
          className="glow-ring ring-1"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="glow-ring ring-2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.div
        className="loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {['I', 'N', 'I', 'T', 'I', 'A', 'L', 'I', 'Z', 'I', 'N', 'G'].map((letter, i) => (
          <motion.span
            key={i}
            className="loading-word"
            animate={{
              y: [0, -15, 0],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            <div className="progress-glow"></div>
          </motion.div>
        </div>
        <motion.div
          className="progress-text"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.div>
      </div>

      {/* Powered By */}
      <motion.p
        className="powered-by"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="gradient-text">POWERED BY AI TECHNOLOGY</span>
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;