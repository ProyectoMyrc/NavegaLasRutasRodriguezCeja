import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    // El estado 'count' guarda la cantidad seleccionada
    const [count, setCount] = useState(initial);

    const increment = () => {
        // No permite sumar más del stock disponible
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        // No permite bajar de 1
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button 
                    onClick={decrement} 
                    style={{ padding: '5px 15px', fontSize: '1.2rem', cursor: 'pointer', borderRadius: '5px', border: '1px solid #333' }}
                >
                    -
                </button>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{count}</span>
                <button 
                    onClick={increment} 
                    style={{ padding: '5px 15px', fontSize: '1.2rem', cursor: 'pointer', borderRadius: '5px', border: '1px solid #333' }}
                >
                    +
                </button>
            </div>
            
            <button 
                onClick={() => onAdd(count)}
                disabled={stock === 0}
                style={{
                    backgroundColor: stock > 0 ? '#ff4500' : '#ccc',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: stock > 0 ? 'pointer' : 'not-allowed',
                    fontWeight: 'bold',
                    width: '100%',
                    marginTop: '10px'
                }}
            >
                {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
            </button>
        </div>
    );
};

export default ItemCount;