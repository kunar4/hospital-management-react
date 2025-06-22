import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/home">
          <strong>Doctor Appointment Booking System</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/doctors">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/appointmentForm">Book Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-light" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
