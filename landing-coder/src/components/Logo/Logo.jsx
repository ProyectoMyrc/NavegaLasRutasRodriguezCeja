import React from 'react';
import './Logo.css'; // Para darle estilos al logo

const Logo = () => {
    const storeName = "Motorlife"; // Nombre de la tienda

    return (
        <div className="logo-container">
            {/* Aquí se pondrá un <img> para el logo real o el nombre de mi tienda según deje el diseño final */}
            <h1 className="logo-text">
                {storeName} 🏍️
            </h1>
        </div>
    );
}

export default Logo;