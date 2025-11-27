import React from 'react';
import './ItemListContainer.css'; // Crea este archivo CSS para estilos

const ItemListContainer = ({ greeting }) => {// Desestructuramos 'greeting' de las props
    return (
        <main className="item-list-container"> // Contenedor principal
            {/* Usamos la propiedad 'greeting' para mostrar el mensaje */}
            <h2>{greeting}</h2> // Título de bienvenida
            
            {/* Aquí es donde, a futuro, cargare los productos*/}
            <p>Aquí se mostrarán los productos del catálogo.</p>
        </main>
    );
}

export default ItemListContainer;