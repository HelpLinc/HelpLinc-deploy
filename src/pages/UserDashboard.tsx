import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div className="user-dashboard bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
            {/* Personal Information */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h3>
              <p>Name: John Doe</p>
              <p>Email: john.doe@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            {/* Edit Profile and Change Password */}
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Edit Profile
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Change Password
              </button>
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointments</h2>
            {/* Upcoming Appointments */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Upcoming Appointments</h3>
              <ul>
                <li>Date: 2023-11-01, Time: 10:00 AM, Provider: Dr. Smith</li>
                <li>Date: 2023-11-05, Time: 02:00 PM, Provider: Dr. Johnson</li>
              </ul>
            </div>
            {/* Past Appointments */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Past Appointments</h3>
              <ul>
                <li>Date: 2023-10-20, Time: 09:00 AM, Provider: Dr. Brown</li>
                <li>Date: 2023-10-15, Time: 03:00 PM, Provider: Dr. Davis</li>
              </ul>
            </div>
            {/* Book New Appointment */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Book New Appointment
            </button>
          </div>

          {/* Health Records */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Records</h2>
            {/* Medical History */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Medical History</h3>
              <p>Diagnosis: Hypertension</p>
              <p>Treatment: Medication</p>
            </div>
            {/* Lab Results */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Lab Results</h3>
              <p>Blood Test: Normal</p>
            </div>
            {/* Prescriptions */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Prescriptions</h3>
              <p>Medication: Lisinopril</p>
            </div>
            {/* Upload Documents */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Upload Documents
            </button>
          </div>

          {/* Health Resources */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Resources</h2>
            {/* Articles and Tips */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Articles and Tips</h3>
              <p>How to Manage Hypertension</p>
            </div>
            {/* FAQs */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">FAQs</h3>
              <p>What are the symptoms of hypertension?</p>
            </div>
            {/* Health Trackers */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Health Trackers</h3>
              <p>Blood Pressure: 120/80 mmHg</p>
            </div>
          </div>

          {/* Communication */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Communication</h2>
            {/* Messages */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Messages</h3>
              <p>New message from Dr. Smith</p>
            </div>
            {/* Notifications */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Notifications</h3>
              <p>Appointment reminder: 2023-11-01</p>
            </div>
            {/* Chat */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Chat</h3>
              <p>Chat with support team</p>
            </div>
          </div>

          {/* Reviews and Feedback */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews and Feedback</h2>
            {/* Write a Review */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Write a Review</h3>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            {/* View Reviews */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">View Reviews</h3>
              <p>Review by Jane Doe: Great service!</p>
            </div>
            {/* Feedback Form */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Feedback Form</h3>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
            {/* Account Settings */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Account Settings</h3>
              <p>Email Preferences</p>
            </div>
            {/* Privacy Settings */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Privacy Settings</h3>
              <p>Visibility of personal information</p>
            </div>
            {/* Logout */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Logout
            </button>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Emergency Contacts</h2>
            {/* Add Emergency Contacts */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Add Emergency Contacts</h3>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
            </div>
            {/* View Emergency Contacts */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">View Emergency Contacts</h3>
              <p>Jane Doe: +123 456 7890</p>
            </div>
          </div>

          {/* Dashboard Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
            {/* Welcome Message */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Welcome Message</h3>
              <p>Welcome, John Doe!</p>
            </div>
            {/* Quick Stats */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h3>
              <p>Upcoming Appointments: 2</p>
              <p>Recent Activity: Booked an appointment</p>
            </div>
            {/* Recent Activity */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Recent Activity</h3>
              <p>Booked an appointment with Dr. Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;