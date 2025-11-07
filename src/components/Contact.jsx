import React, { useState } from 'react';
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">We'd love to hear from you</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Our Location</h3>
              <p>123 Business Street</p>
              <p>Tech City, TC 12345</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>info@aws-website.com</p>
              <p>support@aws-website.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Call Us</h3>
              <p>+1 (234) 567-8900</p>
              <p>+1 (234) 567-8901</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${formStatus}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && '✓ Message Sent!'}
                {!formStatus && 'Send Message'}
              </button>
            </form>

            {formStatus === 'success' && (
              <div className="success-message">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;