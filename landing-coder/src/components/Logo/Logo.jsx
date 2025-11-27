import React from 'react';
import './Logo.css'; // Para darle estilos a tu logo

const Logo = () => {
    // Definimos el texto del logo (podrías pasarlo como prop, pero por ahora lo dejamos fijo)
    const storeName = "E-Commerce Tech"; 

    return (
        <div className="logo-container">
            {/* Aquí puedes poner un <img> para el logo real o el nombre de tu tienda */}
            <h1 className="logo-text">
                {storeName} 💻
            </h1>
        </div>
    );
}

export default Logo;