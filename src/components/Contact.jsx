import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            {[
              { icon: '📍', title: 'Location', info: ['123 Tech Street', 'Silicon Valley, CA'] },
              { icon: '📧', title: 'Email', info: ['info@aws-tech.com', 'support@aws-tech.com'] },
              { icon: '📱', title: 'Phone', info: ['+1 (234) 567-8900', '+1 (234) 567-8901'] },
              { icon: '🕐', title: 'Hours', info: ['Mon - Fri: 9AM - 6PM', 'Sat - Sun: Closed'] }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="info-card"
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