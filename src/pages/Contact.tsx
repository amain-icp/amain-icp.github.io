import React, { useState, useEffect } from 'react';
import { trackPageView, trackFormSubmit, trackButtonClick } from '../utils/analytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    trackPageView('/contact', 'Contact - Ace Tennis Academy');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit('contact_form');
    trackButtonClick('submit_contact', 'contact-submit');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <div className="info-item">
          <h3>Email</h3>
          <p>info@acetennisacademy.com</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>(555) 123-4567</p>
        </div>
        <div className="info-item">
          <h3>Location</h3>
          <p>123 Grand Slam Ave, Tennis City</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact; 