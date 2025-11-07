import React from 'react';
import './About.css';

// Move features outside component to avoid recreation
const features = [
  {
    title: 'Innovation',
    description: 'Cutting-edge solutions for modern challenges',
    icon: '🚀'
  },
  {
    title: 'Excellence',
    description: 'Quality and precision in everything we do',
    icon: '⭐'
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve greatness',
    icon: '🤝'
  },
  {
    title: 'Growth',
    description: 'Continuous improvement and learning',
    icon: '📈'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Us</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              We are a team of passionate professionals dedicated to delivering 
              exceptional solutions that drive success. With years of experience 
              and a commitment to excellence, we transform visions into reality.
            </p>
            <p>
              Our mission is to empower businesses and individuals through 
              innovative technology and creative solutions. We believe in the 
              power of collaboration and continuous improvement.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h4>500+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <span className="placeholder-text">Our Vision</span>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;