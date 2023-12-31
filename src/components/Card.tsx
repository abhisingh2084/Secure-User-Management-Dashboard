// src/components/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-md mx-auto mt-8">
      {children}
    </div>
  );
};

export default Card;
