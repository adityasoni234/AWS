import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (sectionId) => {
    // Check if trying to navigate to events page
    if (sectionId === 'events') {
      window.location.hash = '#events';
      return;
    }

    // For other sections, check if we're on events page
    if (window.location.hash === '#events') {
      // If on events page, navigate to home first
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Normal scrolling on main page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const contacts = [
    { name: 'Tanuj Bhatt', phone: '+91 93778 49778' },
    { name: 'Sujal Patel', phone: '+91 87580 55599' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-section footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-title">AWS Cloud Clubs</h3>
          <p className="footer-tagline">Silver Oak University</p>
          <p className="footer-description">
            Building the future with cloud computing and AI-powered solutions. 
            Join us in exploring the limitless possibilities of AWS technology.
          </p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><a onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>Home</a></li>
            <li><a onClick={() => handleNavigation('about')} style={{ cursor: 'pointer' }}>About</a></li>
            <li><a onClick={() => handleNavigation('calendar')} style={{ cursor: 'pointer' }}>Calendar</a></li>
            <li><a onClick={() => handleNavigation('events')} style={{ cursor: 'pointer' }}>Events</a></li>
            <li><a onClick={() => handleNavigation('contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section footer-contact-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4>Contact Team</h4>
          <div className="contact-grid">
            <motion.div 
              className="contact-card-combined"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -3 }}
            >
              {contacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-name">{contact.name}</span>
                  <a href={`tel:${contact.phone}`} className="contact-phone">
                    <FaPhone className="phone-icon" />
                    {contact.phone}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="email-section">
            <a href="mailto:ieee.tr@socet.edu.in" className="email-link">
              ieee.tr@socet.edu.in
            </a>
          </div>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>Follow Us</h4>
          <div className="social-links">
            <motion.a
              href="https://www.linkedin.com/company/aws-cloud-clubs-sou"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/awscloudclubs.sou"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
          <p className="social-description">
            Stay connected with us on social media for the latest updates, events, and cloud computing insights!
          </p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} AWS Cloud Clubs - Silver Oak University. All rights reserved.</p>
          <p className="footer-credits">Organized by IEEE Student Branch & Cloud Clubs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;