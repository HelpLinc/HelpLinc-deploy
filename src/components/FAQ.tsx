import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'General Questions',
    items: [
      {
        question: 'What is Helplinc?',
        answer: 'Helplink is a platform that connects patients with healthcare providers, making it easy to search for doctors, book appointments, and manage healthcare needs all in one place.',
      },
      {
        question: 'How do I sign up for Helplinc?',
        answer: 'Signing up is simple. Just click on the “Sign Up” button at the top of our homepage, enter your details, and follow the prompts to create your account.',
      },
      {
        question: 'Is Helplink free to use?',
        answer: 'Yes, Helplink is free for patients. You can search for providers, and use our platform without any cost. Some services, such as book appointments, may have associated fees depending on the provider.',
      },
    ],
  },
  {
    title: 'Booking and Appointments',
    items: [
      {
        question: 'How do I book an appointment?',
        answer: 'After finding your desired healthcare provider through our search function, select an available time slot that suits you and click “Book Appointment.” You will receive a confirmation email or message on the phone you’ve used once the booking is complete.',
      },
      {
        question: 'Can I reschedule or cancel an appointment?',
        answer: 'Yes, you can easily reschedule or cancel appointments through your personal dashboard. Just log in, find the appointment in your schedule, and choose the reschedule or cancel option.',
      },
      {
        question: 'Will I receive reminders for my appointments?',
        answer: 'Yes, Helplink will send you reminders via email and/or SMS to ensure you don’t miss your appointments.',
      },
    ],
  },
  {
    title: 'Telemedicine',
    items: [
      {
        question: 'Does Helplinc offer telemedicine services?',
        answer: 'Yes, Helplink allows you to book virtual consultations with healthcare providers. Simply search for providers offering telemedicine, select a time, and follow the instructions to connect online.',
      },
      {
        question: 'What do I need for a telemedicine appointment?',
        answer: 'You’ll need a device with a camera and microphone (like a smartphone, tablet, or computer) and a stable internet connection. We recommend testing your setup before the appointment.',
      },
    ],
  },
  {
    title: 'Privacy and Security',
    items: [
      {
        question: 'Is my personal information safe with Helplinc?',
        answer: 'Yes, we prioritize the security of your personal information. Helplink uses advanced encryption and secure servers to protect your data.',
      },
      {
        question: 'Will my healthcare information be shared with third parties?',
        answer: 'Helplink only shares your information with your chosen healthcare providers. We do not sell or share your data with third parties without your consent.',
      },
    ],
  },
  {
    title: 'Insurance and Payments',
    items: [
      {
        question: 'Can I use my insurance with Helplinc?',
        answer: 'Yes, you can filter providers based on your insurance plan to ensure compatibility. Always check with the provider to confirm they accept your insurance.',
      },
      {
        question: 'How do I pay for services?',
        answer: 'Payment methods depend on the provider. Some may accept online payments through the Helplink platform, while others may require payment at the time of your appointment.',
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        question: 'What if I have an issue or need help?',
        answer: 'Our customer support team is available 24/7 to assist you. You can reach out through our live chat, email, or phone support for any questions or issues.',
      },
    ],
  },
  {
    title: 'Feedback',
    items: [
      {
        question: 'How can I provide feedback about my experience?',
        answer: 'We value your feedback! After your appointment, you’ll receive a prompt to rate your experience and leave comments. You can also contact our support team directly to share your thoughts.',
      },
    ],
  },
];

const FrequentlyAskedQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
    <div>
        <Header />
    <div className="faq-container bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#060644] text-center mb-10">Frequently Asked Questions</h1>
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-[#060644] mb-4">{category.title}</h2>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4">
                <button
                  onClick={() => toggleAccordion(itemIndex)}
                  className="w-full text-left text-lg font-semibold text-gray-800 bg-white p-4 rounded-lg shadow-md focus:outline-none"
                >
                  {item.question}
                </button>
                {activeIndex === itemIndex && (
                  <div className="p-4 bg-white rounded-lg shadow-md mt-2">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;