// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../services/dataService';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

// Placeholder logo URL
const logoUrl = 'https://i.pinimg.com/564x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg';

const Home: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log('Data:', result);
      } catch (error) {
        console.error('Fetch Data Error:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-lg text-center">
          <img
            src={logoUrl}
            alt="Logo"
            className="mx-auto mb-4 h-16 w-16 rounded-full"
          />
          <h1 className="text-3xl font-bold mb-4">Welcome to the Home</h1>
          <p className="text-gray-600 mb-8">Explore our features and services.</p>
          <div className="flex justify-between">
            <Link to="/signin" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Sign In
            </Link>
            <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
