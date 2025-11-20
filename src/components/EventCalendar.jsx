import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCoffee, 
  FaCalendarCheck, 
  FaLock, 
  FaCogs, 
  FaBullseye, 
  FaChartLine,
  FaUtensils,
  FaRobot,
  FaDatabase,
  FaComments,
  FaCar,
  FaMicrophone,
  FaGift,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaAws,
  FaCode,
  FaLaptopCode,
  FaNetworkWired,
  FaArrowRight,
  FaInfoCircle
} from 'react-icons/fa';
import './EventCalendar.css';

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Registration and Breakfast',
      date: '2025-12-15',
      time: '08:00 AM - 09:15 AM',
      duration: '75 minutes',
      location: 'Main Venue',
      description: 'Participant check-in and networking over breakfast. Welcome to AWS Student Community Day! Collect your badges, enjoy breakfast, and start connecting with fellow cloud enthusiasts.',
      category: 'Registration',
      icon: FaCoffee,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Inauguration Ceremony',
      date: '2025-12-15',
      time: '09:30 AM - 09:45 AM',
      duration: '15 minutes',
      location: 'Main Auditorium',
      description: 'Opening remarks and official commencement of the event. Join us for the grand opening of AWS Student Community Day 2025!',
      category: 'Opening',
      icon: FaCalendarCheck,
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Keynote: A Career in Cloud',
      date: '2025-12-15',
      time: '09:45 AM - 10:20 AM',
      duration: '35 minutes',
      location: 'Main Auditorium',
      speaker: 'Dr. Bishwajit Mohapatra',
      description: 'Explore the exciting career opportunities in cloud computing. Learn about industry trends, required skills, and how to build a successful career in AWS and cloud technologies.',
      category: 'Keynote',
      icon: FaAws,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Amazon SageMaker',
      date: '2025-12-15',
      time: '10:20 AM - 11:10 AM',
      duration: '50 minutes',
      location: 'Main Auditorium',
      speaker: 'Nilesh Vaghela',
      description: 'Dive into Amazon SageMaker and learn how to build, train, and deploy machine learning models at scale. Hands-on insights into ML workflows on AWS.',
      category: 'Technical',
      icon: FaChartLine,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'AWS Quiz',
      date: '2025-12-15',
      time: 'After All Sessions',
      duration: '30 minutes',
      location: 'All Venues',
      description: 'Interactive quiz session with technical knowledge for all participants. Test your AWS expertise and win exciting prizes! Challenge yourself with questions covering various AWS services.',
      category: 'Activity',
      icon: FaBullseye,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 6,
      title: 'Spec Coding with Kiro',
      date: '2025-12-15',
      time: '11:40 AM - 12:30 PM',
      duration: '50 minutes',
      location: 'Main Auditorium',
      speaker: 'Shubham Londhe',
      description: 'Learn about specification-based coding with Kiro. Discover how to automate development workflows and build robust CI/CD pipelines with AWS services.',
      category: 'Workshop',
      icon: FaCode,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Lunch Break',
      date: '2025-12-15',
      time: '12:30 PM - 02:00 PM',
      duration: '90 minutes',
      location: 'Cafeteria',
      description: 'Networking and refreshment session. Enjoy delicious lunch while networking with speakers, sponsors, and fellow attendees. Perfect time to discuss projects and exchange ideas!',
      category: 'Break',
      icon: FaUtensils,
      gradient: 'from-gray-500 to-slate-500'
    },
    {
      id: 8,
      title: 'Track 1: AWS IoT Core / IoT Greengrass',
      date: '2025-12-15',
      time: '02:20 PM - 03:40 PM',
      duration: '80 minutes',
      location: 'CV Raman Hall',
      speaker: 'Kiran Trivedi',
      description: 'Intelligence at the IoT Edge with AWS IoT Greengrass. Learn how to build and deploy IoT solutions, connect devices, and process data at the edge with AWS IoT services.',
      category: 'Track',
      icon: FaNetworkWired,
      track: 1,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 9,
      title: 'Track 2: AWS DeepRacer',
      date: '2025-12-15',
      time: '02:20 PM - 03:40 PM',
      duration: '80 minutes',
      location: 'Newton Hall',
      speaker: 'Vaibhav Malpani',
      description: 'Get hands-on with AWS DeepRacer! Learn reinforcement learning through autonomous racing. Train your own ML models and experience the thrill of AI-powered racing.',
      category: 'Track',
      icon: FaCar,
      track: 2,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 10,
      title: 'Track 3: AWS Amplify',
      date: '2025-12-15',
      time: '02:20 PM - 03:40 PM',
      duration: '80 minutes',
      location: 'Ramanujan Hall',
      speaker: 'Udit Parekh',
      description: 'Frontend and Backend App Development with AWS Amplify. Build full-stack serverless applications with authentication, APIs, storage, and more using AWS Amplify.',
      category: 'Track',
      icon: FaLaptopCode,
      track: 3,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 11,
      title: 'Cultural Segment',
      date: '2025-12-15',
      time: '04:00 PM - 04:45 PM',
      duration: '45 minutes',
      location: 'Main Venue',
      description: 'Performances and entertainment! Showcase your talent in this open segment. Enjoy cultural performances, music, and entertainment from fellow participants.',
      category: 'Cultural',
      icon: FaMicrophone,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 12,
      title: 'Swag Distribution & Closing',
      date: '2025-12-15',
      time: '04:45 PM - 05:00 PM',
      duration: '15 minutes',
      location: 'E Block, Ground Floor',
      description: 'Distribution of goodies and closing notes. Collect your AWS swags, certificates, and participate in the closing ceremony. Thank you for being part of AWS SCD 2025!',
      category: 'Closing',
      icon: FaGift,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const categories = ['All', 'Keynote', 'Technical', 'Workshop', 'Track', 'Activity', 'Break', 'Cultural'];

  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Registration': '#FF6B6B',
      'Opening': '#4ECDC4',
      'Keynote': '#8B5CF6',
      'Workshop': '#F59E0B',
      'Activity': '#10B981',
      'Technical': '#3B82F6',
      'Break': '#6B7280',
      'Track': '#EC4899',
      'Cultural': '#F97316',
      'Closing': '#8B5CF6'
    };
    return colors[category] || '#8B5CF6';
  };

  return (
    <section id="calendar" className="event-calendar-modern">
      <div className="calendar-modern-container">
        {/* Header Section */}
        <motion.div
          className="calendar-modern-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="header-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <FaCalendarCheck /> EVENT SCHEDULE
          </motion.div>
          
          <h1 className="modern-title">
            AWS Student Community Day
            <span className="title-year">2025</span>
          </h1>
          
          <div className="event-meta">
            <div className="meta-item">
              <FaCalendarCheck />
              <span>December 15, 2025</span>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <FaClock />
              <span>08:00 AM - 05:00 PM</span>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <FaMapMarkerAlt />
              <span>Silver Oak University</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map((event, index) => {
            const IconComponent = event.icon;
            
            return (
              <motion.div
                key={event.id}
                className="event-card-modern"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Card Header with Gradient */}
                <div 
                  className="card-header-modern"
                  style={{ 
                    background: `linear-gradient(135deg, ${getCategoryColor(event.category)}20, ${getCategoryColor(event.category)}10)`
                  }}
                >
                  <div className="card-icon-wrapper">
                    <IconComponent 
                      className="card-icon" 
                      style={{ color: getCategoryColor(event.category) }}
                    />
                  </div>
                  
                  <div className="card-header-content">
                    <div className="card-time">
                      <FaClock /> {event.time}
                    </div>
                    <div className="card-duration">{event.duration}</div>
                  </div>

                  <div 
                    className="category-pill"
                    style={{ 
                      background: getCategoryColor(event.category),
                      boxShadow: `0 4px 15px ${getCategoryColor(event.category)}40`
                    }}
                  >
                    {event.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body-modern">
                  {event.track && (
                    <div className="track-indicator">
                      Track {event.track}
                    </div>
                  )}
                  
                  <h3 className="event-card-title">{event.title}</h3>
                  
                  {event.speaker && (
                    <div className="speaker-tag">
                      <FaUser />
                      <span>{event.speaker}</span>
                    </div>
                  )}
                  
                  <div className="location-tag">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="event-card-description">
                    {event.description.substring(0, 120)}...
                  </p>
                  
                  <motion.button
                    className="learn-more-btn"
                    whileHover={{ x: 5 }}
                    style={{ color: getCategoryColor(event.category) }}
                  >
                    Learn More <FaArrowRight />
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div 
                  className="card-hover-overlay"
                  style={{ background: getCategoryColor(event.category) }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                className="modal-modern"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close-modern" 
                  onClick={() => setSelectedEvent(null)}
                >
                  ×
                </button>

                <div 
                  className="modal-header-modern"
                  style={{ 
                    background: `linear-gradient(135deg, ${getCategoryColor(selectedEvent.category)}, ${getCategoryColor(selectedEvent.category)}dd)`
                  }}
                >
                  <div className="modal-icon-large">
                    {React.createElement(selectedEvent.icon, { size: 60 })}
                  </div>
                  <h2>{selectedEvent.title}</h2>
                  <div className="modal-category-badge">
                    {selectedEvent.category}
                  </div>
                </div>

                <div className="modal-body-modern">
                  <div className="modal-info-grid">
                    <div className="info-box">
                      <FaClock className="info-icon" />
                      <div className="info-content">
                        <span className="info-label">Time</span>
                        <span className="info-text">{selectedEvent.time}</span>
                      </div>
                    </div>

                    <div className="info-box">
                      <FaInfoCircle className="info-icon" />
                      <div className="info-content">
                        <span className="info-label">Duration</span>
                        <span className="info-text">{selectedEvent.duration}</span>
                      </div>
                    </div>

                    <div className="info-box">
                      <FaMapMarkerAlt className="info-icon" />
                      <div className="info-content">
                        <span className="info-label">Location</span>
                        <span className="info-text">{selectedEvent.location}</span>
                      </div>
                    </div>

                    {selectedEvent.speaker && (
                      <div className="info-box">
                        <FaUser className="info-icon" />
                        <div className="info-content">
                          <span className="info-label">Speaker</span>
                          <span className="info-text">{selectedEvent.speaker}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="modal-description-section">
                    <h4>Session Overview</h4>
                    <p>{selectedEvent.description}</p>
                  </div>

                  <motion.button
                    className="register-btn-modern"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ background: getCategoryColor(selectedEvent.category) }}
                  >
                    <FaCalendarCheck /> Add to My Schedule
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventCalendar;