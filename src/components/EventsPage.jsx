import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import './EventsPage.css';

const speakers = [
  {
    id: 1,
    name: 'Dr. Bishwajit Mohapatra',
    linkedin: 'https://in.linkedin.com/in/biswajitmohapatra',
    title: 'Cloud Computing Expert',
    image: '/images/BG_removed_speakers/Dr. Bishwajit Mohapatra.png'
  },
  {
    id: 2,
    name: 'Mr. Nilesh Vaghela',
    linkedin: 'https://in.linkedin.com/in/nilesh-vaghela',
    title: 'AWS Machine Learning Specialist',
    image: '/images/BG_removed_speakers/Nilesh Vaghela.png'
  },
  {
    id: 3,
    name: 'Mr. Ashish Patel',
    linkedin: 'https://in.linkedin.com/in/ashishkp',
    title: 'DevOps & Cloud Solutions Expert',
    image: '/images/BG_removed_speakers/Ashish Patel.png'
  },
  {
    id: 4,
    name: 'Mr. Udit Parikh',
    linkedin: 'https://www.linkedin.com/in/parikhudit',
    title: 'AWS Expert',
    image: '/images/BG_removed_speakers/Udit_Parekh.png'
  }
];

const EventsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const speakersPerSlide = 2;
  const totalSlides = Math.ceil(speakers.length / speakersPerSlide);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSpeakers = () => {
    const start = currentSlide * speakersPerSlide;
    return speakers.slice(start, start + speakersPerSlide);
  };

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
                info: ['12<sup>th</sup> December, 2025', '08:00 AM - 05:00 PM'],
                useHTML: true
              },
              { 
                icon: <FaMapMarkerAlt />, 
                title: 'Venue', 
                info: ['Aryabhata auditorium E Block 5th Floor, Silver Oak University', 'Gota, Ahmedabad, Gujarat']
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
                  item.useHTML ? (
                    <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
                  ) : (
                    <p key={i}>{line}</p>
                  )
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
              className="speakers-carousel-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="section-icon-wrapper">
                <FaUsers className="section-icon" />
              </div>
              <h3 className="section-heading">SPEAKERS</h3>
              
              <div className="carousel-container">
                <button className="carousel-btn prev" onClick={prevSlide}>
                  <FaChevronLeft />
                </button>
                
                <div className="speakers-grid">
                  {getCurrentSpeakers().map((speaker, index) => (
                    <motion.div
                      key={speaker.id}
                      className="speaker-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="speaker-image">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="speaker-photo"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="speaker-placeholder" style={{display: 'none'}}>
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <h4 className="speaker-name">{speaker.name}</h4>
                      <p className="speaker-title">{speaker.title}</p>
                      <a 
                        href={speaker.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="linkedin-btn"
                      >
                        <FaLinkedin /> Connect
                      </a>
                    </motion.div>
                  ))}
                </div>
                
                <button className="carousel-btn next" onClick={nextSlide}>
                  <FaChevronRight />
                </button>
              </div>
              
              <div className="carousel-dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
