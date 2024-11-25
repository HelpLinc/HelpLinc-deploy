import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetStartedPage: React.FC = () => {
  return (
    <div>
        <Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg text-center">
        
        {/* Welcome Header */}
        <h1 className="text-4xl font-bold text-[#060644] mb-6">Welcome to Helplink!</h1>
        
        {/* Big Search Bar */}
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Search by clinic, location, or service..." 
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>
        
        {/* Login & Sign Up Buttons */}
        <div className="flex justify-center gap-4 mb-6">
        <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 font-semibold">
                Login
            </Link>
        <Link to="/user-register" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 font-semibold">
            Sign Up
            </Link>
        </div>
        
        {/* Forgot Password */}
        <div className="mb-6">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        
        {/* Sign in with Google Button */}
        <button type="button" className="w-full h-10 flex items-center justify-center gap-3 text-[#060644] text-lg font-bold rounded border border-white hover:border-blue-300 ">
                <img src={`/google-icon.svg`} alt="google logo" className="h-5 w-5 " />
                Sign in using Google
        </button>
        
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default GetStartedPage;