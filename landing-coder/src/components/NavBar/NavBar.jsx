import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
	return (
    <nav className="navbar">
      {/* El Logo siempre debe llevar al Inicio (catálogo completo) */}
      <Link to="/" className="navbar-logo">
        <h1>MotoShop 🏍️</h1>
      </Link>

      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/category/deportivas" 
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Deportivas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/urbanas" 
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Urbanas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/adventure" 
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Adventure
          </NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;