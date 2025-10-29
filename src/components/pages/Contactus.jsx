import React from 'react'

const Contactus = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h5 className="text-secondary mb-3">Get in Touch</h5>
            <p className="text-muted">
              Have a question or need help? Fill out the form below and we’ll get back to you soon.
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-5 mt-4 mt-md-0">
          <div className="card shadow p-4 bg-light">
            <h5 className="text-secondary mb-3">Our Office</h5>
            <p><strong>CollegeWeb HQ</strong><br />Thiruvalla, Kerala, India</p>
            <p><strong>Phone:</strong> +91 9000 0000 00</p>
            <p><strong>Email:</strong> support@collegeweb.edu.in</p>
            <p><strong>Working Hours:</strong><br />Mon - Fri: 9:00 AM to 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
