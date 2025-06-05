import React, { useState, useEffect } from 'react';
import { trackPageView, trackFormSubmit, trackUserRegister } from '../utils/analytics';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  useEffect(() => {
    trackPageView('/register', 'Register - Ace Tennis Academy');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit('registration_form');
    
    // Simulate user registration
    const userId = `user_${Date.now()}`;
    trackUserRegister(userId);
    
    // Reset form
    setFormData({
      email: '',
      name: '',
      password: '',
    });
    
    alert('Registration successful!');
  };

  return (
    <div className="register-page">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register; 