import React from 'react';
import img1 from '../images/col.jpeg';
import img2 from '../images/colleg.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <div className="position-relative text-center">

      {/* 🎓 Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="College view 1" />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="College view 2" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* 🌟 Overlay Text on Image */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-shadow"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '30px 50px',
            borderRadius: '10px',
          }}
        >
          <h1 className="fw-bold display-5">
            Mar Athanasios College For Advanced Studies Tiruvalla (MACFAST)
          </h1>
          <p className="fs-4">
            Empowering Students Through Innovation, Excellence, and Knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
