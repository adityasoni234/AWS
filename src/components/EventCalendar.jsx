import React, { useState } from 'react';
import './EventCalendar.css';

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2025',
      date: '2025-11-15',
      time: '10:00 AM - 5:00 PM',
      location: 'Convention Center, Hall A',
      description: 'Join us for the biggest tech innovation summit of the year. Featuring keynote speakers from leading tech companies, workshops, and networking opportunities.',
      category: 'Conference',
      attendees: 500,
      image: '🎤'
    },
    {
      id: 2,
      title: 'AWS Workshop: Cloud Computing',
      date: '2025-11-20',
      time: '2:00 PM - 6:00 PM',
      location: 'AWS Training Center',
      description: 'Hands-on workshop covering AWS services, cloud architecture, and best practices. Perfect for beginners and intermediate users.',
      category: 'Workshop',
      attendees: 50,
      image: '☁️'
    },
    {
      id: 3,
      title: 'Developer Meetup',
      date: '2025-11-25',
      time: '6:00 PM - 9:00 PM',
      location: 'Tech Hub, Downtown',
      description: 'Monthly developer meetup for networking, knowledge sharing, and discussing the latest trends in software development.',
      category: 'Meetup',
      attendees: 100,
      image: '💻'
    },
    {
      id: 4,
      title: 'AI & Machine Learning Conference',
      date: '2025-12-05',
      time: '9:00 AM - 6:00 PM',
      location: 'Grand Hotel, Ballroom',
      description: 'Explore the latest advancements in AI and ML. Sessions on deep learning, neural networks, and practical applications.',
      category: 'Conference',
      attendees: 300,
      image: '🤖'
    },
    {
      id: 5,
      title: 'Startup Pitch Night',
      date: '2025-12-10',
      time: '7:00 PM - 10:00 PM',
      location: 'Innovation Center',
      description: 'Watch innovative startups pitch their ideas to investors. Network with entrepreneurs and industry leaders.',
      category: 'Networking',
      attendees: 150,
      image: '🚀'
    },
    {
      id: 6,
      title: 'Cybersecurity Training',
      date: '2025-12-15',
      time: '1:00 PM - 5:00 PM',
      location: 'Security Institute',
      description: 'Comprehensive training on cybersecurity best practices, threat detection, and incident response.',
      category: 'Training',
      attendees: 75,
      image: '🔒'
    }
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="calendar" className="event-calendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Join us at our exciting upcoming events</p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="event-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleEventClick(event)}
            >
              <div className="event-icon">{event.image}</div>
              <div className="event-category">{event.category}</div>
              <h3>{event.title}</h3>
              <div className="event-info">
                <div className="event-date">
                  <span className="icon">📅</span>
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="event-time">
                  <span className="icon">🕐</span>
                  {event.time}
                </div>
                <div className="event-location">
                  <span className="icon">📍</span>
                  {event.location}
                </div>
              </div>
              <button className="event-btn">View Details</button>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="modal-header">
                <div className="modal-icon">{selectedEvent.image}</div>
                <h2>{selectedEvent.title}</h2>
                <span className="modal-category">{selectedEvent.category}</span>
              </div>
              <div className="modal-body">
                <div className="modal-info">
                  <div className="info-item">
                    <span className="info-label">📅 Date:</span>
                    <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">🕐 Time:</span>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📍 Location:</span>
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👥 Expected Attendees:</span>
                    <span>{selectedEvent.attendees}+</span>
                  </div>
                </div>
                <div className="modal-description">
                  <h4>About This Event</h4>
                  <p>{selectedEvent.description}</p>
                </div>
                <div className="modal-actions">
                  <button className="btn-register">Register Now</button>
                  <button className="btn-share">Share Event</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;