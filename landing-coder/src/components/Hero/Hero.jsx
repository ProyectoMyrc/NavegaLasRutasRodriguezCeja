import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
        <div className="p-5 mb-4 bg-dark rounded-3 text-white shadow-lg position-relative overflow-hidden" 
          style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/img/Harley-DavidsonIron883.jpg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center'
          }}>
      <div className="container-fluid py-5">
          <h1 className="display-4 fw-bolder text-uppercase italic">Domina la Carretera</h1>
          <p className="col-md-8 fs-4">Descubre la potencia y el diseño de nuestra nueva colección 2026. Siente la adrenalina en cada curva.</p>
          <Link to="/category/deportivas" className="btn btn-danger btn-lg px-5 py-3 fw-bold text-uppercase shadow">
          Explorar Modelos
          </Link>
      </div>
      </div>
  );
};

export default Hero;