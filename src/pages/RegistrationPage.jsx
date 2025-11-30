import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaEnvelope, 
  FaGraduationCap,
  FaIdCard,
  FaCalendarCheck,
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    degree: '',
    year: '',
    studentId: '',
    interests: [],
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  const interestOptions = [
    'Cloud Computing',
    'Machine Learning',
    'DevOps',
    'Data Engineering',
    'IoT',
    'Serverless',
    'Security',
    'Web Development'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Redirect to home after 4 seconds
      setTimeout(() => {
        window.location.hash = '';
      }, 4000);
    }, 2000);
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="registration-page">
      <Header />
      
      <main className="registration-main">
        <motion.button
          className="back-button"
          onClick={handleBackToHome}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <div className="registration-container">
          <motion.div
            className="registration-header"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">EVENT REGISTRATION</h1>
            <div className="title-line"></div>
            <p className="page-subtitle">
              Join us for AWS Student Community Day 2025 - December 15, 2025
            </p>
            <div className="event-info-badges">
              <motion.div 
                className="info-badge"
                whileHover={{ scale: 1.05 }}
              >
                <FaCalendarCheck />
                <span>December 15, 2025</span>
              </motion.div>
              <motion.div 
                className="info-badge"
                whileHover={{ scale: 1.05 }}
              >
                <FaUser />
                <span>Limited Seats Available</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="registration-form-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                className="success-message"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaCheckCircle className="success-icon" />
                <h2>Registration Successful!</h2>
                <p>You're all set for AWS Student Community Day 2025!</p>
                <p className="confirmation-note">
                  A confirmation email has been sent to <strong>{formData.email}</strong>
                </p>
                <p className="redirect-note">Redirecting to home page...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="registration-form">
                {/* Personal Information */}
                <div className="form-section">
                  <h3 className="form-section-title">
                    <FaUser /> Personal Information
                  </h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@university.edu"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="studentId">Student ID *</label>
                      <input
                        type="text"
                        id="studentId"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        placeholder="Your student ID number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="form-section">
                  <h3 className="form-section-title">
                    <FaGraduationCap /> Academic Information
                  </h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="university">University/College *</label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        placeholder="Your institution name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="degree">Degree Program *</label>
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        placeholder="e.g., B.Tech in Computer Science"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="year">Current Year *</label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                      <option value="graduate">Graduate Student</option>
                    </select>
                  </div>
                </div>

                {/* Interests */}
                <div className="form-section">
                  <h3 className="form-section-title">
                    <FaCalendarCheck /> Areas of Interest
                  </h3>
                  <p className="form-helper-text">Select all that apply</p>
                  
                  <div className="interests-grid">
                    {interestOptions.map(interest => (
                      <label key={interest} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <h3 className="form-section-title">
                    <FaIdCard /> Additional Information
                  </h3>
                  
                  <div className="form-group">
                    <label htmlFor="dietaryRestrictions">Dietary Restrictions (Optional)</label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      placeholder="e.g., Vegetarian, Vegan, Allergies"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        placeholder="Emergency contact person"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      SUBMITTING...
                    </>
                  ) : (
                    <>
                      <FaCheckCircle />
                      REGISTER FOR EVENT
                    </>
                  )}
                </motion.button>

                <p className="form-note">
                  * Required fields. By registering, you agree to receive event updates and communications.
                </p>
              </form>
            )}
          </motion.div>

          {/* Event Highlights */}
          <motion.div
            className="event-highlights"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3>What You'll Get</h3>
            <div className="highlights-grid">
              <motion.div 
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FaCalendarCheck className="highlight-icon" />
                <h4>Full Day Access</h4>
                <p>8+ hours of workshops, keynotes, and networking</p>
              </motion.div>
              
              <motion.div 
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FaGraduationCap className="highlight-icon" />
                <h4>Certificate</h4>
                <p>Official AWS SCD 2025 participation certificate</p>
              </motion.div>
              
              <motion.div 
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FaUser className="highlight-icon" />
                <h4>AWS Swags</h4>
                <p>Exclusive AWS merchandise and goodies</p>
              </motion.div>
              
              <motion.div 
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FaEnvelope className="highlight-icon" />
                <h4>Networking</h4>
                <p>Connect with industry experts and peers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegistrationPage;