// src/components/Form.tsx
import React, { ReactNode } from 'react';

interface FormProps {
  onSubmit: () => void;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
