// Modal.tsx
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-md z-10 text-center">
        {children}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
