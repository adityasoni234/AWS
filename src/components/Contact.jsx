import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      info: ['Silver Oak University', 'Gota, Ahmedabad, Gujarat 382481'],
      link: 'https://www.google.com/maps/dir//352%2F353,+Silver+Oak+University,+370%2F371,+near+Bhavik+Publication,+Gota+Gam,+Gota,+Ahmedabad,+Gujarat+382481/@23.0902832,72.4522362,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x395e833af6f39347:0xf1db9065daea7008!2m2!1d72.5346378!2d23.0903046?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D',
      linkText: 'Get Directions'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: ['ieee.tr@socet.edu.in'],
      link: 'mailto:ieee.tr@socet.edu.in',
      linkText: 'Send Email'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      info: ['Tanuj Bhatt: +91 93778 49778', 'Sujal Patel: +91 87580 55599'],
      link: 'tel:+919377849778',
      linkText: 'Call Now'
    },
    {
      icon: FaClock,
      title: 'Hours',
      info: ['Mon - Fri: 9AM - 6PM', 'Sat - Sun: Closed']
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="title-line"></div>
          <p className="section-subtitle">Let's start a conversation</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="info-icon">
                    <IconComponent />
                  </div>
                  <h3>{item.title}</h3>
                  {item.info.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  {item.link && (
                    <motion.a
                      href={item.link}
                      target={item.icon === FaMapMarkerAlt ? "_blank" : undefined}
                      rel={item.icon === FaMapMarkerAlt ? "noopener noreferrer" : undefined}
                      className="info-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.linkText} →
                    </motion.a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${formStatus}`}
                disabled={formStatus === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'sending' && 'SENDING...'}
                {formStatus === 'success' && '✓ MESSAGE SENT!'}
                {!formStatus && 'SEND MESSAGE'}
              </motion.button>
            </form>

            {formStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! We'll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;