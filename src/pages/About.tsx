import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-[#060644] text-center p-10">About Us</h1>
      <div className="w-full flex flex-col md:flex-row h-auto px-20 py-10 bg-gray-100 rounded-lg shadow-lg">
        
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-[#060644] mb-4">About Helplink</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                Helplink was founded with a simple yet powerful vision: to make healthcare more accessible and patient-centered. Our journey began with the realization that finding and booking medical services could be much simpler. Today, we’re proud to be the bridge that connects patients with quality healthcare, offering a seamless and stress-free experience.
                </p>
            </div>
            <div className="flex-1 mt-10 md:mt-0 md:ml-10">
                <img src="/image1.jpg" alt="Helplink" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 px-6 md:px-10 mt-10 mb-10">
            <section className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-[#060644] mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                At HelpClinic, our mission is to make healthcare accessible to everyone by connecting patients with the right healthcare providers. We aim to simplify the process of finding and booking appointments with clinics that meet specific needs, whether based on location, services, or budget.
                </p>
            </section>

            <section className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-[#060644] mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to become the leading platform for healthcare access worldwide, ensuring that everyone, regardless of location or financial situation, has the ability to find and receive the healthcare they need. We strive to innovate continuously and adapt to the evolving needs of our users, making healthcare more inclusive and accessible.
                </p>
            </section>
        </div>
        <div className="w-full flex flex-col md:flex-row h-auto px-20 py-10 bg-gray-100 rounded-lg shadow-lg gap-10">
            <div className="flex-1 mt-10 md:mt-0 md:ml-10">
                    <img src="/WhoWeAre.jpg" alt="Helplink" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="flex-1">
                    <h1 className="text-4xl font-bold text-[#060644] mb-4">Who We Are</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    HelpClinic is a dedicated platform committed to bridging the gap between patients and healthcare providers. Founded in [Year of Founding], our team comprises healthcare professionals, technologists, and customer service experts passionate about making quality healthcare accessible to everyone, everywhere.
                    </p>
            </div> 
        </div>
        <div className="w-full flex flex-col md:flex-row h-auto px-20 py-10 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-[#060644] mb-4">What We Do</h1>
                <ul className="text-lg text-gray-700 leading-relaxed">
                            <li><strong>Search for Clinics and Healthcare Providers:</strong> Easily find clinics and specialists based on location, specialty, services offered, and patient reviews.</li>
                            <li><strong>Book Appointments:</strong> Schedule appointments with preferred healthcare providers with just a few clicks, eliminating long waiting times and administrative hassles.</li>
                            <li><strong>Access Health Resources:</strong> Explore a wealth of health-related information, articles, and resources to make informed decisions about your health and wellness.</li>
                            <li><strong>Manage Personal Health Records:</strong> Securely store and manage your health records and appointment history for convenient future reference.</li>
                            <li><strong>Provide and Read Reviews:</strong> Share your healthcare experiences and read reviews from other patients to choose the best healthcare services available.</li>
                </ul>
            </div>
            <div className="flex-1 mt-10 md:mt-0 md:ml-10">
                <img src="/What.jpg" alt="Helplink" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>

            <div className="w-full bg-gradient-to-r from-blue-700 to-indigo-500 flex flex-col md:flex-row h-auto px-20 py-10 justify-center items-center gap-10">
    
                {/* Our Approach Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-[#060644] mb-6">Our Approach</h2>
                    <p className="text-lg text-gray-700 mb-4">
                    At HelpClinic, we believe in leveraging technology to make healthcare more accessible and patient-centric. Our approach is built on:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>
                        <strong>User-Centered Design:</strong> We prioritize the needs and experiences of our users by creating intuitive and easy-to-navigate interfaces.
                        </li>
                        <li>
                        <strong>Comprehensive Network:</strong> Partnering with a wide range of healthcare providers to offer diverse and comprehensive healthcare options.
                        </li>
                        <li>
                        <strong>Security and Privacy:</strong> Implementing robust security measures to ensure that your personal and health information is protected and confidential.
                        </li>
                        <li>
                        <strong>Continuous Improvement:</strong> Constantly updating and improving our services based on user feedback and the evolving healthcare landscape.
                        </li>
                        <li>
                        <strong>Accessibility:</strong> Ensuring our platform is accessible to users of all ages and abilities, providing support and assistance whenever needed.
                        </li>
                    </ul>
                </div>
        
                {/* Our Values Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#060644] mb-6">Our Values</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>
                    <strong>Compassion:</strong> We care deeply about the health and well-being of our users and strive to provide services that genuinely make a difference.
                    </li>
                    <li>
                    <strong>Integrity:</strong> We operate with transparency and honesty, building trust with our users and partners through consistent and reliable service.
                    </li>
                    <li>
                    <strong>Innovation:</strong> We embrace new ideas and technologies to continually enhance our platform and the services we offer.
                    </li>
                    <li>
                    <strong>Excellence:</strong> We are committed to delivering high-quality services and exceeding the expectations of our users.
                    </li>
                    <li>
                    <strong>Community:</strong> We foster a supportive community where users can share experiences and support each other in their healthcare journeys.
                    </li>
                </ul>
                </div>

            </div>

            <div className="team-section bg-gray-50 py-12 px-8 md:px-20 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-[#060644] text-center mb-6">Meet Our Team</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Our team of healthcare professionals, technologists, and customer service experts are passionate about making healthcare accessible to everyone, everywhere.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    
                    {/* Team Member 1 */}
                    <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center w-[350px]">
                    <img 
                        src="/person-01.jpg" 
                        alt="Team Member 1" 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                    />
                    <h3 className="text-2xl font-semibold text-[#060644] mb-2">John Doe</h3>
                    <p className="text-gray-700 mb-1">Healthcare Professional</p>
                    <p className="text-gray-500">Experience: 5 years</p>
                    </div>
                    
                    {/* Team Member 2 */}
                    <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center w-[350px]">
                    <img 
                        src="/person-02.jpg" 
                        alt="Team Member 2" 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                    />
                    <h3 className="text-2xl font-semibold text-[#060644] mb-2">Jane Smith</h3>
                    <p className="text-gray-700 mb-1">Healthcare Technologist</p>
                    <p className="text-gray-500">Experience: 3 years</p>
                    </div>
                    
                    {/* Team Member 3 */}
                    <div className="team-member bg-white p-6 rounded-lg shadow-lg text-center w-[350px]">
                    <img 
                        src="/person-03.jpg" 
                        alt="Team Member 3" 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                    />
                    <h3 className="text-2xl font-semibold text-[#060644] mb-2">Mike Johnson</h3>
                    <p className="text-gray-700 mb-1">Customer Service Expert</p>
                    <p className="text-gray-500">Experience: 2 years</p>
                    </div>

                </div>
            </div>


      <Footer />
    </div>
  );
};

export default AboutUs;