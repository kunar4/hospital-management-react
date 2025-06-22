import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row gx-4 align-items-center justify-content-between">

          {/* Text Section */}
          <div className="col-md-5 order-2 order-md-1">
            <div className="mt-5 mt-md-0">
              <span className="text-muted">Our Story</span>
              <h2 className="display-5 fw-bold text-success">About Us</h2>
              <p className="lead">
                We provide a platform to book appointments with top doctors, ensuring quality care for all.
                Our mission is to simplify healthcare access and make doctor consultations more convenient and accessible.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="col-md-6 offset-md-1 order-1 order-md-2">
            <div className="row gx-2 gx-lg-3">
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="/about.jpg" alt="Doctors team 1" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="/about2.png" alt="Doctors team 2" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="/about1.jpg" alt="Clinic facility" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <img className="img-fluid rounded-3" src="/about3.jfif" alt="Doctor consultation" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission Section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3 className="display-6 text-primary">Our Mission</h3>
            <p className="lead">
              To provide easy access to healthcare by connecting patients with experienced doctors, enabling hassle-free consultations, and fostering a healthier society.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3 className="display-6 text-primary">Our Vision</h3>
            <p className="lead">
              We envision a world where healthcare is no longer a barrier to anyone. We aim to empower patients and doctors through technology, ensuring the availability of quality healthcare at the fingertips.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3 className="display-6 text-primary">Meet Our Team</h3>
            <p className="lead">
              Our team consists of dedicated professionals, including doctors, healthcare experts, and tech specialists who are passionate about transforming healthcare through innovation.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <img className="img-fluid rounded-circle mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDVXQyNniKxduMW-ab2kd-6iTcZY28jb5IQ&s" alt="Team Member 1" />
            <h5>Dr. John Doe</h5>
            <p className="text-muted">Chief Medical Officer</p>
          </div>
          <div className="col-md-4 text-center">
            <img className="img-fluid rounded-circle mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6lXb7d_17kVXsNm0Fy0C69jRpGUkjt7UdA&s" alt="Team Member 2" />
            <h5>Jane Smith</h5>
            <p className="text-muted">Lead Developer</p>
          </div>
          <div className="col-md-4 text-center">
            <img className="img-fluid rounded-circle mb-3" src="data:image/jpeg;base64,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" alt="Team Member 3" />
            <h5>Alex Johnson</h5>
            <p className="text-muted">Product Manager</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3 className="display-6 text-primary">Contact Us</h3>
            <p className="lead">
              Have questions or want to learn more about our platform? Reach out to us anytime! We're here to help.
            </p>
            <p><strong>Email:</strong> contact@healthcare.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
