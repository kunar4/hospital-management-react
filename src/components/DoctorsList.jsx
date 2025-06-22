import React from 'react';
import { Link } from 'react-router-dom';

function DoctorsList() {
  const doctors = [
    {
      name: 'Dr. David',
      specialization: 'Cardiologist',
      experience: 10,
      image: '/d1.jpg',
      availableSlots: [['9:00 AM', '10:00 AM'], ['11:00 AM', '12:00 PM'], ['2:00 PM', '3:00 PM']]
    },
    {
      name: 'Dr. Emily Williams',
      specialization: 'Dermatologist',
      experience: 8,
      image: '/d2.jpg',
      availableSlots: [['10:00 AM', '11:00 AM'], ['1:00 PM', '2:00 PM'], ['3:00 PM', '4:00 PM']]
    },
    {
      name: 'Dr. Anthony Brown',
      specialization: 'Neurologist',
      experience: 12,
      image: '/d3.jpg',
      availableSlots: [['8:00 AM', '9:00 AM'], ['12:00 PM', '1:00 PM'], ['4:00 PM', '5:00 PM']]
    }
  ];

  return (
    <section className="doctors-list py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center text-success">Our Doctors</h2>
        <div className="row">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={doctor.image} className="card-img-top" alt={doctor.name} />
                <div className="card-body">
                  <h5 className="card-title text-success">{doctor.name}</h5>
                  <p className="card-text"><strong>Specialization:</strong> {doctor.specialization}</p>
                  <p className="card-text"><strong>Experience:</strong> {doctor.experience} years</p>
                  <p className="card-text"><strong>Available Slots:</strong></p>
                  <ul>
                    {doctor.availableSlots.map((slot, i) => (
                      <li key={i}>{`${slot[0]} - ${slot[1]}`}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/appointmentForm?doctor=${encodeURIComponent(doctor.name)}&specialization=${encodeURIComponent(doctor.specialization)}`}
                    className="btn btn-success"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsList;
