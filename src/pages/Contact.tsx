import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Ensure only numeric characters are allowed and limit to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({
        ...formData,
        phone: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/contact', formData);
      alert('Your message has been sent successfully!');

      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('There was an error sending your message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div>
        <Header />
    <div className="bg-gray-50 py-12 px-8 md:px-20 rounded-lg shadow-md">
        
        {/* Title Section */}
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#060644] mb-2">Contact Us</h1>
            <p className="text-lg text-gray-700">Leave us a message and we'll get back to you as soon as possible.</p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
            {/* About Helplink Section */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-[#060644] mb-4 text-center">At Helplinc</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                    We are dedicated to providing you with easy access to quality healthcare. If you have any questions, need assistance, or want to learn more about our services, don’t hesitate to get in touch. Our team is here to help and guide you through every step of your healthcare journey.
                </p>
            </div>


            {/* Contact Form Section */}
            <div className="flex-1 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Field */}
                <div>
                <label className="block text-[#060644] font-semibold mb-2">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Email Field */}
                <div>
                <label className="block text-[#060644] font-semibold mb-2">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Phone Field */}
                <div>
                <label className="block text-[#060644] font-semibold mb-2">Phone:</label>
                <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handlePhoneChange} 
                    required 
                    pattern="\d{10}" 
                    maxLength={12}
                    title="Phone number must be 10 digits"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Message Field */}
                <div>
                <label className="block text-[#060644] font-semibold mb-2">Message:</label>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-36 resize-none"
                ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                type="submit" 
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
                >
                Send Message
                </button>
            </form>
            </div>
        </div>
        
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <img src="/Contact.PNG" alt="Helplink" className="w-[80%] h-auto rounded-lg" />
            </div>
        <Footer />
        </div>

  );
};

export default ContactForm;