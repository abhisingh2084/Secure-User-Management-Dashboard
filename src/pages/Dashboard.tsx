// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/dataService';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any[]>([]); // Ensure userData is initialized as an array

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        setUserData(data.data); // Assuming data is an object with a 'data' property that is an array of user objects
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow p-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-lg text-gray-600 mb-4">Users List</p>

        {/* Display user data in cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {userData.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={user.avatar} // Assuming avatar is a URL
                alt={`${user.first_name} ${user.last_name}`}
                className="h-16 w-16 rounded-full mb-4 mx-auto"
              />
              <div className="text-center">
                <p className="text-lg font-bold">{user.first_name} {user.last_name}</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
