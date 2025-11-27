import React from 'react';
import './CartWidget.css'; // Archivo CSS para darle estilo


const CartWidget = ({ itemCount = 0 }) => { // Desestructuramos 'itemCount' de las props
    return (
        <div className="cart-widget-container">
            <span className="cart-icon" role="img" aria-label="Carrito de compras">
                🛒
            </span>
            
            {itemCount > 0 && (// Si itemCount es mayor que 0, mostramos el contador
                <span className="item-count">
                    {itemCount}
                </span>
            )}
        </div>
    );
}

export default CartWidget;