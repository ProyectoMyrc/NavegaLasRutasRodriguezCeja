import React from 'react';
import './CartWidget.css'; // Archivo CSS para darle estilo

// El componente recibe 'itemCount' como una prop. 
// Si no se especifica, por defecto será 0.
const CartWidget = ({ itemCount = 0 }) => {
    return (
        <div className="cart-widget-container">
            {/* Ícono del carrito */}
            <span className="cart-icon" role="img" aria-label="Carrito de compras">
                🛒
            </span>
            
            {/* Contador de ítems. Solo se muestra si hay 1 o más ítems. */}
            {itemCount > 0 && (
                <span className="item-count">
                    {itemCount}
                </span>
            )}
        </div>
    );
}

export default CartWidget;