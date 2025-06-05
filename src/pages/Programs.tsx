import React, { useEffect } from 'react';
import { trackPageView, trackButtonClick } from '../utils/analytics';

const programs = [
  {
    id: 'junior',
    name: 'Junior Development',
    description: 'Ages 5-17. Learn fundamentals and develop skills in a fun, supportive environment.',
    price: '$150/month'
  },
  {
    id: 'adult',
    name: 'Adult Clinics',
    description: 'All skill levels welcome. Improve your game with group instruction.',
    price: '$120/month'
  },
  {
    id: 'private',
    name: 'Private Lessons',
    description: 'One-on-one instruction tailored to your specific needs.',
    price: '$80/hour'
  },
  {
    id: 'summer',
    name: 'Summer Camps',
    description: 'Intensive training programs during summer break.',
    price: '$300/week'
  },
  {
    id: 'high-performance',
    name: 'High Performance Training',
    description: 'Advanced training for competitive players.',
    price: '$200/month'
  }
];

const Programs: React.FC = () => {
  useEffect(() => {
    trackPageView('/programs', 'Programs - Ace Tennis Academy');
  }, []);

  const handleEnrollClick = (programId: string) => {
    trackButtonClick('enroll_button', `enroll-${programId}`);
  };

  return (
    <div className="programs-page">
      <h1>Our Programs</h1>
      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <h2>{program.name}</h2>
            <p>{program.description}</p>
            <p className="price">{program.price}</p>
            <button onClick={() => handleEnrollClick(program.id)}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs; 