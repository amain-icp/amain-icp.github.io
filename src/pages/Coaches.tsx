import React, { useEffect } from 'react';
import { trackPageView, trackButtonClick } from '../utils/analytics';
import coach1 from '../assets/coach1.jpg';
import coach2 from '../assets/coach2.jpg';
import coach3 from '../assets/coach3.jpg';
import coach4 from '../assets/coach4.jpg';

const coaches = [
  {
    id: 'sharapova',
    name: 'Coach Maria Sharapova',
    role: 'Head Coach',
    bio: '5-time Grand Slam champion. Specializes in powerful baseline play and mental resilience.',
    specialties: ['Power Tennis', 'Mental Training', 'Strategy'],
    image: coach2
  },
  {
    id: 'rafa',
    name: 'Coach Rafael Nadal',
    role: 'Junior Program Director',
    bio: '22-time Grand Slam champion. Expert in clay court play and physical conditioning.',
    specialties: ['Clay Court', 'Physical Training', 'Junior Development'],
    image: coach1
  },
  {
    id: 'roger',
    name: 'Coach Roger Federer',
    role: 'High Performance Coach',
    bio: '20-time Grand Slam champion. Known for elegant technique and tactical mastery.',
    specialties: ['Technique', 'Strategy', 'Advanced Skills'],
    image: coach3
  },
  {
    id: 'billie',
    name: 'Coach Billie Jean King',
    role: 'Adult Clinics Director',
    bio: 'Former world #1 and tennis legend. Advocate for equality and expert in doubles strategy.',
    specialties: ['Doubles', 'Equality Advocacy', 'Modern Techniques'],
    image: coach4
  }
];

const Coaches: React.FC = () => {
  useEffect(() => {
    trackPageView('/coaches', 'Coaches - Ace Tennis Academy');
  }, []);

  const handleBookClick = (coachId: string) => {
    trackButtonClick('book_coach', `book-${coachId}`);
  };

  return (
    <div className="coaches-page">
      <h1 style={{ color: '#FFC94A' }}>Our Coaches</h1>
      <div className="coaches-grid">
        {coaches.map((coach) => (
          <div key={coach.id} className="coach-card" style={{ color: '#181a20', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <img src={coach.image} alt={coach.name} style={{ width: 96, height: 96, objectFit: 'cover', borderRadius: '50%', marginBottom: 16, border: '3px solid #1a365d' }} />
            <h2 style={{ color: '#101522', marginBottom: 4 }}>{coach.name}</h2>
            <h3 style={{ color: '#333', marginBottom: 8 }}>{coach.role}</h3>
            <p style={{ color: '#444', marginBottom: 8 }}>{coach.bio}</p>
            <div className="specialties">
              <h4 style={{ color: '#181a20', marginBottom: 4 }}>Specialties:</h4>
              <ul style={{ color: '#333', margin: 0, paddingLeft: 18 }}>
                {coach.specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleBookClick(coach.id)} style={{ marginTop: 12 }}>
              Book a Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches; 