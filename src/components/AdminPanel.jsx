import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [filterDoctor, setFilterDoctor] = useState('');
  const [filterDate, setFilterDate] = useState('');
  
  const doctors = [
    'Dr. David', 
    'Dr. Emily Williams', 
    'Dr. Anthony Brown'
  ];

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Ensure time format is correct
    const formattedAppointments = storedAppointments.map((appointment) => ({
      ...appointment,
      time: formatTime(appointment.time),
    }));
    setAppointments(formattedAppointments);
  }, []);

  const handleCancelAppointment = (index) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    }
  };

  const handleUpdateSchedule = (index, newDate, newTime) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].date = newDate;
    updatedAppointments[index].time = formatTime(newTime); // Format time
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const handleResetAppointments = () => {
    if (window.confirm("Are you sure you want to clear all appointments?")) {
      setAppointments([]);
      localStorage.removeItem('appointments');
    }
  };

  const filteredAppointments = appointments.filter((a) => {
    return (
      (filterDoctor === '' || a.doctorName === filterDoctor) &&
      (filterDate === '' || a.date === filterDate)
    );
  });

  const today = new Date().toISOString().split('T')[0];
  const totalAppointments = appointments.length;
  const upcoming = appointments.filter((a) => a.date >= today).length;
  const past = totalAppointments - upcoming;

  // Helper function to ensure time is in the correct format (HH:mm)
  const formatTime = (time) => {
    if (!time) return ''; // Return empty string if no time
    const [hours, minutes] = time.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  };

  return (
    <div className="container mt-5">
      <div className="bg-success text-white p-3 d-flex justify-content-between align-items-center">
        <h4 className="m-0">Admin Panel</h4>
        <button className="btn btn-outline-light" onClick={() => window.location.href = '/login'}>
          Logout
        </button>
      </div>
      <br/>
      {/* Summary Cards */}
      <div className="row mb-4 text-center">
        <div className="col-md-4">
          <div className="card border-success shadow">
            <div className="card-body">
              <h5>Total Appointments</h5>
              <h3 className="text-success">{totalAppointments}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-primary shadow">
            <div className="card-body">
              <h5>Upcoming</h5>
              <h3 className="text-primary">{upcoming}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-danger shadow">
            <div className="card-body">
              <h5>Past</h5>
              <h3 className="text-danger">{past}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Options */}
      <div className="row mb-4">
        <div className="col-md-5 mb-2">
          <select
            className="form-control"
            value={filterDoctor}
            onChange={(e) => setFilterDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>{doctor}</option>
            ))}
          </select>
        </div>
        <div className="col-md-5 mb-2">
          <input
            type="date"
            className="form-control"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-secondary w-100" onClick={() => { setFilterDate(''); setFilterDoctor(''); }}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <h4 className="mb-3">Appointments</h4>
      {filteredAppointments.length === 0 ? (
        <p>No appointments match your filter.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Doctor</th>
                <th>Patient</th>
                <th>Specialization</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.firstName} {appointment.lastName}</td>
                  <td>{appointment.specialization}</td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      value={appointment.date}
                      onChange={(e) =>
                        handleUpdateSchedule(index, e.target.value, appointment.time)
                      }
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleCancelAppointment(index)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Reset All Appointments */}
      <div className="text-end mt-3">
        <button className="btn btn-outline-danger" onClick={handleResetAppointments}>
          Clear All Appointments
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
