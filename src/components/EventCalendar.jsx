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
  FaUser
} from 'react-icons/fa';
import './EventCalendar.css';

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Registration and Breakfast',
      date: '2025-12-15',
      time: '08:30 AM - 09:20 AM',
      duration: '50 minutes',
      location: 'Main Venue',
      description: 'Welcome to AWS Student Community Day! Check-in, collect your badges, and enjoy breakfast while networking with fellow attendees.',
      category: 'Registration',
      icon: FaCoffee,
      buffer: '10 minutes'
    },
    {
      id: 2,
      title: 'Inauguration',
      date: '2025-12-15',
      time: '09:30 AM - 09:45 AM',
      duration: '15 minutes',
      location: 'Main Auditorium',
      description: 'Official opening ceremony and welcome address from the organizing committee.',
      category: 'Opening',
      icon: FaCalendarCheck,
      buffer: '5 minutes'
    },
    {
      id: 3,
      title: 'Keynote: AWS IAM & Config Rules',
      date: '2025-12-15',
      time: '09:50 AM - 10:35 AM',
      duration: '45 minutes',
      location: 'Main Auditorium',
      speaker: 'Bishwajit Mohapatra',
      description: 'Configure AWS Identity and Access Management (IAM) roles and AWS Config Rules for compliance. Learn best practices for securing your AWS infrastructure.',
      category: 'Keynote',
      icon: FaLock,
      buffer: '5 minutes'
    },
    {
      id: 4,
      title: 'CI/CD Pipeline with AWS / Agentic Spec Coding: KIRO',
      date: '2025-12-15',
      time: '10:40 AM - 11:25 AM',
      duration: '45 minutes',
      location: 'Main Auditorium',
      speaker: 'Shubham Londhe',
      description: 'Build a CI/CD pipeline using KIRO, AWS CodeCommit, CodeBuild, and CodePipeline. Hands-on session on automating your deployment workflow.',
      category: 'Workshop',
      icon: FaCogs,
      buffer: '5 minutes'
    },
    {
      id: 5,
      title: 'AWS Quiz',
      date: '2025-12-15',
      time: '10:30 AM - 11:00 AM',
      duration: '30 minutes',
      location: 'All Venues',
      description: 'Test your AWS knowledge! Exciting prizes for winners. Interactive quiz covering AWS services, best practices, and cloud concepts.',
      category: 'Activity',
      icon: FaBullseye,
      buffer: '5 minutes'
    },
    {
      id: 6,
      title: 'CloudWatch & X-Ray Dashboards',
      date: '2025-12-15',
      time: '11:05 AM - 11:50 AM',
      duration: '45 minutes',
      location: 'Main Auditorium',
      speaker: 'Nilesh Vaghela',
      description: 'Implement dashboards using Amazon CloudWatch and AWS X-Ray. Learn monitoring and debugging techniques for distributed applications.',
      category: 'Technical',
      icon: FaChartLine,
      buffer: '10 minutes'
    },
    {
      id: 7,
      title: 'Lunch and Networking',
      date: '2025-12-15',
      time: '12:00 PM - 01:30 PM',
      duration: '90 minutes',
      location: 'Cafeteria',
      description: 'Enjoy lunch and network with speakers, sponsors, and fellow attendees. Great opportunity to discuss AWS, career paths, and projects.',
      category: 'Break',
      icon: FaUtensils,
      buffer: '15 minutes'
    },
    {
      id: 8,
      title: 'Track 1: IoT + ML on AWS',
      date: '2025-12-15',
      time: '01:45 PM - 02:35 PM',
      duration: '50 minutes',
      location: 'Hall A',
      description: 'Train & Deploy a Tiny ML Model with SageMaker + Edge Inference. Hands-on session combining IoT and machine learning.',
      category: 'Track',
      icon: FaRobot,
      buffer: '10 minutes',
      track: 1
    },
    {
      id: 9,
      title: 'Track 2: Data Engineering Basics',
      date: '2025-12-15',
      time: '01:45 PM - 02:35 PM',
      duration: '50 minutes',
      location: 'Hall B',
      description: 'Build an ETL Pipeline with AWS Glue + S3 + Athena. Learn data engineering fundamentals with AWS services.',
      category: 'Track',
      icon: FaDatabase,
      buffer: '10 minutes',
      track: 2
    },
    {
      id: 10,
      title: 'Track 3: Panel Discussion',
      date: '2025-12-15',
      time: '01:45 PM - 02:35 PM',
      duration: '50 minutes',
      location: 'Hall C',
      description: 'Interactive panel discussion with industry experts on cloud careers, AWS certifications, and future trends.',
      category: 'Track',
      icon: FaComments,
      buffer: '10 minutes',
      track: 3
    },
    {
      id: 11,
      title: 'SageMaker Studio / AWS DeepRacer',
      date: '2025-12-15',
      time: '02:45 PM - 03:30 PM',
      duration: '45 minutes',
      location: 'Main Auditorium',
      speaker: 'Vaibhav Malpani',
      description: 'Build and deploy a classification model using SageMaker Studio OR Reinforcement Learning with AWS DeepRacer. Hands-on ML session.',
      category: 'Workshop',
      icon: FaCar,
      buffer: '5 minutes'
    },
    {
      id: 12,
      title: 'Cultural Track & Open Mic',
      date: '2025-12-15',
      time: '03:35 PM - 04:20 PM',
      duration: '45 minutes',
      location: 'Main Venue',
      description: 'Showcase your talent! Open mic for participants to perform, share experiences, or present their projects. Fun and relaxing session.',
      category: 'Cultural',
      icon: FaMicrophone,
      buffer: '5 minutes'
    },
    {
      id: 13,
      title: 'Closing Note and Swags Distribution',
      date: '2025-12-15',
      time: '04:25 PM - 05:00 PM',
      duration: '35 minutes',
      location: 'Main Auditorium',
      description: 'Event closing remarks, certificate distribution, and AWS swags giveaway. Thank you for being part of AWS SCD 2025!',
      category: 'Closing',
      icon: FaGift,
      buffer: '0 minutes'
    }
  ];

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
    <section id="calendar" className="event-calendar">
      <div className="calendar-container">
        <motion.div
          className="calendar-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">AWS STUDENT COMMUNITY DAY 2025</h2>
          <div className="title-line"></div>
          <p className="section-subtitle">Complete Event Timeline</p>
          <motion.div 
            className="event-date-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <FaCalendarCheck style={{ marginRight: '10px' }} />
            December 15, 2025
            <FaClock style={{ margin: '0 10px' }} />
            08:30 AM - 05:00 PM
          </motion.div>
        </motion.div>

        <div className="timeline-container">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.id}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div 
                  className="timeline-dot" 
                  style={{ 
                    backgroundColor: getCategoryColor(event.category),
                    boxShadow: `0 0 20px ${getCategoryColor(event.category)}`
                  }}
                ></div>
                
                <motion.div
                  className="timeline-card"
                  whileHover={{ 
                    scale: 1.02
                  }}
                  style={{ borderLeftColor: getCategoryColor(event.category) }}
                >
                  <div className="timeline-time">
                    <span 
                      className="time-badge" 
                      style={{ backgroundColor: getCategoryColor(event.category) }}
                    >
                      <FaClock style={{ marginRight: '5px', fontSize: '12px' }} />
                      {event.time}
                    </span>
                    <span className="duration-badge">{event.duration}</span>
                  </div>

                  <div className="timeline-content">
                    <div className="event-icon-large">
                      <IconComponent size={48} color={getCategoryColor(event.category)} />
                    </div>
                    
                    <div 
                      className="event-category-badge" 
                      style={{ 
                        backgroundColor: `${getCategoryColor(event.category)}20`,
                        color: getCategoryColor(event.category),
                        borderColor: getCategoryColor(event.category)
                      }}
                    >
                      {event.category}
                    </div>

                    <h3>{event.title}</h3>
                    
                    {event.speaker && (
                      <div className="speaker-info">
                        <FaUser style={{ fontSize: '16px' }} />
                        <span className="speaker-name">{event.speaker}</span>
                      </div>
                    )}

                    {event.track && (
                      <div className="track-badge">
                        Track {event.track}
                      </div>
                    )}

                    <div className="event-location">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>

                    <p className="event-description-short">
                      {event.description.substring(0, 100)}...
                    </p>

                    <motion.button
                      className="view-details-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details →
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                style={{ borderTopColor: getCategoryColor(selectedEvent.category) }}
              >
                <button className="modal-close" onClick={() => setSelectedEvent(null)}>×</button>
                
                <div className="modal-header">
                  <div className="modal-icon">
                    {React.createElement(selectedEvent.icon, { 
                      size: 80, 
                      color: getCategoryColor(selectedEvent.category) 
                    })}
                  </div>
                  <h2>{selectedEvent.title}</h2>
                  <span 
                    className="modal-category" 
                    style={{ backgroundColor: getCategoryColor(selectedEvent.category) }}
                  >
                    {selectedEvent.category}
                  </span>
                </div>

                <div className="modal-body">
                  <div className="modal-info">
                    <div className="info-item">
                      <span><FaClock /> Time:</span>
                      <span>{selectedEvent.time} ({selectedEvent.duration})</span>
                    </div>
                    <div className="info-item">
                      <span><FaMapMarkerAlt /> Location:</span>
                      <span>{selectedEvent.location}</span>
                    </div>
                    {selectedEvent.speaker && (
                      <div className="info-item">
                        <span><FaUser /> Speaker:</span>
                        <span>{selectedEvent.speaker}</span>
                      </div>
                    )}
                    {selectedEvent.buffer && (
                      <div className="info-item">
                        <span><FaClock /> Buffer Time:</span>
                        <span>{selectedEvent.buffer}</span>
                      </div>
                    )}
                    {selectedEvent.track && (
                      <div className="info-item">
                        <span><FaBullseye /> Track:</span>
                        <span>Track {selectedEvent.track}</span>
                      </div>
                    )}
                  </div>

                  <div className="modal-description">
                    <h4>About This Session</h4>
                    <p>{selectedEvent.description}</p>
                  </div>

                  <div className="modal-actions">
                    <motion.button
                      className="btn-register"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: getCategoryColor(selectedEvent.category) }}
                    >
                      <FaCalendarCheck style={{ marginRight: '8px' }} />
                      ADD TO SCHEDULE
                    </motion.button>
                  </div>
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