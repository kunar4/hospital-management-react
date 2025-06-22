import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container my-5">
      <h2 className="text-success mb-4 text-center">Privacy Policy</h2>
      <p>
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
      </p>
      <h5 className="text-success mt-4">Data Collection</h5>
      <p>
        We collect personal details including your name, age, contact information, and medical history for the purpose of providing healthcare services.
      </p>
      <h5 className="text-success mt-4">Data Usage</h5>
      <p>
        Your data is used to schedule appointments, manage medical records, and provide doctor recommendations.
      </p>
      <h5 className="text-success mt-4">Data Security</h5>
      <p>
        We implement secure protocols to ensure your information is protected from unauthorized access.
      </p>
      <p className="mt-4">
        By using our services, you consent to the collection and use of your data as outlined above.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
