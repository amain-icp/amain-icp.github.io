import React, { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';
import heroImg from '../assets/hero-tennis.png';
import iconCoaching from '../assets/icon-coaching.png';
import iconFacility from '../assets/icon-facility.png';
import iconPrograms from '../assets/icon-programs.png';

const features = [
  {
    icon: iconCoaching,
    title: 'Expert Coaching',
    description: 'Learn from professional tennis players and certified coaches.'
  },
  {
    icon: iconFacility,
    title: 'State-of-the-Art Facilities',
    description: 'Train on premium courts with the latest equipment.'
  },
  {
    icon: iconPrograms,
    title: 'Comprehensive Programs',
    description: 'From beginners to advanced players, we have a program for you.'
  }
];

const Home: React.FC = () => {
  useEffect(() => {
    trackPageView('/', 'Home - Ace Tennis Academy');
  }, []);

  return (
    <div className="home-page">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#FFC94A', marginTop: 24, marginBottom: 12 }}>Welcome to Ace Tennis Academy</h1>
        <p style={{ color: '#FFF8E1', fontSize: 20, marginBottom: 24 }}>Elevate your game with world-class coaching and facilities.</p>
        <img src={heroImg} alt="Tennis Academy Hero" style={{ width: '100%', maxWidth: 900, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.15)', marginBottom: 32 }} />
      </div>
      <div className="features">
        {features.map((feature, idx) => (
          <div className="feature" key={feature.title} style={{ color: '#181a20', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <img src={feature.icon} alt={feature.title + ' icon'} style={{ width: 64, height: 64, marginBottom: 16 }} />
            <h2 style={{ color: '#101522', marginBottom: 12 }}>{feature.title}</h2>
            <p style={{ color: '#333', fontSize: 16 }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 