import React from 'react';
import Logo from '../Logo/Logo'; // 👈 Importamos el nuevo componente
import CartWidget from '../CartWidget/CartWidget'; // 👈 Importamos CartWidget 
import './NavBar.css'; 

const NavBar = () => {
    // Definimos un número para el contador (por ahora, fijo)
    const itemsInCart = 4; // Podrías cambiarlo para probar

    return (
        <header className="navbar-header">
            <Logo /> 

            <nav className="navbar-links">
                <a href="#categoria-a" className="nav-link">Electrónica</a>
                <a href="#categoria-b" className="nav-link">Ropa</a>
                <a href="#categoria-c" className="nav-link">Hogar</a>
            </nav>

            <div className="navbar-widget">
                {/* 👈 Insertamos CartWidget y le pasamos el número como prop */}
                <CartWidget itemCount={itemsInCart} /> 
            </div>
        </header>
    );
}

export default NavBar;