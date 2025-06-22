import React from 'react';

function TermsAndConditions() {
  return (
    <div className="container my-5">
      <h2 className="text-success mb-4 text-center">Terms and Conditions</h2>
      <p>
        By accessing and using our Hospital Management System, you agree to be bound by the following terms and conditions.
      </p>
      <ul>
        <li>All patient data entered must be accurate and truthful.</li>
        <li>The system must not be used for unauthorized access or fraudulent activity.</li>
        <li>We reserve the right to update or modify these terms at any time.</li>
        <li>All medical advice provided via the system must be confirmed with a certified doctor.</li>
      </ul>
      <p className="mt-4">
        Continued use of this system constitutes your acceptance of the terms outlined above.
      </p>
    </div>
  );
}

export default TermsAndConditions;
