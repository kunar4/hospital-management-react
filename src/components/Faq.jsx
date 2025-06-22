import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: 'How can I book an appointment?',
      answer: 'Go to the Doctors page, choose a doctor, and click "Book Now" to fill in your details.'
    },
    {
      question: 'Can I cancel or reschedule my appointment?',
      answer: 'Yes, appointments can be canceled or rescheduled by contacting reception or using the admin panel.'
    },
    {
      question: 'Are online consultations available?',
      answer: 'Yes, some departments support online consultations. Please check availability while booking.'
    },
    {
      question: 'What are the consultation charges?',
      answer: 'Consultation charges vary based on the doctor and specialization. Charges are visible while booking.'
    },
    {
      question: 'How do I access my appointment history?',
      answer: 'Login and go to your profile or check the Admin Panel (if admin) to view appointment history.'
    },
    {
      question: 'What are the hospital working hours?',
      answer: 'The hospital is open from 8:00 AM to 8:00 PM, Monday through Saturday.'
    },
    {
      question: 'Is emergency service available 24/7?',
      answer: 'Yes, emergency services are available 24/7 including holidays.'
    },
    {
      question: 'How can I contact a specific doctor?',
      answer: 'Doctor contact details are not shared publicly. Please use the appointment form to get in touch.'
    },
    {
      question: 'Can I get my medical reports online?',
      answer: 'Yes, registered users can access their reports under the "Reports" section after login.'
    },
    {
      question: 'What should I bring for my appointment?',
      answer: 'Bring a valid ID proof, previous prescriptions, and any related medical records.'
    },
    {
      question: 'Do you accept health insurance?',
      answer: 'Yes, we accept most major health insurance providers. Please carry your insurance card.'
    },
    {
      question: 'Is there parking available at the hospital?',
      answer: 'Yes, free parking is available for patients and visitors on a first-come basis.'
    },
    {
      question: 'How do I register as a new patient?',
      answer: 'Click on Signup, fill out your personal details, and you’ll be registered as a new patient.'
    },
    {
      question: 'Can I get reminders for my appointments?',
      answer: 'Yes, email or SMS reminders are sent once you’ve booked an appointment.'
    },
    {
      question: 'Who do I contact for technical issues on the website?',
      answer: 'Please reach out to our support team at support@hospital.com or use the contact form.'
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-success mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item mb-3" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed text-success"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
