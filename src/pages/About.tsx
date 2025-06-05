import React, { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

const About: React.FC = () => {
  useEffect(() => {
    trackPageView('/about', 'About - Ace Tennis Academy');
  }, []);

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Ace Tennis Academy has been shaping champions since 1995. Our mission is to inspire and develop tennis players of all ages and skill levels.</p>
      
      <section className="history">
        <h2>Our History</h2>
        <p>Founded by former professional tennis players, Ace Tennis Academy has grown from a small local club to one of the most respected tennis training facilities in the region.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>We are committed to:</p>
        <ul>
          <li>Providing top-quality tennis instruction</li>
          <li>Developing players of all skill levels</li>
          <li>Creating a supportive and inclusive environment</li>
          <li>Promoting the sport of tennis in our community</li>
        </ul>
      </section>

      <section className="facilities">
        <h2>Our Facilities</h2>
        <p>Our state-of-the-art facility includes:</p>
        <ul>
          <li>8 indoor courts</li>
          <li>4 outdoor courts</li>
          <li>Fitness center</li>
          <li>Pro shop</li>
          <li>Locker rooms</li>
        </ul>
      </section>
    </div>
  );
};

export default About; 