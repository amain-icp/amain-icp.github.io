import React from 'react';
import Navigation from '../components/Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 Ace Tennis Academy. All rights reserved.</p>
        <p style={{ fontSize: '0.95em', color: '#ffb347', marginTop: 4 }}>
          Disclaimer: This website is for a fake company and is for demonstration/testing purposes only. No real products or services are offered.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout; 