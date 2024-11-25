import React from 'react';

const HomePageServices: React.FC = () => {
  const services = [
    {
      title: 'Primary Care',
      description: 'Comprehensive health assessment and preventive care for overall well-being.',
      imgSrc: '/primary.jpg',
    },
    {
      title: 'Dentistry',
      description: 'Oral health care including teeth cleaning, fillings, and dental surgeries.',
      imgSrc: '/Dentisty.jpg',
    },
    {
      title: 'Ophthalmology',
      description: 'Diagnosis and treatment of eye diseases and vision care.',
      imgSrc: '/eye.jpg',
    },
    {
      title: 'Internal Medicine',
      description: 'Diagnosis and treatment of adult diseases, focusing on internal organs.',
      imgSrc: '/internal.jpg',
    },
    {
      title: 'Emergency Medicine',
      description: 'Immediate medical treatment for urgent and life-threatening conditions.',
      imgSrc: '/urgence.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center text-center pb-6 bg-gray-50 rounded-lg shadow-md w-[350px] border border-blue-500 border-2">
          <img src={service.imgSrc} alt={service.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePageServices;