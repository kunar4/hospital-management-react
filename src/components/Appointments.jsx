import React, { useEffect, useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Retrieve the current user from localStorage
    const user = JSON.parse(localStorage.getItem("currentUser"));
    
    if (!user) return; // If there's no user, do not proceed

    setCurrentUser(user);

    // Retrieve all appointments from localStorage
    const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Filter appointments for the current user based on email
    const userAppointments = allAppointments.filter(appointment => appointment.email === user.email);

    setAppointments(userAppointments);
  }, []); // Runs once when the component is mounted

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  const formatTime = (time) => {
    // Check if the time format is correct. If it's not, you can parse it here
    // Assuming time is in "HH:MM AM/PM" format, if you need custom parsing, adjust accordingly.
    return time; // Example, can be customized further if needed
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Your Appointments</h2>

      {appointments.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="table-success">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Doctor Name</th>
              <th>Specialization</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.firstName}</td>
                <td>{appointment.lastName}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.doctorName}</td>
                <td>{appointment.specialization}</td>
                <td>{appointment.date}</td>
                <td>{formatTime(appointment.time)}</td> {/* Format time if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments booked.</p>
      )}
    </div>
  );
};

export default Appointments;
