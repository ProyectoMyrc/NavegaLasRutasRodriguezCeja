import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
      <div className="container">
        {/* Logo con estilo Racing */}
        <Link to="/" className="navbar-brand fw-bolder fs-2">
          <span className="text-danger">MOTO</span><span className="text-white">SHOP</span>
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item px-2">
              <NavLink 
                to="/category/deportivas" 
                className={({ isActive }) => 
                  `nav-link text-uppercase fw-bold px-3 ${isActive ? 'text-danger border-bottom border-danger border-3' : 'text-white'}`
                  }
                >
                  Deportivas
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink 
                to="/category/urbanas" 
                className={({ isActive }) => 
                  `nav-link text-uppercase fw-bold px-3 ${isActive ? 'text-danger border-bottom border-danger border-3' : 'text-white'}`
                }
              >
                Urbanas
              </NavLink>
            </li>
            <li className="nav-item px-2">
            <NavLink 
                to="/category/aventura" 
                className={({ isActive }) => 
                  `nav-link text-uppercase fw-bold px-3 ${isActive ? 'text-danger border-bottom border-danger border-3' : 'text-white'}`
                }
              >
                
              </NavLink>
            </li>
          </ul>

          {/* Carrito con estilo */}
          <div className="d-flex align-items-center ms-lg-4">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;