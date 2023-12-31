// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-10 text-center flex items-center justify-center">
      <img
        src="data:image/jpeg;base64,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8CZyz4/XSYSXd6xKHs9LXy/OqrUHjtorftJnm57LWhUS4ure9pb6V7ZUaiH6SllZT4jCgzxkuGd46+CExEToqIiICIiBEREMkREBOROBIGWB88DqBOOSISY2E53yJybQPvcfnDj6jnIZCN/EdRwgifZjO00P2hvLE/zW5qU1zkoDtUj5o2V9cTqoktWLRqY2qydH637ymAK9tQr4+UjNQY+fvDPoJ39trjtSB7S0uEPPYanUUepKk/CUvJnz24mKfY0vRdbmjTxS7H9Un4PJbW5owfIuz5Uk/F5RQGeEz2QvHeegP7TM/YsfzJ0uttb9j8m2u2A4krSUD78+K51w27AqLGq6sCCKlSmoI6EANKgZyfIcANwExljh4o9v3Ih3naHStndnboaPFnUJyTTuNuk39XsAKfIj1nRxE+itYrGoaIiJoIiIH11r1noUaDbxbvWameiVNksvkGXI/TafJESRGgiIlCTEiBMSIkERESskREBERATJWI4f+ZjEDk7rfRP3T/lMGUjjImauRu4jod4hNTHZjMgmN7bvD5R9I28cAAeu8n7ZiTB1lkX5DcPtPmZhEQ1EaTEiTCkSJMBERAREQEREBERAREQERECIiIZIiICIiAiIgIiIUiIgIiTAiTEiFTERAREQEREBERARESBJkRARJiUYiIiRkiIlCDEQAiIgIiIUiIgJJiIVEmIgIiICIiAiIgIiICIiQJIiJREREg//2Q=="
        alt="Logo"
        className="h-8 w-8 mr-2" // Adjust the height, width, and margin as needed
      />
      <h1 className="text-2xl font-bold">Secure User Management Dashboard</h1>
    </header>
  );
};

export default Header;
