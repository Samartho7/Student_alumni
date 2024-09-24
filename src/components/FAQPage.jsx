import React, { useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is the Student-Alumni Portal?',
      answer: 'The Student-Alumni Portal is a platform to connect current students with alumni for networking, guidance, and support.'
    },
    {
      question: 'How can I register?',
      answer: 'You can register by clicking on the Login/Signup link in the top right corner of the page.'
    },
    {
      question: 'Is the portal available to all students?',
      answer: 'Yes, the portal is available to all students and alumni from our institution.'
    },
    {
      question: 'Can I search for specific alumni?',
      answer: 'Yes, you can search for alumni using the search functionality available on the Alumni page.'
    },
    {
      question: 'Is there a fee to use the portal?',
      answer: 'No, the portal is free for all students and alumni.'
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleFAQ(index)} className={activeIndex === index ? 'active' : ''}>
            {faq.question}
          </h3>
          <p className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
