import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import DoctorsList from './components/DoctorsList.jsx';
import AppointmentForm from './components/AppointmentForm.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import Faq from './components/Faq.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Appointments from './components/Appointments.jsx';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const doctorData = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctors(doctorData);
  }, []);

  const hideNavbarPaths = ['/login', '/signup', '/forgotpassword', '/', '/adminPanel'];
  const hideFooterPaths = hideNavbarPaths; // 👈 Use the same paths to hide footer

  return (
    <div className="d-flex flex-column min-vh-100">
      { !hideNavbarPaths.includes(location.pathname) && <Navbar /> }
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/doctors" element={<DoctorsList doctors={doctors} />} />
          <Route path="/appointmentForm" element={<AppointmentForm />} />
          <Route path='/home' element={<Hero/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path='/adminPanel' element={<AdminPanel/>}/>
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} /> 
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>
      { !hideFooterPaths.includes(location.pathname) && <Footer /> }
    </div>
  );
};

export default App;
