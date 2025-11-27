import React from 'react';
import Logo from '../Logo/Logo'; // 👈 Importamos el nuevo componente
import CartWidget from '../CartWidget/CartWidget'; // 👈 Importamos CartWidget 
import './NavBar.css'; 

const NavBar = () => {
    // se define un número para el contador por ahora, fijo
    const itemsInCart = 1; // se puede cambiar para probar

    return (
        <header className="navbar-header">
            <Logo /> 

            <nav className="navbar-links">
                <a href="#categoria-a" className="nav-link">Deportivas</a>
                <a href="#categoria-b" className="nav-link">Naked</a>
                <a href="#categoria-c" className="nav-link">Scooters</a>
                <a href="#categoria-c" className="nav-link">Trail</a>
            </nav>

            <div className="navbar-widget">
                <CartWidget itemCount={itemsInCart} /> 
            </div>
        </header>
    );
}

export default NavBar;