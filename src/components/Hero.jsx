import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="p-5 text-center bg-image" style={{ backgroundImage: 'url(/banner.jpg)', height: '300px', objectFit: 'cover', opacity: "0.9" }}>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Consult top doctors online for any health concern</h1>
              <h4 className="mb-3">Private online consultations with verified doctors in all specialties</h4><br />
              <h5>Book an appointment for an in-clinic consultation</h5>
              <Link to="/appointmentForm" className="btn btn-light btn-lg text-success">Book Now</Link><br /><br />
              
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Card Only - Centered */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm">
              <img src="https://cdn.apollohospitals.com/health-library-prod/2023/03/imp-of-doc-visit-4.jpg" className="card-img-top" alt="Appointments" />
              <div className="card-body">
                <h5 className="card-title text-success text-center">View Your Appointments</h5>
                <p className="card-text text-center">Keep track of your upcoming appointments with ease.</p>
                <div className="d-flex justify-content-center">
                  <Link to="/appointments" className="btn btn-success">View Appointments</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
