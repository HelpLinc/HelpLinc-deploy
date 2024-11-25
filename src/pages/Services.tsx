import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div>
    <div>
        <Header />
    <div className="services-page bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#060644] text-center mb-10">Our Services</h1>

        {/* Service 1 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src="/service1.jpg" alt="Search for Clinics" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold text-[#060644] mb-4">Search for Clinics and Healthcare Providers</h2>
              <p className="text-gray-700">
                Easily find clinics and specialists based on location, specialty, services offered, and patient reviews. Our advanced search functionality ensures you find the right healthcare provider for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0 md:order-2">
              <img src="/Book.jpg" alt="Book Appointments" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pr-8 md:order-1">
              <h2 className="text-2xl font-bold text-[#060644] mb-4">Book Appointments</h2>
              <p className="text-gray-700">
                Schedule appointments with preferred healthcare providers with just a few clicks, eliminating long waiting times and administrative hassles. Our user-friendly booking system ensures a seamless experience.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src="/service3.jpg" alt="Access Health Resources" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold text-[#060644] mb-4">Access Health Resources</h2>
              <p className="text-gray-700">
                Explore a wealth of health-related information, articles, and resources to make informed decisions about your health and wellness. Our comprehensive resources cover a wide range of topics to support your well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0 md:order-2">
              <img src="/pic-about-01.jpg" alt="Manage Personal Health Records" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pr-8 md:order-1">
              <h2 className="text-2xl font-bold text-[#060644] mb-4">Manage Personal Health Records</h2>
              <p className="text-gray-700">
                Securely store and manage your health records and appointment history for convenient future reference. Our secure platform ensures your personal health information is always accessible and protected.
              </p>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src="/pic-article-02.jpg" alt="Provide and Read Reviews" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold text-[#060644] mb-4">Provide and Read Reviews</h2>
              <p className="text-gray-700">
                Share your healthcare experiences and read reviews from other patients to choose the best healthcare services available. Your feedback helps others make informed decisions about their healthcare providers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
        <Link to="/get-started" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                Get Started
            </Link>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
};

export default ServicesPage;