import React, { useState, useEffect } from 'react';
import './Home.css';

const phrases = [
  'Building The Future',
  'Cloud Innovation',
  'Scalable Solutions',
  'Digital Transformation'
];

const Home = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, phraseIndex, delta]);

  const tick = () => {
    const currentPhrase = phrases[phraseIndex];
    const updatedText = isDeleting
      ? currentPhrase.substring(0, text.length - 1)
      : currentPhrase.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 2000);
      setDelta(50);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setDelta(150);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="home-subtitle">
            Transforming ideas into reality with cutting-edge technology
          </p>
          <div className="home-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
              LEARN MORE
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              GET STARTED
            </button>
          </div>
        </div>

        <div className="home-image">
          {/* CSS Baby Boss Character */}
          <div className="baby-boss-character">
            {/* Head */}
            <div className="boss-head">
              {/* Hair */}
              <div className="boss-hair-left"></div>
              <div className="boss-hair-right"></div>
              
              {/* Eyes */}
              <div className="boss-eyes">
                <div className="boss-eye boss-eye-left">
                  <div className="boss-pupil"></div>
                  <div className="boss-eyebrow"></div>
                </div>
                <div className="boss-eye boss-eye-right">
                  <div className="boss-pupil"></div>
                  <div className="boss-eyebrow"></div>
                </div>
              </div>
              
              {/* Nose */}
              <div className="boss-nose"></div>
              
              {/* Mouth */}
              <div className="boss-mouth"></div>
            </div>
            
            {/* Body - AWS Suit */}
            <div className="boss-body">
              {/* Suit Jacket */}
              <div className="boss-suit">
                {/* Collar */}
                <div className="boss-collar-left"></div>
                <div className="boss-collar-right"></div>
                
                {/* Tie */}
                <div className="boss-tie">
                  <div className="tie-knot"></div>
                  <div className="tie-body"></div>
                </div>
                
                {/* AWS Logo on Suit */}
                <div className="aws-badge">
                  <div className="aws-badge-text">aws</div>
                  <div className="aws-badge-smile"></div>
                </div>
              </div>
              
              {/* Arms */}
              <div className="boss-arm boss-arm-left"></div>
              <div className="boss-arm boss-arm-right"></div>
              
              {/* Hands */}
              <div className="boss-hand boss-hand-left"></div>
              <div className="boss-hand boss-hand-right"></div>
            </div>
            
            {/* Legs */}
            <div className="boss-legs">
              <div className="boss-leg boss-leg-left"></div>
              <div className="boss-leg boss-leg-right"></div>
            </div>
            
            {/* Shoes */}
            <div className="boss-shoes">
              <div className="boss-shoe boss-shoe-left"></div>
              <div className="boss-shoe boss-shoe-right"></div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="floating-decorations">
            <div className="star star-1">⭐</div>
            <div className="star star-2">✨</div>
            <div className="star star-3">💼</div>
            <div className="cloud cloud-1">☁️</div>
            <div className="cloud cloud-2">☁️</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;