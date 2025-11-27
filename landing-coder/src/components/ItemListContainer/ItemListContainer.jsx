import React from 'react';
import './ItemListContainer.css'; // Crea este archivo CSS para estilos

// El componente recibe un objeto 'props' como argumento.
// Desestructuramos el objeto para obtener directamente la propiedad 'greeting'.
const ItemListContainer = ({ greeting }) => {
    return (
        <main className="item-list-container">
            {/* Usamos la propiedad 'greeting' para mostrar el mensaje */}
            <h2>{greeting}</h2>
            
            {/* Aquí es donde, a futuro, cargarás y listarás los productos
            (El 'Item List' en el nombre del componente) */}
            <p>Aquí se mostrarán los productos del catálogo.</p>
        </main>
    );
}

export default ItemListContainer;