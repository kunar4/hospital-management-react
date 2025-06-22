import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const doctorName = queryParams.get('doctor');
  const specialization = queryParams.get('specialization');

  const doctors = [
    { name: 'Dr. David', specialization: 'Cardiologist', availableTimes: ['9:00 AM', '11:00 AM', '2:00 PM'] },
    { name: 'Dr. Emily Williams', specialization: 'Dermatologist', availableTimes: ['10:00 AM', '1:00 PM', '3:00 PM'] },
    { name: 'Dr. Anthony Brown', specialization: 'Neurologist', availableTimes: ['8:00 AM', '12:00 PM', '4:00 PM'] }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    doctorName: doctorName || '',
    specialization: specialization || '',
    date: '',
    time: ''
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (formData.doctorName) {
      const selectedDoctor = doctors.find(doctor => doctor.name === formData.doctorName);
      setAvailableTimes(selectedDoctor ? selectedDoctor.availableTimes : []);
    }
  }, [formData.doctorName]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      doctorName: doctorName || '',
      specialization: specialization || ''
    }));
  }, [doctorName, specialization]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing appointments from localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Check if the new appointment time clashes with an existing one
    const hasClash = existingAppointments.some(
      (appointment) =>
        appointment.doctorName === formData.doctorName &&
        appointment.date === formData.date &&
        appointment.time === formData.time
    );

    if (hasClash) {
      // If a clash is found, alert the user
      alert('This appointment time is already taken. Please choose another time.');
    } else {
      // No clash, proceed with saving the appointment
      existingAppointments.push(formData);
      localStorage.setItem('appointments', JSON.stringify(existingAppointments));

      alert('Appointment booked successfully!');

      // Reset the form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        doctorName: '',
        specialization: '',
        date: '',
        time: ''
      });

      // Redirect to the home page
      navigate('/home');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDoctorChange = (e) => {
    const selectedDoctor = e.target.value;
    const selectedDoctorData = doctors.find((doctor) => doctor.name === selectedDoctor);
    setFormData({
      ...formData,
      doctorName: selectedDoctor,
      specialization: selectedDoctorData ? selectedDoctorData.specialization : '',
      time: '', // Reset time when doctor is changed
    });
  };

  return (
    <div className="card mb-3">
      <img
        src="back.jfif"
        className="card-img-top"
        alt="..."
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <div className="container">
          <h2 className="text-center mb-4 text-success">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Doctor Name</label>
              <select
                className="form-control"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleDoctorChange}
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Specialization</label>
              <input
                type="text"
                className="form-control"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Time</label>
              <select
                className="form-control"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select Time</option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-success px-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
