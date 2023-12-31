// SignUp.tsx
import React, { useState } from 'react';
import Form from '../components/Form';
import Modal from '../components/Modal';
import { signUp } from '../services/authService';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Placeholder user logo URL
const userLogoUrl = 'https://i.pinimg.com/564x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = async () => {
    try {
      const result = await signUp({ email, password });
      console.log('SignUp Result:', result);
      setShowModal(true);
    } catch (error) {
      console.error('SignUp Error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {/* Sign-up card */}
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md text-center">
          {/* User logo */}
          <img
            src={userLogoUrl}
            alt="User Logo"
            className="mx-auto mb-4 h-16 w-16 rounded-full"
          />

          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <Form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 p-2 w-full border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 p-2 w-full border border-gray-300 rounded-md"
            />
            {/* Add additional form fields for sign-up */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </Form>
        </div>

        {/* Display the modal when showModal is true */}
        <Modal isOpen={showModal} onClose={closeModal}>
          <p>Sign Up Successful!</p>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
