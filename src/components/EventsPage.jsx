import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaClock,
  FaCalendarAlt,
  FaStar,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './EventsPage.css';

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="events" className="events">
      <div className="events-container">
        {/* Header */}
        <motion.div
          className="events-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">EVENT DETAILS</h2>
          <div className="title-line"></div>
          <p className="section-subtitle">Speakers, Sponsors, and More Information</p>
        </motion.div>

        <div className="events-content">
          {/* Event Info Cards */}
          <motion.div
            className="event-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { 
                icon: <FaCalendarAlt />, 
                title: 'Date & Time', 
                info: ['12th December, 2025', '08:00 AM - 05:00 PM'] 
              },
              { 
                icon: <FaMapMarkerAlt />, 
                title: 'Venue', 
                info: ['Silver Oak University', 'Gota, Ahmedabad, Gujarat'] 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
              >
                <div className="info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                {item.info.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Revealing Sections */}
          <motion.div
            className="event-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Speakers Section */}
            <motion.div
              className="revealing-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="section-icon-wrapper">
                <FaUsers className="section-icon" />
              </div>
              <h3 className="section-heading">SPEAKERS</h3>
              <div className="revealing-box">
                <motion.div
                  className="revealing-content"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <div className="clock-icon">
                    <FaClock />
                  </div>
                  <h4>Revealing Soon</h4>
                  <p>Our amazing lineup of speakers will be announced shortly. Stay tuned!</p>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
