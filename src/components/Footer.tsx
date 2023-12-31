// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        {/* Social Media Icons */}
        <a href="https://www.linkedin.com/in/abhishek-kr-/" target="_blank" rel="noopener noreferrer">
          {/* Replace with your LinkedIn icon */}
          <img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          {/* Replace with your Instagram icon */}
          <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
          {/* Replace with your YouTube icon */}
          <img src="https://cdn-icons-png.flaticon.com/128/4494/4494485.png" alt="YouTube" className="h-6 w-6" />
        </a>
        <a href="https://github.com/abhisingh2084" target="_blank" rel="noopener noreferrer">
          {/* Replace with your GitHub icon */}
          <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="GitHub" className="h-6 w-6" />
        </a>
      </div>

      {/* Copyright Information */}
      <p>© 2023 Abhishek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
