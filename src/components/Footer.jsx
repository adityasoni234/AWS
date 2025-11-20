import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
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
          <div className="footer-brand-header">
            <img src="/logo.png" alt="AWS Cloud Clubs Logo" className="footer-logo" />
            <h3 className="footer-title">AWS Cloud Clubs</h3>
          </div>
          <p className="footer-tagline">Silver Oak University</p>
          <a 
            href="https://www.google.com/maps/dir//352%2F353,+Silver+Oak+University,+370%2F371,+near+Bhavik+Publication,+Gota+Gam,+Gota,+Ahmedabad,+Gujarat+382481/@23.0902832,72.4522362,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x395e833af6f39347:0xf1db9065daea7008!2m2!1d72.5346378!2d23.0903046?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            352/353, Silver Oak University, 370/371, near Bhavik Publication, Gota, Ahmedabad, Gujarat 382481
          </a>
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
                    <FaPhoneAlt className="phone-icon" />
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