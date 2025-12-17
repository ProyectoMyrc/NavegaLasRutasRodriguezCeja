import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/productsMock';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); // Obtenemos el ID de la moto desde la URL

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then(res => setItem(res))
            .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) return <h2 style={{ textAlign: 'center' }}>Cargando detalles de la moto...</h2>;

    const handleOnAdd = (quantity) => {
        console.log(`Has agregado ${quantity} unidades de ${item.name} al carrito`);
        alert(`¡Agregaste ${quantity} ${item.name} al carrito!`);
    };
    
        return (
        <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
            {item && (
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '15px' }}>
                    <img src={item.img} alt={item.name} style={{ width: '350px', borderRadius: '10px' }} />
                    <div style={{ flex: 1 }}>
                        <h1>{item.name}</h1>
                        <p style={{ color: '#666' }}>{item.description}</p>
                        <h2 style={{ color: '#d32f2f' }}>${item.price.toLocaleString()}</h2>
                        <p><strong>Stock disponible:</strong> {item.stock} unidades</p>

                        {/* 2. Insertamos el ItemCount aquí */}
                        <ItemCount 
                            stock={item.stock} 
                            initial={1} 
                            onAdd={handleOnAdd} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;