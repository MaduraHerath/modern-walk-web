// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light border-top py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Modern Walk. All rights reserved.</p>
        <p className="small text-muted">Designed by Madura Herath.</p>
      </div>
    </footer>
  );
};

export default Footer;
