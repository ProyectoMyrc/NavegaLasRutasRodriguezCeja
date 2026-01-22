import React, { useContext } from 'react'; // 1. Importamos useContext
import { CartContext } from '../../context/CartContext'; // 2. Importamos tu contexto
import { Link } from 'react-router-dom'; // Para navegar a la vista del carrito
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
    // 3. Consumimos la función totalQuantity del contexto
    const { totalQuantity } = useContext(CartContext);

    // Calculamos el total dinámicamente
    const totalItems = totalQuantity(); 

    return (
        /* 4. Envolvemos en un Link para que al hacer clic nos lleve al carrito */
        <Link to="/cart" className="position-relative d-inline-block text-decoration-none" style={{ cursor: 'pointer' }}>
            {/* Ícono del Carrito */}
            <i className="bi bi-cart3 text-white fs-3 transition-hover hover-red"></i>
            
            {/* Burbuja de Notificación Dinámica */}
            {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger shadow-sm"
                        style={{ fontSize: '0.7rem', border: '2px solid #212529' }}>
                    {totalItems}
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            )}
        </Link>
    );
};

export default CartWidget;