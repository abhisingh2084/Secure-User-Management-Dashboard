// src/pages/SignIn.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Form from '../components/Form';
import { signIn } from '../services/authService';
import Header from '../components/Header';
import Footer from '../components/Footer';

const userLogoUrl = 'https://i.pinimg.com/564x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSignIn = async () => {
    try {
      // Assume signIn function returns a boolean indicating success
      const isSuccess = await signIn({ email, password });

      if (isSuccess) {
        // Redirect to the dashboard on successful sign-in
        navigate('/dashboard');
      } else {
        // Show error message (optional)
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('SignIn Error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md text-center">
          <img
            src={userLogoUrl}
            alt="User Logo"
            className="mx-auto mb-4 h-16 w-16 rounded-full"
          />

          <h1 className="text-2xl font-bold mb-4">Sign In</h1>

          {/* Display error message if there is one */}
          {error && <p className="text-red-500">{error}</p>}

          <Form onSubmit={handleSignIn}>
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
