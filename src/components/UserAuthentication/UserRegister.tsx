import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  address: Address;
  profileImage?: File;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
    },
  });

  // Helper function to check if the field is the 'address'
  const isAddressField = (field: string): field is 'address' => field === 'address';

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;

    // If it's an address field (e.g., 'address.street'), handle it separately
    if (name.includes('address')) {
      const [field, key] = name.split('.') as [string, keyof Address];
      if (isAddressField(field)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          address: {
            ...prevFormData.address,
            [key]: value,
          },
        }));
      }
    } else {
      // For non-address fields
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // Handle file input change
const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
  const files = e.target.files;
  if (files && files.length > 0) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profileImage: files[0],
    }));
  }
};

// Handle Phone Input change
const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Ensure only numeric characters are allowed and limit to 10 digits
    if (/^\d*$/.test(value) && value.length <= 12) {
      setFormData({
        ...formData,
        phone: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/registerUser', formData);
      alert('Your registration is successful');

      // Clear the form after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        address: {
          street: '',
          city: '',
          state: '',
          country: '',
        },
      });
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
    <div>
        <Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-[#060644] mb-6 text-center">Create your Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* First Name */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Phone:</label>
            <input
              type="text"
              name="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              pattern="\d{10}"
              maxLength={12}
              title="Phone number must be 10 digits"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address Fields */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Street:</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-[#060644] font-semibold mb-2">City:</label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-[#060644] font-semibold mb-2">State:</label>
            <input
              type="text"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Country:</label>
            <input
              type="text"
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Profile Image Upload */}
          <div>
            <label className="block text-[#060644] font-semibold mb-2">Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
};

export default Register;