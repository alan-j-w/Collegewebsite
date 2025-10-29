import React from 'react'

const Aboutus = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center text-primary mb-4">About Us</h2>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="College Campus"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <h4 className="text-secondary">Welcome to CollegeWeb</h4>
          <p>
            CollegeWeb is a designed to simplify
            student registration, academic management, and communication between
            students and the administration.
          </p>
          <p>
            Established in 2000, CollegeWeb continues to grow as a trusted
            system for institutions that value transparency, accessibility, and
            innovation in education. Our mission is to make college management
            smarter and more connected.
          </p>
          <p className="text-muted">
            <strong>Location:</strong> Thiruvalla, Kerala, India <br />
            <strong>Contact:</strong> info@collegeweb.edu.in | +91 900 000 0000
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
