import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const features = [
    { title: 'AI-Powered', description: 'Cutting-edge AI technology', icon: '🤖' },
    { title: 'Cloud Native', description: 'Built for the modern cloud', icon: '☁️' },
    { title: 'Ultra Fast', description: 'Lightning-fast performance', icon: '⚡' },
    { title: 'Secure', description: 'Enterprise-grade security', icon: '🔒' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">ABOUT US</h2>
          <div className="title-line"></div>
          <p className="section-subtitle">Building the future with technology</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>WHO WE ARE</h3>
            <p>
              We are pioneers in AI-powered cloud solutions, dedicated to transforming 
              businesses through innovative technology. Our team of experts combines 
              cutting-edge AI with robust cloud infrastructure.
            </p>
            <p>
              With years of experience and a passion for innovation, we deliver 
              solutions that drive real results and empower organizations to thrive 
              in the digital age.
            </p>

            <div className="stats">
              {[
                { value: '500+', label: 'Projects' },
                { value: '10+', label: 'Years' },
                { value: '50+', label: 'Team' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="visual-box">
              <div className="rotating-cube">
                <div className="cube-face front">AI</div>
                <div className="cube-face back">ML</div>
                <div className="cube-face right">3D</div>
                <div className="cube-face left">VR</div>
                <div className="cube-face top">AR</div>
                <div className="cube-face bottom">WEB3</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)" }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;