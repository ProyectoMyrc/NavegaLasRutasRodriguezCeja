import React from 'react';
// Importa el ícono de carrito de Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
    // Por ahora el valor es estático, luego lo conectare con CartContext
    const totalItems = 3; 

    return (
        <div className="position-relative d-inline-block" style={{ cursor: 'pointer' }}>
            {/* Ícono del Carrito */}
            <i className="bi bi-cart3 text-white fs-3 transition-hover hover-red"></i>
            
            {/* Burbuja de Notificación (Badge) */}
            {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger shadow-sm"
                      style={{ fontSize: '0.7rem', border: '2px solid #212529' }}>
                    {totalItems}
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            )}
        </div>
    );
};

export default CartWidget;