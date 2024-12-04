import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const SearchInterface: React.FC = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">HelpLink</h1>
          <p className="text-gray-600 mt-2">Your gateway to quick and easy help!</p>
        </header>

        {/* Search Section */}
        <div className="w-full max-w-md">
          <div className="flex items-center bg-white shadow-md rounded-full p-2">
            <input
              type="text"
              placeholder="Search for help..."
              className="flex-grow outline-none px-4 py-2 text-gray-700 rounded-l-full"
            />
            <Link to="/search-results" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700">
              Search
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SearchInterface;
